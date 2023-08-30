import React from 'react';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../../components/Sidebar/Sidebar';
import ListRoom from '../../components/ListRoom/ListRoom';

const cx = classNames.bind(styles);
export default function Search() {
    return (
        <div className="container my-2">
            <div className={cx('search')}>
                <div className="row">
                    <div className="col-lg-3">
                        <Sidebar />
                    </div>
                    <div className="col-lg-9">
                      
                    </div>
                </div>
            </div>
        </div>
    );
}
