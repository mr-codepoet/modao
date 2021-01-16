import {
  ClassicModel
} from '../../models/classic.js'
const classicModel = new ClassicModel()

import {
  Likemodel
} from '../../models/like.js'
const likeModel = new Likemodel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic: null,
    latest: Boolean,
    first: Boolean,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLatest((res) => {
      this.setData({
        classic: res,
        latest: classicModel.islatest(res.index),
        first: classicModel.isFirst(res.index)
      })
    })
  },

  onLike: function (event) {
    const behavior = event.detail.behavior
    // console.log(behavior)
    likeModel.like(behavior, this.data.classic.id,
      this.data.classic.type)
  },
  getuserInfo: function (e) {
    wx.getUserInfo({
      success: function (res) {
        console.log(res)
      }
    })
  },

  onNext: function () {
    this._updateClassic('next')
  },

  onPrevious: function () {
    this._updateClassic('previous')
  },

  _updateClassic: function (nextorprevious) {
    const index = this.data.classic.index
    classicModel.getClassic(index, nextorprevious, (res) => {
      this.setData({
        classic: res,
        latest: classicModel.islatest(res.index),
        first: classicModel.isFirst(res.index)
      })
    })
  }
})