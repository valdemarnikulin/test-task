<template>
  <div class="filters-table">
    <div class="filters-table__wrapper">
      <div class="filters-table__item">
        <label class="filters-table__title" for="type-filter"
          >Тип документа</label
        >
        <select id="type-filter" v-model="selectedType">
          <option value="">Не выбрано</option>
          <option v-for="type in types" :key="type" :value="type">
            {{ type }}
          </option>
        </select>
      </div>
      <div class="filters-table__item">
        <label class="filters-table__title" for="status-filter">Статус</label>
        <select id="status-filter" v-model="selectedStatus">
          <option value="">Не выбрано</option>
          <option v-for="status in statuses" :key="status" :value="status">
            {{ status }}
          </option>
        </select>
      </div>
      <div class="filters-table__item">
        <label class="filters-table__title" for="date-filter"
          >Сортировать по</label
        >
        <select id="status-filter" v-model="selectedDate">
          <option value="1">Не выбрано</option>
          <option value="2">По дате</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    documents: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      types: [...new Set(this.documents.map((doc) => doc.type_document))],
      statuses: [...new Set(this.documents.map((doc) => doc.status))],
      selectedType: "",
      selectedStatus: "",
      selectedDate: "1",
    };
  },
  watch: {
    selectedDate() {
      this.$emit("selectingFilters", {
        type: "date_from",
        value: this.selectedDate,
      });
    },
    selectedStatus() {
      this.$emit("selectingFilters", {
        type: "status",
        value: this.selectedStatus,
      });
    },
    selectedType() {
      this.$emit("selectingFilters", {
        type: "title",
        value: this.selectedType,
      });
    },
    documents() {
      this.types = [...new Set(this.documents.map((doc) => doc.type_document))];
      this.statuses = [...new Set(this.documents.map((doc) => doc.status))];
    },
  },
  computed: {
    filteredDocuments() {
      return this.documents.filter((doc) => {
        let typeMatch = true;
        let statusMatch = true;
        let dateMatch = true;
        if (this.selectedType) {
          typeMatch = doc.type_document === this.selectedType;
        }
        if (this.selectedStatus) {
          statusMatch = doc.status === this.selectedStatus;
        }
        if (this.selectedDate) {
          const selectedDate = new Date(this.selectedDate);
          const fromDate = new Date(doc.date_from);
          const toDate = new Date(doc.date_to);
          dateMatch = selectedDate >= fromDate && selectedDate <= toDate;
        }
        return typeMatch && statusMatch && dateMatch;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.filters-table {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    margin-top: 60px;
    gap: 60px;
  }
  &__title {
    font-size: 14px;
    line-height: 17px;
    color: #86939C;
    margin-bottom: 8px;
  }
  &__item {
    display: flex;
    flex-direction: column;
    input, select {
      width: 100%;
      border: none;
      font-size: 14px;
      line-height: 17px;
      color: #458AFB;
      background: #F2F5F8;
      margin-bottom: 8px;
    }
    input,select:focus-visible {
      outline: none;
    }
  }
}
</style>
