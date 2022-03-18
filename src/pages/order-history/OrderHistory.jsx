import React, { useEffect } from 'react';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";
import "flatpickr/dist/themes/dark.css";

import './order-history.scss'

const OrderHistory = () => {


  const input = document.getElementsByClassName('order-history__table__item--input');
  const inputLast = document.getElementsByClassName('order-history__table__item--input-last');
  
  console.log(input)
  useEffect(() => {
    flatpickr(input, {});
    flatpickr(inputLast, {});
  },[input, inputLast])


  return (
    <div className='order-history'>
      <div className='container order-history__padding'>
        <h1 className='order-history__title'>Lịch sử đơn hàng</h1>
        <div className='order-history__label'>
          <div className='order-history__label__shopee'>ShopeeFood</div>
        </div>
        <div className='order-history__table'>
          <div className='order-history__table__list'>
            <div className='order-history__table__item'>
              <div className='order-history__table__item--name'>Trạng thái</div>
              <select name='status' className='order-history__table__item--select'>
                <option value ='All'>All</option>
                <option value ='Hoàn tất'>Hoàn tất</option>
                <option value ='Hủy'>Hủy</option>
              </select>
            </div>

            <div className='order-history__table__item'>
              <div className='order-history__table__item--name'>Từ ngày</div>
              <input value='2022-01-01' type='text' className='order-history__table__item--input' readOnly='readonly' />
            </div>

            <div className='order-history__table__item'>
              <div className='order-history__table__item--name'>Đến ngày</div>
              <input value='2022-03-01' type='text' className='order-history__table__item--input-last' readOnly='readonly'/>
            </div>

            <div className='order-history__table__item'>
              <button className='order-history__table__item--btn'>Tìm kiếm</button>
            </div>
          </div>

          <div className='order-history__table__list'>
            <div className='order-history__table__info'>STT</div>
            <div className='order-history__table__info'>Mã đơn hàng</div>
            <div className='order-history__table__info'>Thời gian</div>
            <div className='order-history__table__info'>Địa điểm</div>
            <div className='order-history__table__info'>Nhân viên</div>
            <div className='order-history__table__info'>Tổng tiền</div>
            <div className='order-history__table__info'>Trạng thái</div>
            <div className='order-history__table__info'>Chi tiết</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderHistory