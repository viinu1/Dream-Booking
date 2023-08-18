import React from 'react'
import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles)
export default function Sidebar() {
  return (
    <div className={cx('sidebar')}>
        <div className={cx('sortPrice','sort')}>
            <div className={cx('PriceTitle')}>Tìm kiếm theo giá</div>
            <div className={cx('PriceSort')}>
                <div className={cx('Sort-control')}>
                    <input id='under200' type='checkbox'/>
                    <label htmlFor='under200'>Dưới 200.000đ</label>
                </div>
                <div className={cx('Sort-control')}>
                    <input id='200to500' type='checkbox'/>
                    <label htmlFor='200to500'>Từ 200.000đ đến 500.000đ</label>
                </div>
                <div className={cx('Sort-control')}>
                    <input id='500to1000' type='checkbox'/>
                    <label htmlFor='500to1000'>Từ 500.000đ đến 900.000đ</label>
                </div>
                <div className={cx('Sort-control')}>
                    <input id='over1000' type='checkbox'/>
                    <label htmlFor='over1000'>Trên 1.000.000đ</label>
                </div>
            </div>
        </div>
        <div className={cx('sortPrice','sort')}>
            <div className={cx('PriceTitle')}>Tìm kiếm Tỉnh Thành</div>
            <div className={cx('PriceSort')}>
                <div className={cx('Sort-control')}>
                    <input id='under200' type='checkbox'/>
                    <label htmlFor='under200'>Hà Nội</label>
                </div>
                <div className={cx('Sort-control')}>
                    <input id='200to500' type='checkbox'/>
                    <label htmlFor='200to500'>Đà Nẵng</label>
                </div>
                <div className={cx('Sort-control')}>
                    <input id='500to1000' type='checkbox'/>
                    <label htmlFor='500to1000'>Thành Phố Hồ Chí Minh</label>
                </div>
                <div className={cx('Sort-control')}>
                    <input id='over1000' type='checkbox'/>
                    <label htmlFor='over1000'>Đà Lạt</label>
                </div>
                <div className={cx('Sort-control')}>
                    <input id='over1000' type='checkbox'/>
                    <label htmlFor='over1000'>Vũng Tàu</label>
                </div>
            </div>
        </div>
    </div>
  )
}
