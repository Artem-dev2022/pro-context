<template>
  <div class="main-list">
    <LeftList v-for="list of this.$store.state.lists" :listId="list.id"/>
  </div>
  
  <div class="main-list">
    <RightList v-for="list of this.$store.state.lists" :listId="list.id"/>
  </div>
</template>

<script>
import LeftList from './components/LeftList.vue'
import RightList from './components/RightList.vue'

export default {
  components: {LeftList, RightList}
}
</script>

<style scoped>
.main-list {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 600px;
  border: 1px solid black;
}
</style>
