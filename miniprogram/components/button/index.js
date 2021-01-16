// components/button/index.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true ///开启后可以插槽进来
  },
  properties: {
   openType: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onGetUserInfo(event) {
      this.triggerEvent('getuserInfo', event.detail, {})
    }
  }
})