<template>
  <v-lazy
    v-model="isActive"
    :options="{
      threshold: 0.5,
    }"
    min-height="200"
    transition="fade-transition"
  >
    <div>
      <div class="blog">
        <div class="search">Trang chủ <i class="el-icon-arrow-right"></i> Blog</div>
        <div class="blog_title">TIN TỨC NỔI BẬT</div>
        <v-row class="specail_news">
          <v-col cols="8">
            <div class="blog_news">
              <v-row>
                <v-col cols="6">
                  <router-link :to="`/blog/news/nhacap3lagi`"
                    ><img src="@image/layouts/blogtintuc.svg" alt=""
                  /></router-link>
                </v-col>
                <v-col cols="6">
                  <NuxtLink :to="`/blog/news/nhacap3lagi`" class="tintuc">
                    Nhà cấp 3 là gì? Chiêm ngưỡng mẫu nhà cấp 3 đẹp
                  </NuxtLink>
                  <div class="content">
                    Nhà cấp 3 là loại nhà chịu lực rất tốt, đây cũng là sự lựa chọn hàng
                    đầu của đa số gia đình hiện nay. Để hiểu rõ thêm loại công trình
                    này, tham khảo ngay bài viết viết dưới đây của Bất Động Sản Việt!
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="3">
                  <img src="@image/layouts/blog_01.svg" alt="" />
                  <div>Trước khi mua căn hộ trả góp cần lưu ý những gì?</div>
                </v-col>
                <v-col cols="3">
                  <img src="@image/layouts/blog_02.svg" alt="" />
                  <div>Trước khi mua căn hộ trả góp cần lưu ý những gì?</div>
                </v-col>
                <v-col cols="3">
                  <img src="@image/layouts/blog_03.svg" alt="" />
                  <div>
                    Căn hộ Studio là gì? Tất cả những điều cần biết về căn hộ Studio
                  </div>
                </v-col>
                <v-col cols="3">
                  <img src="@image/layouts/blog_04.svg" alt="" />
                  <div>
                    Trồng cây phong thủy trong nhà muốn tài lộc chớ quên những lưu...
                  </div>
                </v-col>
              </v-row>
            </div>
            <div class="architecture">
              <div>KIẾN TRÚC NHÀ ĐẸP</div>
              <v-btn>Xem Tất cả >></v-btn>
            </div>
            <div class="blog_news">
              <v-row>
                <v-col cols="6">
                  <router-link :to="`/blog/news/14ytuonglamdepchaucanh`"
                    ><img src="@image/layouts/architecture_01.svg" alt=""
                  /></router-link>
                </v-col>
                <v-col cols="6">
                  <NuxtLink :to="`/blog/news/14ytuonglamdepchaucanh`" class="tintuc"
                    >14 ý tưởng dễ làm giúp bạn trang trí chậu cảnh</NuxtLink
                  >
                  <div class="content">
                    Trang trí chậu cảnh sao cho đẹp mắt, ấn tượng là một trong những cách
                    khiến ngôi nhà nhiều mảng xanh của bạn sinh động hơn.
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Những mẫu nhà cấp 4 có gác lửng 4x16m đẹp nhất chỉ với 250 triệu đồng
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Diện tích sàn là gì? Cách tính diện tích sàn chuẩn nhất 2020
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Nhà lắp ghép là gì? giá bao nhiêu tiền 1m2? Chi phí xây nhà ghép giá
                    rẻ
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Mẫu lan can ban công xây gạch giá rẻ, ấn tượng nhất 2021
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Top 10 các tòa nhà cao nhất thế giới 2020
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Nhà lắp ghép là gì? giá bao nhiêu tiền 1m2? Chi phí xây nhà ghép giá
                    rẻ
                  </div>
                </v-col>
              </v-row>
            </div>
            <div class="feature">
              <div>NỘI NGOẠI THẤT</div>
              <v-btn>Xem Tất cả >></v-btn>
            </div>
            <div class="blog_news">
              <v-row>
                <v-col cols="6">
                  <img src="@image/layouts/feature.svg" alt="" />
                </v-col>
                <v-col cols="6">
                  <div class="tintuc">
                    Bàn học trẻ em: Kinh nghiệm chọn lựa & cách bố trí phong thủy
                  </div>
                  <div class="content">
                    Bàn học trẻ em cần chọn lựa sao cho chuẩn? Bố trí như thế nào để hợp
                    phong thủy, giúp bé tập trung học tốt? Tất cả những thắc mắc xung
                    quanh vấn đề này sẽ được giải đáp trong bài viết dưới đây của Bất Động
                    Sản Việt.
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Trang trí nội thất: Tránh ngay 10 kiểu trang trí từng rất hot nhưng
                    giờ đã lỗi thời
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    20 loại cây trồng trên sân thượng dễ chăm sóc, chịu nắng tốt
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Thiết kế phòng khách nhà ống và những điều bạn không nên bỏ qua
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Covid-19 đến, không đi nhà hàng được thì mình thử bố trí tiệc ngoài
                    trời tại gia nhé!
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Bản vẽ nhà phố khung thép dân dụng đẹp, tối ưu chi phí nhất 2021
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Nhà cấp 4 xây gạch mộc: Tưởng không đẹp mà đẹp không tưởng
                  </div>
                </v-col>
              </v-row>
            </div>
            <div class="fengShui">
              <div>PHONG THỦY</div>
              <v-btn>Xem Tất cả >></v-btn>
            </div>
            <div class="blog_news">
              <v-row>
                <v-col cols="6">
                  <img src="@image/layouts/marketing.svg" alt="" />
                </v-col>
                <v-col cols="6">
                  <div class="tintuc">
                    Mẹo phong thủy tăng hiệu suất làm việc cho phòng Marketing
                  </div>
                  <div class="content">
                    Marketing giữ vai trò quan trọng trong điều phối hoạt động, chiến lược
                    kinh doanh của một doanh nghiệp, đặc biệt là trong thời đại 4.0. Ngoài
                    năng lực lãnh đạo, chủ doanh nghiệp có thể sử dụng thêm một số mẹo
                    phong thủy để tăng hiệu suất làm việc cho phòng marketing.
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Trồng cây phong thủy trong nhà muốn tài lộc chớ quên những lưu ý này!
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Tử vi tuổi Mậu Dần 1998: Tính cách, con đường sự nghiệp và tình duyên
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Tổng hợp các loại tranh gỗ treo tường phổ biến và ý nghĩa phong thủy
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Nên trồng cây gì trước nhà? 10 cây phong thủy trước nhà rước tài lộc
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Cung Bảo Bình (20/1-18/2): Xem chi tiết tính cách, tình yêu, sự nghiệp
                    Bảo Bình
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Cung tài lộc là gì? Cách tự mở cung tài lộc rước tiền tài vào nhà
                  </div>
                </v-col>
              </v-row>
            </div>

            <div class="finance">
              <div>TÀI CHÍNH - BẤT ĐỘNG SẢN</div>
              <v-btn>Xem Tất cả >></v-btn>
            </div>
            <div class="blog_news">
              <v-row>
                <v-col cols="6">
                  <img src="@image/layouts/finance.svg" alt="" />
                </v-col>
                <v-col cols="6">
                  <div class="tintuc">
                    Tín hiệu sáng các phân khúc bất động sản 6 tháng cuối năm
                  </div>
                  <div class="content">
                    Thị trường bất động sản Việt Nam đang có những dấu hiệu phục hồi với
                    triển vọng tăng trưởng trong một số phân khúc nhất định.
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Trồng cây phong thủy trong nhà muốn tài lộc chớ quên những lưu ý này!
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Tử vi tuổi Mậu Dần 1998: Tính cách, con đường sự nghiệp và tình duyên
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Tổng hợp các loại tranh gỗ treo tường phổ biến và ý nghĩa phong thủy
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Nên trồng cây gì trước nhà? 10 cây phong thủy trước nhà rước tài lộc
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Cung Bảo Bình (20/1-18/2): Xem chi tiết tính cách, tình yêu, sự nghiệp
                    Bảo Bình
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Cung tài lộc là gì? Cách tự mở cung tài lộc rước tiền tài vào nhà
                  </div>
                </v-col>
              </v-row>
            </div>

            <div class="building">
              <div>XÂY DỰNG - QUY HOẠCH</div>
              <v-btn>Xem Tất cả >></v-btn>
            </div>
            <div class="blog_news">
              <v-row>
                <v-col cols="6">
                  <img src="@image/layouts/building.svg" alt="" />
                </v-col>
                <v-col cols="6">
                  <div class="tintuc">
                    Tín hiệu sáng các phân khúc bất động sản 6 tháng cuối năm
                  </div>
                  <div class="content">
                    Thị trường bất động sản Việt Nam đang có những dấu hiệu phục hồi với
                    triển vọng tăng trưởng trong một số phân khúc nhất định.
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Trồng cây phong thủy trong nhà muốn tài lộc chớ quên những lưu ý này!
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Tử vi tuổi Mậu Dần 1998: Tính cách, con đường sự nghiệp và tình duyên
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Tổng hợp các loại tranh gỗ treo tường phổ biến và ý nghĩa phong thủy
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Nên trồng cây gì trước nhà? 10 cây phong thủy trước nhà rước tài lộc
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Cung Bảo Bình (20/1-18/2): Xem chi tiết tính cách, tình yêu, sự nghiệp
                    Bảo Bình
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Cung tài lộc là gì? Cách tự mở cung tài lộc rước tiền tài vào nhà
                  </div>
                </v-col>
              </v-row>
            </div>

            <div class="projects">
              <div>TIN TỨC - DỰ ÁN</div>
              <v-btn>Xem Tất cả >></v-btn>
            </div>
            <div class="blog_news">
              <v-row>
                <v-col cols="6">
                  <img src="@image/layouts/project_news.svg" alt="" />
                </v-col>
                <v-col cols="6">
                  <div class="tintuc">
                    Tín hiệu sáng các phân khúc bất động sản 6 tháng cuối năm
                  </div>
                  <div class="content">
                    Thị trường bất động sản Việt Nam đang có những dấu hiệu phục hồi với
                    triển vọng tăng trưởng trong một số phân khúc nhất định.
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Trồng cây phong thủy trong nhà muốn tài lộc chớ quên những lưu ý này!
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Tử vi tuổi Mậu Dần 1998: Tính cách, con đường sự nghiệp và tình duyên
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Tổng hợp các loại tranh gỗ treo tường phổ biến và ý nghĩa phong thủy
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Nên trồng cây gì trước nhà? 10 cây phong thủy trước nhà rước tài lộc
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Cung Bảo Bình (20/1-18/2): Xem chi tiết tính cách, tình yêu, sự nghiệp
                    Bảo Bình
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Cung tài lộc là gì? Cách tự mở cung tài lộc rước tiền tài vào nhà
                  </div>
                </v-col>
              </v-row>
            </div>

            <div class="projects">
              <div>VIDEO</div>
              <v-btn>Xem Tất cả >></v-btn>
            </div>
            <div class="blog_news">
              <v-row>
                <v-col cols="6">
                  <img src="@image/layouts/video_news.svg" alt="" />
                </v-col>
                <v-col cols="6">
                  <div class="tintuc">
                    Năm 2021, dòng tiền bất động sản sẽ chảy như thế nào?
                  </div>
                  <div class="content">
                    Ngân hàng Nhà nước (NHNN) vừa ban hành thông tư 22, ấn định lộ trình
                    siết mạnh cho vay bất động sản trong thời gian 3 năm, kể từ đầu năm
                    2020.
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Nhận định thị trường bất động sản 6 tháng cuối năm 2021
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Nhận định xu hướng đầu tư bất động sản 6 tháng cuối năm 2021
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Điểm tin 24h: Bất động sản: Kỳ vọng và Giá trị thực
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Mua bán bất động sản giỏi phải xem các câu hỏi hay này
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Sửa đổi Luật Đất đai - Vẫn đang là bài toán khó
                  </div>
                </v-col>
                <v-col cols="6" class="d-flex more_detail">
                  <img src="@image/layouts/circle.png" alt="" />
                  <div class="small_content">
                    Chiến lược đầu tư bất động sản đất nền lãi ngay khi mua
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-col>

          <v-col cols="4">
            <div class="views">
              <div class="view_title">TIN XEM NHIỀU NHẤT</div>
              <div class="d-flex most_views">
                <div class="view_imgs">
                  <router-link :to="`/blog/news/lammvieclaunamtaiDaNang`">
                    <img src="@image/layouts/view_01.svg" alt="" />
                  </router-link>
                </div>
                <NuxtLink :to="`/blog/news/lammvieclaunamtaiDaNang`" class="view_content">
                  Làm việc lâu năm tại Đà Nẵng nên mua đất ở đâu?
                </NuxtLink>
              </div>
              <el-divider></el-divider>
              <div class="d-flex most_views">
                <div class="view_imgs">
                  <img src="@image/layouts/view_02.svg" alt="" />
                </div>
                <div class="view_content">
                  99+ Mẫu biệt thự hiện đại Nhật Bản đẹp hút hồn, mới nhất năm 2021
                </div>
              </div>
              <el-divider></el-divider>
              <div class="d-flex most_views">
                <div class="view_imgs">
                  <img src="@image/layouts/view_03.svg" alt="" />
                </div>
                <div class="view_content">
                  Các loại la phông trần nhà đẹp, bền xu hướng 2021
                </div>
              </div>
              <el-divider></el-divider>
              <div class="d-flex most_views">
                <div class="view_imgs">
                  <img src="@image/layouts/view_04.svg" alt="" />
                </div>
                <div class="view_content">
                  Căn hộ dịch vụ là gì? Bí quyết xây căn hộ dịch vụ cho thuê tiềm năng
                </div>
              </div>
              <el-divider></el-divider>
              <div class="d-flex most_views">
                <div class="view_imgs">
                  <img src="@image/layouts/view_05.svg" alt="" />
                </div>
                <div class="view_content">
                  Thiết kế phòng trọ 15m2 giá rẻ mà vẫn vạn người mê
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
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
    Footer,
  },
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.blog {
  padding: 0 10%;
  img {
    width: 100%;
  }
  .search {
    margin-top: 10px;
  }
  .blog_title {
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    margin: 20px 0;
  }
  .specail_news {
    .blog_news {
      padding: 12px 15px;
      background: #f2f2f2;
      box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.15);
      border-radius: 4px;
      .tintuc {
        font-weight: 500;
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 15px;
      }
      .content {
        font-size: 14px;
        line-height: 24px;
      }
    }
    .architecture,
    .feature,
    .fengShui,
    .finance,
    .building,
    .projects {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      margin: 25px 0 15px;
      display: flex;
      justify-content: space-between;
      .v-btn {
        text-transform: capitalize;
        border-radius: 5px;
        box-shadow: none;
        background-color: $color-orange-light;
        color: $color-black-02;
        font-size: 12px;
      }
      .v-btn:not(.v-btn--round).v-size--default {
        min-height: 30px;
        height: 32px;
      }
    }
    .more_detail {
      padding: 6px 12px;
      img {
        margin-top: 6px;
        height: 12px;
        width: 12px;
      }
      .small_content {
        margin-left: 12px;
      }
    }
  }
  .views {
    margin-left: 10px;
    padding: 12px 15px;
    background: #f2f2f2;
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    .el-divider.el-divider--horizontal {
      margin: 12px 0;
    }
    .view_title {
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 20px;
    }
    .most_views {
      .view_imgs {
        width: 40%;
        img {
          width: 100%;
        }
      }
      .view_content {
        width: 60%;
        padding-left: 10px;
      }
    }
  }
}
</style>
