import  { useState } from 'react'

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles)

export default function Banner() {
    let today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+ today.getDate();
    const [dateStart,setDateStart] = useState()
    const [dateEnd,setDateEnd] = useState()
    const [tinh,setTentinh] = useState()



    
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
                            <input value={dateStart} onChange={e=>setDateStart(e.target.value)} type='date' className={cx('search-date','search-date__start')}/>
                        </div>
                        <div className={cx('search-control')}>
                            <FontAwesomeIcon className={cx('search-icon')} icon={faCalendar}/>
                            <input value={dateEnd} onChange={e=>setDateEnd(e.target.value)} type='date' className={cx('search-date','search-date__end')}/>
                        </div>
                        <div className={cx('search-control')}>
                            <FontAwesomeIcon className={cx('search-icon')} icon={faSearch}/>
                            <input value={tinh} onChange={e=>setTentinh(e.target.value)} type='text' className={cx('search-date','search-date__end')}/>
                        </div>
                    </form> 
                    <Link to={`/search/${tinh}/${dateStart}/${dateEnd}`}  className='btn btn-primary w-100 mt-3' style={{height:'35px',fontSize:'18px',fontWeight:'bold'}}>Tìm Kiếm</Link>            
                </div>
            </div>
  )
}
