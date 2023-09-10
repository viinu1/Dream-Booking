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
    faUtensils,
    faWaterLadder,
    faWifi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Suggest from '../../components/Suggest';
import ListRoom from '../../components/ListRoom';
import { useParams } from 'react-router-dom';
import * as httpRequest from '../../api/httpRequests';
import Comment from '../../components/Comment';
const cx = classNames.bind(styles);

export default function Detail() {
    const { id } = useParams();
    const [hotel, setHotel] = useState();

    useEffect(()=>{
        const getHotel = async()=>{
            try {
                const result = await httpRequest.get(`KhachSans/${id}`)
                setHotel(result)
                console.log(result);
            } catch (error) {
                console.log(error);
            }
        }
        getHotel()
    },[id])

    const [message, setMessage] = useState()

    const callbackFunction = (childData) => {
      setMessage(childData)
    }
    console.log(message);

    return (
        <div className="container">
            <div className={cx('detail')}>
                <div className={cx('detail-info', 'row')}>
                    <div className={cx('detail-img', 'col-lg-5')}>
                        <img
                            className={cx('img__primary')}
                            src={hotel?.hinhAnh}
                            alt=""
                        />
                    </div>
                    <div className={cx('detail-content', 'col-lg-7')}>
                        <div className={cx('detail-content__name')}>
                            <div>
                                {hotel?.tenKhachSan}
                                <p className={cx('detail-content__address')}>{hotel?.diaChi}</p>
                            </div>
                        </div>
                        <div className={cx('detail-content__votes')}>
                            <div className="d-flex gap-2">
                                {message?.rate} sao
                            </div>
                            <div className={cx('detail-content__danhgia')}>{message?.rateLength} Đánh giá</div>
                        </div>
                        <div className={cx('detail-desc')}>{hotel?.gioiThieu}</div>
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
                <ListRoom id={hotel?.id} name={hotel?.tenKhachSan}/>

                <Comment id={hotel?.id} name={hotel?.tenKhachSan} parentCallback={callbackFunction}/>
            </div>
        </div>
    );
}
