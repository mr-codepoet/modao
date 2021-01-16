// miniprogram/pages/book-detail/book-detail.js
import {
  BookModel
} from '../../models/book.js'
import {
  Likemodel
} from '../../models/like.js'

const bookModel = new BookModel()
const likeModel = new Likemodel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comments: [],
    book: null,
    likenum: null,
    likestatus: Number,
    posting: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const bid = options.bid
    const detail = bookModel.getDetail(bid)
    const comments = bookModel.getComments(bid)
    const likenum = bookModel.getLikeStatus(bid)

    Promise.all([detail, comments, likenum])
      .then((res) => {
        this.setData({
          book: res[0],
          comments: res[1].comments,
          likenum: res[2].fav_nums,
          likestatus: res[2].like_status,
        })
      })
  },

  onFakePost: function () {
    this.setData({
      posting: true
    })
  },
  onCancel: function () {
    this.setData({
      posting: false
    })
  },
  onLike: function (event) {
    const behavior = event.detail.behavior
    likeModel.like(behavior, this.data.book.id,
      400)
  },

  onPost: function (event) {
    const id = this.data.book.id
    const content = event.detail.text || event.detail.value

    if (!content) {
      return
    }

    if (content.length > 12) {
      wx.showToast({
        title: '短评最多12字',
        icon: 'none'
      })
      return
    }

    bookModel.addcommonts(id, content, (res) => {

    }).then(res => {
      this.data.comments.unshift({
        content: content,
        nums: 1
      })

      this.setData({
        comments: this.data.comments,
        posting: false
      })
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