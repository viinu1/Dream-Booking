import React, { useState } from 'react'

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown, faUsers } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles)

export default function Banner() {
    const [countRoom,setCountRoom] = useState(1)
    const [countAdult,setCountAdult] = useState(1)
    const [countChildren,setCountChildren] = useState(0)

    let today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+ today.getDate();
    console.log(date);
  return (
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
                    <button className='btn btn-primary w-100 mt-3' style={{height:'35px',fontSize:'18px',fontWeight:'bold'}}>Tìm Kiếm</button>            
                </div>
            </div>
  )
}
