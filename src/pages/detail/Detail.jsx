import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./detail.scss";

const Detail = () => {
  const [active, setActive] = useState(0);

  const detailMenuItem = [
    {
      name: "Sữa đặc vinamilk",
      id: 1,
    },
    {
      name: "Bột bánh rán chế biến sẵn",
      id: 2,
    },
    {
      name: "Hạt nêm gia vị, xốt",
    },
    {
      name: "Trái cây, rau củ",
    },
  ];

  const detailMenuProduct = [
    {
      product: {
        name: "SỮA ĐẶC VINAMILK",
        productItem: {
          title: "Phương Nam Xanh 1,2kg",
          img: "https://images.foody.vn/res/g109/1089033/s120x120/5c2b5837-385d-46b1-8d09-2fcc9c97-26d80f82-210806155647.jpeg",
          count: "1 hộp",
          oldprice: "68.000đ",
          newprice: "59.850đ",
        },
      },
    },
    {
      product: {
        name: "BỘT BÁNH RÁN CHẾ BIẾN SẴN",
        productItem: {
          title: "Bánh Rán Vị Truyền Thống 200g",
          img: "https://images.foody.vn/res/g109/1089033/s120x120/7a6d6985-6f14-4a75-adfa-f5d2e5d1-98fb9acb-210811131221.jpeg",
          count: "1 gói",
          oldprice: "21.000đ",
          newprice: "18.500đ",
        },
      },
    },
    {
      product: {
        name: "HẠT NÊM, GIA VỊ, XỐT",
        productItem: {
          title: "Bột Ngọt Ajinomoto 140g",
          img: "https://images.foody.vn/res/g109/1089033/s120x120/55682bdd-200e-4fe7-8417-5f02b170-f9bf5ca6-210811130752.jpeg",
          count: "1 gói",
          oldprice: "68.000đ",
          newprice: "59.850đ",
        },
        productItemMap: {
          title: "Hạt Nêm Heo 400g",
          img: "https://images.foody.vn/res/g109/1089033/s120x120/8103b792-1e33-4375-8f8e-490eb5a2-9c3065ed-211102101343.jpeg",
          count: "1 gói",
          oldprice: "35.000đ",
          newprice: "30.800đ",
        },
        productItemMapSecond: {
          title: "Nước tương Phú Sĩ 500ml",
          img: "https://images.foody.vn/res/g109/1089033/s120x120/19e2a174-d42b-4a22-af2b-d41bf21f-4d805abd-211102101440.jpeg",
          count: "1 chai",
          oldprice: "20.000đ",
          newprice: "17.600đ",
        },
      },
    },
    {
      product: {
        name: "TRÁI CÂY, RAU CỦ",
        productItem: {
          title: "Cam Sành",
          img: "https://images.foody.vn/default/s120x120/shopeefood-deli-dish-no-image.png",
          count: "1 KG",
          oldprice: "20.000đ",
          newprice: "17.600đ",
        },
      },
    },
  ];

  const toggleActive = (item) => {
    setActive(item);
  };

  return (
    <div className="detail">
      <div className="detail__product">
        <div className="container">
          <div className="detail__product__img">
            <img src="https://images.foody.vn/res/g109/1089033/prof/s640x400/file_restaurant_photo_apgf_16328-9c222a95-210928141051.jpeg" />
          </div>
          <div className="detail__product__info">
            <div className="detail__product__info__link">
              <Link to="/" className="detail__product__info__link__item">
                Home
                <i className="bx bx-chevrons-right"></i>
              </Link>
              <Link to="/" className="detail__product__info__link__item">
                TP.HCM
                <i className="bx bx-chevrons-right"></i>
              </Link>
              <Link
                to="/ho-chi-minh/an-vat-mr-phuong-duong-so-19"
                className="detail__product__info__link__item"
              >
                Ăn Vặt Mr. Phương - Đường Số 19
              </Link>
            </div>
            <span className="detail__product__info__kind">Chợ</span>
            <h1 className="detail__product__info__name">
              Ăn Vặt Mr. Phương - Đường Số 19
            </h1>
            <span className="detail__product__info__address">
              4 Đường Số 19, P. 4, Quận 4, TP. HCM
            </span>
            <div className="detail__product__info__status">
              <div className="detail__product__info__status--open">Mở cửa</div>
              <div className="detail__product__info__status--time">
                <i className="bx bx-time"></i>
                06:00 - 17:45
              </div>
            </div>
            <div className="detail__product__info__price">
              <i className="bx bx-dollar-circle"></i>
              20,000 - 500,000
            </div>
            <div className="detail__product__info__contact">
              <div className="detail__product__info__contact--item">
                <div className="detail__product__info__contact--item__title">
                  PHÍ DỊCH VỤ
                </div>
                <div className="detail__product__info__contact--item__content">
                  0.0% Phí phục vụ{" "}
                </div>
                <div className="detail__product__info__contact--item__partner"></div>
              </div>
              <div className="detail__product__info__contact--item">
                <div className="detail__product__info__contact--item__title">
                  DỊCH VỤ BỞI
                </div>
                <div className="detail__product__info__contact--item__content">
                  ShopeeFood
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="detail__menu container">
        <div className="detail__menu__title">Thực đơn</div>
        <div className="detail__menu__wrap">
          <div className="detail__menu__left">
            {detailMenuItem.map((item, index) => (
              <li
                key={index}
                className={`${
                  index === active ? "active" : ""
                } detail__menu__left__item`}
                onClick={() => toggleActive(index)}
              >
                {item.name}
              </li>
            ))}
          </div>

          <div className="detail__menu__right">
            {detailMenuProduct.map((item, index) => (
              <div className="detail__menu__right__wrap" key={index}>
                <h2 id={index} className="detail__menu__right__product">
                  {item.product.name}
                </h2>
                <>
                  <div className="detail__menu__right__content">
                    <img
                      src={item.product.productItem.img}
                      alt=""
                      className="product__img"
                    />
                    <div className="product__content">
                      <span className="product__title">
                        {item.product.productItem.title}
                      </span>
                      <p className="product__count">
                        {item.product.productItem.count}
                      </p>
                    </div>
                    <div className="product__price">
                      <p className="product__price__old">
                        {item.product.productItem.oldprice}
                      </p>
                      <p className="product__price__new">
                        {item.product.productItem.newprice}
                      </p>
                    </div>
                    <div className="product__add">+</div>
                  </div>
                </>
                <>
                  {item.product.productItemMap ? (
                    <div className="detail__menu__right__content">
                      <img
                        src={item.product.productItemMap.img}
                        alt=""
                        className="product__img"
                      />
                      <div className="product__content">
                        <span className="product__title">
                          {item.product.productItemMap.title}
                        </span>
                        <p className="product__count">
                          {item.product.productItemMap.count}
                        </p>
                      </div>
                      <div className="product__price">
                        <p className="product__price__old">
                          {item.product.productItemMap.oldprice}
                        </p>
                        <p className="product__price__new">
                          {item.product.productItemMap.newprice}
                        </p>
                      </div>
                      <div className="product__add">+</div>
                    </div>
                  ) : null}
                </>
                <>
                  {item.product.productItemMapSecond ? (
                    <div className="detail__menu__right__content">
                      <img
                        src={item.product.productItemMapSecond.img}
                        alt=""
                        className="product__img"
                      />
                      <div className="product__content">
                        <span className="product__title">
                          {item.product.productItemMapSecond.title}
                        </span>
                        <p className="product__count">
                          {item.product.productItemMapSecond.count}
                        </p>
                      </div>
                      <div className="product__price">
                        <p className="product__price__old">
                          {item.product.productItemMapSecond.oldprice}
                        </p>
                        <p className="product__price__new">
                          {item.product.productItemMapSecond.newprice}
                        </p>
                      </div>
                      <div className="product__add">+</div>
                    </div>
                  ) : null}
                </>
              </div>
            ))}
          </div>

          <div className="detail__menu__bill">
            <div className="detail__menu__bill__header">
              <button className="detail__menu__bill__header--btn">
                <span>0 phần -</span>
                <span>0 người</span>
              </button>
              <button className="detail__menu__bill__header--delete">
                Xóa
              </button>
              <div className="detail__menu__bill__header__create">
                Đơn hàng tạo bởi <p>Tài Cẩn Đỗ Nguyễn</p>
              </div>
            </div>

            <div className="detail__menu__bill__plus">
              <p>Cộng</p>
              <div>
                0<span>đ</span>
              </div>
            </div>

            <div className="detail__menu__bill__promocode">
              Nhập mã khuyến mãi ở bước hoàn tất
            </div>

            <div className="detail__menu__bill__total">
              <p>Tổng cộng</p>
              <div>
                0<span>đ</span>
              </div>
            </div>

            <button className="detail__menu__bill__reserve">
              <i className="bx bxs-check-circle"></i>
              Đặt trước
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
