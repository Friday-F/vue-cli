const SORT_UP = 'UP'
const SORT_DOWN = 'DOWN'
export default{
    //判断是否是手机
    isMobile() {
        let userAgentInfo = navigator.userAgent;
        // 去除ipad
        let Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPod");
        let flag = false;
        for (let v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = true;
                break;
            }
        }
        return flag;
    },
    // 排序
    /**
     * 根据数字排序
     * @param array
     * @param key
     * @param sortBy
     */
    sortListByNum (array, key, sortBy) {
        /*start根据已排列好的项数决定*/
        let start = 0;
        let num1;
        let num2;
        let len = array.length;
        /*按顺序，每一项检查已排列好的序列*/
        for (let i = start; i < len; start++, i++) {
            /*跟已排好序的序列做对比，并插入到合适的位置*/
            for (let j = 0; j < start; j++) {
                num1 = parseFloat(array[i][key]);
                num2 = parseFloat(array[j][key]);
                /*小于或者等于时（我们是升序）插入到该项前面*/
                if (num1 <= num2) {
                    array.splice(j, 0, array[i]);
                    /*删除原有项*/
                    array.splice(i + 1, 1);
                    break;
                }
            }
        }
        if (sortBy === util.SORT_DOWN) {
            array.reverse();
        }
        return array;
    },
    /**
     * 是否是邮箱
     * @param phone
     * @returns {boolean}
     */
    isEmail(email) {
        var regEmail = /^([a-zA-Z0-9]+[_|\_|\.\-]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        return regEmail.test(email);
    },
    
    /**
     * 是否是手机号
     * @param phone
     * @returns {boolean}
     */
    isPhone(phone) {
        phone = phone + '';
        var phoneReg = /^((13[0-9])|(14[57])|(15[0-35-9])|(17[0-9])|(18[0-9]))\d{8}$/;
        return phoneReg.test(phone);
    },
    
    /**
     * 手机加密
     * @param str
     * @returns {string}
     */
    phone(str) { // 手机省略
        let phoneReg = /^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/;
        return phoneReg.test(str) ? String(str).substr(0, 3) + '****' + String(str).substr(-4) : str;
    },
    
    /**
     * 邮箱加密
     * @param str
     * @returns {*}
     */
    email(str) {
        if (!str) {
            return '';
        }
        let idx = str.indexOf('@');
        let passedStr = str.substring(2, idx);
        return str.replace(passedStr, '****');
    },
    getTimeString(date) {
        //年
        var year = date.getFullYear();
        //月
        var month = date.getMonth() + 1; //月份从0开始
        //日
        var day = date.getDate();
        //小时
        var hour = date.getHours();
        //分钟
        var minute = date.getMinutes();
        //秒
        var second = date.getSeconds();
    
        //如果不够两位补0
        month = month < 10 ? "0" + month : month;
        day = day < 10 ? "0" + day : day;
        hour = hour < 10? "0" + hour : hour;
        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + second : second;
    
        return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    },
    /**
     * 加法运算
     */
    numAdd (num1, num2) {
        var baseNum, baseNum1, baseNum2;
        try {
            baseNum1 = num1.toString().split(".")[1].length;
        } catch (e) {
            baseNum1 = 0;
        }
        try {
            baseNum2 = num2.toString().split(".")[1].length;
        } catch (e) {
            baseNum2 = 0;
        }
        baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
        return (num1 * baseNum + num2 * baseNum) / baseNum;
    },

    /**
     * 减法运算
     */
    numSub (num1, num2) {
        var baseNum, baseNum1, baseNum2;
        var precision;
        //精度
        try {
            baseNum1 = num1.toString().split(".")[1].length;
        } catch (e) {
            baseNum1 = 0;
        }
        try {
            baseNum2 = num2.toString().split(".")[1].length;
        } catch (e) {
            baseNum2 = 0;
        }
        baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
        precision = (baseNum1 >= baseNum2) ? baseNum1 : baseNum2;
        return ((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision);
    },


    /**
     * 乘法运算
     */
    numMulti (num1, num2) {
        var baseNum = 0;
        try {
            baseNum += num1.toString().split(".")[1].length;
        } catch (e) {
        }
        try {
            baseNum += num2.toString().split(".")[1].length;
        } catch (e) {
        }
        return Number(num1.toString().replace(".", ""))
            * Number(num2.toString().replace(".", "")) / Math.pow(10, baseNum);
    },

    numMultiFloor (num1, num2, presition) {
        let result = util.numMulti(num1, num2);
        return util.floorFix(result, presition);
    },


    /**
     * 除法運算
     */
    numDiv (num1, num2) {
        var baseNum1 = 0, baseNum2 = 0;
        var baseNum3, baseNum4;
        try {
            baseNum1 = num1.toString().split(".")[1].length;
        } catch (e) {
            baseNum1 = 0;
        }
        try {
            baseNum2 = num2.toString().split(".")[1].length;
        } catch (e) {
            baseNum2 = 0;
        }

        baseNum3 = Number(num1.toString().replace(".", ""));
        baseNum4 = Number(num2.toString().replace(".", ""));
        return (baseNum3 / baseNum4) * Math.pow(10, baseNum2 - baseNum1);

    },
    
    //去空格
    trim (str) {
        return str.replace(/(^\s*)|(\s*$)/g, "");
    },

    /**
     * 解析URL上面的参数
     * @param url
     */
    parseUrl (url) {
        if (!url) {
            url = window.location.href;
        }

        let temp = url.split('#');

        if (temp[0].indexOf('?') >= 0) {
            temp[0] = temp[0].split('?');
        } else if (temp[1] && temp[1].indexOf('?') >= 0) {
            temp[0] = temp[1].split('?');
        } else {
            temp[0] = temp[0].split('?');
        }

        let query = {};
        let queryStr = temp[0][1];

        if (queryStr) {
            queryStr = queryStr.split('&');
            $(queryStr).each(function (index, item) {
                let _temp = item.split('=');
                query[_temp[0]] = decodeURIComponent(_temp[1]);
            });
        }

        return query;
    },
    /**
     * 格式化日期
     * @param val 时间戳（例如：1477363297）
     * @param type 1：完整显示，2：不显示年,3:不显示分秒
     * 1小时 -> 时间戳 3600000
     */
    formatDate (val, type = 1) {
        // if ($.isNumeric(val) === false) {
        //     return val;
        // }
        if (!val) {
            return '--'
        }
        if (val === 0) {
            return '--'
        }
        let result = ''
        let date = new Date(parseInt(val))
        let year = date.getFullYear()
        let month = util.pad(date.getMonth() + 1)
        let day = util.pad(date.getDate())
        let housrs = util.pad(date.getHours())
        let minutes = util.pad(date.getMinutes())
        let seconds = util.pad(date.getSeconds())
        switch (type) {
            case 1:
                result = year + '-' + month + '-' + day + ' ' + housrs + ':' + minutes + ':' + seconds
                break
            case 2:
                result = month + '-' + day + ' ' + housrs + ':' + minutes
                break
            case 3:
                result = year + '-' + month + '-' + day
                break
            case 4:
                result = minutes + ':' + seconds
                break
            case 5:
                result = year + '-' + month + '-' + day + ' ' + housrs + ':' + minutes
                break
            case 6:
                result = housrs + ':' + minutes + ':' + seconds
                break
            default:
                result = year + '-' + month + '-' + day + ' ' + housrs + ':' + minutes + ':' + seconds
                break
        }
        return result
    }
}