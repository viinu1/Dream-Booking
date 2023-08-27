/* eslint-disable jsx-a11y/scope */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Room.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import * as httpRequest from '../../api/httpRequests';
const cx = classNames.bind(styles);



export default function Room() {
    const [files, setFiles] = useState([]);
    const [rooms,setRooms] = useState([]);


    const handleChange = (event) => {
        const selectFiles = Array.from(event.target.files);
        const imageArr = selectFiles.map((file) => URL.createObjectURL(file));
        setFiles((prev)=>prev.concat(imageArr));
    };

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await httpRequest.get('KhachSans')
                setRooms(res.data);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        };
        fetchApi();
    }, [])

    return (
        <div className={cx('room')}>
            <h3 className={cx('room-title')}>Quản lý danh sách phòng</h3>
            <div className={cx('room__header')}>
                <div className={cx('room__search')}>
                    <input type="text" placeholder="Nhập loại phòng" />
                    <FontAwesomeIcon icon={faSearch} className={cx('search-icon')} />
                </div>
                <div className={cx('room__add')}>
                    <span
                        className={cx('btn', 'btn-success', 'btn-add-room')}
                        data-bs-toggle="modal"
                        data-bs-target="#addCustomer"
                    >
                        Thêm phòng mới
                    </span>
                </div>
            </div>
            <table className={cx('table', 'table-hover', 'table-room')}>
                <thead>
                    <tr className={cx('header__table')}>
                        <th scope="col">Status</th>
                        <th scope="col">Image room</th>
                        <th scope="col">Type</th>
                        <th scope="col">Price</th>
                        <th scope="col">Size</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Adults</th>
                        <th scope="col">Children</th>
                        <th scope="col" className={cx('description__table')}>
                            Description
                        </th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className={cx('formRoom')}>
                    {/* {ROOMS.map((room, index) => (
                        <tr key={index}>
                            <td>active</td>
                            <td scope="row">
                                <img className={cx('room__img')} src={room.image} alt="" />
                            </td>
                            <td>{room.type}</td>
                            <td>{room.price}đ</td>
                            <td>{room.size}</td>
                            <td>{room.amount}</td>
                            <td>{room.Adults}</td>
                            <td>{room.children}</td>
                            <td>{room.description}</td>
                            <td className={cx('action')}>
                                <a
                                    className={cx('btn', 'btn-success', 'btn-room')}
                                    data-bs-toggle="modal"
                                    data-bs-target="#addCustomer"
                                >
                                    Edit
                                </a>
                                <a
                                    onClick={() => {
                                        alert('Bạn chắc chắn muốn xóa không?');
                                    }}
                                    href="#"
                                    className={cx('btn', 'btn-danger', 'btn-room')}
                                >
                                    Delete
                                </a>
                            </td>
                        </tr>
                    ))} */}
                </tbody>
            </table>

            <div
                className="modal fade"
                id="addCustomer"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                style={{ zIndex: '10000' }}
            >
                <div className="modal-dialog">
                    <div className={cx('modal-content')}>
                        <div className="modal-header">
                            <h5 className={cx('modal-title', 'modal-heading')} id="exampleModalLabel">
                                Thêm Phòng
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form action="" className={cx('form-addRoom')}>
                                <div className={cx('control')}>
                                    <label htmlFor="">Tên phòng:</label>
                                    <br />
                                    <input id="" type="text" placeholder="Nhập Tên Phòng" required />
                                </div>
                                <div className={cx('control')}>
                                    <label htmlFor="">Số phòng:</label>
                                    <br />
                                    <input id="" type="text" placeholder="Nhập Số Phòng" required />
                                </div>
                                <div className={cx('control')}>
                                    <label htmlFor="">Trạng thái phòng:</label>
                                    <br />
                                    <input
                                        id=""
                                        type="text"
                                        placeholder="Nhập Tên Phòng"
                                        disabled
                                        required
                                        value="Sẵn sàng"
                                    />
                                </div>
                                <div className={cx('control')}>
                                    <label htmlFor="">Giá phòng:</label>
                                    <br />
                                    <input id="" type="text" placeholder="Nhập Giá Phòng" required />
                                </div>
                                <div className={cx('control')}>
                                    <label htmlFor="">Active:</label>
                                    <br />
                                    <select style={{ width: '100%' }}>
                                        <option value={1}>True</option>
                                        <option value={0}>False</option>
                                    </select>
                                </div>
                                <div className={cx('control')}>
                                    <label htmlFor="">Khách sạn:</label>
                                    <br />
                                    <select style={{ width: '100%' }}>
                                        <option value={1}>Minh Thùy</option>
                                        <option value={0}>Văn Vĩ</option>
                                    </select>
                                </div>
                                <div className={cx('control')}>
                                    <label htmlFor="">Hình ảnh:</label>
                                    <br />
                                    <input
                                        name="img"
                                        type="file"
                                        multiple
                                        onChange={handleChange}
                                        accept="image/png,image/jpeg,image/webp"
                                    />
                                    <div className={cx('list-img')}>
                                        {files &&
                                            files.map((item, index) => (
                                                <div key={index} className={cx('img')}>
                                                    <img className={cx('list-img__item')} src={item} alt="" />
                                                    <button
                                                        className={cx('btn-delete')}
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            setFiles(files.filter((e) => e !== item));
                                                        }}
                                                    >
                                                        x
                                                    </button>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-success"
                                style={{ width: '100%', fontSize: '16px' }}
                            >
                                Thêm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
