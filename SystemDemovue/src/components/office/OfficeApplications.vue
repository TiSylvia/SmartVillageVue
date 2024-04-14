<template>
  <div class="button-container">
    <el-row style="height: 550px;">
      <el-col :span="6" v-for="(button, index) in currentPageButtons" :key="index" class="button-column">
        <el-button class="square-button" @click="navigateToPage(button.route)">{{ button.text }}</el-button>
      </el-col>
    </el-row>
    <el-pagination
      class="pagination"
      :current-page="currentPage"
      :page-size="buttonsPerPage"
      :total="filteredButtons.length"
      @current-change="handlePageChange"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: 'OfficeApplications',
  props: ['selectedMenuIndex'],
  data() {
    return {
      buttons: [
        { text: '本人户籍信息查询', route: '/personal-residence-info' },
        { text: '户籍迁移申请', route: '/residence-migration-application' },
        { text: '进行户籍迁移', route: '/residence-migration' },
        { text: '名下房产查询', route: '/property-inquiry' },
        { text: '房产登记', route: '/property-registration' },
        { text: '房产转让', route: '/property-transfer' },
        { text: '办公投诉建议', route: '/office-complaint-suggestion' },
        { text: '系统故障上报', route: '/system-fault-report' },
        { text: '投诉反馈', route: '/complaint-feedback' },
        { text: '设置反馈接收渠道', route: '/set-feedback-channel' },
        { text: '发起村务决策', route: '/village-affairs-decision' },
        { text: '发起问卷', route: '/initiate-survey' },
        { text: '进行中问卷', route: '/ongoing-survey' },
        { text: '我的投票', route: '/my-votes' },
        { text: '农业种植补贴申请', route: '/agricultural-subsidy-application' },
        { text: '教育培训补贴申请', route: '/education-training-subsidy-application' },
        { text: '残疾人特殊补贴申请', route: '/special-subsidy-application-for-disabled-persons' },
        { text: '公共用具申领', route: '/public-appliance-application' },
        { text: '办公用品申领', route: '/office-supplies-application' },
        { text: '申请审批', route: '/application-approval' },
        { text: '申领审批', route: '/requisition-approval' },
        { text: '用户管理', route: '/user-management' },
        { text: '权限审批', route: '/permission-approval' },
        { text: '权限管理', route: '/permission-management' }
      ],
      currentPage: 1,
      buttonsPerPage: 16 // 每页显示的按钮数量
    };
  },
  computed: {
    filteredButtons() {

      console.log('filteredButtons computed property is executed.');
      let filteredButtons = [];
      if (this.selectedMenuIndex === "0") {
        filteredButtons = this.buttons;
      } else if (this.selectedMenuIndex === "1") { // 如果选中户籍菜单
        filteredButtons = this.buttons.filter(button => {
          return (
            button.text === '本人户籍信息查询' ||
            button.text === '户籍迁移申请' ||
            button.text === '进行户籍迁移'
          );
        });
      } else {
        // 其他菜单项的过滤逻辑...
      }
      return filteredButtons;
    },
    currentPageButtons() {
      const startIndex = (this.currentPage - 1) * this.buttonsPerPage;
      const endIndex = this.currentPage * this.buttonsPerPage;
      return this.filteredButtons.slice(startIndex, endIndex);
    }
  },
  methods: {
    navigateToPage(route) {
      // 跳转到相应的页面
      this.$router.push(route);
    },
    handlePageChange(currentPage) {
      this.currentPage = currentPage;
    },
    getCategoryByIndex(index) {
      switch (index) {
        case 1:
          return '/personal-residence-info';
        case 2:
          return '/residence-migration';
        case 3:
          return '/property-inquiry';
        case 4:
          return '/initiate-survey';
        case 5:
          return '/user-management';
        case 6:
          return '/office-complaint-suggestion';
        default:
          return '';
      }
    }
  }
};
</script>

<style scoped>
.square-button {
  width: 100px; /* 设置按钮宽度 */
  height: 100px; /* 设置按钮高度 */
  line-height: 1.5; /* 设置按钮内文本行高 */
  border-radius: 10px; /* 设置按钮圆角 */
  font-size: 16px; /* 设置按钮文本大小 */
  white-space: normal; /* 允许文本自动换行 */
}

.button-container {
  height: 580px; /* 设置按钮容器的高度 */
  /*overflow: hidden; !* 隐藏溢出部分 *!*/
}

.pagination {
  margin-top: 0px; /* 设置分页组件距离按钮的上边距 */
}

.button-column {
  margin-top: 20px; /* 设置按钮列的下边距 */
}
</style>
