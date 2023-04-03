<template>
  <div class="app-wrapper">
    <navigation-menu></navigation-menu>
    <navigation-sidebar></navigation-sidebar>
    <section class="app-container">
      <card-person></card-person>
      <table-documents></table-documents>
      </section>
  </div>
</template>

<script>
import CardPerson from '@/components/card-person.vue';
import NavigationMenu from '../components/navigation-menu.vue';
import NavigationSidebar from '../components/navigation-sidebar.vue';
import TableDocuments from '@/components/table-documents.vue';
export default {
name: 'app-main',
components: {
    NavigationMenu,
    NavigationSidebar,
    CardPerson,
    TableDocuments,
},
};
</script>

<style>
.app-wrapper {
  position: relative;
}
.app-container {
    margin-left: 140px;
    padding: 80px 20px 20px 20px;
}
</style>