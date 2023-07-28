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
                        <div className='d-flex'>
                            <img
                                src="https://scontent.xx.fbcdn.net/v/t1.15752-9/353739863_1280996072514678_1945119932929597176_n.png?_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=mRpoRjLigaQAX-Bq5Xd&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdT-3WTjHpEjbnMwLBigTpLvkC18PXmoqCqXrfVLyZDJxg&oe=64C9A438"
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
