<template>
  <div class="data">
    <div class="top-content">
      <div
        v-for="(item, index) in subCategoryData.list"
        :key="index"
        class="item">
        <a :href="item.link" class="item-a">
          <img :src="item.image" alt="" class="item-img"  />
          <span class="item-title">{{item.title}}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "categoryData",
  components: {
    scroll
  },
  props: {
    subCategoryData: {
      type: Object,
      default() {
        return {};
      },
    },
    currentIndex: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      title: [],
    };
  }
};
</script>

<style scoped>
.data {
  width: calc(100vw - 110px);
  padding: 10px;
  /* background: red; */
}
.top-content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.item {
  display: block;
  width: 81px;
  text-align: center;
  margin-bottom: 10px;
}
.item img {
  width: 81px;
}
</style>
