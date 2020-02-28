/**
 * @file
 * @auth ''
 * @date 2017/1/9
 */

import './Snackbar.less';

import Vue from 'vue';
import html from './Snackbar.html';

const TIMEOUT = 2500;
const TIMEOUT_ERROR = 4000;
const ANIMATION_TIME = 400;

let $element = null;

let vm = new Vue({
    template: html,
    components: {

    },
    created() {

    },
    mounted() {
        this.$module = $(this.$refs.module);

    },
    data() {
        return {
            top: false,
            hasInit: false,
            timeId: null,
            $module: null,
            isShow: false,
            classObj: {

            },
            transition: 'fade',
            type: 'info',
            content: '',
            timeout: TIMEOUT,
            callback() {}
        };
    },
    methods: {
        show() {
            if (this.hasInit === false) {
                let elem = document.createElement('div');
                document.body.appendChild(elem);
                this.hasInit = true;
                vm.$mount(elem);
                $element = $(this.$el);
            }
            this.isShow = true;

            $element.removeClass('snackbar-leave-active');
            $element.addClass('snackbar-enter');    // 隐藏

            setTimeout(() => {
                $element.removeClass('snackbar-enter');
            }, 0);

            if (this.timeId) {
                window.clearTimeout(this.timeId);
            }

            // 不消失
            if (this.timeout === -1) {
                return;
            }
            this.timeId = setTimeout(() => {
                this.hide();
                if (typeof this.callback === 'function') {
                    this.callback();
                }
            }, this.timeout);
        },
        hide() {
            this.isShow = false;
            setTimeout(() => {
                $element.addClass('snackbar-leave-active');
            }, 0);
        }
    }
});

let snackbar = function (msgOrConfig, callback, timeout, top) {

    let config = {};

    if (typeof msgOrConfig === 'string') {
        config.content = msgOrConfig;
        config.callback = callback;
        config.timeout = timeout;
    } else {
        config = msgOrConfig;
        if (config.type === 'error' && !config.timeout) {
            config.timeout = TIMEOUT_ERROR;
        }
    }

    let option = $.extend({}, {
        transition: config.transition || 'fade',
        type: config.type || 'warning',
        content: config.content,
        timeout: config.timeout || TIMEOUT,
        callback: config.callback,
        top: config.top
    });

    $.map(option, (value, key) => {
        vm[key] = value;
    });

    vm.show();

};

window.snackbar = snackbar;

window.success = function (msgOrConfig, callback, timeout) {
    let config = {};
    if (typeof msgOrConfig === 'string') {
        config.type = 'success';
        config.content = msgOrConfig;
        config.callback = callback;
        config.timeout = timeout;
    } else {
        config = $.extend({
            type: 'success'
        }, msgOrConfig);
    }
    snackbar(config);
};

window.info = function (msgOrConfig, callback, timeout, top) {
    let config = {};
    if (typeof msgOrConfig === 'string') {
        config.type = 'info';
        config.content = msgOrConfig;
        config.callback = callback;
        config.timeout = timeout;
        config.top = top;
    } else {
        config = $.extend({
            type: 'info'
        }, msgOrConfig);
    }
    snackbar(config);
};

window.warning = function (msgOrConfig, callback, timeout) {
    let config = {};
    if (typeof msgOrConfig === 'string') {
        config.type = 'warning';
        config.content = msgOrConfig;
        config.callback = callback;
        config.timeout = timeout;
    } else {
        config = $.extend({
            type: 'success'
        }, msgOrConfig);
    }
    snackbar(config);
};

window.error = function (msgOrConfig, callback, timeout) {
    let config = {};
    if (typeof msgOrConfig === 'string') {
        config.type = 'error';
        config.content = msgOrConfig;
        config.callback = callback;
        config.timeout = timeout || TIMEOUT_ERROR;
    } else {
        config = $.extend({
            type: 'error'
        }, msgOrConfig);
    }
    snackbar(config);
};

window.hideSnackbar = () => {
    vm.hide();
};

/**
 * confirm
 * @param config
 * @returns {*}
 */
export default snackbar;
