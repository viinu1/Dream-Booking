import React from 'react';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('container')}>
                <div className="row">
                    <div className="col-lg-3 d-flex align-items-center justify-content-center">
                        <div className='d-flex w-50'>
                            <img
                                src="https://c8.alamy.com/comp/W1RKXM/hotel-vector-icon-illustration-creative-sign-from-icons-collection-filled-flat-hotel-icon-for-computer-and-mobile-symbol-logo-vector-graphics-W1RKXM.jpg"
                                alt=""
                                className={cx('footer-img__logo')}
                            />
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex align-items-center justify-content-center flex-column">
                        <div className={cx('footer-title')}>Trợ giúp</div>
                        <ul className={cx('footer-nav')}>
                            <li className={cx('footer-content__item')}>
                                <a className={cx('footer-content__link')} href="/">Trung tâm trợ giúp</a>
                            </li>
                            <li className={cx('footer-content__item')}>
                                <a className={cx('footer-content__link')} href="/">Câu hỏi thương gặp</a>
                            </li>
                            <li className={cx('footer-content__item')}>
                                <a className={cx('footer-content__link')} href="/">Chính sách bảo mật</a>
                            </li>
                            <li className={cx('footer-content__item')}>
                                <a className={cx('footer-content__link')} href="/">Điều khoản sử dụng</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 d-flex align-items-center justify-content-center flex-column">
                        <div className={cx('footer-title')}>Công ty</div>
                        <ul className={cx('footer-nav')}>
                            <li className={cx('footer-content__item')}>
                                <a className={cx('footer-content__link')} href="/">Tuyển dụng</a>
                            </li>
                            <li className={cx('footer-content__item')}>
                                <a className={cx('footer-content__link')} href="/">Về chúng tôi</a>
                            </li>
                            <li className={cx('footer-content__item')}>
                                <a className={cx('footer-content__link')} href="/">Báo chí</a>
                            </li>
                            <li className={cx('footer-content__item')}>
                                <a className={cx('footer-content__link')} href="/">Nhật kí mạng</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 d-flex align-items-center justify-content-center flex-column">
                    <div className={cx('footer-title')}>Liên hệ</div>
                        <ul className={cx('footer-nav')}>
                            <li className={cx('footer-content__item')}>
                                <a className={cx('footer-content__link')} href="/">Zalo: 0901614258</a>
                            </li>
                            <li className={cx('footer-content__item')}>
                                <a className={cx('footer-content__link')} href="/">Email: pvanvi@gmail.com</a>
                            </li>
                            <li className={cx('footer-content__item')}>
                                <a className={cx('footer-content__link')} href="/">Facebook: Minh Thùy</a>
                            </li>
                            <li className={cx('footer-content__item')}>
                                <a className={cx('footer-content__link')} href="/">website: dream-booking.netlify.app</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
