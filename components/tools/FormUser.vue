<template>
  <div class="form_info">
    <div class="form_title">Ký gửi Bất động sản</div>
    <div class="note">
      * Vui lòng điền đầy đủ thông tin theo yêu cầu để chúng tôi có thể hỗ trợ quý khách
      một cách tốt nhất
    </div>
    <el-form ref="form" :model="form" :rules="rules">
      <el-form-item prop="name">
        <el-input placeholder="Họ tên*" v-model="form.name" required="true"></el-input>
      </el-form-item>
      <el-form-item prop="address">
        <el-input placeholder="Địa chỉ" v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item prop="phone">
        <el-input placeholder="Số điện thoại*" v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item prop="email">
        <el-input placeholder="Email" v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item prop="title">
        <el-input placeholder="Tiêu đề*" v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item prop="textarea">
        <el-input
          type="textarea"
          :rows="3"
          placeholder="Nội dung*"
          v-model="form.textarea"
        >
        </el-input>
      </el-form-item>

      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList"
      >
        <el-button size="small"> <i class="el-icon-upload"></i> File đính kèm</el-button>
        <div slot="tip" class="el-upload__tip">
          jpg/png files with a size less than 500kb
        </div>
      </el-upload>
      <el-button size="small" @click="submitForm('form')">Gửi liên hệ</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        address: "",
        phone: "",
        email: "",
        title: "",
        textarea: "",
      },

      fileList: [
        {
          name: "caykhe.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          name: "ngoctuoc.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
      rules: {
        name: [
          { required: true, message: "Vui lòng gõ họ tên", trigger: "blur" },
          { min: 3, message: "Length should be at least 3", trigger: "blur" },
        ],
        address: [{ required: true, message: "Vui lòng gõ địa chỉ", trigger: "change" }],
        phone: [
          {
            type: "number",
            required: true,
            message: "Vui lòng gõ số điện thoại",
            trigger: "change",
          },
        ],
        title: [
          {
            required: true,
            required: true,
            message: "Vui lòng gõ tiêu đề",
            trigger: "change",
          },
        ],
        email: [
          {
            type: "email",
            message: "Please select at least one activity type",
            trigger: "change",
          },
        ],
        textarea: [
          { required: true, message: "Vui lòng gõ nội dung", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `The limit is 3, you selected ${files.length} files this time, add up to ${
          files.length + fileList.length
        } totally`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`Cancel the transfert of ${file.name} ?`);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
.form_info {
  margin-top: 10px;
  padding: 20px 20px;
  background-color: $color-orange-light;
  border-radius: 4px;
  .form_title {
    text-align: center;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 10px;
  }
  .note {
    margin-bottom: 10px;
  }
  // .el-input {
  //   margin-bottom: -25px;
  // }
  .el-form-item {
    margin-bottom: 20px;
  }
  .el-button {
    margin-top: 10px;
    &:hover {
      color: $color-orange;
    }
    &:focus {
      color: $color-orange;
    }
    border-radius: 4px;
  }
}
</style>
