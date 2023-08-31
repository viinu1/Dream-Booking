import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames/bind';
import styles from './RoomOrder.module.scss';
import * as httpRequest from '../../api/httpRequests';
import Dialog from '../../components/Dialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const cx = classnames.bind(styles);

const formatDate = (date)=>{
    const inputDate = new Date(date);
    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, '0');
    const day = String(inputDate.getDate()).padStart(2, '0');
    const outputDateStr = `${year}/${month}/${day}`;
    return outputDateStr;
}

export default function RoomOrder() {

    const [orders,setOrders] = useState([]);

    useEffect(()=>{
        const getOrder = async ()=>{
            try {
                const result = await httpRequest.get('DatPhong',{})
                setOrders(result)
            } catch (error) {
                console.log(error);
            }
        }
        getOrder();
    },[])

    const [dialog, setDialog] = React.useState({
        message: '',
        isLoading: false,
    });
    const idOrder = useRef();
    const handleDialog = (message,isLoading)=>{
        setDialog({
            message,
            isLoading
        })
    }
    const handleDelete = (item) => {
        handleDialog("Are You Sure Delete Item??",true)
        idOrder.current =item
    };

    

    const AreUSureDelete = (choose) => {
        if (choose) {
            httpRequest.deleTe(`DatPhong/${idOrder.current}`);
            setOrders(
                orders.filter((post) => {
                    return post.id !== idOrder.current;
                }),
            );
            handleDialog("",false)
        }else{
            handleDialog("",false)
        }
    };

    return (
        <div className={cx('hotel')}>
            <h3 className={cx('hotelTitle')}>Quản lý đặt phòng</h3>
            <div className={cx('form-searchHotel')}>
                <div className={cx('search-hotel')}>
                    <input type="text" placeholder="Nhập tên khách hàng" />
                    <FontAwesomeIcon icon={faSearch} className={cx('hotel-icon')} />
                </div>
            </div>
            <table className={cx('table', 'table-hover', 'table-hotel')}>
                <thead>
                    <tr className={cx('table-header')}>
                        <th className={cx('header-hotel')} style={{ minWidth: '200px' }} scope="col">
                           Họ Tên
                        </th>
                        <th className={cx('header-hotel')} style={{ minWidth: '150px' }} scope="col">
                            Ngày Sinh
                        </th>
                        <th className={cx('header-hotel')} style={{ minWidth: '150px' }} scope="col">
                            Email
                        </th>
                        <th className={cx('header-hotel')} style={{ minWidth: '150px' }} scope="col">
                            CCCD/CMND
                        </th>
                        <th className={cx('header-hotel')} style={{ minWidth: '150px' }} scope="col">
                            Số Điện Thoại 
                        </th>
                        <th className={cx('header-hotel')} style={{ minWidth: '300px' }} scope="col">
                            Địa Chỉ
                        </th>
                        <th className={cx('header-hotel')} style={{ minWidth: '200px' }} scope="col">
                            Phòng
                        </th>
                        <th className={cx('header-hotel')} style={{ minWidth: '200px' }} scope="col">
                            Thời gian nhận phòng
                        </th>
                        <th className={cx('header-hotel')} style={{ minWidth: '200px' }} scope="col">
                            Thời gian trả phòng
                        </th>
                        <th className={cx('header-hotel')} style={{ minWidth: '200px' }} scope="col">
                            Tổng Tiền
                        </th>
                        <th className={cx('header-hotel')} style={{ minWidth: '200px' }} scope="col">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className={cx('formHotel')}>
                    {orders?.map((order, index) => {
                        return (
                            <tr key={index}>
                                {/* <td>{order.idTinhThanh}</td> */}
                                <td>{order.hoTen}</td>
                                <td>{formatDate(order.ngaySinh)} </td>
                                <td>{order.email} </td>
                                <td>{order.cccd} </td>
                                <td>{order.sdt} </td>
                                <td>{order.diaChi}</td>
                                <td>{order.idPhong}</td>
                                <td>{formatDate(order.thoiGianNhanPhong)}</td>
                                <td>{formatDate(order.thoiGianTraPhong)}</td>
                                <td>{order.tongTien}</td>
                                <td className={cx('action')}>
                                    <span
                                        onClick={() => handleDelete(order.id)}
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
