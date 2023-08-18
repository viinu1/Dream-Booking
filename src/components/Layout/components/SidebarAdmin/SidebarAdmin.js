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
                                <span className={cx('sidebarLink')}>
                                    Khách hàng
                                </span>
                            </li>
                        </Link>
                        <Link to="/admin/service" style={{ textDecoration: 'none' }}>
                            <li className={cx('sidebarItem')}>
                                <FontAwesomeIcon className={cx('sidebarIcon')} icon={faHouse} />
                                <span className={cx('sidebarLink')}>
                                    Dịch vụ
                                </span>
                            </li>
                        </Link>
                        <Link to="/admin/room" style={{ textDecoration: 'none' }}>
                            <li className={cx('sidebarItem')}>
                                <FontAwesomeIcon className={cx('sidebarIcon')} icon={faList} />
                                <span className={cx('sidebarLink')}>
                                    Danh sách phòng
                                </span>
                            </li>
                        </Link>
                        <li className={cx('sidebarItem')}>
                            <FontAwesomeIcon className={cx('sidebarIcon')} icon={faList} />
                            <span className={cx('sidebarLink')}>
                                Danh sách đặt phòng
                            </span>
                        </li>
                        <li className={cx('sidebarItem')}>
                            <FontAwesomeIcon className={cx('sidebarIcon')} icon={faRadio} />
                            <span className={cx('sidebarLink')}>
                                Vai trò
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
