import styles from "./book-feed-back-vali-module.scss";
import classnames from "classnames/bind";

import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const cx = classnames.bind(styles);

function BookFeedBackVali() {
  //   Basic rating one
  const [value, setValue] = React.useState(2);

  return (
    <div className={cx("asdfah")}>
      <div className={cx("Book-EvaluateImageContainer")}>
        <img className={cx("Book-EvaluateImage")} alt="Book" />
        <div className={cx("Book-EvaluateProfileProduct")}>
          {/* profile-product */}
          <div className={cx("Book-EvaluateProfile")}>
            <p>n*****8</p>
            <div>
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
                <Rating name="read-only" value={value} readOnly />
              </Box>
            </div>
            <div className={cx("Book-EvaluateProfileStars")}></div>
            <div className={cx("Book-EvaluateProfileDetails")}>
              <p>2023-09-08</p>
              <p>23:39</p>
              <p> Phân loại hàng:</p>
              <p> M1P Đen + Bluetooth</p>
            </div>
            <div className={cx("Book-EvaluateProfileQuality")}>
              <p>Chất lượng sản phẩm:</p>
              <p>tốt</p>
            </div>
            <p className={cx("Book-safdjhd")}>
              Chuột dùng rất êm, cấu tạo hơi dẹt so với thông thường, ban đầu dùng hơi lạ,
              nhưng sau quen thấy không bị mỏi cổ tay như chuột bình thường. Cấu tạo cũng
              thon dài nên cầm tay rất vừa vặn. Chuột dùng êm, mượt, có 2 kiểu kết nối rất
              tiện lợi. Nhưng mình dùng với tần suất tầm 10h/ngày, thì sạc đủ 2 tiếng như
              hướng dẫn thì dùng được tầm khoảng 1 tháng thôi. Tuy nhiên chuột không dùng
              pin nên cũng rất an tâm khi không cần thay pin hàng tháng. Ngoài ra shop cũng
              tư vấn và hướng dẫn rất nhiệt tình. Mn nên mua nha.
            </p>
            <div className={cx("Book-EvaluateProfileImages")}>
              <img className={cx("Book-EvaluateProfileImage")} alt="Profile" />
              <img className={cx("Book-EvaluateProfileImage")} alt="Profile" />
              <img className={cx("Book-EvaluateProfileImage")} alt="Profile" />
              <img className={cx("Book-EvaluateProfileImage")} alt="Profile" />
              <img className={cx("Book-EvaluateProfileImage")} alt="Profile" />
              <img className={cx("Book-EvaluateProfileImage")} alt="Profile" />
            </div>
            {/* Seller feedback */}
            <div className={cx("Book-EvaluateSellerFeedback")}>
              <p className={cx("Book-EvaluateSellerFsasfeedback")}>
                Phản Hồi Của Người Bán
              </p>
              <p className={cx("Book-EvaluatsadeSellerFsasfeedback")}>
                Sidotech xin cảm ơn bạn đã tin tưởng và cho shop 1 đánh giá tốt.
                Nếu có điều gì trong quá trình sử dụng sản phẩm vui lòng IB cho
                shop để được hỗ trợ kịp thời nhất nhé, đừng vội vàng sửa đánh
                giá mà tội nghiệp shop nha. Shop luôn ở đây để hỗ trợ mọi vấn đề
                cho bạn ạ ^^
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookFeedBackVali;
