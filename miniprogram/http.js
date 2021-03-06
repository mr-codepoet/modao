import {
  config
} from './config.js'

class HTTP {
  request(params) {
    if (!params.method) {
      params.method = "GET"
    }
    wx.request({
      url:config.api_base_url + params.url,
      method:params.method,
      data:params.data,
      header:{
          'content-type':'application/json',
          'appkey':config.appkey
      },
      success:(res)=> {
        params.success && params.success(res.data)
      }
    })
  }
}

export {
  HTTP
}