<template>
  <div>
    <div class="document">
      <div class="document__wrapper">
        <div class="document__info">
          <span class="document__title">{{ document.title }} </span>
          <span class="document__title">{{
            document.document_number ? `№${document.document_number}` : ""
          }}</span>
          <div class="document__status">
            <div v-if="document.status" class="status-item">
              <div
                class="status-item-value"
                :class="{
                  'status-item-reject': document.status === 'Расторгнут',
                }"
              ></div>
              <div class="status-item-title">{{ document.status }}</div>
            </div>
          </div>
          <div class="document__date">
            {{ document.date_from }}-{{ document.date_to }}
          </div>
          <div class="document__actions">
            <div class="document__actions-item">
              <i class="el-icon-printer"></i>
            </div>
            <div class="document__actions-item">
              <i class="el-icon-edit"></i>
            </div>
            <div class="document__actions-item">
              <i class="el-icon-delete" @click="deleteItem"></i>
            </div>
          </div>
        </div>
        <div class="document__image">
          <div class="document__image-wrapper">
            <img
              :src="require(`../assets/${document.icon}`)"
              class="document__image-icon"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    document: {
      type: Object,
      default: () => {},
    },
  },
  name: "document-item",
  methods: {
    deleteItem() {
      this.$emit("deleteItem", this.document.id);
    },
  },
};
</script>

<style lang="scss">
.document{
    &__wrapper{
    max-width: 400px;
    box-shadow: 2px 3px 10px grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border: 1px solid #E5E5E5;
    border-radius: 10px;
    margin-bottom: 20px;
    background-color: white;
}
&__title{
    font-weight: 700;
font-size: 24px;
line-height: 29px;
}
&__status{
    margin-top: 20px;
min-height: 22px;
}
&__date{
    margin-top: 10px;
    font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #86939C;
}
&__actions{
    margin-top: 20px;
    display: flex;
    gap: 20px;
}
&__image{
    &-wrapper{
        width: 115px;
        height: 115px;
        background-color: #F2F5F8;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
}
</style>
