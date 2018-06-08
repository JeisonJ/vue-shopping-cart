<template lang="pug">
  el-menu(theme="dark" :default="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect")
    el-menu-item(index="1") EmployBL Store
    el-submenu(index="2")
      template(slot="title") Dropdown items
      el-menu-item(index="2-1") item one
      el-menu-item(index="2-2") item two
      el-menu-item(index="2-3") item three
    el-menu-item(index="3")
      a(href="#" target="_blank") Link Item
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      
    }
  },
}
</script>

<style scoped>

</style>