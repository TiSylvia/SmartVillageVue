<template>
  <div>
    <h1>投诉反馈列表</h1>

    <!-- 第一组数据 -->
    <div v-if="complaintList1.length > 0">
      <h2>投诉建议</h2>
      <ul class="complaint-list">
        <li v-for="(item, index) in complaintList1" :key="'group1-' + index" class="complaint-item">
          <div class="complaint-content">
            {{ item.ctitle }} <!-- 使用 ctitle 字段作为投诉标题 -->
          </div>
          <button class="view-details-btn" @click="viewDetails(item.cid)">查看详情</button>
        </li>
      </ul>
    </div>

    <!-- 第二组数据 -->
    <div v-if="complaintList2.length > 0">
      <h2>故障上报</h2>
      <ul class="complaint-list">
        <li v-for="(item, index) in complaintList2" :key="'group2-' + index" class="complaint-item">
          <div class="complaint-content">
            {{ item.ctitle }} <!-- 使用 ctitle 字段作为投诉标题 -->
          </div>
          <button class="view-details-btn" @click="viewDetails(item.cid)">查看详情</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "complaint_feedback",
  data() {
    return {
      complaintList1: [], // 存储投诉建议数据
      complaintList2: []  // 存储故障上报数据
    };
  },
  methods: {
    // 获取投诉反馈数据
    fetchComplaintList() {
      this.$axios.get('/complaints/getlist', {
        params: {
          ctype: '投诉建议' // 替换成你想要传递的ctype值
        }
      })
        .then(response => {
          if (response.status === 200) {
            // 将获取到的数据按照 ctype 分组
            response.data.forEach(item => {
              if (item.ctype === "投诉建议") {
                this.complaintList1.push(item);
              } else if (item.ctype === "故障上报") {
                this.complaintList2.push(item);
              }
            });
          }
        })
        .catch(error => {
          console.error("获取数据失败:", error);
        });
      this.$axios.get('/complaints/getlist', {
        params: {
          ctype: '故障上报' // 替换成你想要传递的ctype值
        }
      })
        .then(response => {
          if (response.status === 200) {
            // 将获取到的数据按照 ctype 分组
            response.data.forEach(item => {
              if (item.ctype === "投诉建议") {
                this.complaintList1.push(item);
              } else if (item.ctype === "故障上报") {
                this.complaintList2.push(item);
              }
            });
          }
        })
        .catch(error => {
          console.error("获取数据失败:", error);
        });
    },
    // 查看详情，跳转到详情页面
    viewDetails(cid) {
      // 假设详情页面的路由为 '/complaint-details/:cid'，其中:cid是动态路由参数
      this.$router.push(`/complaint-details/${cid}`);
    }
  },
  created() {
    // 组件创建时获取投诉反馈列表数据
    this.fetchComplaintList();
  }
};
</script>

<style scoped>
/* 添加样式 */

/* 投诉反馈列表项样式 */
.complaint-item {
  border: 1px solid #ccc; /* 添加外边框 */
  margin-bottom: 10px; /* 添加下方间距 */
  padding: 10px; /* 添加内边距 */
  display: flex; /* 使用 Flexbox 布局 */
  align-items: center; /* 垂直居中 */
  justify-content: space-between; /* 水平间距均分 */
}

/* 投诉反馈内容样式 */
.complaint-content {
  margin-bottom: 5px; /* 添加下方间距 */
}

/* 查看详情按钮样式 */
.view-details-btn {
  background-color: #63a1ff; /* 设置按钮背景色为蓝色 */
  color: white; /* 设置按钮文字颜色为白色 */
  border: none; /* 去除按钮边框 */
  padding: 5px 10px; /* 添加内边距 */
  cursor: pointer; /* 设置鼠标样式为手型 */
}

/* 鼠标悬停时按钮样式 */
.view-details-btn:hover {
  background-color: #4747ce; /* 设置鼠标悬停时按钮背景色为深蓝色 */
}
</style>
