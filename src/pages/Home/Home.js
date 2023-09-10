import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import httpRequest from '../../api/httpRequests';

const cx = classNames.bind(styles);

const facilities = [
    {
        id: 1,
        title: 'Hà Nội',
        src: 'https://chuyenkhachsan.com/wp-content/uploads/2017/01/khach-san-avatar-da-nang-1.jpg',
    },
    {
        id: 2,
        title: 'Đà Nẵng',
        src: 'https://bravatmienbac.com.vn/wp-content/uploads/2018/12/Holiday-beach-da-nang-1.jpg',
    },
    {
        id: 3,
        title: 'Vũng tàu',
        src: 'https://bazantravel.com/cdn/medias/uploads/83/83317-khu-nghi-duong-lan-rung-700x420.jpg',
    },
    {
        id: 4,
        title: 'Hà tiên',
        src: 'https://www.haydocla.com/wp-content/uploads/2021/10/Khach-san-ha-tien-gan-bien-2.jpg',
    },
    {
        id: 5,
        title: 'Hồ Chí Minh',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7a4pqqmHjB8eWa4hTHRC7TmGYWfuniR6uKw&usqp=CAU',
    },
];

function Home() {
    const [randomItems, setRandomItems] = useState([]);

    const shuffle = (array) => {
        let currentIndex = array.length;
        let temporaryValue, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

    const [hotels, setHotel] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await httpRequest.get('KhachSans');
                setHotel(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        const getDanhgia = async () => {
            try {
                const res = await httpRequest.get('DanhGia');
                const shuffledData = shuffle([...res.data]);
                const selectedItems = shuffledData.slice(0, 4);
                setRandomItems(selectedItems);
                console.log(selectedItems);
            } catch (error) {
                console.log(error);
            }
        };
        fetchApi();
        getDanhgia();
    }, []);

    return (
        <div className={cx('home')}>
            <Banner />
            <div className={cx('container')}>
                <section className={cx('room-list')}>
                    <div className={cx('room-list__title')}>Danh sách Phòng</div>
                    <div className={cx('row')}>
                        {hotels.map((item, index) => {
                            return (
                                <div className={cx('col-lg-3')} key={index}>
                                    <Link to={`/detail/${item.id}`} style={{ textDecoration: 'none' }}>
                                        <div className={cx('card', 'card-item')}>
                                            <img src={item.hinhAnh} alt="phòng khách sạn" className={cx('room-img')} />
                                            <div className={cx('card-body')}>
                                                <h5 className={cx('card-title')}>{item.tenKhachSan}</h5>
                                                <p className={cx('card-text')}>{item.gioiThieu}</p>
                                                <div className="d-flex gap-2">
                                                    <FontAwesomeIcon
                                                        icon={faStar}
                                                        style={{ color: '#ff567d', marginBottom: '8px' }}
                                                    />
                                                    <FontAwesomeIcon
                                                        icon={faStar}
                                                        style={{ color: '#ff567d', marginBottom: '8px' }}
                                                    />
                                                    <FontAwesomeIcon
                                                        icon={faStar}
                                                        style={{ color: '#ff567d', marginBottom: '8px' }}
                                                    />
                                                    <FontAwesomeIcon
                                                        icon={faStar}
                                                        style={{ color: '#ff567d', marginBottom: '8px' }}
                                                    />
                                                    <FontAwesomeIcon
                                                        icon={faStar}
                                                        style={{ color: '#ff567d', marginBottom: '8px' }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <section className={cx('facilities')}>
                    <div className={cx('room-list__title')}>Khám Phá</div>
                    <div className="row row-cols-5">
                        {facilities.map((item, index) => (
                            <div className="col" key={index}>
                                <div className={cx('facilities-item')}>
                                    <img className={cx('facilities-img')} src={item.src} alt={item.title} />
                                    <div className={cx('facilities-titile')}>{item.title}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Link className={cx('btn', 'btn-light', 'btn-more')} to="">
                        Xem Thêm
                    </Link>
                </section>
                <section className={cx('testimonials')}>
                    <div className={cx('room-list__title')}>Our Testimonials</div>
                    <div className="row">
                        {randomItems?.map((item, index) => {
                            return (
                                <div className="col-lg-3">
                                    <div className={cx('card-comment')}>
                                        <div className={cx('card-comment__title')}>Khách sạn Dream</div>
                                        {/* <div className={cx('card-comment__place')}>Ở Đà nẵng</div> */}
                                        <div className={cx('card-comment__content')}>{item.binhLuan}</div>
                                        <div className={cx('card-comment__by')}>- By {item.email}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
}
export default Home;
