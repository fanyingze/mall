<template>
  <div id="category">
    <!-- navbar部分 -->
    <nav-bar id="navbar"><div slot="center">商品分类</div></nav-bar>

    <div class="content">
      <!-- 左侧导航栏 -->
      <scroll class="scroll1">
        <category-list
          class="category-list"
          :categories="categories"
          @listChange="listChange"
        ></category-list>
      </scroll>
      <!-- 右侧内容区域 -->
      <scroll class="scroll2" ref="scroll">
        <div class="scroll2-content">
          <category-data
            class="data"
            :subCategoryData="showSubCategoryData"
            :currentIndex="currentIndex"
          ></category-data>

          <TabControl
            class="tabcontrol"
            :titles="['综合', '新品', '销量']"
            @tabClick="tabClick"
          ></TabControl>
          <GoodList :goods="showRecommend" class="recommend"></GoodList>
        </div>
      </scroll>
    </div>

    <div class="wrapper">
      <ul class="content"></ul>
    </div>
  </div>
</template>

<style scoped>
#navbar {
  width: 100%;
  font-weight: 700;
  color: white;
  background: var(--color-tint);
  position: fixed;
  top: 0;
}
.category-list {
  width: 100px;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  display: flex;
}
.scroll2 {
  height: 100%;
  width: calc(100vw - 100px);
}
.data {
  width: 100%;
}
</style>






<script>
import scroll from "@/components/common/scroll/scroll.vue";
import NavBar from "@/components/common/navbar/navBar.vue";

import categoryList from "./categorychild/categoryList";
import GoodList from "@/components/content/goods/GoodList.vue";
import TabControl from "@/components/content/tabControl/TabControl.vue";

import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "@/network/category";
import { itemListenerMixin } from "@/common/mixin.js";
import categoryData from "./categorychild/categoryData.vue";

export default {
  name: "category",
  data() {
    return {
      categories: [],
      currentIndex: -1,
      categoryData: {},
      maitKey: -1,
      categoriesDetail: [],
      subCategoryData: {},
      currentType: "pop",
      tabControlIndex: 0,
    };
  },
  mixins: [itemListenerMixin],
  components: {
    NavBar,
    scroll,
    categoryList,
    categoryData,
    GoodList,
    TabControl,
  },
  created() {
    this._getCategory();
  },
  computed: {
    showSubCategoryData() {
      if (this.currentIndex === -1) return {};
      return this.categoryData[this.currentIndex].subCategoryData;
    },
    showRecommend() {
      if (this.currentIndex === -1) return {};
      return this.categoryData[this.currentIndex].categoriesDetail[
        this.currentType
      ];
    },
  },
  methods: {
    // 切换推荐栏
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this._getRecommend(this.currentIndex);
    },
    // 切换分类
    listChange(index) {
      this._getSubcategory(index);
    },
    // 获取分类的详情数据
    _getCategory() {
      getCategory().then((res) => {
        this.categories = res.data.category.list;
        // 初始化每个分类的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subCategoryData: {},
            categoriesDetail: {
              pop: [],
              new: [],
              sell: [],
            },
          };
        }
        this._getSubcategory(0);
      });
    },
    // 获取分类数据
    _getSubcategory(index) {
      this.currentIndex = index;
      this.maitKey = this.categories[index].maitKey;
      getSubcategory(this.maitKey).then((res) => {
        this.categoryData[index].subCategoryData = res.data;
        this.categoryData = { ...this.categoryData };
        // 请求接下来的推荐数据
        this._getRecommend("pop");
        this._getRecommend("sell");
        this._getRecommend("new");
      });
    },
    // 获取推荐数据
    _getRecommend(type) {
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      getCategoryDetail(miniWallkey, type).then((res) => {
        this.categoryData[this.currentIndex].categoriesDetail[type] = res;
        this.categoryData = { ...this.categoryData };
      });
    },
  },
};
</script>



