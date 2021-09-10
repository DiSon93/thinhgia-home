<template>
    <v-lazy
        v-model="isActive"
        :options="{ threshold: 0.5 }"
        min-height="200"
        transition="fade-transition"
  >
        <div>
            <div class="introduce">
                <div class="introduce_title">CÔNG TY CỔ PHẦN DỊCH VỤ BẤT ĐỘNG SẢN VIỆT</div>
                <el-divider></el-divider>
                <div class="content">
                <span class="highlight">Trụ sở:</span> 90 phường Thắng Tam, thành phố Vũng Tàu
                </div>
                <div class="content">
                <span class="highlight">Điện thoại:</span>0909522686 (24/7)
                </div>

                <div class="content">
                <span class="highlight">Email:</span> khobatdongsanviet@gmail.com
                </div>
                <div class="content">
                <span class="highlight">Website:</span> khobatdongsanviet.com
                </div>
                <div class="introduce_title">DỊCH VỤ KHÁCH HÀNG</div>
                <el-divider></el-divider>
                <div class="content">
                <span class="highlight">Điện thoại:</span> 0909522686 (24/7)
                </div>
                <div class="content">
                <span class="highlight">Thời gian làm việc:</span> T2-T6: 8h-18h, T7: 8h-16h
                </div>
            </div>
            <div class="footer">
                <Services />
                <Footer />
            </div>
        </div>
  </v-lazy>
</template>

<script>
    import Services from "@component/main/Services";
    import Footer from "@component/main/Footer";

    export default {
        components: {
            Services,
            Footer
        },
        data() {
            return {
                isActive: false
            }
        },
        mounted() {
            console.log(this.$route)
            let params = this.$route.params.slug;
            if (params != undefined) {
                params = params.split('-');
                let type_id = params[params.length - 1];
                
            }
        },
    }
</script>

<style lang="scss" scoped>
    .introduce {
        padding: 0 10%;
        margin-top: 40px;
        .introduce_title {
            margin-top: 30px;
            font-weight: bold;
            font-size: 24px;
            line-height: 24px;
        }
        .highlight {
            font-weight: 500;
        }
        .content {
            margin: 15px 0;
        }
    }
</style>