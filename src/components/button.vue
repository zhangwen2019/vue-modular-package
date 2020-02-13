<template>
<!-- 1.使用插槽,防止内容写死(普通插槽) -->
<!-- 2.让按钮有不同的样式,支持type属性(父传子,接收type数据) -->
<!-- 3.根据props接收的type数据对button动态的设置类名 -->

<!-- 4.根据接收的plain(布尔属性)来确定is-plain类名的存在,设置朴素的按钮-->

<!-- 5.根据接收的round(布尔属性)来确定is-round的类名,设置圆角的按钮 -->

<!-- 7.禁用按钮,两件事,禁用和加上样式 -->
  <button class="zw-button" :class="[`zw-button--${type}`, {
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-disabled': disabled
    }]"
    :disabled="disabled"
    @click="handleClick"
  >
    <!-- 6.字体图标只写一个类名,可以使用属性选择器 [class*='hm-icon-'] (包含后面的类名,这个就生效) -->
    <!-- <i class="hm-icon-check"></i> -->
    <!-- 添加icon类名,并且根据icon是否传了,显示字体图标 -->
    <i v-if="icon" :class="icon"></i>

    <!-- 7.在我们没有传入插槽的内容时,不显示span标签(default默认插槽) -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  // 组件前置知识点:组件通讯,组件插槽,props校验

  // name的作用,拿到这个组件注册的时候,就可以拿到这个名字
  name: 'ZwButton',
  // 数组形式的传值,给我什么我就接受什么,原样的接受(可以使用对象的形式进行校验)
  // props: ['type'],
  // 通用的组件对props进行校验
  props: {
    // 接收type(对其进行校验)
    type: {
      type: String,
      // required: true
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created () {
    console.log(this.type)
    // 拿到所有的插槽
    console.log(this.$slots)
  },
  methods: {
    handleClick (e) {
      // 触发父组件click事件
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>

.zw-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  // 禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}

.zw-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;

  &:hover,
  &:focus {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}
.zw-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
}
.zw-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
}
.zw-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
}
.zw-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
}

// 朴素的按钮
.zw-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
}
.zw-button--primary.is-plain {
  color: #a2a8ad;
  background: #ecf5ff;
  border-color: #b3d8ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.zw-button--success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}

.zw-button--info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.zw-button--warning.is-plain {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.zw-button--danger.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}

// 带有圆角的按钮
.zw-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}

// 原形按钮
.zw-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}

.zw-button [class*=hm-icon-]+span {
  margin-left: 5px;
}
</style>
