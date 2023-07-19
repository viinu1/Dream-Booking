/* eslint-disable jsx-a11y/scope */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import classNames from 'classnames/bind';
import styles from './Room.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

const ROOMS = [
    {
        idRoom: 1,
        image: 'https://danviet.mediacdn.vn/296231569849192448/2022/8/28/4649abc-1-1661651678807-16616516792281980495798.jpg',
        type: 'single',
        price: 1000000,
        size: 4,
        amount: 8,
        Adults: 6,
        children: 2,
        description:
            'phong xịn lắm nhá các bạn sẽ được trãi nghiệm thoải mái nhất phong xịn lắm nhá các bạn sẽ được trãi nghiệm thoải mái nhấphong xịn lắm nhá các bạn sẽ được trãi nghiệm thoải mái nhấ',
    },
    {
        idRoom: 1,
        image: 'https://danviet.mediacdn.vn/296231569849192448/2022/8/28/4649abc-1-1661651678807-16616516792281980495798.jpg',
        type: 'single',
        price: 1000000,
        size: 4,
        amount: 8,
        Adults: 6,
        children: 2,
        description:
            'phong xịn lắm nhá các bạn sẽ được trãi nghiệm thoải mái nhất phong xịn lắm nhá các bạn sẽ được trãi nghiệm thoải mái nhấphong xịn lắm nhá các bạn sẽ được trãi nghiệm thoải mái nhấ',
    },
    {
        idRoom: 1,
        image: 'https://danviet.mediacdn.vn/296231569849192448/2022/8/28/4649abc-1-1661651678807-16616516792281980495798.jpg',
        type: 'single',
        price: 1000000,
        size: 4,
        amount: 8,
        Adults: 6,
        children: 2,
        description:
            'phong xịn lắm nhá các bạn sẽ được trãi nghiệm thoải mái nhất phong xịn lắm nhá các bạn sẽ được trãi nghiệm thoải mái nhấphong xịn lắm nhá các bạn sẽ được trãi nghiệm thoải mái nhấ',
    },
    {
        idRoom: 1,
        image: 'https://danviet.mediacdn.vn/296231569849192448/2022/8/28/4649abc-1-1661651678807-16616516792281980495798.jpg',
        type: 'single',
        price: 1000000,
        size: 4,
        amount: 8,
        Adults: 6,
        children: 2,
        description:
            'phong xịn lắm nhá các bạn sẽ được trãi nghiệm thoải mái nhất phong xịn lắm nhá các bạn sẽ được trãi nghiệm thoải mái nhấphong xịn lắm nhá các bạn sẽ được trãi nghiệm thoải mái nhấ',
    },
    {
        idRoom: 1,
        image: 'https://danviet.mediacdn.vn/296231569849192448/2022/8/28/4649abc-1-1661651678807-16616516792281980495798.jpg',
        type: 'single',
        price: 1000000,
        size: 4,
        amount: 8,
        Adults: 6,
        children: 2,
        description:
            'phong xịn lắm nhá các bạn sẽ được trãi nghiệm thoải mái nhất phong xịn lắm nhá các bạn sẽ được trãi nghiệm thoải mái nhấphong xịn lắm nhá các bạn sẽ được trãi nghiệm thoải mái nhấ',
    },
    {
        idRoom: 1,
        image: 'https://danviet.mediacdn.vn/296231569849192448/2022/8/28/4649abc-1-1661651678807-16616516792281980495798.jpg',
        type: 'single',
        price: 1000000,
        size: 4,
        amount: 8,
        Adults: 6,
        children: 2,
        description:
            'phong xịn lắm nhá các bạn sẽ được trãi nghiệm thoải mái nhất phong xịn lắm nhá các bạn sẽ được trãi nghiệm thoải mái nhấphong xịn lắm nhá các bạn sẽ được trãi nghiệm thoải mái nhấ',
    },
    {
        idRoom: 1,
        image: 'https://danviet.mediacdn.vn/296231569849192448/2022/8/28/4649abc-1-1661651678807-16616516792281980495798.jpg',
        type: 'single',
        price: 1000000,
        size: 4,
        amount: 8,
        Adults: 6,
        children: 2,
        description:
            'phong xịn lắm nhá các bạn sẽ được trãi nghiệm thoải mái nhất phong xịn lắm nhá các bạn sẽ được trãi nghiệm thoải mái nhấphong xịn lắm nhá các bạn sẽ được trãi nghiệm thoải mái nhấ',
    },
    {
        idRoom: 1,
        image: 'https://danviet.mediacdn.vn/296231569849192448/2022/8/28/4649abc-1-1661651678807-16616516792281980495798.jpg',
        type: 'single',
        price: 1000000,
        size: 4,
        amount: 8,
        Adults: 6,
        children: 2,
        description:
            'phong xịn lắm nhá các bạn sẽ được trãi nghiệm thoải mái nhất phong xịn lắm nhá các bạn sẽ được trãi nghiệm thoải mái nhấphong xịn lắm nhá các bạn sẽ được trãi nghiệm thoải mái nhấ',
    },
    {
        idRoom: 1,
        image: 'https://danviet.mediacdn.vn/296231569849192448/2022/8/28/4649abc-1-1661651678807-16616516792281980495798.jpg',
        type: 'single',
        price: 1000000,
        size: 4,
        amount: 8,
        Adults: 6,
        children: 2,
        description:
            'phong xịn lắm nhá các bạn sẽ được trãi nghiệm thoải mái nhất phong xịn lắm nhá các bạn sẽ được trãi nghiệm thoải mái nhấphong xịn lắm nhá các bạn sẽ được trãi nghiệm thoải mái nhấ',
    },
];

export default function Room() {
    return (
        <div className={cx('room')}>
            <h3 className={cx('room-title')}>Quản lý danh sách phòng</h3>
            <div className={cx('room__header')}>
                <div className={cx('room__search')}>
                    <input type="text" placeholder="Nhập loại phòng" />
                    <FontAwesomeIcon icon={faSearch} className={cx('search-icon')} />
                </div>
                <div className={cx('room__add')}>
                    <Link to="/admin/room/add" className={cx('btn', 'btn-success', 'btn-add-room')}>
                        Thêm phòng mới
                    </Link>
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
                    {ROOMS.map((room, index) => (
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
                                <Link to="/admin/room/edit">
                                    <a href="#" className={cx('btn', 'btn-primary', 'btn-room')}>
                                        Edit
                                    </a>
                                </Link>
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
                    ))}
                </tbody>
            </table>
        </div>
    );
}
