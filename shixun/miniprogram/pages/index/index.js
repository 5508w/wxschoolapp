//index.js
const app = getApp()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    text0: '办校类型：民办高校\n',
    text1: '所在地区：广东 东莞\n',
    text2: '\n',
    imgUrls: [
      'http://jjzs.gdust.cn/UploadFiles/2017-03-14/2017031410235152625.jpg',

      'http://jjzs.gdust.cn/UploadFiles/2017-03-14/2017031410233319022.jpg',

      'http://jjzs.gdust.cn/UploadFiles/2017-03-14/2017031410225820924.jpg',

    ],
    autoplay: true,
    interval: 5000,
    duration: 1000,
    windowWidth: 320,
    shuzu: [],
    detail_id: "n001",
    ne:[],
  },

  gotoincon0: function (param) {
    wx.navigateTo({
      url: '/pages/icon/icon?icon_uid=0'
    })
  },

  gotoincon2: function (param) {
    wx.navigateTo({
      url: '/pages/icon/icon?icon_uid=2'
    })
  },
  
  gotonews:function(param){
    wx.navigateTo({
      url: '/pages/list/list',
    })
  }, 
  
  gotovideo: function(param) {
    wx.navigateTo({
      url: '/pages/video/video',
    })
  }, 

  gotomap: function(param) {
    wx.navigateTo({
      url: '/pages/map/map',
    })
  }, 

  gotoimage: function(param) {
    wx.navigateTo({
      url: '/pages/image/image',
    })
  },

  gotomessage: function (param) {
    wx.navigateTo({
      url: '/pages/message/message',
    })
  },

  gotoquestion: function (param) {
    wx.navigateTo({
      url: '/pages/icon/icon?icon_uid=7',
    })
  },
  
  Collectionget:function(e){
    var that = this
    const db = wx.cloud.database({
      //这个是环境ID不是环境名称
      env: 'mrhuang20200428'
    })
    db.collection('student').get({
      success: res => {
        console.log(res.data)
        this.setData({
          ne: res.data
        })
      }
        
    })
    
    
  },
  
  onLoad: function() {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }
    

    
  },

 


})
