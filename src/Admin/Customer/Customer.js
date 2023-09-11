/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from 'react';
import styles from './customer.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import * as httpRequest from '../../api/httpRequests';

// import { useSelector } from 'react-redux';
const cx = classNames.bind(styles);

export default function Customer() {
    // const isAuthenticated = useSelector(state=>state.user.user)

    const [customers, setCustomers] = useState([]);
    const [customer, setCustomer] = useState({});
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await httpRequest.get('TaiKhoan/GetAllKhachHang');
                setCustomers(res);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        };
        fetchApi();
    }, []);

    const handleEditCustomer = (email) => {
        setEditMode(true)
        const getCustomer = async () => {
            try {
                const res = await httpRequest.get(`TaiKhoan/GetKhachHangByEmail?email=${email}`);
                setCustomer(res);
                console.log(customer);
            } catch (error) {
                console.log(error);
            }
        };
        getCustomer();
    };

    const handleChangCustomer =()=>{}

    return (
        <div className={cx('customer')}>
            <h3 className={cx('customerTitle')}>Quản lý khách hàng</h3>
            <div className={cx('d-flex', 'align-items-center', 'justify-content-between', 'mb-3')}>
                <div className={cx('search-customer')}>
                    <input type="text" placeholder="Nhập tên khách hàng" />
                    <FontAwesomeIcon icon={faSearch} className={cx('search-icon')} />
                </div>
            </div>
            <table className={cx('table', 'table-hover','table-striped')}>
                <thead>
                    <tr>
                        <th style={{ minWidth: '150px' }} scope="col">
                            Tên
                        </th>
                        <th style={{ minWidth: '150px' }} scope="col">
                            CCCD
                        </th>
                        <th style={{ minWidth: '100px' }} scope="col">
                            Giới tính
                        </th>
                        <th style={{ minWidth: '150px' }} scope="col">
                            Số điện thoại
                        </th>
                        <th style={{ minWidth: '150px' }} scope="col">
                            Địa chỉ
                        </th>
                        <th style={{ minWidth: '150px' }} scope="col">
                            Ngày Sinh
                        </th>
                        {/* <th style={{ minWidth: '150px' }} scope="col">
                            Action
                        </th> */}
                    </tr>
                </thead>
                <tbody className={cx('formUser')}>
                    {customers.map((user, index) => {
                        const formattedDate = new Date(user.ngaySinh).toLocaleDateString('en-GB', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                        });
                        return (
                            <tr key={index}>
                                <td>{user.hoTen}</td>
                                <td>{user.cccd}</td>
                                <td>{user.gioiTinh ? 'Nữ' : 'Nam'}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.diaChi} </td>
                                <td>{formattedDate}</td>
                                {/* <td className={cx('action')}>
                                    <span>
                                        <span
                                            data-bs-toggle="modal"
                                            data-bs-target="#editCustomer"
                                            onClick={() => handleEditCustomer(user.email)}
                                            className={cx('btn', 'btn-primary', 'btn-action')}
                                        >
                                            Edit
                                        </span>
                                    </span>
                                </td> */}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div
                className="modal fade"
                id="editCustomer"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                style={{ zIndex: '10000' }}
            >
                <div className="modal-dialog">
                    <div className={cx('modal-content')}>
                        <div className="modal-header">
                            <h5 className={cx('modal-title', 'modal-heading')} id="exampleModalLabel">
                                Cập Nhập Khách Hàng
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form action="" method="">
                                <div className={cx('hotel-control')}>
                                    <label htmlFor="nameKS" className={cx('hotel-label')}>
                                        Họ và tên
                                    </label>
                                    <input
                                        name='hoTen'
                                        // value={editMode?customer.hoTen:""}
                                        onChange={handleChangCustomer}
                                        type="text"
                                        className={cx('hotel-input')}
                                        required
                                    />
                                </div>
                                <div className={cx('hotel-control')}>
                                    <label htmlFor="nameKS" className={cx('hotel-label')}>
                                        CCCD 
                                    </label>
                                    <input
                                        name='hoTen'
                                        // value={editMode?customer.hoTen:""}
                                        onChange={handleChangCustomer}
                                        type="text"
                                        className={cx('hotel-input')}
                                        required
                                    />
                                </div>
                                <div className={cx('hotel-control')}>
                                    <label htmlFor="nameKS" className={cx('hotel-label')}>
                                        Giới tính 
                                    </label>
                                    <select>
                                        <option value="">Nam</option>
                                        <option value="">Nữ</option>
                                    </select>
                                </div>
                                <div className={cx('hotel-control')}>
                                    <label htmlFor="nameKS" className={cx('hotel-label')}>
                                        Số điện thoại 
                                    </label>
                                    <input
                                        name='hoTen'
                                        // value={editMode?customer.hoTen:""}
                                        onChange={handleChangCustomer}
                                        type="text"
                                        className={cx('hotel-input')}
                                        required
                                    />
                                </div>
                                <div className={cx('hotel-control')}>
                                    <label htmlFor="nameKS" className={cx('hotel-label')}>
                                        Địa chỉ  
                                    </label>
                                    <input
                                        name='hoTen'
                                        // value={editMode?customer.hoTen:""}
                                        onChange={handleChangCustomer}
                                        type="text"
                                        className={cx('hotel-input')}
                                        required
                                    />
                                </div>
                                <div className={cx('hotel-control')}>
                                    <label htmlFor="nameKS" className={cx('hotel-label')}>
                                       Ngày Sinh
                                    </label>
                                    <input
                                        name='hoTen'
                                        // value={editMode?customer.hoTen:""}
                                        onChange={handleChangCustomer}
                                        type="date"
                                        className={cx('hotel-input')}
                                        required
                                    />
                                </div>
                                
                            </form>
                        </div>
                        <div className="modal-footer">
                            
                                <button
                                    // onClick={()=>handleEdit(customer.email)}
                                    className="btn btn-success"
                                    style={{ width: '100%', fontSize: '16px' }}
                                >
                                    Cập nhật
                                </button>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
