import React from 'react';

import classnames from 'classnames/bind';
import styles from './OrderRoom.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const cx = classnames.bind(styles);
export default function OrderRoom() {
    return (
        <div className="container my-2">
            <div className={cx('order')}>
                <div className="row">
                    <div className="col-lg-8">
                        <div className={cx('pay')}>
                            <div className={cx('pay__header')}>Chọn Hình thức thanh toán</div>
                            <div className={cx('pay__control')}>
                                <input id="pay_money" className={cx('pay__option')} type="radio" name="pay" />
                                <label htmlFor="pay_money">Thanh toán sau</label>

                                <div className={cx('pay__money-info')}>
                                    Bạn có thể thanh toán khi tới nhận phòng nhưng có thể ảnh hưởng về giá
                                </div>
                            </div>
                            <hr />
                            <div className={cx('pay__control')}>
                                <input id="pay__cart" className={cx('pay__option')} type="radio" name="pay" />
                                <label htmlFor="pay__cart">Thanh toán Ngay</label>
                                <div className={cx('pay__money-info')}>
                                    Bạn có thể chọn thanh toán ngay bằng thẻ tín dụng hoặc phương thức thanh toán khác
                                </div>
                            </div>
                        </div>

                        <div className={cx('info')}>
                            <div className={cx('info__header')}>Vui lòng nhập thông tin</div>
                            <div className={cx('info__control')}>
                                <label htmlFor="nameUser" className={cx('info__label')}>
                                    Họ và tên như trong hộ chiếu <span style={{ color: 'red' }}>*</span>
                                </label>
                                <input type="text" id="nameUser" className={cx('info__input')} />
                            </div>
                            <div className={cx('info__control')}>
                                <label htmlFor="emailUser" className={cx('info__label')}>
                                    Email<span style={{ color: 'red' }}>*</span>
                                </label>
                                <input type="text" id="emailUser" className={cx('info__input')} />
                            </div>
                            <div className={cx('info__control')}>
                                <label htmlFor="conformemailUser" className={cx('info__label')}>
                                    Nhập lại Email<span style={{ color: 'red' }}>*</span>
                                </label>
                                <input type="text" id="conformemailUser" className={cx('info__input')} />
                            </div>
                            <div className={cx('info__control')}>
                                <label htmlFor="cccdUser" className={cx('info__label')}>
                                    Nhập CCCD/CMND<span style={{ color: 'red' }}>*</span>
                                </label>
                                <input type="text" id="cccdUser" className={cx('info__input')} />
                            </div>
                            <div className={cx('info__control')}>
                                <label htmlFor="phoneUser" className={cx('info__label')}>
                                    Số điện thoại<span style={{ color: 'red' }}>*</span>
                                </label>
                                <input type="text" id="phoneUser" className={cx('info__input')} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className={cx('room__info')}>
                            <div className={cx('room_img')}>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVuu7xLrFm4llg-TjffGjiipOjuRsYtC7Adw&usqp=CAU"
                                    alt="hihi"
                                />
                            </div>
                            <div className={cx('room__info-detail')}>
                                <div className={cx('room__info-name')}>King - Văn Vĩ Hotel</div>
                                <div className={cx('room__info-address')}>
                                    28 Đường Thi Sách, Căn hộ The sóng - Nắng House, 28 Thi Sách, Phường Thắng Tam, TP
                                    Vũng Tàu, Thắng Tam, Vung Tau, Bà Rịa-Vũng Tàu, Việt Nam, 780000
                                </div>
                            </div>
                        </div>
                        <div className={cx('discount-info')}>
                            <div className={cx('discount__control')}>
                                <img width={24} height={24} src="https://cdn6.agoda.net/images/default/ic-message-yellow-price@2x.png" alt=""/>
                                <div className={cx('discount__control-header')}>Đã tự động áp dụng phiếu giảm giá</div>
                            </div>
                            <div className={cx('discount__control','mt-2')}>
                                <input width={24} height={24} style={{display:'none'}} className={cx('discount__control-input')} type="radio" checked/>
                                <label>Đã áp dụng Phiếu Giảm Giá WEEKENDSALE</label>
                            </div>
                        </div>
                        <div className={cx('total_price')}>
                            <div className={cx('price__control')}>
                                <div className={cx('price__control-left')}>Giá của chúng tôi</div>
                                <div className={cx('price__control-right')}>
                                    2.800.900 <span style={{ textDecoration: 'underline' }}>đ</span>
                                </div>
                            </div>
                            <div className={cx('price__control','discount')}>
                                <FontAwesomeIcon className={cx('price__icon')} icon={faCheckCircle}/>
                                <div className={cx('discount__name')}>Đã áp dụng Phiếu Giảm Giá WEEKENDSALE</div>
                                <div className={cx('discount__price')}>800.900</div>
                            </div>
                            <div className={cx('price__control')}>
                                <div className={cx('price__control-left')}>Giá phòng (1 phòng x 1 đêm)</div>
                                <div className={cx('price__control-right')}>
                                    2.800.900 <span style={{ textDecoration: 'underline' }}>đ</span>
                                </div>
                            </div>
                            <div className={cx('price__control')}>
                                <div className={cx('price__control-left')}>Phí đặt trước</div>
                                <div
                                    className={cx('price__control-right')}
                                    style={{ color: '#488bf8', textTransform: 'uppercase' }}
                                >
                                    Miễn Phí
                                </div>
                            </div>
                            <hr />
                            <div className={cx('price__control')}>
                                <div className={cx('price__control-left')}>Tổng tiền</div>
                                <div className={cx('price__control-right', 'total')}>
                                    2.000.000 <span style={{ textDecoration: 'underline' }}>đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
