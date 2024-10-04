import styles from "./book-img-module.scss";
import classnames from "classnames/bind";
import MainImage from "./e3cc4c9bef8fc28dfef26231a0768701 (1).jpg";
import { faClover, faMessage, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classnames.bind(styles);

function BookImageGallery() {
  return (
    <div className={cx("book-img-lits")}>
      <div className={cx("book-item-header")}>
        <img
          className={cx("book-main-image")}
          src={MainImage}
          alt="Main Book Image"
        />
      </div>
      <div className={cx("book-item-gallery")}>
        <img
          className={cx("book-gallery-image")}
          src={MainImage}
          alt="Gallery Image 1"
        />
        <img
          className={cx("book-gallery-image")}
          src={MainImage}
          alt="Gallery Image 2"
        />
        <img
          className={cx("book-gallery-image")}
          src={MainImage}
          alt="Gallery Image 3"
        />
        <img
          className={cx("book-gallery-image")}
          src={MainImage}
          alt="Gallery Image 4"
        />
        <img
          className={cx("book-gallery-image")}
          src={MainImage}
          alt="Gallery Image 5"
        />
      </div>
      <div className={cx("book-item-actions")}>
        <div className={cx("book-share")}>
          <h2 className={cx("share-title")}>Chia Sẻ : </h2>
          <FontAwesomeIcon className={cx("share-item")} icon={faMessage} />
          <FontAwesomeIcon className={cx("share-item")} icon={faStar} />
          <FontAwesomeIcon className={cx("share-item")} icon={faStar} />
          <FontAwesomeIcon className={cx("share-item")} icon={faStar} />
        </div>
        <div className={cx("book-like")}>
          <FontAwesomeIcon className={cx("share-item")} icon={faClover} />
          <h3 className={cx("like-title")}>Đã thích</h3>
          <h2 className={cx("like-count")}>(5)</h2>
        </div>
      </div>
    </div>
  );
}

export default BookImageGallery;
