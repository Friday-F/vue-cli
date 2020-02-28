<template>
    <div class="switch-box">
	    <span class="switch" :class="{'switch-on' : isChecked}" :value="value" @click="toggle">
			<div v-if="isChecked && direction.length > 0" class="is-checked">
				{{direction[0]}}
			</div>
			<div v-if="!isChecked && direction.length > 0" class="no-checked">
				{{direction[1]}}
			</div>
	    </span>
	</div>
</template>

<script>
    export default {
		name: 'Switch',
		props: {
	      value: {
	        type: Boolean,
	        default: true
          },
	      text: {
	      	type: String,
	      	default: 'ON|OFF'
          },
          state: {
                type: Boolean,
	            default: true
          }
        },
		data () {
			return {
                isChecked: this.value,
                isSwitch:false
                
			}
		},
		computed: {
			direction () {
				if (this.text) {
					return this.text.split('|');
				} else {
					return [];
				}
			}
		},
		watch: {
          value (val) {
            this.isChecked = val;
          },
	      isChecked(val) {
            this.$emit('change', val);
	      }
	    },
	    methods: {
            toggle() {
                if(!this.isSwitch){
                    this.isSwitch = true;
                    //打开
                    if (!this.isChecked) {
                        this.isChecked = !this.isChecked;
                        this.isSwitch = false;
                        
                    } else {
                        //关闭
                       this.isChecked = !this.isChecked;
                       this.isSwitch = false;
                    }
                }
                
                
            },
        }
    }
</script>

<style lang='less' scoped>	
    .switch-box {
        display: inline-block;
        .switch {
            display: block;
            position: relative;
            width: 62px;
            height: 24px;
            border: 1px solid #DFDFDF;
            outline: 0;
            border-radius: 16px;
            box-sizing: border-box;
            background-color: #DFDFDF;
            transition: background-color 0.1s, border 0.1s;
            cursor: pointer;
            &:before {
                content: " ";
                position: absolute;
                top: 0;
                left: 0;
                width: 60px;
                height: 22px;
                border-radius: 15px;
                background-color: #E9ECED;
                transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
            }
            &:after {
                content: " ";
                position: absolute;
                top: 0;
                left: 0;
                width: 22px;
                height: 22px;
                border-radius: 15px;
                background-color: #FFFFFF;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
                transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
            }
            .is-checked {
                position: absolute;
                padding: 0 8px;
                width: 100%;
                height: 100%;
                line-height: 24px;
                font-size: 12px;
                text-align: left;
                color:#FFF;
                user-select: none;
            }
            .no-checked {
                width: 100%;
                height: 100%;
                position: absolute;
                padding: 0 5px;
                right: 2px;
                line-height: 22px;
                font-size: 12px;
                color: #fff;
                text-align: right;
                user-select: none;
            }
        }
        .switch-on {
            border-color: #16af7d;
            background-color: #16af7d;
            &:before {
                border-color: #16af7d;
                background-color: #16af7d;
            }
            &:after {
                transform: translateX(38px);
            }
        }
    }
</style>
