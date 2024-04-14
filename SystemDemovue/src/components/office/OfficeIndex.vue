<template>
  <el-container>
    <el-aside style="width: 200px;margin-top: 20px">
      <switch></switch>
      <SideMenu @menuSelected="handleMenuSelected" />
    </el-aside>
    <el-main>
      <office-applications
        class="office-applications-area"
        :selectedMenuIndex="selectedMenuIndex"
      ></office-applications>
    </el-main>
  </el-container>
</template>

<script>
import SideMenu from './SideMenu.vue';
import OfficeApplications from "./OfficeApplications";

export default {
  name: "OfficeIndex",
  components: {
    OfficeApplications,
    SideMenu
  },
  data() {
    return {
      selectedMenuIndex: 0 // 初始选中的菜单项索引
    };
  },
  methods: {
    handleMenuSelected(index) {
      // 当菜单项被选中时，更新选中的菜单项索引
      this.selectedMenuIndex = index;
    }
  }
};
</script>

<style scoped>
.office-applications-area {
  width: 990px;
  margin-left: auto;
  margin-right: auto;
}
</style>
