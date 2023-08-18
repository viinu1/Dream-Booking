/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './AdminHeader.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGear, faGlobe } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

export default function HeaderAdmin() {
    return (
        <div className={cx('header')}>
            <div className={cx('container', 'content')}>
                <div className={cx('logo')}>BookingDreams</div>
                <nav className={cx('nav')}>
                    <div className={cx('position-relative')}>
                        <FontAwesomeIcon className={cx('notification', 'icon-nav')} icon={faBell} />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            0<span className="visually-hidden">unread messages</span>
                        </span>
                    </div>
                    <div className={cx('position-relative')}>
                        <FontAwesomeIcon className={cx('notification', 'icon-nav')} icon={faGear} />
                    </div>
                    <div className={cx('position-relative')}>
                        <FontAwesomeIcon className={cx('notification', 'icon-nav')} icon={faGlobe} />
                    </div>
                    <div className={cx('nav-avatar')}>
                        <img
                            className={cx('avatar')}
                            src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2022/05/hinh-avatar-doi-dep-2022-6-696x696.jpg?fit=700%2C20000&quality=95&ssl=1"
                            alt="ảnh đại diện"
                        />

                        <div className={cx('menu')}>
                            <a className={cx('dropdown-item')} href="#">
                                Đăng xuất
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
