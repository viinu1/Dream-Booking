/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import styles from './customer.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import * as httpRequest from '../../api/httpRequests';
const cx = classNames.bind(styles);

export default function Customer() {
    // const [customer, setCustomer] = useState([]);

    // useEffect(() => {
    //     const fetchApi = async () => {
    //         try {
    //             const res = await httpRequest.get("KhachHang");
    //             setCustomer(res);
    //             console.log(res);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     fetchApi();

    // }, []);

    return (
        <div className={cx('customer')}>
            <h3 className={cx('customerTitle')}>Quản lý khách hàng</h3>
            <div className={cx('d-flex', 'align-items-center', 'justify-content-between', 'mb-3')}>
                <div className={cx('search-customer')}>
                    <input type="text" placeholder="Nhập tên khách hàng" />
                    <FontAwesomeIcon icon={faSearch} className={cx('search-icon')} />
                </div>
                
                    <span
                        className={cx('btn', 'btn-success', 'btn-add')}                        
                    >
                        Thêm khách hàng mới
                    </span>
                
            </div>
            <table className={cx('table', 'table-hover')}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên</th>
                        <th scope="col">CCCD</th>
                        <th scope="col">Giới tính</th>
                        <th scope="col">Số điện thoại</th>
                        <th scope="col">Địa chỉ</th>
                        <th scope="col">Ngày Sinh</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className={cx('formUser')}>
                    {/* {customer.map((user, index) => (
                        <tr key={index}>
                            <th>{user.id}</th>
                            <td>{user.hoten}</td>
                            <td>{user.cccd}</td>
                            <td>{user.gioiTinh ? 'Nam' : 'Nữ'}</td>
                            <td>{user.sdt}</td>
                            <td>{user.diaChi}</td>
                            <td>{user.ngaySinh}</td>
                            <td className={cx('action')}>
                                <Link to="/admin/customer/edit">
                                    <span className={cx('btn', 'btn-primary', 'btn-action')}>Edit</span>
                                </Link>
                                <span
                                    onClick={() => {
                                        alert('Bạn chắc chắn muốn xóa không?');
                                    }}
                                    href="#"
                                    className={cx('btn', 'btn-danger', 'btn-action')}
                                >
                                    Delete
                                </span>
                            </td>
                        </tr>
                    ))} */}
                </tbody>
            </table>

            
        </div>
    );
}
