import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ListRoom.module.scss';
import httpRequest from '../../api/httpRequests';

const cx = classNames.bind(styles);

export default function ListRoom({ data }) {
    const [rooms, setListRooms] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await httpRequest.get(`Phong`, {
                    idKhachSan: data,
                });
                setListRooms(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchApi();
        // console.log(rooms);
    }, [data]);

    return (
        <div className={cx('listRoom')}>
            <div className={cx('listRoom__header')}>Danh sách phòng</div>
            <div className={cx('room')}>
                {rooms.map((room, index) => {
                    
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
                                <div className={cx('room-desc')}>{room.moTa}</div>
                                <div className={cx('room-price')}>
                                    <span>{room.giaPhong} đ/night</span>
                                </div>
                            </div>
                            <div>
                                <a href="/" className={cx('btn', 'btn-success', 'btn-book')}>
                                    Book Now
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
