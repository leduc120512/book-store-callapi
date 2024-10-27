import styles from "./suggest-book-module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);
function Sidebar() {
  return (
    <div className={cx("sugest_main")}>
      <p className={cx("sugest-list")}>
        TOP 11 Các Thể Loại Sách Phổ Biến Nhất, Được Tìm Kiếm Nhiều Nhất
      </p>
      <p className={cx("sugest-tk")}> Các thể loại sách phổ biến</p>
      <div>
        <p className={cx("sugest_item")}>Sách thiếu nhi</p>
        <span className={cx("sugest_text")}>
          Sách thiếu nhi là sách chuyên dành cho trẻ em từ 16 tuổi trở xuống.
          Tại đây sách thiếu nhi có thể là những nội dung gần gũi với cuộc sống
          của bé. Trong đó thường chứa những câu chuyện dài hoặc ngắn về các
          thông điệp xã hội nhân văn, có tính đạo đức và giáo dục. Hay những câu
          chuyện về sự tự lập, tự chủ và cách để yêu thương và tôn trọng những
          người xung quanh. Sàch thiếu nhi thường có những hình ảnh đi kèm dễ
          thương, màu sắc để cho trí óc của con trẻ được tích cực và tươi sáng.
        </span>
      </div>
      <div>
        <p className={cx("sugest_item")}> Sách tâm lý, tình cảm</p>
        <span className={cx("sugest_text")}>
          Sách tâm lý tình cảm thường là những cuốn truyện ngắn hay những cuốn
          tiểu thuyết dài kỳ. Trong các thể loại sách thì thể loại sách tâm lí
          tình cảm có lẽ là một trong những cuốn sách có doanh số cao nhất. Có
          lẽ bởi con người luôn tìm kiếm, mưu cầu về chuyện yêu thương và tình
          cảm vì vậy mà lựa chọn thể loại sách này.
        </span>
      </div>
      <div>
        <p className={cx("sugest_item")}> Sách lịch sử</p>
        <span className={cx("sugest_text")}>
          Để có được con người, đời sống, xã hội ngày nay thì cần phải có cả một
          quá trình. Vậy quá trình đã qua này được gọi là gì? Nó chính là lịch
          sử và để lịch sử không bị quên đi thì người ta phải ghi chép lại. Đây
          chính là nguồn gốc ra đời của sách lịch sử.
          <span className={cx("sugest_text")}>
            Sách lịch sử nói về những dấu mốc những sự kiện lịch sử đã qua. Nó
            vừa là bài học vừa là lời khuyên dạy để chúng ta học những cái tốt
            và lược bỏ đi những cái xấu không đi lại vào vết xe đổ.
          </span>
          <span className={cx("sugest_text")}>
            Sách lịch sử có những dấu mốc thời gian và thời điểm cụ thể. Tại mỗi
            thời điểm lại có những con người, sự việc và sự kiện xảy ra khác
            nhau. Những cuốn sách này rất phù hợp cho những người yêu thích tìm
            hiểu lịch sử con người, văn hoá khắp nơi trên thế giới.
          </span>
        </span>
      </div>
      <div>
        <p className={cx("sugest_item")}>Sách văn học viễn tưởng</p>
        <span className={cx("sugest_text")}>
          Sách văn học viễn tưởng là sách được viết nên từ trí tưởng tượng của
          con người đưa ta đến với một thế giới hư cấu. Những cuốn sách này
          thường được cho thêm những yếu tố như pháp thuật, chiều không gian
          khác, người ngoài hành tinh, robot, siêu anh hùng… biến chúng từ những
          thứ không có thật thành có thật. Những cuốn sách này thường cho vào
          các yếu tố phiêu lưu và hành động để tăng độ hấp dẫn và tính thách
          thức.
        </span>
      </div>
      <div>
        <p className={cx("sugest_item")}>Sách tiểu sử, tự truyện</p>
        <span className={cx("sugest_text")}>
          Sách tiểu sử hay tự truyện thường là những cuốn sách kể về cuộc đời
          hay những trải nghiệm có thật của chính tác giả. Tại đó ta có thể thấy
          được xuyên suốt cuộc hành trình từ bé cho tới trưởng thành của một
          người. Hay những dấu mốc quan trọng của một người đã xảy ra biến cố.
          Hay những kinh nghiệm sống, những bài học được rút ra từ những trải
          nghiệm hay sóng gió của tác giả. Trong đó đặc biệt sẽ có những cảm xúc
          và tâm trạng sâu sắc của tác giả đến với những sự kiện diễn ra trong
          cuốn sách đó.{" "}
        </span>
      </div>
      <div>
        <p className={cx("sugest_item")}> Sách kinh dị, bí ẩn</p>
        <span className={cx("sugest_text")}>
          Sách kinh dị, bí ẩn cũng nằm trong TOP các thể loại sách được tìm kiếm
          nhiều nhất. Sách kinh dị bí ẩn có mối liên quan mật thiết với sách văn
          học viễn tưởng. Nhưng thay vì sử dụng những yếu tố của sách văn học
          viễn tưởng Tác giả sử dụng những yếu tố bí ẩn và kinh dị. Ví dụ như
          phù thuỷ, pháp sư, ma quỷ, ám hại... để tạo nên những tình tiết căng
          thẳng, hồi hộp đến với người đọc. Thể loại sách này thường tập trung
          vào tâm lý của người đọc, kích thích và liên tưởng để nỗi sợ ẩn sau
          mỗi người. Nó cũng hay tập trung vào những bối cảnh u tối, mờ ảm để
          tăng trí tưởng tượng. Cốt truyện sử dụng tình tiết kich tính, đảo
          ngược bất ngờ để níu giữ người đọc đến phút cuối.{" "}
        </span>
      </div>
      <div>
        <p className={cx("sugest_item")}> Sách dạy nấu ăn</p>
        <span className={cx("sugest_text")}>
          Sách dạy nấu ăn thường được viết lên bởi những người có chuyên môn như
          đầu bếp chuyên nghiệm, người thẩm định các món ăn. Trong đó có chưa
          những bí quyết để tạo nên một món ăn ăn, các bước thực hiện, công thức
          tạo món ăn tuyệt hảo cho một chủ để nào đó. Chủ đề ở đây có thể là các
          món ăn nhanh, các món ăn truyền thống, các món Âu, các món Á,... tất
          cả đều là do trải nghiệm của tác giả để kể lại.
        </span>
      </div>
      <div>
        <p className={cx("sugest_item")}>Sách khoa học công nghệ</p>
        <span className={cx("sugest_text")}>
          Sách khoa học công nghệ cung cấp các thông tin và các kiến thức liên
          quan tới khoa học và công nghệ. Trong các cuốn sách này thường sử dụng
          những từ ngữ chuyên ngành nhằm mang đến những thông tin, những chương
          trình đang hoạt động một cách cụ thể, chính xác. Trong cuốn sách cũng
          đưa ra những luận điểm có thể là khách quan hoặc trực tiếp để kích
          thích người đọc tìm hiểu kĩ hơn về chủ đề mình đang đọc. Từ đó mà tìm
          ra những câu hỏi thích đáng dành cho bản thân
        </span>
      </div>
      <div>
        <p className={cx("sugest_item")}> Sách truyền cảm hứng</p>
        <span className={cx("sugest_text")}>
          Sách truyền cảm hứng thường sở hữu nội dung tích cực nhằm khích lệ
          người đọc có thể đối mặt với những vấn đề có trong cuốn sách nêu tới.
          Từ đó mà có thể đạt được mục tiêu cũng như phát triển bản thân trở
          thành phiên bản tốt nhất. Sách truyền cảm hứng có thể là nói về những
          trải nghiệm của tác giả và những điều mà học đã đúc kết ra. Hay những
          phương pháp cách giải quyết khi họ vướng và một vấn đề nào đó xảy ra
          trong công việc, cuộc sống hàng ngày. Tất cả đều hướng đến một tình
          thần tư duy phát triển bản thân một cách tích cực tuyệt đối.
        </span>
      </div>
      <div>
        <div className={cx("sugest_u")}>
          <p className={cx("Loiich")}>Lợi ích của việc đọc sách</p>
          <span className={cx("sugest_text")}>
            1 Mở rộng tri thức Việc đọc sách chưa bao giờ là vô nghĩa bởi sách
            chính là chìa khoá để bạn mở ra một kho tàng tri thức phía trước.
            Việc của bạn là mở khoá và đến với kho tàng để có được những kiến
            thức mới. Nó giúp cho bạn được mở rộng sự hiểu biết về mọi thứ trên
            thế giới. Có rất nhiều lĩnh vực như văn hoá, lịch sử, khoa học, nghệ
            thuật mà bạn có thể lựa chọn,... Mỗi lĩnh vực lại giúp bạn thêm hoàn
            thiện bản thân hơn nữa.
          </span>
          <span className={cx("sugest_text")}>
            2.2 Phát triển kỹ năng ngôn ngữ Việc đọc sách giúp bạn nâng cao kỹ
            năng ngôn ngữ, từ vựng và khả năng viết. Mỗi một thể loại sách, mỗi
            tác giả lại có những văn phong viết bài khác nhau. Từ đấy là bạn có
            thể học hỏi và áp dụng vốn từ vào trong cách nói, hành văn của riêng
            mình..
          </span>
          <span className={cx("sugest_text")}>
            3 Cải thiện sự tập trung Nếu bạn đang vướng phải việc thiếu tập
            trung và không kiên nhẫn để làm một việc gì đó vậy hãy đọc sách.
            Sách sẽ giúp bạn rèn luyện tính kiên nhẫn trong một khoảng thời gian
            nhất định. Nếu chưa thể kiên nhẫn lâu bạn có thể đặt đồng hồ báo
            thức rồi nâng số phút đọc mỗi ngày lên. Điều này sẽ giúp bạn làm
            quen với sự tập trung và ngay càng nâng cao trình độ tập trung, kiên
            nhẫn.
          </span>
          <span className={cx("sugest_text")}>
            2.4 Giảm stress Khi bạn đang căng thẳng về một vấn đề nào đó sách có
            thể là một sự lựa chọn để bạn giảm stress. Hãy tìm đến một nơi thoải
            mái và yên lặng để đọc sách. Mỗi trang sách bạn lật qua là mỗi lần
            khiến bạn bình tâm và nhịp thở trở nên dều đặn hơn.
          </span>
          <span className={cx("sugest_text")}>
            2.5 Mở rộng tầm hiểu biết Như đã nói sách là một kho tàng kiến thức
            bao la và rộng lớn. Càng đọc ta lại càng hiểu biết rõ và sâu hơn về
            tất cả mọi thứ trên thế giới. Từ văn hoá, xã hội, lịch sử, con
            người,... chúng ta đều có thể tìm thấy qua sách. Nhờ vào đó mà ta có
            thể mở rộng cuộc nói chuyện, giao tiếp về nhiều thứ hơn.
          </span>{" "}
          <span className={cx("sugest_text")}>
            2.6 Nâng cao kỹ năng tư duy Việc đọc sách giúp chúng ta vừa hiểu
            biết lại vừa có thể nghiền ngẫm về những thứ đã được đọc. Tự đặt câu
            hỏi vồi tìm thấy đáp án và quan điểm ngay trong cuốn sách có thể
            kích thích khả năng tư duy và sự sáng tạo.
          </span>{" "}
          <span className={cx("sugest_text")}>
            2.7 Tạo ra thói quen lành mạnh Thay vì việc lướt trên mạng tìm những
            video kiến thức ngắn có thể khiến não của bạn ít tư duy đi. Thì việc
            đọc sách khiến cho trí não của bạn được phát triển hơn. Đây là thói
            quen tốt có thể thay thế cho những hoạt động giải trí không lành
            mạnh.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
