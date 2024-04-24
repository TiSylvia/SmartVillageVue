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
        { text: '迁入申请', route: '/residence-move-in' },
        { text: '迁出申请', route: '/residence-move-out' },
        { text: '人口迁入审批', route: '/residence-move-in-approved' },
        { text: '人口迁出审批', route: '/residence-move-out-approved' },
        { text: '户籍管理', route: '/residence-management' },
        { text: '名下房屋查询', route: '/property-inquiry' },
        { text: '房屋登记', route: '/property-registration' },
        { text: '房屋转让', route: '/property-transfer' },
        { text: '房屋管理', route: '/property-management' },
        { text: '农业种植补贴申请', route: '/agricultural-subsidy-application' },
        { text: '教育培训补贴申请', route: '/education-training-subsidy-application' },
        { text: '残疾人特殊补贴申请', route: '/special-subsidy-application-for-disabled-persons' },
        { text: '申请审批', route: '/application-approval' },
        { text: '申领审批', route: '/requisition-approval' },
        { text: '申请管理', route: '/application-management' },
        { text: '发起村务决策', route: '/village-affairs-decision' },
        { text: '发起问卷', route: '/initiate-survey' },
        { text: '进行中问卷', route: '/ongoing-survey' },
        { text: '问卷列表', route: '/survey-list' },
        { text: '我的投票', route: '/my-votes' },
        { text: '问卷管理', route: '/survey-management' },
        { text: '用户管理', route: '/user-management' },
        { text: '权限申请', route: '/permission-approval' },
        { text: '角色管理', route: '/permission-management' },
        { text: '权限管理', route: '/permission-management' },
        { text: '办公投诉建议', route: '/office-complaint-suggestion' },
        { text: '系统故障上报', route: '/system-fault-report' },
        { text: '我的投诉',route: '/complaint-mine'},
        { text: '回复投诉', route: '/complaint-feedback' },
        { text: '投诉管理', route: '/complaint-management' }
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
        filteredButtons = this.buttons.filter(button => {
          return (
            (button.text === '本人户籍信息查询' && this.$store.state.user.roleselect === "3") ||
            (button.text === '迁入申请' && this.$store.state.user.roleselect === "3") ||
            (button.text === '迁出申请' && this.$store.state.user.roleselect === "3") ||
            (button.text === '人口迁入审批' && this.$store.state.user.roleselect === "2")||
            (button.text === '人口迁出审批' && this.$store.state.user.roleselect === "2")||
            (button.text === '户籍管理' && this.$store.state.user.roleselect === "1")||
            (button.text === '名下房屋查询' && this.$store.state.user.roleselect === "3") ||
            (button.text === '房屋登记' && this.$store.state.user.roleselect === "2") ||
            (button.text === '房屋转让' && this.$store.state.user.roleselect === "2")||
            (button.text === '房屋管理' && this.$store.state.user.roleselect === "1")||
            (button.text === '农业种植补贴申请' && this.$store.state.user.roleselect === "3") ||
            (button.text === '教育培训补贴申请' && this.$store.state.user.roleselect === "3") ||
            (button.text === '残疾人特殊补贴申请' && this.$store.state.user.roleselect === "3")||
            (button.text === '申请审批' && this.$store.state.user.roleselect === "2")||
            (button.text === '申请管理' && this.$store.state.user.roleselect === "1")||
            (button.text === '发起村务决策' && this.$store.state.user.roleselect === "2") ||
            (button.text === '发起问卷' && this.$store.state.user.roleselect === "2") ||
            (button.text === '问卷列表' && this.$store.state.user.roleselect === "2") ||
            (button.text === '进行中问卷' && this.$store.state.user.roleselect === "3")||
            (button.text === '我的投票' && this.$store.state.user.roleselect === "3")||
            (button.text === '问卷管理' && this.$store.state.user.roleselect === "1")||
            (button.text === '用户管理' && this.$store.state.user.roleselect === "1") ||
            (button.text === '角色管理' && this.$store.state.user.roleselect === "1")||
            (button.text === '权限管理' && this.$store.state.user.roleselect === "1")||
            (button.text === '办公投诉建议' && this.$store.state.user.roleselect === "3") ||
            (button.text === '系统故障上报' && this.$store.state.user.roleselect === "3") ||
            (button.text === '我的投诉' && this.$store.state.user.roleselect === "3")||
            (button.text === '系统故障上报' && this.$store.state.user.roleselect === "2") ||
            (button.text === '回复投诉' && this.$store.state.user.roleselect === "2")||
            (button.text === '投诉管理' && this.$store.state.user.roleselect === "1")
          );
        });
      } else if (this.selectedMenuIndex === "1") { // 如果选中户籍菜单
        filteredButtons = this.buttons.filter(button => {
          return (
            (button.text === '本人户籍信息查询' && this.$store.state.user.roleselect === "3") ||
            (button.text === '迁入申请' && this.$store.state.user.roleselect === "3") ||
            (button.text === '迁出申请' && this.$store.state.user.roleselect === "3") ||
            (button.text === '人口迁入审批' && this.$store.state.user.roleselect === "2")||
            (button.text === '人口迁出审批' && this.$store.state.user.roleselect === "2")||
            (button.text === '户籍管理' && this.$store.state.user.roleselect === "1")
          );
        });
      } else if (this.selectedMenuIndex === "2") { // 如果选中房屋菜单
        filteredButtons = this.buttons.filter(button => {
          return (
            (button.text === '名下房屋查询' && this.$store.state.user.roleselect === "3") ||
            (button.text === '房屋登记' && this.$store.state.user.roleselect === "2") ||
            (button.text === '房屋转让' && this.$store.state.user.roleselect === "2")||
            (button.text === '房屋管理' && this.$store.state.user.roleselect === "1")
          );
        });
      } else if (this.selectedMenuIndex === "3") { // 如果选中申领菜单
        filteredButtons = this.buttons.filter(button => {
          return (
            (button.text === '农业种植补贴申请' && this.$store.state.user.roleselect === "3") ||
            (button.text === '教育培训补贴申请' && this.$store.state.user.roleselect === "3") ||
            (button.text === '残疾人特殊补贴申请' && this.$store.state.user.roleselect === "3")||
            (button.text === '申请审批' && this.$store.state.user.roleselect === "2")||
            (button.text === '申请管理' && this.$store.state.user.roleselect === "1")
          );
        });
      } else if (this.selectedMenuIndex === "4") { // 如果选中问卷菜单
        filteredButtons = this.buttons.filter(button => {
          return (
            (button.text === '问卷列表' && this.$store.state.user.roleselect === "2") ||
            (button.text === '发起村务决策' && this.$store.state.user.roleselect === "2") ||
            (button.text === '发起问卷' && this.$store.state.user.roleselect === "2") ||
            (button.text === '进行中问卷' && this.$store.state.user.roleselect === "3")||
            (button.text === '我的投票' && this.$store.state.user.roleselect === "3")||
            (button.text === '问卷管理' && this.$store.state.user.roleselect === "1")
          );
        });
      }else if (this.selectedMenuIndex === "5") { // 如果选中用户菜单
        filteredButtons = this.buttons.filter(button => {
          return (
            (button.text === '用户管理' && this.$store.state.user.roleselect === "1") ||
            (button.text === '角色管理' && this.$store.state.user.roleselect === "1")||
            (button.text === '权限管理' && this.$store.state.user.roleselect === "1")
          );
        });
      }else if (this.selectedMenuIndex === "6") { // 如果选中投诉菜单
        filteredButtons = this.buttons.filter(button => {
          return (
            (button.text === '办公投诉建议' && this.$store.state.user.roleselect === "3") ||
            (button.text === '系统故障上报' && this.$store.state.user.roleselect === "3") ||
            (button.text === '我的投诉' && this.$store.state.user.roleselect === "3")||
            (button.text === '我的投诉' && this.$store.state.user.roleselect === "2")||
            (button.text === '系统故障上报' && this.$store.state.user.roleselect === "2") ||
            (button.text === '回复投诉' && this.$store.state.user.roleselect === "2")||
            (button.text === '投诉管理' && this.$store.state.user.roleselect === "1")
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
