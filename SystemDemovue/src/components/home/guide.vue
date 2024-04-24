<template>
  <div class="guide">
    <h1>便民指导</h1>
    <div class="guide-items">
      <div class="guide-item">
        <h2>交通指南</h2>
        <p>如何到达我们的位置？</p>
        <ul>
          <li>乘坐公交123路到达A站，下车后向西步行500米</li>
          <li>开车前往请搜索“某某路某某大厦”，导航到达目的地</li>
          <li>步行或骑行可以沿着某某大街直接到达</li>
        </ul>
      </div>
      <div class="guide-item">
        <h2>服务指南</h2>
        <p>我们提供的服务有：</p>
        <ul>
          <li>咨询服务：提供各类政策咨询，需携带身份证原件</li>
          <li>户籍迁移服务：提供户籍迁移申请办理，需携带相关证明文件</li>
          <li>缴费服务：提供水电煤缴费等服务，需携带缴费单据和相应金额</li>
        </ul>
      </div>
      <div class="guide-item">
        <h2>联系方式</h2>
        <p>如需帮助，请联系我们：</p>
        <ul>
          <li>电话：123-456-7890</li>
          <li>邮箱：info@example.com</li>
          <li>地址：某某街道123号</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Guide"
}
</script>

<style scoped>
.guide {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  height: 580px; /* 页面高度为 580px */
  overflow-y: auto; /* 添加滚动条，以防内容溢出 */
}

.guide h1 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 36px;
}

.guide-items {
  display: flex;
  justify-content: space-between;
}

.guide-item {
  flex: 1;
  margin-right: 40px;
}

.guide-item:last-child {
  margin-right: 0;
}

.guide-item h2 {
  font-size: 24px;
}

.guide-item p {
  margin-top: 10px;
  margin-bottom: 20px;
}

.guide-item ul {
  padding-left: 20px;
}

.guide-item li {
  margin-bottom: 5px;
}
</style>
