/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import HeaderAdmin from '../components/AdminHeader';
import SidebarAdmin from '../components/SidebarAdmin';
import jwt from 'jwt-decode';
export default function AdminLayout({ children }) {
    const token = localStorage.getItem('token');
    const [roles, setRoles] = useState('');
    useEffect(() => {
        if (token) {
            const decode = jwt(token);
            const roles = decode['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
            setRoles(roles);
        }
    }, [token]);

    if (roles === 'Admin') {
        return (
            <div>
                <HeaderAdmin />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <SidebarAdmin />
                        </div>
                        <div className="col-lg-9 bg-white mt-3" style={{ borderRadius: '8px' }}>
                            <div className="content">{children}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <>
                <h4 className='d-flex align-align-items-center justify-content-center flex-column fs-1' style={{height:'100vh'}}>
                    <p align="center">You are not authorized to view this page</p>
                    <a href='/' align="center">Vui long trở về trang chủ</a>
                </h4>
                
            </>
        );
    }
}
