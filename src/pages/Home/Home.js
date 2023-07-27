import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const data = [{"id":1,"nameRoom":"São Borja Airport","descripton":"Removal of Extraluminal Device from Left Eye, Open Approach","price":"$763.31","priceDiscount":"$226.90"},
{"id":2,"nameRoom":"Vilankulo Airport","descripton":"Excision of Peroneal Nerve, Percutaneous Approach, Diagn","price":"$177.10","priceDiscount":"$747.16"},
{"id":3,"nameRoom":"Fleetlands Heliport","descripton":"Bypass Innom Art to Bi Up Leg Art w Autol Vn, Open","price":"$196.12","priceDiscount":"$318.41"},
{"id":4,"nameRoom":"Quảng Ngãi Airfield","descripton":"Beam Radiation of Hard Palate using Photons 1 - 10 MeV","price":"$621.09","priceDiscount":"$288.61"},
{"id":5,"nameRoom":"Gabbs Airport","descripton":"Removal of Brace on Left Upper Arm","price":"$312.38","priceDiscount":"$728.48"},
{"id":6,"nameRoom":"Maun Airport","descripton":"Release Left Lesser Saphenous Vein, Open Approach","price":"$145.78","priceDiscount":"$821.62"},
{"id":7,"nameRoom":"Konge Airport","descripton":"Drainage of Left Carpal Joint, Percutaneous Approach, Diagn","price":"$424.73","priceDiscount":"$721.40"},
{"id":8,"nameRoom":"Igiugig Airport","descripton":"Removal of Autol Sub from L Acromioclav Jt, Perc Approach","price":"$244.71","priceDiscount":"$216.46"},
{"id":9,"nameRoom":"Innisfail Airport","descripton":"Extirpate matter from Conduction Mechanism, Perc Endo","price":"$188.08","priceDiscount":"$138.61"},
{"id":10,"nameRoom":"Matão Airport","descripton":"Supplement Hyoid Bone with Nonaut Sub, Perc Approach","price":"$812.71","priceDiscount":"$706.26"},
{"id":11,"nameRoom":"Malamala Airport","descripton":"Dilate L Fem Art, Bifurc, w 3 Drug-elut, Perc Endo","price":"$179.50","priceDiscount":"$657.05"},
{"id":12,"nameRoom":"Fulleborn Airport","descripton":"Fluoroscopy of Right Renal Artery using Low Osmolar Contrast","price":"$268.82","priceDiscount":"$704.25"}]


function Home() {
    const [countRoom,setCountRoom] = useState(3)
    const [countAdult,setCountAdult] = useState(3)
    const [countChildren,setCountChildren] = useState(2)

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
                <div className={cx('search','container')} style={{width:'70%'}}>
                    <div className={cx('search-title')}>Check Availability</div>              
                    <form action='' method='' className={cx('form__search')}>
                        <div className={cx('search-control')}>
                            <FontAwesomeIcon className={cx('search-icon')} icon={faCalendar}/>
                            <input type='date' className={cx('search-date','search-date__start')}/>
                        </div>
                        <div className={cx('search-control')}>
                            <FontAwesomeIcon className={cx('search-icon')} icon={faCalendar}/>
                            <input type='date' className={cx('search-date','search-date__end')}/>
                        </div>
                        <div className={cx('search-control')} role='button' id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <FontAwesomeIcon className={cx('search-icon')} icon={faUsers}/>
                            <div className={cx('number')}>
                                <div className={cx('number__people')}>
                                    <div className={cx('number__adult')}>
                                        <span>{countAdult}</span> Người lớn, <span>{countChildren}</span> trẻ em
                                    </div>
                                    <div className={cx('number__children')}>

                                    </div>
                                </div>
                                <div className={cx('number__room')}>
                                    {countRoom} Phòng
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faChevronDown} className={cx('search-icon','search-icon__down')}/>
                        </div>
                        <div className="dropdown-menu px-4" aria-labelledby="dropdownMenuLink" style={{width:'25%'}}>
                            <div className={cx('chose')}>
                                <div className={cx('chose-title')}>Phòng</div>
                                <div className={cx('chose-click')}>
                                    <button className={cx('chose-btn')}>-</button>
                                    <span>{countRoom}</span>
                                    <button className={cx('chose-btn')}>+</button>
                                </div>
                            </div>
                            <div className={cx('chose')}>
                                <div className={cx('chose-title')}>Người lớn</div>
                                <div className={cx('chose-click')}>
                                    <button className={cx('chose-btn')}>-</button>
                                    <span>{countAdult}</span>
                                    <button className={cx('chose-btn')}>+</button>
                                </div>
                            </div>
                            <div className={cx('chose')}>
                                <div className={cx('chose-title')}>Trẻ em</div>
                                <div className={cx('chose-click')}>
                                    <button className={cx('chose-btn')}>-</button>
                                    <span>{countChildren}</span>
                                    <button className={cx('chose-btn')}>+</button>
                                </div>
                            </div>
                        </div>
                    </form> 
                    <button className='btn btn-primary w-100 mt-3'>Tìm Kiếm</button>            
                </div>
            </div>
           
            <div className={cx('container')}>
                <section className={cx('room-list')}>
                    <div className={cx('room-list__title')}>Danh sách Phòng</div>
                    <div className={cx('row')}>
                        {data.map((item,index)=>(
                            <div className={cx('col-lg-3')} key={index}>
                                <div className={cx('card', 'card-item')}>
                                    <img
                                        src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/partner-images/20/ca/30c4e6746c52fb5bdaa2a3592c042abad405b8d4be5691abcced2be10dec.jpeg"
                                        alt="phòng khách sạn"
                                        className={cx('room-img')}
                                    />
                                    <div className={cx('card-body')}>
                                        <h5 className={cx('card-title')}>{item.nameRoom}</h5>
                                        <p className={cx('card-text')}>
                                           {item.descripton}
                                        </p>
                                        <div className={cx('price')}>
                                            <p className={cx('card-price')}>{item.price}</p>
                                            <p className={cx('card-price-discount')}>{item.priceDiscount}</p>
                                        </div>
                                        <Link className={cx('btn', 'btn-primary', 'btn-order')} to="">
                                            Order now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
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
                                <div className={cx('facilities-titile')}>Hồ Chí Minh</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className={cx('facilities-item')}>
                                <img
                                    className={cx('facilities-img')}
                                    src="https://chuyenkhachsan.com/wp-content/uploads/2017/01/khach-san-avatar-da-nang-1.jpg"
                                    alt=""
                                />
                                <div className={cx('facilities-titile')}>Đà Nẵng</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className={cx('facilities-item')}>
                                <img
                                    className={cx('facilities-img')}
                                    src="https://chuyenkhachsan.com/wp-content/uploads/2017/01/khach-san-avatar-da-nang-1.jpg"
                                    alt=""
                                />
                                <div className={cx('facilities-titile')}>Cân thơ</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className={cx('facilities-item')}>
                                <img
                                    className={cx('facilities-img')}
                                    src="https://chuyenkhachsan.com/wp-content/uploads/2017/01/khach-san-avatar-da-nang-1.jpg"
                                    alt=""
                                />
                                <div className={cx('facilities-titile')}>Vũng tàu</div>
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
