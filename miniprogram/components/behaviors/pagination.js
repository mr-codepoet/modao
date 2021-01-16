const paginationBev = Behavior({
  data: {
    dataArray: [],
    total: null,
    loading: false,
    noneResult: false
  },
  methods: {
    setMoreData(dataArray) {
      const temArray = this.data.dataArray.concat(dataArray)
      this.setData({
        dataArray: temArray
      })
    },

    setTotal(total) {
      this.data.total = total;
      if (total == 0) {
        this.setData({
          noneResult: true
        })
      }
    },

    getCurrentStart() {
      return this.data.dataArray.length
    },

    initialize() {
      this.setData({
        dataArray: [],
        noneResult:false
      })
    },

    hasMore() {
      if (this.data.dataArray.length >= this.data.total) {
        return false
      } else {
        return true
      }
    },

    locked() {
      this.setData({
        loading: true
      })
    },

    unlocked() {
      this.setData({
        loading: false
      })
    }
  }
})

export {
  paginationBev
}