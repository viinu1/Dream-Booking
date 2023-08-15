import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ListRoom.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const cx = classNames.bind(styles);

export default function ListRoom({ data, name }) {
    const [rooms, setListRooms] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:3001/room?idKhachSan=${data}`)
            .then((res) => {
                setListRooms(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }, [data]);

    return (
        <div className={cx('listRoom')}>
            <div className={cx('listRoom__header')}>Danh sách phòng</div>
            <div className={cx('room')}>
                {rooms.map((room, index) => {
                    if (room.active === true) {
                        return (
                            <div key={index} className={cx('room-item')}>
                                <div className={cx('room-img')}>
                                    <img
                                        src="https://baokhanhhoa.vn/file/e7837c02857c8ca30185a8c39b582c03/dataimages/201806/original/images5334836_PR5_1.jpg"
                                        alt=".."
                                    />
                                </div>
                                <div className={cx('room-info')}>
                                    <div className={cx('room-name')}>{room.tenPhong}</div>
                                    <div className={cx('room-desc')}>{room.desc}</div>
                                    <div className={cx('room-price')}>
                                        ${room.giaPhong} /night
                                        <a href="/" className={cx('btn', 'btn-success', 'btn-book')}>
                                            Book Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}
