Page({
  /** * 页面的初始数据** */
  data: {
    shuzu: [],
    _id:"05f2c36f5eb67368006c67841f363464"
  },
  /** * 生命周期函数--监听页面加载*** */
  onLoad: function (options) {
    var that = this
    const db = wx.cloud.database()
    db.collection('news').where({
      newsid: "1"
    }).get({
      success: function (res) {
        console.log(res.data)
        that.setData({
          shuzu: res.data
        })
      }
    })

  },
  select:function (e) 
  { console.log(e)
    var that = this
    var id = e.target.id
    const db = wx.cloud.database()
    db.collection('news').where({
      newsid:id
    }).get({
      success: function (res) {
        console.log(res.data)
        that.setData({
          shuzu: res.data
        })
      }
    })
  },

  /*** 用户点击右上角分享*/
  onShareAppMessage: function () {  
  }
})