<template>
  <div>
    <el-footer>Copyright © {{currentYear}} Blockcerts Signit. All rights reserved.</el-footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  }
};
</script>

<style scoped>
/* .el-footer{
    background-color: #d6e1f0;
} */
</style>
