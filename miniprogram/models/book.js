import {
  HTTP
} from '../http-p.js'

class BookModel extends HTTP {
  search(start, q) {
    return this.request({
      url: 'book/search?summary=1',
      data: {
        q: q,
        start: start
      }
    })
  }

  getMyBookCount() {
    return this.request({
      url: 'book/favor/count'
    })
  }

  getHotList(sCallback) {
    return this.request({
      url: 'book/hot_list',
      success: (res) => {
        sCallback(res)
      }
    })
  }

  getDetail(bid) {
    return this.request({
      url: `book/${bid}/detail`
    })
  }

  getComments(bid) {
    return this.request({
      url: `book/${bid}/short_comment`
    })
  }

  getLikeStatus(bid) {
    return this.request({
      url: `book/${bid}/favor`
    })
  }

  addcommonts(id, content, sCallback) {
    return this.request({
      url: 'book/add/short_comment',
      method: 'POST',
      data: {
        book_id: id,
        content: content
      },
      success: (res) => {
        sCallback(res)
      }
    })
  }

}

export {
  BookModel
}