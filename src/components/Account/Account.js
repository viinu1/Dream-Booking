import React from 'react';
import classnames from 'classnames/bind';
import styles from './Account.module.scss';

const cx = classnames.bind(styles);
export default function Account() {
    return (
        <div className="container my-2">
            <div className="row">
                <div className="col-lg-3">
                    <div className={cx('nav-left')}>
                        <h3 className={cx('pane', 'active')}>Cài đặt tài khoản</h3>
                        {/* <h3 className={cx('pane')}>Hổ trợ và trợ giúp</h3> */}
                        <h3 className={cx('pane')}>Đăng xuất</h3>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className={cx('nav-right')}>
                        <div className={cx('item', 'setting-account', 'active')}>
                            <div className={cx('title')}>Cài đặt tài khoản</div>
                            <form action="">
                            <div className={cx('info-control')}>
                                    <div className="w-100 d-flex gap-2 flex-column">
                                        <label className={cx('info-label')}>Email</label>
                                        <input type="text" className={cx('info-input')} disabled value={'vanvi@gmail.com'}/>
                                    </div>
                                </div>
                                <div className={cx('info-control')}>
                                    <div className="w-50 d-flex gap-2 flex-column">
                                        <label className={cx('info-label')}>Họ và Tên</label>
                                        <input type="text" className={cx('info-input')} />
                                    </div>
                                    <div className="w-50 d-flex gap-2 flex-column">
                                        <label className={cx('info-label')}>CCCD/CMND</label>
                                        <input type="text" className={cx('info-input')} />
                                    </div>
                                </div>
                                <div className={cx('info-control')}>
                                    <div className="w-100 d-flex gap-2 flex-column">
                                        <label className={cx('info-label')}>Địa chỉ</label>
                                        <input type="text" className={cx('info-input')} />
                                    </div>
                                </div>
                                <div className={cx('info-control')}>
                                    <div className="w-50 d-flex gap-2 flex-column">
                                        <label className={cx('info-label')}>Ngày sinh</label>
                                        <input type="text" className={cx('info-input')} />
                                    </div>
                                    <div className="w-50 d-flex gap-2 flex-column">
                                        <label className={cx('info-label')}>Giới tính</label>
                                        <input type="text" className={cx('info-input')} />
                                    </div>
                                </div>

                                <button className={cx('info-btn','btn','btn-success')}>Cập nhật Tài khoản</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
