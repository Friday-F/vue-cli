<template>
    <div class="comp-dialog" v-if="isShow === true"  :class="{'comp-dialog-form': type === 'form'}">
        <div class="dialog-box" :style="{'width': width + 'px'}">
            <!-- <div class="header header-left"> -->
            <div class="header">
                <span class="modal-title">{{ title }}</span>
                <a href="javascript:;" :class="type==='center' ? 'close':'close close-left'" @click="hide"><span>×</span></a>
            </div>
            <div class="content">
                <slot name="content"></slot>
            </div>
            <div class="footer">
                <slot name="footer">
                    <button type="submit"
                            class="ui-btn ui-btn--default"
                            @click="hide">No</button>
                    <button type="submit"
                            class="ui-btn"
                            @click="submit">Yes</button>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
    /**
     * @file
     * @author jinguangguo
     * @date 2018/9/13 下午5:07
     */

    export default {
        name: "Modal",
        props: {
            visible: {
                type: Boolean,
                default: true
            },
            title: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: ''
            },
            width: {
                type: Number,
                default: 450
            },
            onConfirm: {
                type: Function,
                default() {
                }
            },
            onHide: {
                type: Function,
                default() {
                }
            }
        },
        computed: {
            isShow() {
                return this.visible;
            }
        },
        data() {
            return {

            };
        },
        methods: {
            submit() {
                this.onConfirm();
            },
            hide() {
                this.onHide();
            }
        }
    }
</script>

<style scoped lang="less">
   

    .comp-dialog {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index:99;
        background-color: rgba(0, 0, 0, 0.4);
        color: #333;
        .dialog-box {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: 4px;
            background-color: #fff;
            .header {
                box-sizing: border-box;
                padding:36px 0 20px 0;
                font-size: 24px;
                color:#273844;
                text-align: center;
                background: #fff;
                border:none;
                position: relative;
                height: auto;
                border-radius: 4px;
                .title {
                    font-size: 14px;
                    font-weight: bold;
                    text-align: center;
                }
                .close {
                    position:absolute;
                    right:34px;
                    top:18px;
                    display: inline-block;
                    line-height: 1;
                    font-size: 24px;
                    color: #666;
                    &.close-left {
                        top: 12px;
                        font-weight: 400;
                    }
                    &:hover {
                        color: #16af7d;
                        transition: all 0.4s ease;
                        /*transform: rotate(90deg);*/ 
                    }
                }
            }
            .content {
                padding:0 48px;
                
            }
            .footer {
                padding: 20px 0 40px;
                text-align: center;
                .ui-btn {
                    padding:0 26px;
                    height: 40px;
                    line-height: 40px;
                    color:#fff;
                    background: #16af7d;
                    display: inline-block;
                    &[disabled] {
                        pointer-events: none;
                        background-color: #e0e0e0;
                    }
                }
                .footer-inner {
                    padding: 0 48px;
                    height: 40px;
                }
            }
        }
        &-form {
            .dialog-box {
                .header {
                    padding: 0 32px;
                    height: 60px;
                    line-height: 60px;
                    text-align: left;
                    font-size: 14px;
                    font-weight: 700;
                    background-color: #e6e9ea;
                    .close {
                        font-size: 28px;
                        color: #ccc;
                        &.close-left {

                        }
                    }
                }
                .content {
                    padding: 32px 48px;
                }
                .footer {
                    padding: 0 0 32px 0;
                    text-align: left;
                    .ui-btn {
                        height: 40px;
                        line-height: 40px;
                        padding: 0 32px;
                        &:hover {
                            background-color:green;
                        }
                    }
                }
            }
        }
    }
</style>
