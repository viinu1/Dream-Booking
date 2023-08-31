/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from 'react';
import styles from './customer.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import * as httpRequest from '../../api/httpRequests';
import Dialog from '../../components/Dialog'
import axios from 'axios';

import { useSelector } from 'react-redux';
const cx = classNames.bind(styles);

export default function Customer() {

    const isAuthenticated = useSelector(state=>state.user.islogin)

    const [customer, setCustomer] = useState([]);
    const [dialog, setDialog] = useState({
        message: '',
        isLoading: false,
    });

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await httpRequest.get('KhachHang');
                setCustomer(res);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        };
        fetchApi();
    }, []);


    const idCustomer = useRef();
    const handleDialog = (message,isLoading)=>{
        setDialog({
            message,
            isLoading
        })
    }
    const handleDelete = (item) => {
        handleDialog("Are You Sure Delete Item??",true)
        idCustomer.current =item
    };

    

    const AreUSureDelete = (choose) => {
        if (choose) {
            axios.delete(`https://localhost:44319/api/KhachHang/${idCustomer.current}`);
            setCustomer(
                customer.filter((post) => {
                    return post.id !== idCustomer.current;
                }),
            );
            handleDialog("",false)
        }else{
            handleDialog("",false)
        }
    };
    return (
        <div className={cx('customer')}>
            <h3 className={cx('customerTitle')}>Quản lý khách hàng</h3>
            <div className={cx('d-flex', 'align-items-center', 'justify-content-between', 'mb-3')}>
                <div className={cx('search-customer')}>
                    <input type="text" placeholder="Nhập tên khách hàng" />
                    <FontAwesomeIcon icon={faSearch} className={cx('search-icon')} />
                </div>
            </div>
            <table className={cx('table', 'table-hover')}>
                <thead>
                    <tr>
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
                    {customer.map((user, index) => {
                        const formattedDate = new Date(user.ngaySinh).toLocaleDateString('en-GB', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                        });
                        return (
                            <tr key={index}>
                                <td>{user.hoTen}</td>
                                <td>{user.cccd}</td>
                                <td>{user.gioiTinh ? 'Nam' : 'Nữ'}</td>
                                <td>{user.sdt}</td>
                                <td>{user.diaChi} </td>
                                <td>{formattedDate}</td>
                                <td className={cx('action')}>
                                    {/* <Link to="/admin/customer/edit">
                                        <span className={cx('btn', 'btn-primary', 'btn-action')}>Edit</span>
                                    </Link> */}
                                    <span
                                        onClick={() => handleDelete(user.id)}
                                        href="#"
                                        className={cx('btn', 'btn-danger', 'btn-action')}
                                    >
                                        Delete
                                    </span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {dialog.isLoading && <Dialog onDialog={AreUSureDelete} message={dialog.message} />}
        </div>
    );
}
