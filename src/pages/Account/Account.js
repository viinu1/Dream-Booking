import classnames from 'classnames/bind';
import styles from './Account.module.scss';
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import * as httpRequest from '../../api/httpRequests';
import Dialog from '../../components/Dialog';

const cx = classnames.bind(styles);
const handleDate = (date) => {
    const inputDate = new Date(date);
    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, '0');
    const day = String(inputDate.getDate()).padStart(2, '0');
    const outputDateStr = `${year}/${month}/${day}`;
    return outputDateStr;
};

export default function Account() {
    const user = useSelector((state) => state.user.user);

    const [toggle, setToggle] = useState(1);
    const toggleTab = (index) => {
        setToggle(index);
        console.log(index);
    };

    const [order, setOrder] = useState([]);
    useEffect(() => {
        const getOrderByEmail = async () => {
            try {
                const result = await httpRequest.get(`DatPhong/Email?email=${user.email}`);
                setOrder(result);
                console.log(result);
            } catch (error) {
                console.log(error);
            }
        };
        getOrderByEmail();
    }, []);

    // delete
    const [dialog, setDialog] = useState({
        message: '',
        isLoading: false,
    });
    const idOrder = useRef();
    const handleDialog = (message, isLoading) => {
        setDialog({
            message,
            isLoading,
        });
    };
    const handleDelete = (item) => {
        handleDialog('Are You Sure Delete Item??', true);
        idOrder.current = item;
    };
    // const [orderRoom,setOrderRoom] = useState([]);
    const AreUSureDelete = (choose) => {
        if (choose) {
            httpRequest.deleTe(`DatPhong/${idOrder.current}`);
            setOrder(
                order.filter((post) => {
                    return post.id !== idOrder.current;
                }),
            );
            handleDialog('', false);
        } else {
            handleDialog('', false);
        }
    };

    return (
        <div className="container my-2">
            <div className="row">
                <div className="col-lg-3">
                    <div className={cx('nav-left')}>
                        <h3 onClick={() => toggleTab(1)} className={cx(toggle === 1 ? 'pane-active' : 'pane')}>
                            Cài đặt tài khoản
                        </h3>

                        <h3 onClick={() => toggleTab(2)} className={cx(toggle === 2 ? 'pane-active' : 'pane')}>
                            Thông tin đặt phòng
                        </h3>
                        <h3 className={cx('pane')}>Đăng xuất</h3>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className={cx('nav-right')}>
                        <div className={cx('setting-account', toggle === 1 ? 'item-active' : 'item')}>
                            <div className={cx('title')}>Cài đặt tài khoản</div>
                            <form action="">
                                <div className={cx('info-control')}>
                                    <div className="w-50 d-flex gap-2 flex-column">
                                        <label className={cx('info-label')}>Email</label>
                                        <input type="text" className={cx('info-input')} disabled value={user.email} />
                                    </div>
                                    <div className="w-50 d-flex gap-2 flex-column">
                                        <label className={cx('info-label')}>Số điện thoại</label>
                                        <input type="text" className={cx('info-input')} value={user.sdt} />
                                    </div>
                                </div>
                                <div className={cx('info-control')}>
                                    <div className="w-50 d-flex gap-2 flex-column">
                                        <label className={cx('info-label')}>Họ và Tên</label>
                                        <input type="text" className={cx('info-input')} value={user.hoTen} />
                                    </div>
                                    <div className="w-50 d-flex gap-2 flex-column">
                                        <label className={cx('info-label')}>CCCD/CMND</label>
                                        <input type="text" className={cx('info-input')} value={user.cccd} />
                                    </div>
                                </div>
                                <div className={cx('info-control')}>
                                    <div className="w-100 d-flex gap-2 flex-column">
                                        <label className={cx('info-label')}>Địa chỉ</label>
                                        <input type="text" className={cx('info-input')} />
                                    </div>
                                </div>
                                <div className={cx('info-control')}>
                                    <div className="w-50 d-flex gap-2 flex-column">
                                        <label className={cx('info-label')}>Ngày sinh</label>
                                        <input
                                            type="text"
                                            className={cx('info-input')}
                                            value={handleDate(user.ngaySinh)}
                                        />
                                    </div>
                                    <div className="w-50 d-flex gap-2 flex-column">
                                        <label className={cx('info-label')}>Giới tính</label>
                                        <input
                                            type="text"
                                            className={cx('info-input')}
                                            value={user.cccd ? 'Nam' : 'Nữ'}
                                        />
                                    </div>
                                </div>

                                {/* <button className={cx('info-btn', 'btn', 'btn-success')}>Cập nhật Tài khoản</button> */}
                            </form>
                        </div>
                        <div className={cx('setting-account', toggle === 2 ? 'item-active' : 'item')}>
                            <div className={cx('title')}>Thông Tin Đặt phòng</div>
                            <table className="table table-hover table-striped">
                                <thead>
                                    <tr>
                                        {/* <th scope="col">Họ và tên</th> */}
                                        <th scope="col">email</th>
                                        <th scope="col">Tên khách sạn</th>
                                        {/* <th scope="col">id Phong</th> */}
                                        <th scope="col">Thời gian nhận phòng</th>
                                        <th scope="col">Thời gian trả phòng</th>
                                        <th scope="col">Tổng Tiền</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order?.map((item, index) => (
                                        <tr key="index">
                                            {/* <td>{item.hoTen}</td> */}
                                            <td>{item.email}</td>
                                            <td>{item.tenKhachSan}</td>
                                            {/* <td>{item.idPhong}</td> */}
                                            <td>{handleDate(item.thoiGianNhanPhong)}</td>
                                            <td>{handleDate(item.thoiGianTraPhong)}</td>
                                            <td>{item.tongTien}</td>
                                            <td>
                                                <span
                                                    className={cx('btn', 'btn-danger', 'btn-cancel')}
                                                    onClick={()=>handleDelete(item.id)}
                                                >
                                                    Hủy
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {dialog.isLoading && <Dialog onDialog={AreUSureDelete} message={dialog.message} />}
        </div>
    );
}
