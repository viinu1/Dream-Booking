import React, { useEffect, useState } from 'react';
import styles from './Detail.module.scss';
import classNames from 'classnames/bind';
import {
    faCheck,
    faDoorOpen,
    faElevator,
    faFan,
    faMartiniGlass,
    faParking,
    faSnowplow,
    faStar,
    faUtensils,
    faWaterLadder,
    faWifi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Suggest from '../../components/Suggest';
import ListRoom from '../../components/ListRoom';
import { useParams } from 'react-router-dom';
import httpRequest from '../../api/httpRequests';
const cx = classNames.bind(styles);

export default function Detail() {
    const { id } = useParams();
    const [hotel, setHotel] = useState({});
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await httpRequest.get(`KhachSans/${id}`);
                setHotel(res.data);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        };
        fetchApi()
    }, [id]);

    return (
        <div className="container">
            <div className={cx('detail')}>
                <div className={cx('detail-info', 'row')}>
                    <div className={cx('detail-img', 'col-lg-5')}>
                        <img
                            className={cx('img__primary')}
                            src="https://baokhanhhoa.vn/file/e7837c02857c8ca30185a8c39b582c03/dataimages/201806/original/images5334836_PR5_1.jpg"
                            alt=""
                        />
                    </div>
                    <div className={cx('detail-content', 'col-lg-7')}>
                        <div className={cx('detail-content__name')}>
                            <div>
                                {hotel.tenKhachSan}
                                <p className={cx('detail-content__address')}>{hotel.diaChi}</p>
                            </div>
                        </div>
                        <div className={cx('detail-content__votes')}>
                            <div className="d-flex gap-2">
                                <FontAwesomeIcon icon={faStar} style={{ color: '#ff567d', fontSize: '20px' }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: '#ff567d', fontSize: '20px' }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: '#ff567d', fontSize: '20px' }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: '#ff567d', fontSize: '20px' }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: '#ff567d', fontSize: '20px' }} />
                            </div>
                            <div className={cx('detail-content__danhgia')}>4 Đánh giá</div>
                        </div>
                        <div className={cx('detail-desc')}>{hotel.gioiThieu}</div>
                        <div className={cx('detail-convenient')}>
                            <div className={cx('detail-convenient__title')}>Tiện Nghi:</div>
                            <div className="row">
                                <div className="col-lg-4 col-md-3 mb-4">
                                    <div className={cx('convenient')}>
                                        <FontAwesomeIcon icon={faDoorOpen} className={cx('convenient-icon')} />
                                        <div className={cx('convenient-desc')}>Check-in/out [express]</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-3 mb-4">
                                    <div className={cx('convenient')}>
                                        <FontAwesomeIcon icon={faWifi} className={cx('convenient-icon')} />
                                        <div className={cx('convenient-desc')}>Free Wi-Fi in all rooms!</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-3 mb-4">
                                    <div className={cx('convenient')}>
                                        <FontAwesomeIcon icon={faSnowplow} className={cx('convenient-icon')} />
                                        <div className={cx('convenient-desc')}>Daily housekeeping</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-3 mb-4">
                                    <div className={cx('convenient')}>
                                        <FontAwesomeIcon icon={faFan} className={cx('convenient-icon')} />
                                        <div className={cx('convenient-desc')}>Air conditioning</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-3 mb-4">
                                    <div className={cx('convenient')}>
                                        <FontAwesomeIcon icon={faElevator} className={cx('convenient-icon')} />
                                        <div className={cx('convenient-desc')}>Elevator</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-3 mb-4">
                                    <div className={cx('convenient')}>
                                        <FontAwesomeIcon icon={faWaterLadder} className={cx('convenient-icon')} />
                                        <div className={cx('convenient-desc')}>Pool</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-3 mb-4">
                                    <div className={cx('convenient')}>
                                        <FontAwesomeIcon icon={faUtensils} className={cx('convenient-icon')} />
                                        <div className={cx('convenient-desc')}>Restaurant</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-3 mb-4">
                                    <div className={cx('convenient')}>
                                        <FontAwesomeIcon icon={faParking} className={cx('convenient-icon')} />
                                        <div className={cx('convenient-desc')}>Car Parking</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-3 mb-4">
                                    <div className={cx('convenient')}>
                                        <FontAwesomeIcon icon={faMartiniGlass} className={cx('convenient-icon')} />
                                        <div className={cx('convenient-desc')}>Bar</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('schedule')}>
                            <div className={cx('detail-convenient__title')}>Lịnh Trình:</div>
                            <div className={cx('schedule-content')}>
                                <div className={cx('schedule-content-item')}>
                                    <FontAwesomeIcon style={{ fontSize: '1.8rem', color: '#000' }} icon={faCheck} />
                                    nhận phòng: 12h
                                </div>
                                <div className={cx('schedule-content-item')}>
                                    <FontAwesomeIcon style={{ fontSize: '1.8rem', color: '#000' }} icon={faCheck} />
                                    Trả phòng: 11h
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ListRoom data={hotel.id} name={hotel.tenKhachSan} />
                <Suggest />
            </div>
        </div>
    );
}
