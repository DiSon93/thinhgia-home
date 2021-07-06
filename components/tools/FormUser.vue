<template>
  <div class="form_info">
    <div class="form_title">Đăng ký xem BĐS</div>
    <div class="note">
      * Vui lòng điền đầy đủ thông tin theo yêu cầu để chúng tôi có thể hỗ trợ quý khách
      một cách tốt nhất
    </div>
    <el-form ref="form" :model="form" :rules="rules">
      <el-form-item prop="name">
        <el-input
          placeholder="Họ tên*"
          v-model="form.name"
          required="true"
          prefix-icon="el-icon-user-solid"
        ></el-input>
      </el-form-item>
      <el-form-item prop="phone">
        <el-input
          placeholder="Số điện thoại*"
          v-model="form.phone"
          prefix-icon="el-icon-phone"
        ></el-input>
      </el-form-item>
      <el-form-item prop="email">
        <el-input
          placeholder="Email*"
          v-model="form.email"
          prefix-icon="el-icon-message"
        ></el-input>
      </el-form-item>
      <el-form-item prop="lich">
        <el-input
          placeholder="01/07/2021 10:15"
          v-model="form.lich"
          prefix-icon="el-icon-date"
        ></el-input>
      </el-form-item>
      <!-- <el-form-item prop="title">
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
      </el-upload> -->
      <el-button size="small" @click="submitForm('form')" class="datngay"
        >ĐẶT NGAY</el-button
      >
      <div class="and">hoặc</div>
      <el-divider style="margin: 0"></el-divider>
      <div class="btn_group">
        <el-button type="danger" plain class="explain">Tư vấn thêm</el-button>
        <el-button type="danger" plain class="explain">Gọi lại cho tôi</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        lich: "",
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
        phone: [
          {
            type: "number",
            required: true,
            message: "Vui lòng gõ số điện thoại",
            trigger: "change",
          },
        ],
        email: [
          {
            required: true,
            message: "Vui lòng gõ email",
            trigger: "change",
          },
          {
            type: "email",
            required: false,
            message: "Vui lòng gõ đúng định dạng",
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
  background-color: #ffeac2;
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

.datngay.el-button {
  width: 100%;
  background-color: #fb9318;
  color: #fff;
  border: none;
  &:hover {
    color: #fff;
  }
  &:focus {
    color: #fff;
  }
}
.and {
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
}
.btn_group {
  display: flex;
  justify-content: space-around;
  .explain.el-button {
    background-color: transparent;
    margin-top: 0;
    &:hover {
      color: #fe6262;
    }
    &:focus {
      color: #fe6262;
    }
  }
}
.el-divider--horizontal {
  margin: 5px 0;
  height: 2px;
}
@media screen and (max-width: 1080px) {
  .form_info {
    .form_title {
      font-size: 16px;
    }
    .note {
      font-size: 14px;
    }
  }
}
@media screen and (max-width: 600px) {
  .form_info {
    .note {
      font-size: 12px;
    }
  }
}
</style>
