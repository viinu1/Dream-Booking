import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('home')}>
            <div className={cx('banner', 'row')}>
                <div id="carouselExampleIndicators" className={cx('carousel', 'slide')} data-bs-ride="carousel">
                    <div className={cx('carousel-indicators')}>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={0}
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={1}
                            aria-label="Slide 2"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={2}
                            aria-label="Slide 3"
                        />
                    </div>
                    <div className={cx('carousel-inner')}>
                        <div className={cx('carousel-item', 'active')}>
                            <img
                                src="https://decoxdesign.com/upload/images/mau-khach-san-5-sao-05-decox-design.jpg"
                                className={cx('d-block', 'w-100', 'banner-img')}
                                alt="..."
                            />
                        </div>
                        <div className={cx('carousel-item')}>
                            <img
                                src="https://kientructrangkim.com/wp-content/uploads/2019/09/tieu-chuan-khach-san-5-sao-c.jpg"
                                className={cx('d-block', 'w-100', 'banner-img')}
                                alt="..."
                            />
                        </div>
                        <div className={cx('carousel-item')}>
                            <img
                                src="https://dyf.vn/wp-content/uploads/2021/11/noi-that-khach-san-5-sao-2.jpg"
                                className={cx('d-block', 'w-100', 'banner-img')}
                                alt="..."
                            />
                        </div>
                    </div>
                    <button
                        className={cx('carousel-control-prev')}
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                    >
                        <span className={cx('carousel-control-prev-icon')} aria-hidden="true" />
                        <span className={cx('visually-hidden')}>Previous</span>
                    </button>
                    <button
                        className={cx('carousel-control-next')}
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                    >
                        <span className={cx('carousel-control-next-icon')} aria-hidden="true" />
                        <span className={cx('visually-hidden')}>Next</span>
                    </button>
                </div>
            </div>
            {/* <div className={cx('container')}>
                <div className={cx('search-content','row')}>
                    <div className={cx('search-input')}>
                        <input type="text" placeholder="Nhập điểm đến" />
                        <FontAwesomeIcon icon={faSearch} className={cx('search-icon')} />
                    </div>
                    <div className={cx('search-date')}>
                        <div className={cx('date-start')}>
                            <input type="date" id="date-start" value="2018-07-22" />
                        </div>
                        <div className={cx('date-end')}>
                            <input type="date" id="date-end" value="2018-07-22" />
                        </div>
                        <div className={cx('number-member', 'dropdown')}>
                            <div
                                className=""
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Dropdown button
                            </div>
                            <ul className={cx('dropdown-menu')} aria-labelledby="dropdownMenuButton1">
                                <li>
                                    <div className={cx('dropdown-item')}>Action</div>
                                </li>
                                <li>
                                    <div className={cx('dropdown-item')}>Another action</div>
                                </li>
                                <li>
                                    <div className={cx('dropdown-item')}>Something else here</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className={cx('container')}>
                <section className={cx('room-list')}>
                    <div className={cx('room-list__title')}>Danh sách Phòng</div>
                    <div className={cx('row')}>
                        <div className={cx('col-lg-3')}>
                            <div className={cx('card', 'card-item')}>
                                <img
                                    src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/partner-images/20/ca/30c4e6746c52fb5bdaa2a3592c042abad405b8d4be5691abcced2be10dec.jpeg"
                                    alt="phòng khách sạn"
                                    className={cx('room-img')}
                                />
                                <div className={cx('card-body')}>
                                    <h5 className={cx('card-title')}>Room name</h5>
                                    <p className={cx('card-text')}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus velit, cursus
                                        nec varius vel, faucibus quis justo. Nunc elementum est ac nisl mattis lobortis
                                        ut sed sem. Sed arcu
                                    </p>
                                    <div className={cx('price')}>
                                        <p className={cx('card-price')}>4 $</p>
                                        <p className={cx('card-price-discount')}>3 $</p>
                                    </div>
                                    <Link className={cx('btn', 'btn-primary', 'btn-order')} to="">
                                        Order now
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-lg-3')}>
                            <div className={cx('card', 'card-item')}>
                                <img
                                    src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/partner-images/20/ca/30c4e6746c52fb5bdaa2a3592c042abad405b8d4be5691abcced2be10dec.jpeg"
                                    alt="phòng khách sạn"
                                    className={cx('room-img')}
                                />
                                <div className={cx('card-body')}>
                                    <h5 className={cx('card-title')}>Room name</h5>
                                    <p className={cx('card-text')}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus velit, cursus
                                        nec varius vel, faucibus quis justo. Nunc elementum est ac nisl mattis lobortis
                                        ut sed sem. Sed arcu
                                    </p>
                                    <div className={cx('price')}>
                                        <p className={cx('card-price')}>4 $</p>
                                        <p className={cx('card-price-discount')}>3 $</p>
                                    </div>
                                    <Link className={cx('btn', 'btn-primary', 'btn-order')} to="">
                                        Order now
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-lg-3')}>
                            <div className={cx('card', 'card-item')}>
                                <img
                                    src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/partner-images/20/ca/30c4e6746c52fb5bdaa2a3592c042abad405b8d4be5691abcced2be10dec.jpeg"
                                    alt="phòng khách sạn"
                                    className={cx('room-img')}
                                />
                                <div className={cx('card-body')}>
                                    <h5 className={cx('card-title')}>Room name</h5>
                                    <p className={cx('card-text')}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus velit, cursus
                                        nec varius vel, faucibus quis justo. Nunc elementum est ac nisl mattis lobortis
                                        ut sed sem. Sed arcu
                                    </p>
                                    <div className={cx('price')}>
                                        <p className={cx('card-price')}>1.000.000 vnđ</p>
                                        <p className={cx('card-price-discount')}>700.000 vnđ</p>
                                    </div>
                                    <Link className={cx('btn', 'btn-primary', 'btn-order')} to="">
                                        Order now
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-lg-3')}>
                            <div className={cx('card', 'card-item')}>
                                <img
                                    src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/partner-images/20/ca/30c4e6746c52fb5bdaa2a3592c042abad405b8d4be5691abcced2be10dec.jpeg"
                                    alt="phòng khách sạn"
                                    className={cx('room-img')}
                                />
                                <div className={cx('card-body')}>
                                    <h5 className={cx('card-title')}>Room name</h5>
                                    <p className={cx('card-text')}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus velit, cursus
                                        nec varius vel, faucibus quis justo. Nunc elementum est ac nisl mattis lobortis
                                        ut sed sem. Sed arcu
                                    </p>
                                    <div className={cx('price')}>
                                        <p className={cx('card-price')}>4 $</p>
                                        <p className={cx('card-price-discount')}>3 $</p>
                                    </div>
                                    <Link className={cx('btn', 'btn-primary', 'btn-order')} to="">
                                        Order now
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-lg-3')}>
                            <div className={cx('card', 'card-item')}>
                                <img
                                    src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/partner-images/20/ca/30c4e6746c52fb5bdaa2a3592c042abad405b8d4be5691abcced2be10dec.jpeg"
                                    alt="phòng khách sạn"
                                    className={cx('room-img')}
                                />
                                <div className={cx('card-body')}>
                                    <h5 className={cx('card-title')}>Room name</h5>
                                    <p className={cx('card-text')}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus velit, cursus
                                        nec varius vel, faucibus quis justo. Nunc elementum est ac nisl mattis lobortis
                                        ut sed sem. Sed arcu
                                    </p>
                                    <div className={cx('price')}>
                                        <p className={cx('card-price')}>4 $</p>
                                        <p className={cx('card-price-discount')}>3 $</p>
                                    </div>
                                    <Link className={cx('btn', 'btn-primary', 'btn-order')} to="">
                                        Order now
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-lg-3')}>
                            <div className={cx('card', 'card-item')}>
                                <img
                                    src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/partner-images/20/ca/30c4e6746c52fb5bdaa2a3592c042abad405b8d4be5691abcced2be10dec.jpeg"
                                    alt="phòng khách sạn"
                                    className={cx('room-img')}
                                />
                                <div className={cx('card-body')}>
                                    <h5 className={cx('card-title')}>Room name</h5>
                                    <p className={cx('card-text')}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus velit, cursus
                                        nec varius vel, faucibus quis justo. Nunc elementum est ac nisl mattis lobortis
                                        ut sed sem. Sed arcu
                                    </p>
                                    <div className={cx('price')}>
                                        <p className={cx('card-price')}>4 $</p>
                                        <p className={cx('card-price-discount')}>3 $</p>
                                    </div>
                                    <Link className={cx('btn', 'btn-primary', 'btn-order')} to="">
                                        Order now
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-lg-3')}>
                            <div className={cx('card', 'card-item')}>
                                <img
                                    src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/partner-images/20/ca/30c4e6746c52fb5bdaa2a3592c042abad405b8d4be5691abcced2be10dec.jpeg"
                                    alt="phòng khách sạn"
                                    className={cx('room-img')}
                                />
                                <div className={cx('card-body')}>
                                    <h5 className={cx('card-title')}>Room name</h5>
                                    <p className={cx('card-text')}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus velit, cursus
                                        nec varius vel, faucibus quis justo. Nunc elementum est ac nisl mattis lobortis
                                        ut sed sem. Sed arcu
                                    </p>
                                    <div className={cx('price')}>
                                        <p className={cx('card-price')}>4 $</p>
                                        <p className={cx('card-price-discount')}>3 $</p>
                                    </div>
                                    <Link className={cx('btn', 'btn-primary', 'btn-order')} to="">
                                        Order now
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-lg-3')}>
                            <div className={cx('card', 'card-item')}>
                                <img
                                    src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/partner-images/20/ca/30c4e6746c52fb5bdaa2a3592c042abad405b8d4be5691abcced2be10dec.jpeg"
                                    alt="phòng khách sạn"
                                    className={cx('room-img')}
                                />
                                <div className={cx('card-body')}>
                                    <h5 className={cx('card-title')}>Room name</h5>
                                    <p className={cx('card-text')}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus velit, cursus
                                        nec varius vel, faucibus quis justo. Nunc elementum est ac nisl mattis lobortis
                                        ut sed sem. Sed arcu
                                    </p>
                                    <div className={cx('price')}>
                                        <p className={cx('card-price')}>4 $</p>
                                        <p className={cx('card-price-discount')}>3 $</p>
                                    </div>
                                    <Link className={cx('btn', 'btn-primary', 'btn-order')} to="">
                                        Order now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={cx('facilities')}>
                    <div className={cx('room-list__title')}>Our Facilities</div>
                    <div className="row row-cols-5">
                        <div className="col">
                            <div className={cx('facilities-item')}>
                                <img
                                    className={cx('facilities-img')}
                                    src="https://chuyenkhachsan.com/wp-content/uploads/2017/01/khach-san-avatar-da-nang-1.jpg"
                                    alt=""
                                />
                                <div className={cx('facilities-titile')}>Hà Nội</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className={cx('facilities-item')}>
                                <img
                                    className={cx('facilities-img')}
                                    src="https://chuyenkhachsan.com/wp-content/uploads/2017/01/khach-san-avatar-da-nang-1.jpg"
                                    alt=""
                                />
                                <div className={cx('facilities-titile')}>Hà Nội</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className={cx('facilities-item')}>
                                <img
                                    className={cx('facilities-img')}
                                    src="https://chuyenkhachsan.com/wp-content/uploads/2017/01/khach-san-avatar-da-nang-1.jpg"
                                    alt=""
                                />
                                <div className={cx('facilities-titile')}>Hà Nội</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className={cx('facilities-item')}>
                                <img
                                    className={cx('facilities-img')}
                                    src="https://chuyenkhachsan.com/wp-content/uploads/2017/01/khach-san-avatar-da-nang-1.jpg"
                                    alt=""
                                />
                                <div className={cx('facilities-titile')}>Hà Nội</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className={cx('facilities-item')}>
                                <img
                                    className={cx('facilities-img')}
                                    src="https://chuyenkhachsan.com/wp-content/uploads/2017/01/khach-san-avatar-da-nang-1.jpg"
                                    alt=""
                                />
                                <div className={cx('facilities-titile')}>Hà Nội</div>
                            </div>
                        </div>
                    </div>
                    <Link className={cx('btn', 'btn-light', 'btn-more')} to="">
                        Xem Thêm
                    </Link>
                </section>
                <section className={cx('testimonials')}>
                    <div className={cx('room-list__title')}>Our Testimonials</div>
                </section>
            </div>
        </div>
    );
}

export default Home;
