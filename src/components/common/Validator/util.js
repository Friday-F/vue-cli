/**
 * @file
 * @auth jinguangguo
 * @date 2016/12/9
 */

export default {
    required: function (value) {
        if (typeof value !== 'string') {
            value = value + '';
        }
        return value.length > 0 ? true : false;
    },
    // email: function (value, multiple) {
    //     return emailRegExp.test(value);
    // },
    number: function (value) {
        return !isNaN(value);
    },
    // url: function (value) {
    //     return urlRegExp.test(value);
    // },
    minlength: function (value, length) {
        return value.length >= length;
    },
    maxlength: function (value, length) {
        return length >= value.length;
    },
    pattern: function (value, pattern) {
        var patternRegExp;
        if (typeof pattern === 'string') {
            patternRegExp = new RegExp('^' + pattern + '$');
        } else {
            patternRegExp = pattern;
        }
        return patternRegExp.test(value);
    },
    min: function (value, min) {
        return value * 1 >= min * 1;
    },
    max: function (value, max) {
        return max * 1 >= value * 1;
    },
    len(value, max) {
        var strlength = 0; //初始定义长度为0
        var txtval = $.trim(value);
        for (var i = 0; i < txtval.length; i++) {
            if (isCN(txtval.charAt(i)) === true) {
                strlength = strlength + 2; //中文为2个字符
            } else {
                strlength = strlength + 1; //英文一个字符
            }
        }
        return strlength > max ? false : true;

        function isCN(str) { //判断是不是中文
            var regexCh = /[u00-uff]/;
            return !regexCh.test(str);
        }
    }
};

