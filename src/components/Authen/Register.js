import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import httpRequest from '../../api/httpRequests';

import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

export default function Register() {
    const [showpass, setShowPass] = useState(false);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [cccd, setCCCD] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const role = 'KhachHang';

    const hideOnPassword = () => {
        setShowPass(!showpass);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            const fetchApi = async () => {
                try {
                    const res = await httpRequest.post(`TaiKhoan/DangKi?role=${role}`, {
                        hoTen: name,
                        ngaySinh: date,
                        email,
                        password,
                        confirmPassword,
                        cccd,
                        gioTinh: gender,
                        sdt: phone,
                        DiaChi: address,
                    });
                    if (res) {
                        toast.success('wowwww');
                    }
                } catch (error) {
                    console.log('false');
                }
            };
            fetchApi();
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
                    <h5 className={cx('modal-title', 'login-title')} id="exampleModalToggleLabel2">
                        Đăng ký tài khoản
                    </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit} method="" className={cx('form')}>
                        <div className={cx('form-control-form')}>
                            <label className={cx('form-label')}>Nhập họ và tên</label>
                            <input
                                className={cx('form-input')}
                                type="text"
                                required
                                placeholder="Vui lòng nhập họ tên"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className={cx('form-control-form')}>
                            <label className={cx('form-label')}>Nhập số điện thoại</label>
                            <input
                                className={cx('form-input')}
                                type="text"
                                required
                                placeholder="Vui lòng nhập số điện thoại"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className={cx('form-control-form')}>
                            <label className={cx('form-label')}>Nhập số CCCD/CMND</label>
                            <input
                                className={cx('form-input')}
                                type="text"
                                required
                                placeholder="Vui lòng nhập CCCD/CMND"
                                value={cccd}
                                onChange={(e) => setCCCD(e.target.value)}
                            />
                        </div>
                        <div className={cx('form-control-form')}>
                            <label className={cx('form-label')}>Ngày sinh</label>
                            <input
                                className={cx('form-input')}
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                        <div className={cx('form-control-form')}>
                            <label className={cx('form-label')}>Giới tính</label>
                            <select value={gender} onChange={(e) => setGender(e.target.value)}>
                                <option value={1}>Nam</option>
                                <option value={0}>Nữ</option>
                            </select>
                        </div>
                        <div className={cx('form-control-form')}>
                            <label className={cx('form-label')}>Nhập địa chỉ</label>
                            <input
                                className={cx('form-input')}
                                type="text"
                                required
                                placeholder="Vui lòng nhập địa chỉ"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div className={cx('form-control-form')}>
                            <label className={cx('form-label')}>Nhập Email</label>
                            <input
                                className={cx('form-input')}
                                type="text"
                                required
                                placeholder="Vui lòng nhập email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={cx('form-control-form')}>
                            <label className={cx('form-label')}>Nhập password</label>
                            <input
                                className={cx('form-input')}
                                type={showpass ? 'text' : 'password'}
                                required
                                placeholder="Vui lòng nhập mặt khẩu"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                        <div className={cx('form-control-form')}>
                            <label className={cx('form-label')}>Nhập lại password</label>
                            <input
                                className={cx('form-input')}
                                type={showpass ? 'text' : 'password'}
                                required
                                placeholder="Vui lòng nhập mặt khẩu"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
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
                            Đăng ký
                        </button>
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
            <ToastContainer
                position="top-right"
                autoClose={5000}
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
