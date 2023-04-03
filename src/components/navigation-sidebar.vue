<template>
  <div class="sidebar-menu">
    <el-menu
      class="menu-sidebar"
      mode="vertical"
      background-color="#409EFF"
      text-color="#fff"
      :width="sidebarWidth"
    >
      <el-menu-item class="logo-container" index="/">
        <img src="../assets/logo.png" alt="Logo" />
      </el-menu-item>
      <el-menu-item index="/">
        <img src="../assets/home.png" alt="home page" />
        <span>Главная</span>
      </el-menu-item>
      <el-menu-item index="/schedule">
        <img src="../assets/calendar.png" alt="calendar" />
        <span>Расписание</span>
      </el-menu-item>
      <el-menu-item index="/students">
        <img src="../assets/Boy.png" alt="puppies" />
        <span>Ученики</span>
      </el-menu-item>
      <el-menu-item index="/teachers">
        <img src="../assets/Teacher.png" alt="Teacher" />
        <span>Преподаватели</span>
      </el-menu-item>
      <el-menu-item index="/classes">
        <img src="../assets/Lesson.png" alt="Lessons" />
        <span>Занятия</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "SidebarMenu",
  data() {
    return {
      sidebarWidth: "60px",
    };
  },
};
</script>

<style lang="scss">
.sidebar-menu {
    width: 140px !important;
    background-color: #409EFF;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    color: white;
}

.logo-container {
  padding: 10px !important;
}
.logo-container img {
    width: 80px;
}
.menu {
  flex-grow: 1;
  margin-top: 20px;
}
.menu-sidebar{

  .el-menu{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
  .el-menu-item{
    width: 100%;
  }
}
.el-menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-right: 0;
  height: 80px;
  text-align: center; 
  font-size: 16px;
  font-weight: bold;
  padding-left: 0;
  padding: 5px 20px !important; 
  > * {
    flex: 1;
  }
  &, .el-submenu__title{
    line-height: 20px !important;
  }
}
</style>
