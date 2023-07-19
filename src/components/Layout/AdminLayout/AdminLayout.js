/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import HeaderAdmin from '../components/AdminHeader';
import SidebarAdmin from '../components/SidebarAdmin';

export default function AdminLayout({ children }) {
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
}
