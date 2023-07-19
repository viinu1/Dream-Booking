/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './sidebarAdmin.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faList, faRadio } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
export default function SidebarAdmin() {
    return (
        <div className={cx('sidebar')}>
            <div className={cx('wrapper')}>
                <div className={cx('sidebarMenu')}>
                    <h3 className={cx('sidebarTitle')}>Dashboard</h3>
                    <ul className={cx('sidebarList')}>
                        <Link to="/admin/customer" style={{ textDecoration: 'none' }}>
                            <li className={cx('sidebarItem')}>
                                <FontAwesomeIcon className={cx('sidebarIcon')} icon={faUser} />
                                <a href="#" className={cx('sidebarLink')}>
                                    Khách hàng
                                </a>
                            </li>
                        </Link>
                        <Link to="/admin/service" style={{ textDecoration: 'none' }}>
                            <li className={cx('sidebarItem')}>
                                <FontAwesomeIcon className={cx('sidebarIcon')} icon={faHouse} />
                                <a href="#" className={cx('sidebarLink')}>
                                    Dịch vụ
                                </a>
                            </li>
                        </Link>
                        <Link to="/admin/room" style={{ textDecoration: 'none' }}>
                            <li className={cx('sidebarItem')}>
                                <FontAwesomeIcon className={cx('sidebarIcon')} icon={faList} />
                                <a href="#" className={cx('sidebarLink')}>
                                    Danh sách phòng
                                </a>
                            </li>
                        </Link>
                        <li className={cx('sidebarItem')}>
                            <FontAwesomeIcon className={cx('sidebarIcon')} icon={faList} />
                            <a href="#" className={cx('sidebarLink')}>
                                Danh sách đặt phòng
                            </a>
                        </li>
                        <li className={cx('sidebarItem')}>
                            <FontAwesomeIcon className={cx('sidebarIcon')} icon={faRadio} />
                            <a href="#" className={cx('sidebarLink')}>
                                Vai trò
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
