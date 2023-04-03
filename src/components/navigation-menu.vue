<template>
  <el-header class="menu-navbar">
    <div>
      <el-menu
        mode="horizontal"
        background-color="#fff"
        text-color="#333"
        active-text-color="#5b5b5b"
      >
        <el-menu-item index="/">
          <span class="menu-navbar__item">Главная</span>
          <span>/</span>
        </el-menu-item>
        <el-menu-item index="/about">
          <span class="menu-navbar__item">Ученики</span>
          <span>/</span>
        </el-menu-item>
        <el-menu-item index="/contact">
          <span class="menu-navbar__item">Документы</span>
        </el-menu-item>
      </el-menu>
    </div>

    <div>
      <div class="user-info">
        <img class="user-avatar" src="../assets/avatar.png" alt="User Avatar" />
        <span class="user-name">{{ person.username }}</span>
        <i class="el-icon-setting"></i>
        <i class="el-icon-switch-button" @click="logout"></i>
      </div>
    </div>
  </el-header>
</template>

<script>
export default {
  name: "navigation-menu",
  data() {
    return {
      person: {
        username: "John Doe",
      },
    };
  },
  methods: {
    logout() {
      // Logout user here
    },
  },
};
</script>
<style lang="scss">
.menu-navbar{
    .el-menu-item {
    flex-direction: row;
    gap: 30px;
    justify-content: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-weight: 300;
    color: #0D2839;
    }
    .el-menu-item.is-active {
    color: #86939C;
    }
    .el-menu-item:hover{
  background-color: transparent !important;
    }
&__item{
  padding: 5px;
}
&__item:hover{
  color: #458AFB;
}
  }
</style>
<style scoped>
i{
  cursor: pointer;
}
.menu-navbar {
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 0;
position: fixed;
    width: 100%;
    padding: 0 0px 0 150px;
    z-index: 22;
    height: 60px;
    overflow: hidden;
    background: white;
    box-shadow: 0px 1px 2px rgb(28 45 65 / 25%);
}
.user-info {
  margin-right: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.user-avatar {
  border-radius: 50%;
  margin-right: 10px;
  width: 30px;
  height: 30px;
}
.user-name {
  margin-right: 10px;
}
.settings-icon {
  margin-right: 10px;
  cursor: pointer;
}
.logout-icon {
  cursor: pointer;
}
</style>
