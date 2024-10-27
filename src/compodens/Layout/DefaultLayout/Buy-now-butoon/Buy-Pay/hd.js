<div className={cx("NowProductItem")} key={item.product_id}>
  <div className={cx("NowProductItemDetails")}>
    <div className={cx("yyy")}>
      <img
        src={item.image || qr}
        className={cx("NowProductItemDetaiimg")}
        alt={item.productName}
      />
      <div className={cx("NowProductDescriptionContainer qqq")}>
        <p className={cx("NowProductDescription")}>{item.name}</p>
        <p className={cx("NowProductReturnPolicy")}>
          Đổi miễn phí trong 15 ngày
        </p>
      </div>
    </div>
    <div className={cx("NowProductTypeContainer yyy")}>
      <p className={cx("NowProductTypeTitle")}>Loại :</p>
      <p className={cx("NowProductType")}>M1 Trắng + USB 2.4G</p>
    </div>
    <div className={cx("NowProductPriceContainer yyy")}>
      <p className={cx("NowProductPrice")}>{item.price}</p>
      <p className={cx("NowProductQuantity")}>{item.quantity}</p>
      <p className={cx("NowProductTotal")}>{item.price * item.quantity}</p>
    </div>
  </div>
</div>;
