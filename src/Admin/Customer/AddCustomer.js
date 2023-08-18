import React from 'react';
import classNames from 'classnames/bind';
import styles from './customer.module.scss';

const cx = classNames.bind(styles);
export default function AddCustomer() {
    return (
        <div className={cx('customerAdd')}>
            <h2 className={cx('customerTitle')}>Thêm khách hàng mới</h2>
            <form method="" action="" className={cx('form-add')}>
                <div className={cx('form-add__control')}>
                    <label className={cx('form-add__label')} for="nameCustomer">
                        Tên khách hàng
                    </label>
                    <input type="text" id="nameCustomer" placeholder="Nhập tên khách hàng" />
                </div>
                <div className={cx('form-add__control')}>
                    <label className={cx('form-add__label')} for="phoneCustomer">
                        Số điện thoại
                    </label>
                    <input type="text" id="phoneCustomer" placeholder="Nhập số điện thoại khách hàng" />
                </div>
                <div className={cx('form-add__control')}>
                    <label className={cx('form-add__label')} for="emailCustomer">
                        Email
                    </label>
                    <input type="text" id="emailCustomer" placeholder="Nhập Email khách hàng" />
                </div>
                <button className={cx('btn', 'btn-primary', 'btn-form__add')}>Add new Customer</button>
            </form>
        </div>
    );
}
