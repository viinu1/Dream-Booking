import React, { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Login.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import * as httpRequest from '../../api/httpRequests';

const cx = classNames.bind(styles)

 
// var token = "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJ2YW52aUBnbWFpbC5jb20iLCJqdGkiOiJhNWZhNzZlNC0zMWExLTRiNWQtYTA4Yi0xOWY2NWU1YjdiMTQiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTY5Mjc2ODg0MCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA2MSIsImF1ZCI6IlVzZXIifQ.rj7tAeqGklR4lh6UnfZQlzqjY2_3cDPCBMxYzVdQbm-Y6hppRibEXSsOadQ_cHH8jcenEoQw4B7sdR9JotTssQ";

 



export default function Login () {
    const [showpass, setShowPass] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const hideOnPassword = () => {
        setShowPass(!showpass);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(validate()){
            const fetchApi = async()=>{
                try {
                    const res = await httpRequest.post('TaiKhoan/DangNhap',{
                        email,
                        password
                    })
                    localStorage.setItem("user", JSON.stringify(res));
                    return res;
                } catch (error) {
                    console.log("Login Error");
                }
            }
            fetchApi();
        }
    }

    const validate = ()=>{
        let result = true;
        if(email === "" || email ===null){
            result = false
            
        }
        if(password === "" || password ===null){
            result = false
           
        }
        return result     
    }

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
                                onChange={e=>setEmail(e.target.value)}
                                value={email}
                            />
                            <p className={cx('error')}>{error}</p>
                        </div>
                        <div className={cx('form-control-form')}>
                            <label className={cx('form-label')}>Nhập password</label>
                            <input
                                className={cx('form-input')}
                                type={showpass ? 'text' : 'password'}
                                
                                placeholder="Vui lòng nhập mặt khẩu"
                                onChange={e=>setPassword(e.target.value)}
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
                            <p className={cx('error')}>{error}</p>
                        </div>
                        <button type='submit' className={cx('btn', 'btn-success', 'btn-login')}>Đăng nhập</button>
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
    );
}
