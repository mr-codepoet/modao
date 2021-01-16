// miniprogram/pages/my/my.js
import {
  BookModel
} from '../../models/book.js'
import {ClassicModel} from '../../models/classic.js'
const bookModel = new BookModel()
const classicModel = new ClassicModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookCount: 12,
    classics:[],
    userInfo:null,
    authorized:false,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMyBookCount()
    this.getFavor()
  },
  onGetUserInfo(event) {
    const userInfo = event.detail.userInfo

    console.log(userInfo)
    if (userInfo) {
      this.setData({
        userInfo,
        authorized: true
      })
    }
  },

  getFavor(){
    classicModel.getMyFavor(res => {
      this.setData({
        classics:res
      })
    })
  },

  getMyBookCount() {
    bookModel.getMyBookCount()
      .then(res => {
        this.setData({
          bookCount: res.count
        })
      })
  },
  onStudy() {
    wx.navigateTo({
      url: '../course/course',
    })
  },
  onJumpToAbout() {
    wx.navigateTo({
      url: '../about/about',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})