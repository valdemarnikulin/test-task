<template>
  <div class="create-modal">
    <el-dialog
      title="Добавить документ"
      :visible.sync="dialogVisible"
      :close-on-click-modal="true"
      :close-on-press-escape="true"
      :show-close="true"
      class="upload-file-dialog"
      :width="'600px'"
    >
      <div class="upload-file-dailog__wrapper">
        <el-form
          ref="form"
          :model="form"
          :rules="rules"
          label-position="left"
          label-width="100px"
        >
          <el-form-item prop="type_document">
            <div class="create-modal__radio-wrapper">
              <span class="text__required">Тип документа:</span>
              <el-radio-group
                class="create-modal__radio-group"
                v-model="form.type_document"
              >
                <el-radio label="contract">Договор</el-radio>
                <el-radio label="certificate">Справка</el-radio>
                <el-radio label="other">Другое</el-radio>
              </el-radio-group>
            </div>
          </el-form-item>
          <el-form-item prop="title">
            <el-input
              class="create-modal__document-title"
              placeholder="Название документа *"
              v-model="form.title"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              placeholder="Номер"
              v-model="form.document_number"
            ></el-input>
          </el-form-item>
          <el-form-item label="Действует с:">
            <el-date-picker
              class="upload-file-dialog__date-picker"
              v-model="form.dateRange"
              type="daterange"
              range-separator="по:"
              start-placeholder="Не выбрано"
              end-placeholder="Не выбрано"
              :default-value="new Date()"
              :picker-options="{ firstDayOfWeek: 1, lang: 'ru' }"
            ></el-date-picker>
          </el-form-item>
          <el-form-item class="create-modal__checkbox-wrapper">
            <el-checkbox v-model="form.notify"></el-checkbox>
            <span class="create-modal__checkbox-title"
              >Оповещать об окончании</span
            >
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="form.createTask"></el-checkbox>
            <span class="create-modal__checkbox-title"
              >Создавать задачу при окончании</span
            >
          </el-form-item>
          <el-form-item>
            <upload-file @file-changed="createFile"></upload-file>
          </el-form-item>
        </el-form>
        <div slot="footer">
          <div class="create-modal__buttons-wrapper">
            <button
              class="create-modal__button create-modal__button-create"
              @click="handleSubmit"
            >
              ДОБАВИТЬ ДОКУМЕНТ
            </button>
            <button
              class="create-modal__button create-modal__button-cancel"
              @click="handleCancel"
            >
              ОТМЕНА
            </button>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import uploadFile from "./uploadFile.vue";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

export default {
  components: { uploadFile },
  props: {
    visible: {
      type: Boolean,
    },
  },
  watch: {
    visible: function (val) {
      this.dialogVisible = val;
    },
  },
  data() {
    return {
      dialogVisible: false,
      form: {
        type_document: "contract",
        title: "",
        document_number: "",
        dateRange: [],
        notify: false,
        createTask: false,
        file: null,
        icon: "",
        id: uuidv4(),
      },
      locale: require("element-ui/lib/locale/lang/ru-RU"),
      rules: {
        type_document: [
          {
            required: true,
            message: "Пожалуйста выберите тип документа",
            trigger: "change",
          },
        ],
        title: [
          {
            required: true,
            message: "Пожалуйста выберите имя документа",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    createFile(file) {
      this.form.icon = `${file.name.slice(file.name.lastIndexOf(".") + 1)}.png`;
      this.form.file = file;
    },
    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.addDocument(this.form);
          this.$emit("close", false);
        }
      });
    },
    handleCancel() {
      this.$emit("close", false);
    },
    clearForm() {
      this.form.type_document = "contract";
      this.form.title = "";
      this.form.document_number = "";
      this.form.dateRange = [];
      this.form.notify = false;
      this.form.createTask = false;
      this.form.file = null;
      this.form.icon = "";
      this.form.id = uuidv4();
    },
    addDocument(document) {
      const form = { ...document };
      form.date_from = moment(form.dateRange[0]).format("DD.MM.YYYY");
      form.date_to = moment(form.dateRange[1]).format("DD.MM.YYYY");
      delete form.dateRange;
      this.$emit("addDocument", form);
      this.clearForm();
    },
  },
};
</script>

<style lang="scss">
.create-modal {
    &__checkbox-wrapper {
        margin-bottom: 0 !important;
    }
    &__buttons-wrapper {
        display: flex;
        justify-content: center;
        gap: 20px;
    }
    &__button{
        max-width: 220px;
        width: 100%;
        border-radius: 10px;
            color: #ffffff;
            font-weight: 800;
            font-size: 16px;
            line-height: 19px;
            padding: 17px 8px;
            border: none;
        &-create{
            background-color: #FFBD27;
        }
        &-cancel{
background-color: #D5DADF;
    }
    }
    &__checkbox-title {
        margin-left: 10px;
        font-size: 18px;
        line-height: 22px;
    }
    .el-radio__input.is-checked .el-radio__inner {
    border-color: #409EFF;
    background: #ffffff;
}
.el-radio__inner::after {
    width: 8px;
    height: 8px;
    background-color:#409EFF;
}

    .el-dialog{
        border-radius: 10px !important;
        &__body {
        padding: 30px !important;
    }
    &__header {
        padding: 20px !important;
    }
    &__title {
        font-weight: 700;
    font-size: 36px !important;
    line-height: 43px;
    
    color: #458AFB !important;
    }
    &__close {
    font-size: 30px;
    font-weight: 700;
}
    }
    &__document-title{
        .el-input__inner{
            padding: 0 !important;
        }
input::placeholder::before {
  content: "*";
  color: red;
}
    }
&__radio-group {
    display: flex !important;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    // width: 100%;  
    }
    &__radio-wrapper {
        display: flex;
        align-items: baseline;
        gap: 10px;
    }
}
.upload-file-dialog {
    &__wrapper {
    padding: 30px;
    }
    .el-input__inner {
    border: none;
    border-bottom: 1px solid gray;
    border-radius: 0;
        }
        &__date-picker {
                border-bottom: none !important;
        }
        .el-form-item__content{
            margin-left: 0 !important;
        }
    }
    .el-date-editor .el-range-separator{
        display: contents !important;
    }
</style>
