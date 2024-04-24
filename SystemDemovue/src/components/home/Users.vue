<template>
  <div class="profile">
    <div class="profile-header">
      <!-- 用户名字 -->
      <h1>{{ name }}</h1>
      <!-- 用户资料 -->
      <div class="user-info">
        <p><strong>邮箱:</strong> {{ email }}</p>
        <!-- 其他用户资料字段 -->
        <p><strong>电话:</strong> {{ phone }}</p>
      </div>
      <!-- 编辑个人信息按钮 -->
      <button class="edit-button" @click="editProfile">编辑个人信息</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
    };
  },
  created() {
    // 在组件创建时调用后端接口获取用户资料
    this.fetchUserProfile();
  },
  methods: {
    fetchUserProfile() {
      // 模拟从后端获取用户资料
      // 这里假设从后端获取到了用户的姓名、邮箱和电话信息
      this.name = 'John Doe';
      this.email = 'john@example.com';
      this.phone = '123-456-7890';
    },
    editProfile() {
      // 当编辑按钮被点击时触发的方法
      // 可以在这里添加编辑个人信息的逻辑
      console.log('点击了编辑个人信息按钮');
    }
  }
};
</script>

<style scoped>
.profile {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.profile-header {
  display: flex;
  align-items: center;
}

h1 {
  margin: 0;
}

.user-info p {
  margin: 5px 0;
}

.edit-button {
  margin-left: auto;
  padding: 8px 16px;
  background-color: #ccc;
  border: none;
  border-radius: 4px;
  color: #555;
  cursor: pointer;
}

.edit-button:hover {
  background-color: #bbb;
}
</style>
