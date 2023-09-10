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
                                    Quản lý Khách hàng
                                </span>
                            </li>
                        </Link>
                        <Link to='/admin/khachsan' className={cx('sidebarItem')} style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon className={cx('sidebarIcon')} icon={faRadio} />
                            <span className={cx('sidebarLink')}>
                                Quản Lý Khách Sạn
                            </span>
                        </Link>
                        <Link to="/admin/discount" style={{ textDecoration: 'none' }}>
                            <li className={cx('sidebarItem')}>
                                <FontAwesomeIcon className={cx('sidebarIcon')} icon={faHouse} />
                                <span className={cx('sidebarLink')}>
                                    Quản Lý Mã giảm Giá
                                </span>
                            </li>
                        </Link>
                        <Link to="/admin/room" style={{ textDecoration: 'none' }}>
                            <li className={cx('sidebarItem')}>
                                <FontAwesomeIcon className={cx('sidebarIcon')} icon={faList} />
                                <span className={cx('sidebarLink')}>
                                    Quản lý phòng
                                </span>
                            </li>
                        </Link>
                        <li className={cx('sidebarItem')}>
                            <FontAwesomeIcon className={cx('sidebarIcon')} icon={faList} />
                            <Link to={`/admin/order`} className={cx('sidebarLink')}>
                                Quản lý đặt phòng
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
}
