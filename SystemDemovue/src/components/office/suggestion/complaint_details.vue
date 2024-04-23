<template>
  <div>
    <h1 class="page-title">投诉详情</h1>
    <div class="complaint-details-container">
      <div class="complaint-info">
        <span class="info-label">投诉标题：</span>{{ complaint.ctitle }}
      </div>
      <div class="complaint-info">
        <span class="info-label">投诉内容：</span>{{ complaint.cconnect }}
      </div>
      <textarea v-model="reply" placeholder="请输入回复内容" class="reply-textarea"></textarea>
      <button @click="submitReply" class="submit-button">提交回复</button>
    </div>
  </div>
</template>



<script>
export default {
  name: "complaint_details",
  data() {
    return {
      complaint: null, // 存储投诉详情数据
      reply: '' // 存储回复内容
    };
  },
  methods: {
    // 获取投诉详情数据
    fetchComplaintDetails() {
      const cid = this.$route.params.cid; // 从路由参数中获取投诉ID
      this.$axios.get(`/complaints/${cid}`)
        .then(response => {
          if (response.status === 200) {
            this.complaint = response.data; // 存储投诉详情数据
          }
        })
        .catch(error => {
          console.error("获取投诉详情失败:", error);
        });
    },
    // 提交回复
    submitReply() {
      const cid = this.$route.params.cid; // 从路由参数中获取投诉ID
      const replyData = {
        cid: cid,
        cuid: this.$store.state.user.uid,
        canswer: this.reply,
        catime: new Date().toISOString(), // 获取当前时间作为回复时间
        cstate:1
      };
      this.$axios.put('/complaints/edit', replyData)
        .then(response => {
          if (response.status === 200) {
            alert("回复提交成功");
            // 可以根据需要进行页面跳转或其他操作
          }
        })
        .catch(error => {
          alert("提交回复失败:"+error)
          console.error("提交回复失败:", error);
        });
    }
  },
  created() {
    // 组件创建时获取投诉详情数据
    this.fetchComplaintDetails();
  }
};
</script>

<style scoped>
.page-title {
  margin-top: 0; /* 去除顶部间距 */
}

.complaint-details-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: left; /* 将标题和内容左对齐 */
}

.complaint-info {
  margin-bottom: 10px; /* 添加下方间距 */
}

.info-label {
  font-weight: bold; /* 设置标签文本加粗 */
}

.reply-textarea {
  width: 100%;
  height: 100px;
  margin-top: 10px;
}

.submit-button {
  display: block;
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  background-color: #63a1ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #478dff;
}
</style>
