import {
  HTTP
} from '../http.js'

class ClassicModel extends HTTP {
  getLatest(sCallback) {
    this.request({
      url: 'classic/latest',
      success: (res) => {
        sCallback(res)
        this._setLatestIndex(res.index)

        let key = this._getKey(res.index)
        wx.setStorageSync(key, res)
      }
    })
  }

  getClassic(index, nextorprev, sCallback) {
    this.request({
      url: `classic/${index}/${nextorprev}`,
      success: (res) => {
        sCallback(res)
      }
    })
  }

  getMyFavor(sCallback) {
    this.request({
      url: 'classic/favor',
      success: (res) => {
        sCallback(res)
      }
    })
  }

  islatest(index) {
    let lastestindex = this._getLatestindex()
    return lastestindex == index ? true : false
  }

  isFirst(index) {
    return 1 == index ? true : false
  }

  _getLatestindex() {
    const index = wx.getStorageSync('latest')
    return index
  }

  _setLatestIndex(index) {
    wx.setStorageSync('latest', index)
  }

  //把起始index写入缓存
  _getKey(index) {
    const key = 'classic-' + index
    return key
  }
}

export {
  ClassicModel
}