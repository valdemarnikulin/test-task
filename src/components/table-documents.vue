<template>
  <div>
    <div class="table-documents">
      <div class="table-documents__header">
        <filters-table
          @selectingFilters="selectingFilters"
          :documents="documents"
        ></filters-table>
        <button
          class="create-modal__button create-modal__button-create table-documents__button"
          @click="visibleModal = true"
        >
          добавить документ
        </button>
      </div>
      <div class="table-documents__body">
        <el-row
          class="table-documents__body-wrapper"
          type="flex"
          justify="start"
          align="middle"
          :gutter="24"
        >
          <el-col v-for="document in documents" :key="document.id" :span="6">
            <document-item
              @deleteItem="deleteItem"
              :document="document"
            ></document-item>
          </el-col>
        </el-row>
      </div>
    </div>
    <create-modal
      @close="visibleModal = false"
      @addDocument="addDocument"
      :visible="visibleModal"
    >
    </create-modal>
  </div>
</template>

<script>
import createModal from "./create-modal.vue";
import DocumentItem from "./document-item.vue";
import FiltersTable from "./filters-table.vue";
export default {
  components: { createModal, DocumentItem, FiltersTable },
  data() {
    return {
      visibleModal: false,
      documents: [
        {
          title: "Договор",
          document_number: "001",
          status: "Заключен",
          date_from: "04.07.2021",
          date_to: "04.07.2022",
          icon: "pdf.png",
          type_document: "Договор",
          id: "1",
        },
        {
          title: "Договор",
          document_number: "002",
          status: "Заключен",
          date_from: "04.07.2021",
          date_to: "04.07.2022",
          icon: "pdf.png",
          type_document: "Договор",
          id: "2",
        },
        {
          title: "Договор",
          document_number: "003",
          status: "Заключен",
          date_from: "04.07.2021",
          date_to: "04.07.2022",
          icon: "pdf.png",
          type_document: "Договор",
          id: "3",
        },
        {
          title: "Договор",
          document_number: "004",
          status: "Расторгнут",
          date_from: "04.07.2021",
          date_to: "04.07.2022",
          icon: "jpg.png",
          type_document: "Договор",
          id: "4",
        },
        {
          title: "Справка",
          document_number: "",
          date_from: "04.07.2021",
          date_to: "04.07.2022",
          icon: "document.png",
          type_document: "Справка",
          id: "5",
        },
        {
          title: "Анкета",
          document_number: "",
          date_from: "03.07.2021",
          date_to: "",
          icon: "xls.png",
          type_document: "Другое",
          id: "6",
        },
      ],
      cashDocuments: [],
    };
  },
  mounted() {
    // for reset filters like backend api
    this.cashDocuments = [...this.documents];
  },

  methods: {
    selectingFilters(item) {
      if (item.type === "date_from") {
        this.documents = this.documents.sort(
          (a, b) => new Date(a.date_from) - new Date(b.date_from)
        );
      } else if (item.value === "") {
        this.documents = this.cashDocuments;
      } else {
        this.documents = this.documents.filter(
          (document) => document[item.type] === item.value
        );
      }
    },
    addDocument(document) {
      this.documents.push(document);
    },
    deleteItem(id) {
      this.documents = this.documents.filter((document) => document.id !== id);
    },
  },
  computed: {
    filteredDocuments() {
      return this.documents;
    },
  },
};
</script>

<style lang="scss">
.table-documents {
    &__button{
         text-transform: uppercase;
        cursor: pointer;
    }
    &__header {
        padding: 20px 0;
        border-bottom: 1px solid #E5E5E5;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .table-documents__header-title {
            font-size: 18px;
            line-height: 22px;
            color: #000000;
        }
        .table-documents__header-action {
            display: flex;
            align-items: center;
            .table-documents__header-action-item {
                margin-right: 20px;
                cursor: pointer;
                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
    &__body {
        padding: 20px 0;
        &-wrapper {
            flex-wrap: wrap;
        }
    }
}
</style>
