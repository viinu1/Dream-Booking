import React, { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../Store/UserSlice';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const cx = classNames.bind(styles);
export default function Login() {
    const [showpass, setShowPass] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const hideOnPassword = () => {
        setShowPass(!showpass);
    };
    const dispath = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            let user = {
                email,
                password,
            };
            const result = dispath(loginUser(user));
            if (result) {
                navigate('/')
            }else{
                toast.error("Đăng nhập thất bại!")
            }
        }
    };

    const validate = () => {
        let result = true;
        if (email === '' || email === null) {
            result = false;
        }
        if (password === '' || password === null) {
            result = false;
        }
        return result;
    };

    return (
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className={cx('modal-title', 'login-title')} id="exampleModalToggleLabel">
                        Đăng nhập
                    </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit} className={cx('form')}>
                        <div className={cx('form-control-form')}>
                            <label className={cx('form-label')}>Nhập Email</label>
                            <input
                                className={cx('form-input')}
                                type="text"
                                placeholder="Vui lòng nhập email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>
                        <div className={cx('form-control-form')}>
                            <label className={cx('form-label')}>Nhập password</label>
                            <input
                                className={cx('form-input')}
                                type={showpass ? 'text' : 'password'}
                                placeholder="Vui lòng nhập mặt khẩu"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                            {showpass ? (
                                <FontAwesomeIcon
                                    className={cx('form-icon__eye')}
                                    icon={faEye}
                                    onClick={hideOnPassword}
                                />
                            ) : (
                                <FontAwesomeIcon
                                    className={cx('form-icon__eyeSlash')}
                                    icon={faEyeSlash}
                                    onClick={hideOnPassword}
                                />
                            )}
                        </div>
                        <button type="submit" className={cx('btn', 'btn-success', 'btn-login')}>
                            Đăng nhập
                        </button>
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
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"            
            />
        </div>
    );
}
