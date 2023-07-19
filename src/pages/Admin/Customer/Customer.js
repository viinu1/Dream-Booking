/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './customer.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const USERS = [
    {
        id: 1,
        name: 'Văn Vĩ',
        email: 'phaaaa@gmail.com',
        sodt: '0901231231',
    },
    {
        id: 2,
        name: 'Minh Thùy',
        email: 'phaaaa@gmail.com',
        sodt: '0901231231',
    },
    {
        id: 3,
        name: 'Thành Khang',
        email: 'phaaaa@gmail.com',
        sodt: '0901231231',
    },
    {
        id: 4,
        name: 'Phương Thanh',
        email: 'phaaaa@gmail.com',
        sodt: '0901231231',
    },
    {
        id: 5,
        name: 'Thái Bảo',
        email: 'phaaaa@gmail.com',
        sodt: '0901231231',
    },
    {
        id: 6,
        name: 'Gia Bảo',
        email: 'phaaaa@gmail.com',
        sodt: '0901231231',
    },
    {
        id: 7,
        name: 'Tiến Đạt',
        email: 'phaaaa@gmail.com',
        sodt: '0901231231',
    },
    {
        id: 8,
        name: 'Trấn Thành',
        email: 'phaaaa@gmail.com',
        sodt: '0901231231',
    },
    {
        id: 9,
        name: 'Lý Hải',
        email: 'phaaaa@gmail.com',
        sodt: '0901231231',
    },
    {
        id: 10,
        name: 'Trường Giang',
        email: 'phaaaa@gmail.com',
        sodt: '0901231231',
    },
];

export default function Customer() {
    return (
        <div className={cx('customer')}>
            <h3 className={cx('customerTitle')}>Quản lý khách hàng</h3>
            <div className={cx('d-flex', 'align-items-center', 'justify-content-between', 'mb-3')}>
                <div className={cx('search-customer')}>
                    <input type="text" placeholder="Nhập tên khách hàng" />
                    <FontAwesomeIcon icon={faSearch} className={cx('search-icon')} />
                </div>
                <Link to="/admin/customer/add">
                    <a className={cx('btn', 'btn-success', 'btn-add')}>Thêm khách hàng mới</a>
                </Link>
            </div>
            <table className={cx('table', 'table-hover')}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Email</th>
                        <th scope="col">Số điện thoại</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className={cx('formUser')}>
                    {USERS.map((user, index) => (
                        <tr key={index}>
                            <th>{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.sodt}</td>
                            <td className={cx('action')}>
                                <Link to="/admin/customer/edit">
                                    <a href="#" className={cx('btn', 'btn-primary', 'btn-action')}>
                                        Edit
                                    </a>
                                </Link>
                                <a
                                    onClick={() => {
                                        alert('Bạn chắc chắn muốn xóa không?');
                                    }}
                                    href="#"
                                    className={cx('btn', 'btn-danger', 'btn-action')}
                                >
                                    Delete
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
