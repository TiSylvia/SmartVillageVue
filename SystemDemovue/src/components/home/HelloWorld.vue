<template>
  <div class="background">
    <h1 class="title">数字化助力乡村振兴</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<style scoped>
.background {
  position: relative;
  width: 100%;
  height: 560px; /* 将背景高度设为 580px */
  background-image: url('back4.jpg'); /* 替换成你的图片路径 */
  background-size: cover; /* 让图片尽可能铺满整个背景 */
  background-position: center; /* 将图片置中 */
}

.title {
  position: absolute;
  top: 40%; /* 将标题置于屏幕垂直居中 */
  left: 50%; /* 将标题置于屏幕水平居中 */
  transform: translate(-0%, -50%); /* 居中 */
  font-size: 72px; /* 调整标题字体大小 */
  color: #fff; /* 设置标题颜色为白色 */
  text-align: right; /* 文字居中 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 添加阴影效果 */
}
</style>
