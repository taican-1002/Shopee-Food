import React from 'react';
import './home.scss';

import app_store from '../../asset/app_store.png'
import google_play from '../../asset/google_play.png'

import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <div className='container home-flex'>
                <div className='home__search'>
                    <h1 className='home__search__title'>Đặt Thực phẩm, giao hàng từ 20'...</h1>
                    <p className='home__search__address'>Có 13550 Địa Điểm Ở TP. HCM Từ 00:00 - 23:59</p>
                    <div className='home__search__form'>
                        <input type='text' placeholder='Tìm shop thực phẩm' 
                                className='home__search__form--input'
                        />
                        <button className='home__search__form--btn'>
                            <i className='bx bx-search'></i>
                        </button>
                    </div>
                    <div className='home__search__filter'>
                        <span className='home__search__filter--item'>All</span>
                        <span className='home__search__filter--item'>Đồ chay</span>
                        <span className='home__search__filter--item'>Trái cây</span>
                        <span className='home__search__filter--item'>Thịt / Trứng</span>
                        <span className='home__search__filter--item'>Thủy hải sản</span>
                        <span className='home__search__filter--item'>Rau củ</span>
                        <span className='home__search__filter--item'>Gạo mì</span>
                        <span className='home__search__filter--item'>Đồ hộp / Đồ uống</span>
                        <span className='home__search__filter--item'>Gia vị</span>

                    </div>
                    <h2 className='home__search__desc'>
                        Sử dụng App ShopeeFood để có nhiều giảm giá và trải nghiệm tốt hơn
                    </h2>
                    <div className='home__search__download'>
                        <img className='home__search__download--icon' src={app_store} alt=''/>
                        <img className='home__search__download--icon' src={google_play} alt=''/>
                    </div>
                </div>

                <div className='home__main'>
                    <div className='home__main__header'>
                        <div className='home__main__get-local'>
                            <span className='home__main__name'>Thực phẩm</span>
                            <i className='bx bx-right-arrow-alt home__main__icon'></i>
                            <div className='home__main__find'>Chọn địa chỉ giao hàng</div>
                        </div>
                        <div className='home__main__next'>
                            <i className='bx bx-chevron-right'></i>
                        </div>
                    </div>
                    <div className='home__main__body'>
                        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                            <div className='home__main__body__title'>Ưu đãi</div>
                            <div className='home__main__body__view-deal'>
                                <i className='bx bx-customize home__main__body__view-deal--icon'></i>
                                <span className='home__main__body__view-deal--name'>Xem tất cả</span>
                            </div>
                        </div>

                        <div className='home__main__body__list'>
                            <div className='home__main__body__item'>
                                <Link to='/ho-chi-minh/an-vat-mr-phuong-duong-so-19' className='home__main__body__item__wrap'>
                                    <div  className='home__main__body__img'>
                                        <img src='https://images.foody.vn/res/g109/1089033/prof/s280x175/file_restaurant_photo_apgf_16328-9c222a95-210928141051.jpeg'
                                        />
                                    </div>
                                       
                                    <div className='home__main__body__address'>
                                        <div className='home__main__body__info'>
                                            <h2 className='home__main__body__info__title'>Ăn Vặt Mr. Phương - Đường Số 19</h2>
                                            <span className='home__main__body__info__desc'>4 Đường Số 19, P. 4, Quận 4, TP. HCM</span>
                                        </div>
                                        <div className='home__main__body__promotion'>
                                            <i className='bx bxs-purchase-tag-alt home__main__body__promotion--icon'></i>
                                            Giảm hết 12%
                                        </div>
                                        <div className='home__main__body__status'>
                                            <span className='home__main__body__status--icon'></span>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className='home__main__body__item'>
                                <div className='home__main__body__item__wrap'>
                                    <div  className='home__main__body__img'>
                                        <div className='home__main__body__tag'>
                                            <i className='bx bxs-like'></i>
                                            Yêu thích
                                        </div>
                                        <img src='https://images.foody.vn/res/g109/1088189/prof/s280x175/file_restaurant_photo_bbf8_16270-3d6994c9-210723211550.jpg'
                                        />
                                    </div>
                                       
                                    <div className='home__main__body__address'>
                                        <div className='home__main__body__info'>
                                            <h2 className='home__main__body__info__title'>Bách Hóa Online 492 - Ăn Vặt & Bánh Tráng - Hoàng Sa</h2>
                                            <span className='home__main__body__info__desc'>303b Hoàng Sa, P. Tân Định, Quận 1, TP. HCM</span>
                                        </div>
                                        <div className='home__main__body__promotion'>
                                            <i className='bx bxs-purchase-tag-alt home__main__body__promotion--icon'></i>
                                            Giảm món
                                        </div>
                                        <div className='home__main__body__status'>
                                            <span className='home__main__body__status--icon'></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='home__main__body__item'>
                                <div className='home__main__body__item__wrap'>
                                    <div  className='home__main__body__img'>
                                        <div className='home__main__body__tag'>
                                            <i className='bx bxs-like'></i>
                                            Yêu thích
                                        </div>
                                        <img src='https://images.foody.vn/res/g104/1031965/prof/s280x175/foody-upload-api-foody-mobile-82026952_99435429428-200624112615.jpg'
                                        />
                                    </div>
                                       
                                    <div className='home__main__body__address'>
                                        <div className='home__main__body__info'>
                                            <h2 className='home__main__body__info__title'>Cooky Market - Thực Phẩm Tươi & Pack Nấu Ngay - Nguyễn Gia Trí</h2>
                                            <span className='home__main__body__info__desc'>36/12 Nguyễn Gia Trí, P. 25, Bình Thạnh, TP. HCM</span>
                                        </div>
                                        <div className='home__main__body__promotion'>
                                            <i className='bx bxs-purchase-tag-alt home__main__body__promotion--icon'></i>
                                            Deal 1k
                                        </div>
                                        <div className='home__main__body__status'>
                                            <span className='home__main__body__status--icon'></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='home__main__body__item'>
                                <div className='home__main__body__item__wrap'>
                                    <div  className='home__main__body__img'>
                                        <img src='https://images.foody.vn/res/g109/1088964/prof/s280x175/file_restaurant_photo_dsya_16273-54af9449-210727083927.jpeg'
                                        />
                                    </div>
                                       
                                    <div className='home__main__body__address'>
                                        <div className='home__main__body__info'>
                                            <h2 className='home__main__body__info__title'>SingFood - Đỗ Năng Tế</h2>
                                            <span className='home__main__body__info__desc'>11 Đỗ Năng Tế, P. An Lạc, Bình Tân, TP. HCM</span>
                                        </div>
                                        <div className='home__main__body__promotion'>
                                            <i className='bx bxs-purchase-tag-alt home__main__body__promotion--icon'></i>
                                            Giảm hết 15%
                                        </div>
                                        <div className='home__main__body__status'>
                                            <span className='home__main__body__status--icon'></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='home__main__body__item'>
                                <div className='home__main__body__item__wrap'>
                                    <div  className='home__main__body__img'>
                                        <img src='https://images.foody.vn/res/g68/671781/prof/s280x175/foody-upload-api-foody-mobile-me-433c1511-220108102648.jpeg'
                                        />
                                    </div>
                                       
                                    <div className='home__main__body__address'>
                                        <div className='home__main__body__info'>
                                            <h2 className='home__main__body__info__title'>Meat World - Thịt Tươi Sống Nhập Khẩu - Trần Khắc Chân</h2>
                                            <span className='home__main__body__info__desc'>60-62 Trần Khắc Chân, P. Tân Định, Quận 1, TP. HCM</span>
                                        </div>
                                        <div className='home__main__body__promotion'>
                                            <i className='bx bxs-purchase-tag-alt home__main__body__promotion--icon'></i>
                                            Giảm món
                                        </div>
                                        <div className='home__main__body__status'>
                                            <span className='home__main__body__status--icon'></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='home__main__body__item'>
                                <div className='home__main__body__item__wrap'>
                                    <div  className='home__main__body__img'>
                                        <img src='https://images.foody.vn/res/g105/1047565/prof/s280x175/foody-upload-api-foody-mobile-117170540_1490357268-200921150618.jpg'
                                        />
                                    </div>
                                       
                                    <div className='home__main__body__address'>
                                        <div className='home__main__body__info'>
                                            <h2 className='home__main__body__info__title'>Farmers Seafood</h2>
                                            <span className='home__main__body__info__desc'>496 Nguyễn Thị Minh Khai, P. 2, Quận 3, TP. HCM</span>
                                        </div>
                                        <div className='home__main__body__promotion'>
                                            <i className='bx bxs-purchase-tag-alt home__main__body__promotion--icon'></i>
                                            Giảm món
                                        </div>
                                        <div className='home__main__body__status'>
                                            <span className='home__main__body__status--icon'></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='home__main__body__item'>
                                <div className='home__main__body__item__wrap'>
                                    <div  className='home__main__body__img'>
                                        <img src='https://images.foody.vn/res/g112/1111809/prof/s280x175/foody-upload-api-foody-mobile-co-6abcad94-211019114045.jpg'
                                        />
                                    </div>
                                       
                                    <div className='home__main__body__address'>
                                        <div className='home__main__body__info'>
                                            <h2 className='home__main__body__info__title'>Cửa Hàng Co.op Food Premium - Nguyễn Thái Học</h2>
                                            <span className='home__main__body__info__desc'>199-205 Nguyễn Thái Học, P. Phạm Ngũ Lão, Quận 1, TP. HCM</span>
                                        </div>
                                        <div className='home__main__body__promotion'>
                                            <i className='bx bxs-purchase-tag-alt home__main__body__promotion--icon'></i>
                                            Giảm món
                                        </div>
                                        <div className='home__main__body__status'>
                                            <span className='home__main__body__status--icon'></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='home__main__body__item'>
                                <div className='home__main__body__item__wrap'>
                                    <div  className='home__main__body__img'>
                                        <img src='https://images.foody.vn/res/g111/1105983/prof/s280x175/image-990296a8-220112133350.jpeg'
                                        />
                                    </div>
                                       
                                    <div className='home__main__body__address'>
                                        <div className='home__main__body__info'>
                                            <h2 className='home__main__body__info__title'>CP Five Star - 434 Nguyễn Văn Tăng</h2>
                                            <span className='home__main__body__info__desc'>434 Nguyễn Văn Tăng, P. Long Thạnh Mỹ, Quận 9, TP. HCM</span>
                                        </div>
                                        <div className='home__main__body__promotion'>
                                            <i className='bx bxs-purchase-tag-alt home__main__body__promotion--icon'></i>
                                            Giảm món
                                        </div>
                                        <div className='home__main__body__status'>
                                            <span className='home__main__body__status--icon'></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='home__main__body__item'>
                                <div className='home__main__body__item__wrap'>
                                    <div  className='home__main__body__img'>
                                        <img src='https://images.foody.vn/res/g108/1077262/prof/s280x175/image-61e02518-211029110754.jpeg'
                                        />
                                    </div>
                                       
                                    <div className='home__main__body__address'>
                                        <div className='home__main__body__info'>
                                            <h2 className='home__main__body__info__title'>G KITCHEN - Nguyễn Đình Chiểu</h2>
                                            <span className='home__main__body__info__desc'>39 Nguyễn Đình Chiểu, P. 4, Phú Nhuận, TP. HCM</span>
                                        </div>
                                        <div className='home__main__body__promotion'>
                                            <i className='bx bxs-purchase-tag-alt home__main__body__promotion--icon'></i>
                                            Giảm món
                                        </div>
                                        <div className='home__main__body__status'>
                                            <span className='home__main__body__status--icon'></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='home__main__body__loadmore'>
                            <button className='home__main__body__loadmore--btn'>
                                <span className='home__main__body__loadmore--txt'>Xem thêm</span>
                                <i className='bx bx-loader-alt'></i>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home