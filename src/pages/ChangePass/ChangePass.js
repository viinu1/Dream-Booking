import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './ChangePass.module.scss';
import * as httpRequest from '../../api/httpRequests';
import { ToastContainer, toast } from 'react-toastify';

const cx = classNames.bind(styles);
export default function ChangePass() {
    const [change, setChange] = useState(false);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [passConform, setPassConform] = useState('');
    const [token, settoken] = useState('');

    const handSendEmail = () => {
        const getForgot = async () => {
            try {
                const res = await httpRequest.post(`TaiKhoan/Forgot-Password?email=${email}`);
                if (res) {
                    setChange(true);
                    toast.success('Token đã gởi đển email của bạn');
                }
            } catch (error) {
                console.log(error);
            }
        };
        getForgot();
    };

    const handSubmit =()=>{
        const getForgot = async () => {
            try {
                const res = await httpRequest.post(`TaiKhoan/Reset-Password`,{
                    password:pass,
                    confirmPassword:passConform,
                    email:email,
                    token:token
                });
                if (res) {
                    toast.success('Đổi mật khẩu thành công');
                    setTimeout(() => {
                        window.location.href = "/"
                    }, 2000);
                }
            } catch (error) {
                console.log(error);
            }
        };
        getForgot();
    }
    return (
        <div className="container my-5">
            <div className={cx('changepass')}>
                <h1>Change Password</h1>
                <br />
                <form className={cx('change__form')}>
                    <div className={cx('change__control')}>
                        <label htmlFor="email">Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            placeholder="Vui lòng nhập Email"
                        />
                    </div>
                    {change ? (
                        <>
                            <div className={cx('change__control')}>
                                <label htmlFor="email">Nhập mật khẩu</label>
                                <input
                                    value={pass}
                                    onChange={(e) => setPass(e.target.value)}
                                    type="password"
                                    placeholder="Vui lòng nhập mật khẩu"
                                />
                            </div>
                            <div className={cx('change__control')}>
                                <label htmlFor="email">Nhập lại mặt khẩu</label>
                                <input
                                    value={passConform}
                                    onChange={(e) => setPassConform(e.target.value)}
                                    type="password"
                                    placeholder="Vui lòng nhập lại mật khẩu"
                                />
                            </div>
                            <div className={cx('change__control')}>
                                <label htmlFor="email">Token</label>
                                <input
                                    value={token}
                                    onChange={(e) => settoken(e.target.value)}
                                    type="text"
                                    placeholder="Vui lòng nhập Token"
                                />
                            </div>
                        </>
                    ) : (
                        ''
                    )}
                    {change ? (
                        <div className={cx('btn', 'btn-success', 'btn-send')} onClick={handSubmit}>
                            Send
                        </div>
                    ) : (
                        <div className={cx('btn', 'btn-success', 'btn-send')} onClick={handSendEmail}>
                            Send
                        </div>
                    )}
                </form>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                // newestOnTop={false}
                closeOnClick
                // rtl={false}
                draggable
                theme="light"
                style={{ zIndex: '10000000' }}
            />
        </div>
    );
}
