import React, { useState } from 'react';
import styles from './header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { Register,Login } from '../../../Authen';

const cx = classNames.bind(styles);

function Header() {
    const [islogin, setIslogin] = useState(true);
    const [showpass, setShowPass] = useState(false);
    const hideOnPassword = () => {
        setShowPass(!showpass);
    };    
    const user = JSON.parse(localStorage.getItem('user'))

    return (
        <header className={cx('container-fluid', 'bg-white')}>
            <div className={cx('container', 'header')}>
                <a href="/" className={cx('logo')}>
                    <img
                        className={cx('logo__img')}
                        src="https://c8.alamy.com/comp/W1RKXM/hotel-vector-icon-illustration-creative-sign-from-icons-collection-filled-flat-hotel-icon-for-computer-and-mobile-symbol-logo-vector-graphics-W1RKXM.jpg"
                        alt=""
                    />
                </a>
                <ul className={cx('nav')}>
                    <li className={cx('nav-item')}>
                        <a className={cx('nav-item__link')} href="/">
                            Home
                        </a>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link className={cx('nav-item__link')} to="/search">
                            Room
                        </Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link className={cx('nav-item__link')} to="/">
                            Facilities
                        </Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link className={cx('nav-item__link')} to="/">
                            Contact Us
                        </Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link className={cx('nav-item__link')} to="/upload">
                            About
                        </Link>
                    </li>

                    {islogin ? (
                        <>
                            <div className={cx('account')}>
                                <img
                                    src="https://i.pinimg.com/564x/92/26/5c/92265c40c8e428122e0b32adc1994594.jpg"
                                    alt=""
                                />
                                <div className={cx('menu-account')}>
                                    <div className={cx('menu-account__item')}>Tài khoản</div>
                                    <div className={cx('menu-account__item')}>Đăng xuất</div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <a
                                href="#exampleModalToggle"
                                style={{ color: '#fff' }}
                                className={cx('nav-item__link', 'btn', 'btn-primary')}
                                role="button"
                                data-bs-toggle="modal"
                            >
                                Đăng nhập
                            </a>
                            <div
                                className="modal fade"
                                id="exampleModalToggle"
                                aria-hidden="true"
                                aria-labelledby="exampleModalToggleLabel"
                                tabIndex={-1}
                            >
                                <Login/>
                            </div>
                            <div
                                className="modal fade"
                                id="exampleModalToggle2"
                                aria-hidden="true"
                                aria-labelledby="exampleModalToggleLabel2"
                                tabIndex={-1}
                            >
                                <Register/>
                            </div>
                        </>
                    )}
                </ul>
            </div>
        </header>
    );
}

export default Header;
