<template>
  <div class="file-upload">
    <div class="upload-icon">
      <i v-if="!file" class="el-icon-plus"></i>
    </div>
    <div v-if="!file" class="upload-text">
      <div class="upload-label">{{ label }}</div>
      <div class="upload-description">{{ description }}</div>
    </div>
    <div v-if="file">
      <div class="upload__file">
        <div class="upload-label">
          {{ file ? file.name : "-" }}
        </div>
        <i @click="deleteFile" class="el-icon-close"></i>
      </div>
      <div class="upload-description">{{ file ? file.size : "-" }} bytes</div>
    </div>
    <input
      @dragover.prevent
      @drop="handleDrop"
      ref="input"
      type="file"
      class="file-input"
      @change="handleFileChange"
    />
  </div>
</template>

<script>
export default {
  name: "FileUpload",
  props: {
    label: {
      type: String,
      default: "Загрузить файл",
    },
    description: {
      type: String,
      default: "Выберите файл или перетащите его сюда",
    },
  },
  data() {
    return {
      file: null,
    };
  },
  methods: {
    handleFileChange(event) {
      this.file = event.target.files[0];
      this.$emit("file-changed", this.file);
    },
    handleDrop(event) {
      // prevent the browser from opening the file in a new tab
      event.preventDefault();
      // access the file from the drop event
      this.file = event.dataTransfer.files[0];
    },
    deleteFile() {
      this.file = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.file-upload {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #B9C2C9;
  border-radius: 8px;
  background-color: #F2F5F8;
  cursor: pointer;
  position: relative;
  padding: 25px;
}
.upload {
  &__file{
    display: flex;
    align-items: center;
    gap: 20px;
    i{
    z-index: 10;
    }
  }
}
.upload-icon i {
  font-size: 40px;
  color: #c2c2c2;
  cursor: pointer;
}

.upload-text {
  text-align: center;
}

.upload-label {
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 10px;
}

.upload-description {
  font-size: 14px;
  color: #999999;
}

.file-input {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>
