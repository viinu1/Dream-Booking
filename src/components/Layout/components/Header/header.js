import React, { useState } from 'react';
import styles from './header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);
function Header() {

    const [islogin,setIslogin] = useState(false)
    const [showpass,setShowPass] = useState(false)

    const hideOnPassword = ()=>{
        setShowPass(!showpass)
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
                            <a href='#exampleModalToggle' style={{color:"#fff"}} className={cx('nav-item__link', 'btn', 'btn-primary')} role='button' data-bs-toggle="modal">
                                Đăng nhập
                            </a>
                            
                                <div
                                    className="modal fade"
                                    id="exampleModalToggle"
                                    aria-hidden="true"
                                    aria-labelledby="exampleModalToggleLabel"
                                    tabIndex={-1}
                                >
                                    <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className={cx('modal-title','login-title')} id="exampleModalToggleLabel">
                                                Đăng nhập
                                            </h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            />
                                        </div>
                                        <div className="modal-body">
                                           <form action='' method='' className={cx('form')}>
                                                <div className={cx('form-control-form')}>
                                                    <label className={cx('form-label')}>Nhập Email</label>
                                                    <input className={cx('form-input')} type='text' required placeholder='Vui lòng nhập email' />
                                                </div>
                                                <div className={cx('form-control-form')}>
                                                    <label className={cx('form-label')}>Nhập password</label>
                                                    <input className={cx('form-input')} type={showpass ? 'text' : 'password'} required placeholder='Vui lòng nhập mặt khẩu'/>
                                                    {showpass ?<FontAwesomeIcon className={cx('form-icon__eye')} icon={faEye} onClick={hideOnPassword}/> :<FontAwesomeIcon className={cx('form-icon__eyeSlash')} icon={faEyeSlash} onClick={hideOnPassword}/> }
                                                    
                                                    
                                                </div>
                                                <button className={cx('btn','btn-success','btn-login')}>Đăng nhập</button>
                                           </form>
                                        </div>
                                        <div className="modal-footer">
                                            Bạn chưa chưa có tài khoản? Đăng ký 
                                            <div
                                                className={cx('register-form-login')}
                                                data-bs-target="#exampleModalToggle2"
                                                data-bs-toggle="modal"
                                                data-bs-dismiss="modal"
                                            >
                                                 tại đây
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div
                                    className="modal fade"
                                    id="exampleModalToggle2"
                                    aria-hidden="true"
                                    aria-labelledby="exampleModalToggleLabel2"
                                    tabIndex={-1}
                                >
                                    <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                        <h5 className={cx('modal-title','login-title')} id="exampleModalToggleLabel2">
                                            Đăng ký tài khoản
                                        </h5>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        />
                                        </div>
                                        <div className="modal-body">
                                            <form action='' method='' className={cx('form')}>
                                                <div className={cx('form-control-form')}>
                                                    <label className={cx('form-label')}>Nhập họ và tên</label>
                                                    <input className={cx('form-input')} type='text' required placeholder='Vui lòng nhập họ tên' />
                                                </div>
                                                <div className={cx('form-control-form')}>
                                                    <label className={cx('form-label')}>Nhập số điện thoại</label>
                                                    <input className={cx('form-input')} type='text' required placeholder='Vui lòng nhập số điện thoại' />
                                                </div>
                                                <div className={cx('form-control-form')}>
                                                    <label className={cx('form-label')}>Nhập địa chỉ</label>
                                                    <input className={cx('form-input')} type='text' required placeholder='Vui lòng nhập địa chỉ' />
                                                </div>
                                                <div className={cx('form-control-form')}>
                                                    <label className={cx('form-label')}>Nhập Email</label>
                                                    <input className={cx('form-input')} type='text' required placeholder='Vui lòng nhập email' />
                                                </div>
                                                <div className={cx('form-control-form')}>
                                                    <label className={cx('form-label')}>Nhập password</label>
                                                    <input className={cx('form-input')} type={showpass ? 'text' : 'password'} required placeholder='Vui lòng nhập mặt khẩu'/>
                                                    {showpass ?
                                                        <FontAwesomeIcon className={cx('form-icon__eye')} icon={faEye} onClick={hideOnPassword}/> :
                                                        <FontAwesomeIcon className={cx('form-icon__eyeSlash')} icon={faEyeSlash} onClick={hideOnPassword}/> }
                                                    
                                                </div>
                                                <button className={cx('btn','btn-success','btn-login')}>Đăng ký</button>
                                           </form>
                                        </div>
                                        <div className="modal-footer">
                                        <div
                                            className={cx('backtologin')}
                                            data-bs-target="#exampleModalToggle"
                                            data-bs-toggle="modal"
                                            data-bs-dismiss="modal"
                                        >
                                            Trở lại trang đăng nhập
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                        </>
                    )}
                </ul>
            </div>
        </header>
    );
}

export default Header;
