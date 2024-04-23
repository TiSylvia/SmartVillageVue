<template>
  <div class="profile">
    <div class="profile-header">
      <!-- 展示用户照片 -->
      <div class="avatar">
        <img :src="avatarUrl" alt="Avatar">
      </div>
      <!-- 用户名字 -->
      <h1>{{ name }}</h1>
      <!-- 用户资料 -->
      <div class="user-info">
        <p><strong>邮箱:</strong> {{ email }}</p>
        <!-- 其他用户资料字段 -->
      </div>
    </div>

    <div class="profile-body">
      <!-- 上传图片 -->
      <div class="upload-section">
        <input type="file" @change="onFileChange" accept="image/*">
        <button @click="uploadImage" class="btn-upload">上传新照片</button>
      </div>

      <!-- 显示已上传的图片 -->
      <div v-if="imageUrl" class="image-preview">
        <h2>已上传的图片</h2>
        <img :src="imageUrl" alt="Uploaded Image">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      avatarUrl: '', // 默认为空，后面会被更新
      imageUrl: '',
      selectedFile: null
    };
  },
  created() {
    // 在组件创建时调用后端接口获取用户资料
    this.fetchUserProfile();
  },
  methods: {
    fetchUserProfile() {
      // 通过后端接口获取用户资料
      axios.get(`/api/users/${userId}`)
        .then(response => {
          const user = response.data;
          this.name = user.name;
          this.email = user.email;
          this.avatarUrl = user.avatarUrl;
        })
        .catch(error => {
          console.error('获取用户资料失败:', error);
        });
    },
    onFileChange(event) {
      this.selectedFile = event.target.files[0];
    },
    uploadImage() {
      const formData = new FormData();
      formData.append('image', this.selectedFile);

      // 发送上传图片的请求
      // 可以使用 axios 或者其他 HTTP 客户端库发送请求
      console.log('上传图片:', this.selectedFile);

      // 模拟上传成功后的操作
      // 这里 imageUrl 应该是上传图片后返回的图片地址
      this.imageUrl = URL.createObjectURL(this.selectedFile);
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

.avatar img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
}

h1 {
  margin: 0;
}

.user-info p {
  margin: 5px 0;
}

.profile-body {
  margin-top: 20px;
}

.upload-section {
  margin-bottom: 20px;
}

.btn-upload {
  padding: 10px 20px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-upload:hover {
  background-color: #218838;
}

.image-preview {
  margin-top: 20px;
}

.image-preview h2 {
  margin-top: 0;
  font-size: 20px;
}

.image-preview img {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
}
</style>
