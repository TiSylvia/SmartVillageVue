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
      <div class="complaint-info">
        <span class="info-label">回复内容：</span>{{ complaint.canswer }}
      </div>
      <div class="complaint-info">
        <span class="info-label">回复时间：</span>{{ complaint.catime }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "complaint_details_mine",
  data() {
    return {
      complaint: null
    };
  },
  methods: {
    fetchComplaintDetails() {
      const cid = this.$route.params.cid;
      this.$axios.get(`/complaints/${cid}`)
        .then(response => {
          if (response.status === 200) {
            this.complaint = response.data;
          }
        })
        .catch(error => {
          console.error("获取投诉详情失败:", error);
        });
    }
  },
  created() {
    this.fetchComplaintDetails();
  }
};
</script>

<style scoped>
.page-title {
  margin-top: 0;
}

.complaint-details-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: left;
}

.complaint-info {
  margin-bottom: 10px;
}

.info-label {
  font-weight: bold;
}
</style>
