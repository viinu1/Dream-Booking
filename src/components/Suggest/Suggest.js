import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import classNames from 'classnames/bind';
import Styles from './Suggest.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(Styles);

const DATA = [
    {
        id: 1,
        nameRoom: 'São Borja Airport',
        descripton: 'Removal of Extraluminal Device from Left Eye, Open Approach',
        price: '$763.31',
        priceDiscount: '$226.90',
    },
    {
        id: 2,
        nameRoom: 'Vilankulo Airport',
        descripton: 'Excision of Peroneal Nerve, Percutaneous Approach, Diagn',
        price: '$177.10',
        priceDiscount: '$747.16',
    },
    {
        id: 3,
        nameRoom: 'Fleetlands Heliport',
        descripton: 'Bypass Innom Art to Bi Up Leg Art w Autol Vn, Open',
        price: '$196.12',
        priceDiscount: '$318.41',
    },
    {
        id: 4,
        nameRoom: 'Quảng Ngãi Airfield',
        descripton: 'Beam Radiation of Hard Palate using Photons 1 - 10 MeV',
        price: '$621.09',
        priceDiscount: '$288.61',
    }, {
        id: 5,
        nameRoom: 'Quảng Ngãi Airfield',
        descripton: 'Beam Radiation of Hard Palate using Photons 1 - 10 MeV',
        price: '$621.09',
        priceDiscount: '$288.61',
    }
];

const options = {
    margin: 10,
    responsiveClass: true,
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
    loop:true,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 1,
        },
        768: {
            items: 3,
        },
        992: {
            items: 4,
        }
    },
};
export default function Suggest() {
    return (
        <div className={cx('suggest')}>
            <div className={cx('suggest-title')}>Danh Khách sạn liên quan</div>
            
                <OwlCarousel className='owl-theme' {...options}>
                    {DATA.map((item, index) => (
                        
                            <Link key={index} to={`/detail/${item.id}`} style={{ textDecoration: 'none' }}>
                                <div className={cx('card', 'card-item')}>
                                    <img
                                        src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/partner-images/20/ca/30c4e6746c52fb5bdaa2a3592c042abad405b8d4be5691abcced2be10dec.jpeg"
                                        alt="phòng khách sạn"
                                        className={cx('room-img')}
                                    />
                                    <div className={cx('card-body')}>
                                        <h5 className={cx('card-title')}>{item.nameRoom}</h5>
                                        <p className={cx('card-text')}>{item.descripton}</p>
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
                                        <div className={cx('price')}>
                                            <p className={cx('card-price')}>{item.price}</p>
                                            <p className={cx('card-price-discount')}>{item.priceDiscount}</p>
                                        </div>
                                    
                                    </div>
                                </div>
                            </Link>
                        
                    ))}
                </OwlCarousel>
            
        </div>
    );
}
