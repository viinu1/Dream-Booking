import classNames from 'classnames/bind';
import React from 'react';
import styles from './dashboard.module.scss';

const cx = classNames.bind(styles);
export default function Dashboard() {
    return <div className={cx('dashboard')}>Wellcome to Admin page</div>;
}
