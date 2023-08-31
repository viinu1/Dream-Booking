import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ListRoom.module.scss';
import * as httpRequest from '../../api/httpRequests';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

export default function ListRoom({ id,name }) {
    const [rooms, setListRooms] = useState([]);
    // console.log(data);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await httpRequest.get(`Phong/GetByKhachSan?id=${id}`);
                setListRooms(res);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        };
        fetchApi();
    }, [id]);

    return (
        <div className={cx('listRoom')}>
            <div className={cx('listRoom__header')}>Danh sách phòng</div>
            <div className={cx('room')}>
                {rooms.map((room, index) => {
                    return (
                        <div key={index} className={cx('room-item')}>
                            <div className={cx('room-img')}>
                                <img src={room.hinhAnh} alt=".." />
                            </div>
                            <div className={cx('room-info')}>
                                <div className={cx('room-name')}>{room.tenPhong}</div>
                                <div className={cx('room-desc')}>{room.moTa}</div>
                                <div className={cx('room-price')}>
                                    <span>{room.giaPhong} đ/night</span>
                                </div>
                            </div>
                            <div>
                                <Link to={`/${id}/${room.id}/order`} className={cx('btn', 'btn-success', 'btn-book')}>
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
