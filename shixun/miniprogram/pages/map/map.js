Page({
  data: {
    latitude: 22.973036612501147,
    longitude: 113.75550287971497,
    markers: [{
      id: 1,
      latitude: 22.973036612501147,
      longitude: 113.75550287971497,
      name: '广东科技学院'
    }],
  },
  onReady: function (e) {
    //创建 map 上下文 MapContext 对象。
    this.zhizhen = wx.createMapContext('ditu')
  },
  //将地图中心移动到当前定位点
  moveToLocation: function () {
    this.zhizhen.moveToLocation()
  },
  //缩放视野展示所有经纬度
  includePoints: function () {
    this.zhizhen.includePoints({
      padding: [10],
      points: [{
        latitude: 22.54229,
        longitude: 113.3745211,
      }, {
        latitude: 22.55229,
        longitude: 113.3845211,
      }]
    })
  },
})
