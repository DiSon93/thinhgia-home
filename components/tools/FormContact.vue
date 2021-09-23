<template>
    <div class="form_info">
        <div class="form_title">FORM GỬI LIÊN HỆ</div>
        <div class="note">
            * Vui lòng điền đầy đủ thông tin theo yêu cầu để chúng tôi có thể hỗ trợ quý khách
            một cách tốt nhất
        </div>
        <el-form ref="form" :model="form" :rules="rules" v-loading="loading">
            <el-form-item prop="name">
                <el-input
                    placeholder="Họ tên*"
                    v-model="form.name"
                    required="true"
                    prefix-icon="el-icon-user-solid"
                >
                </el-input>
            </el-form-item>
            <el-form-item prop="address">
                <el-input
                    placeholder="Địa chỉ"
                    v-model="form.address"
                    prefix-icon="el-icon-user-solid"
                >
                </el-input>
            </el-form-item>
            <el-form-item prop="phone">
                <el-input
                    placeholder="Số điện thoại*"
                    v-model="form.phone"
                    prefix-icon="el-icon-phone"
                >
                </el-input>
            </el-form-item>
            <el-form-item prop="email">
                <el-input
                    placeholder="Email*"
                    v-model="form.email"
                    prefix-icon="el-icon-message"
                >
                </el-input>
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
                ref="upload"
                class="upload-demo"
                action=""
                drag
                :limit="1"
                :show-file-list="true"
                :auto-upload="false"
                :thumbnail-mode="false"
                :on-exceed="handleExceed"
                :on-change="handleChange"
                :on-remove="handleRemove"
            >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
                <!-- <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div> -->
            </el-upload>
            <el-button size="small" @click="submitForm('form')" class="datngay">Gửi liên hệ</el-button>
            
        </el-form>
    </div>
</template>

<script>
    import { mapState, mapActions } from "vuex";

    export default {
        props: {
			contact_type_id: {
				type: Number,
				default: null,
				required: true
			}
		},
        data() {
            return {
                loading: false,
                form: {
                    contact_type_id: "",
                    name: "",
                    phone: "",
                    email: "",
                    address: "",
                    title: "",
                    textarea: "",
                    files: []
                },
                rules: {
                    name: [
                        { required: true, message: "Vui lòng nhập họ tên", trigger: "blur" },
                        { min: 3, message: "Length should be at least 3", trigger: "blur" },
                    ],
                    phone: [
                        {
                            required: true,
                            message: "Vui lòng nhập số điện thoại",
                            trigger: "change",
                        },
                    ],
                    email: [
                        {
                            required: true,
                            message: "Vui lòng nhập email",
                            trigger: "change",
                        },
                        {
                            type: "email",
                            required: false,
                            message: "Vui lòng nhập đúng định dạng",
                            trigger: "change",
                        },
                    ],
                    title: [
                        { required: true, message: "Vui lòng nhập tiêu đề", trigger: "change" },
                    ],
                    textarea: [
                        { required: true, message: "Vui lòng nhập nội dung", trigger: "change" },
                    ]
                }
            }
        },
        mounted() {
            this.form.contact_type_id = this.contact_type_id;
        },
        methods: {
            ...mapActions('contact', ['postcontact']),
            handleExceed(files, fileList) {
                // this.$message.warning(
                //     `The limit is 3, you selected ${files.length} files this time, add up to ${
                //     files.length + fileList.length
                //     } totally`
                // );
            },
            handleChange(file, fileList) {
                this.addFile(file);
            },
            handleRemove(file, fileList) {
                this.form.files = [];
                if (fileList.length > 0) {
                    fileList.forEach(file => {
                        this.addFile(file);
                    })
                }
            },
            addFile(file) {
                let self = this;
                let reader = new FileReader();
                reader.onload = function(f) {
                    self.form.files.push({
                        filename: file.name,
                        type: file.raw.type,
                        base64: f.target.result
                    });
                };
                reader.readAsDataURL(file.raw);
            },
            submitForm(formName) {
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        this.loading = true;
                        let result = await this.postcontact(this.form);
                        if (result.status != 200) {
                            this.$alert(result.message, 'Lỗi', {
                                type: 'error'
                            });
                        } else {
                            this.$alert('Chúng tôi đã nhận được liên hệ của bạn', 'Thành công', {
                                type: 'success'
                            });
                            this.resetForm();
                        }
                        this.loading = false;
                    } else {
                    
                    }
                })
            },
            resetForm() {
                for (let x in this.form) {
                    if (x == 'files') {
                        this.form[x] = [];
                    } else {
                        this.form[x] = '';
                    }
                }
                this.form.contact_type_id = this.contact_type_id;
                this.$refs.upload.clearFiles();
            }
        }
    }
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
        // width: 100%;
        // background-color: #fb9318;
        // color: #fff;
        // border: none;
        // &:hover {
        //   color: #fff;
        // }
        // &:focus {
        //   color: #fff;
        // }
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
        margin: 5px 0 !important;
        background: rgba(128, 128, 128, 0.555);
        height: 1px;
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
        .btn_group .explain.el-button {
            padding: 6px 8px;
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
