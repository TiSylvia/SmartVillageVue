<template>
  <div>
    <h1>办公投诉建议</h1>
    <form @submit.prevent="submitComplaint">
      <label htmlFor="complaint-title">投诉标题：</label><br>
      <input type="text" id="complaint-title" v-model="title"><br>
      <label htmlFor="complaint-message">投诉建议：</label><br>
      <textarea id="complaint-message" v-model="message" rows="4" cols="50"></textarea>
      <button type="submit">提交</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "office_complaint_suggestion",
  data() {
    return {
      title: '', // 投诉标题
      message: '' // 投诉建议内容
    };
  },
  methods: {
    submitComplaint() {
      // 如果标题或者建议内容为空，则不提交
      if (!this.message ||!this.title ||!this.title.trim() || !this.message.trim()) {
        alert("投诉标题和建议内容不能为空");
        return;
      }

      // 发送数据到后端
      this.$axios
        .post('/complaints/suggestion', {
          ctitle: this.title,
          cconnect: this.message,
          uid: this.$store.state.user.uid,
          ctype: "投诉建议",
          cstate: 0
        })
        .then(successResponse => {
          if (successResponse.status === 200) {
            alert("提交成功");
            // 提交成功后清空标题和建议内容
            this.title = '';
            this.message = '';
            window.location.reload(true); // 参数 true 表示强制从服务器重新加载页面
          }
        })
        .catch(failResponse => {
          console.error("提交错误:", failResponse);
          alert("提交失败");
        });
    }
  }
};
</script>

<style scoped>
/* 这里可以添加组件的样式 */
</style>
