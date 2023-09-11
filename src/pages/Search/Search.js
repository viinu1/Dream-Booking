import React, { useEffect, useState } from 'react';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../../components/Sidebar/Sidebar';
import ListRoom from '../../components/ListRoom/ListRoom';
import { Link, useParams } from 'react-router-dom';
import * as httpRequest from '../../api/httpRequests';

const cx = classNames.bind(styles);
export default function Search() {
    const { tentinh, start, end } = useParams();
    console.log(tentinh, start, end);

    const [search, setSearchs] = useState([]);

    useEffect(() => {
        const getSearch = async () => {
            try {
                const result = await httpRequest.get(
                    `Phong/SearchRoom?diaDiem=${tentinh}&ngayBatDau=${start}&ngayKetThuc=${end}`,
                );
                setSearchs(result);
                console.log(result);
            } catch (error) {
                console.log(error);
            }
        };
        getSearch();
    }, [end, start, tentinh]);

    return (
        <div className="container my-2">
            <div className={cx('search')}>
                {/* <div className="row"> */}
                    {search.length>0 ? search.map((room, index) => {
                        return (
                            <div key={index} className={cx('room-item')}>
                                <div className={cx('room-img')}>
                                    <img src={room.hinhAnh} alt=".." />
                                </div>
                                <div className={cx('room-info')}>
                                    <div className={cx('room-name')}>{room.tenPhong}</div>
                                    <div className={cx('room-desc')}>{room.moTa}</div>
                                    <div className={cx('room-number')}>
                                        Số lượng người lớn: {room.soLuongNguoiLon} <br /> Số lượng trẻ em:{' '}
                                        {room.soLuongTreEm}
                                    </div>
                                    {/* <div className={cx('room-desc')}></div> */}
                                    <div className={cx('room-price')}>
                                        <span>{room.giaPhong.toLocaleString('en-US')} đ/đêm</span>
                                    </div>
                                </div>
                                <div>
                                    <Link
                                        to={`/${room.idKhachSan}/${room.id}/order`}
                                        className={cx('btn', 'btn-success', 'btn-book')}
                                    >
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        );
                    }): <div className={cx('not-search')}>Không tìm thấy kết quả</div>}
                {/* </div> */}
            </div>
        </div>
    );
}
