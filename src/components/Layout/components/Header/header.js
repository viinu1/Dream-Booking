import React, { useEffect, useState } from 'react';
import styles from './header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Register, Login } from '../../../Authen';
import { useWindowWidthAndHeight } from '../../../CustomerHook/WithHook';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

import jwt from 'jwt-decode';

const cx = classNames.bind(styles);

function Header() {
    const isLogin = useSelector((state) => state.user.isAuthenticated);
    const [toggle, setToggle] = useState(false);
    const [role, setRole] = useState('');

    const [width, height] = useWindowWidthAndHeight();
    const handleClick = () => {
        setToggle(!toggle);
    };
    const token = localStorage.getItem('token');
    useEffect(() => {
        if (token && token !== null) {
            const decode = jwt(token);
            const roles = decode['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
            setRole(roles);
        }
    }, [token]);

    const handleLogout =()=>{
        localStorage.clear()
        window.location.href='/'
    }

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
                    {width > 992 ? (
                        <>
                            <li className={cx('nav-item')}>
                                <a className={cx('nav-item__link')} href="/">
                                    Home
                                </a>
                            </li>
                            
                            <li className={cx('nav-item')}>
                                <Link className={cx('nav-item__link')} to="/">
                                    Facilities
                                </Link>
                            </li>
                            
                            <li className={cx('nav-item')}>
                                <Link className={cx('nav-item__link')} to="/about">
                                    About
                                </Link>
                            </li>
                            {role && role === 'Admin' ? (
                                <li className={cx('nav-item')}>
                                    <Link className={cx('nav-item__link')} to="/admin">
                                        Admin
                                    </Link>
                                </li>
                            ) : (
                                ''
                            )}
                        </>
                    ) : (
                        <div className="position-relative">
                            <FontAwesomeIcon
                                className={cx('icon-nav')}
                                onClick={handleClick}
                                icon={faBars}
                                width={32}
                                height={32}
                            />
                            <div
                                className={cx('nav-responsive')}
                                style={
                                    toggle
                                        ? { transform: 'translateX(0)', display: 'block' }
                                        : { transform: 'translateX(100%)', display: 'none' }
                                }
                            >
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
                            </div>
                        </div>
                    )}

                    {isLogin ? (
                        <>
                            <div className={cx('account')}>
                                <img
                                    src="https://i.pinimg.com/564x/92/26/5c/92265c40c8e428122e0b32adc1994594.jpg"
                                    alt=""
                                />
                                <div className={cx('menu-account')}>
                                    <Link
                                        to={`/account`}
                                        className={cx('menu-account__item', 'text-decoration-none', 'w-100')}
                                    >
                                        Tài khoản
                                    </Link>
                                    <Link className={cx('menu-account__item','text-decoration-none')} onClick={handleLogout}>Đăng xuất</Link>
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
                                <Login />
                            </div>
                            <div
                                className="modal fade"
                                id="exampleModalToggle2"
                                aria-hidden="true"
                                aria-labelledby="exampleModalToggleLabel2"
                                tabIndex={-1}
                            >
                                <Register />
                            </div>
                        </>
                    )}
                </ul>
            </div>
        </header>
    );
}

export default Header;
