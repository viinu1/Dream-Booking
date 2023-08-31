import React, { useEffect, useState } from 'react';

import classnames from 'classnames/bind';
import styles from './OrderRoom.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import * as httpRequest from '../../api/httpRequests';
import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';



const cx = classnames.bind(styles);

const night = (start, end) => {
    const startDateObj = new Date(start);
    const endDateObj = new Date(end);
    if (startDateObj > endDateObj) {
        return;
    }
    const timeDifference = endDateObj - startDateObj;
    const daysDifference1 = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference1;
};
export default function OrderRoom() {

    const { idHotel , id} = useParams();
    const user = useSelector((state) => state.user.user);
    const [room, setRoom] = useState({});
    const [mas, setMas] = useState([]);
    const [address, setAddress] = useState('');
    const [timeCome, setTimeCome] = useState('');
    const [timeBack, setTimeBack] = useState('');
    const [hoTen, setHoTen] = useState(user.hoTen);
    const [email, setEmail] = useState(user.email);
    const [ngaySinh, setNgaySinh] = useState(user.ngaySinh);
    const [cccd, setCCCD] = useState(user.cccd);
    const [sdt, setSDT] = useState(user.sdt);
    const [selectedOption, setSelectedOption] = useState(null);
    

    useEffect(() => {
        const getRooms = async () => {
            try {
                const result = await httpRequest.get(`Phong/${id}`);
                setRoom(result);
                // console.log(result);
                return result;
            } catch (error) {
                console.log(error);
            }
        };
        
        const getMaByIdKs = async () => {
            try {
                const result = await httpRequest.get(`MaGiamGia/GetByIdKs?id=${idHotel}`);
                setMas(result);
                console.log(result);
                return result;
            } catch (error) {
                console.log(error);
            }
        };

        getMaByIdKs()
        getRooms();
    }, [id]);
    const time = night(timeCome, timeBack);

    const handleOrder = () => {
        const bookingNow = async () => {
            try {
                const result = await httpRequest.post(`DatPhong`, {
                    hoTen,
                    ngaySinh,
                    email,
                    cccd,
                    sdt,
                    diaChi: address,
                    idPhong: id,
                    thoiGianNhanPhong: timeCome,
                    thoiGianTraPhong: timeBack,
                    maGiamGia: String(selectedOption),
                    tongTien: room.giaPhong * (isNaN(time) ? 1 : time) - room.giaPhong*(selectedOption/100),
                });
                if (result) {
                    toast.success('Bạn Đã đặt phòng thành Công');
                }
            } catch (error) {
                toast.error("Vui lòng nhập đủ thông tin")
            }
        };
        bookingNow();
    };

    return (
        <div className="container my-2">
            <div className={cx('order')}>
                <div className="row">
                    <div className="col-lg-8">
                        <div className={cx('info')}>
                            <div className={cx('info__header')}>Vui lòng nhập thông tin</div>
                            <div className={cx('info__control')}>
                                <label htmlFor="nameUser" className={cx('info__label')}>
                                    Họ và tên như trong hộ chiếu <span style={{ color: 'red' }}>*</span>
                                </label>
                                <input
                                    type="text"
                                    id="nameUser"
                                    className={cx('info__input')}
                                    value={hoTen}
                                    onChange={(e) => setHoTen(e.target.value)}
                                />
                            </div>
                            <div className={cx('info__control')}>
                                <label htmlFor="dateUser" className={cx('info__label')}>
                                    Ngày Sinh <span style={{ color: 'red' }}>*</span>
                                </label>
                                <input
                                    type="date"
                                    id="dateUser"
                                    value={ngaySinh}
                                    onChange={(e) => setNgaySinh(e.target.value)}
                                    className={cx('info__input')}
                                />
                            </div>
                            <div className={cx('info__control')}>
                                <label htmlFor="emailUser" className={cx('info__label')}>
                                    Email<span style={{ color: 'red' }}>*</span>
                                </label>
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="emailUser"
                                    className={cx('info__input')}
                                />
                            </div>
                            <div className={cx('info__control')}>
                                <label htmlFor="addresslUser" className={cx('info__label')}>
                                    Địa chỉ<span style={{ color: 'red' }}>*</span>
                                </label>
                                <input
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    type="text"
                                    id="addresslUser"
                                    className={cx('info__input')}
                                />
                            </div>

                            <div className={cx('info__control', 'gap-2', 'flex-row')}>
                                <div className="w-50">
                                    <label htmlFor="dateComelUser" className={cx('info__label')}>
                                        Ngày nhận phòng<span style={{ color: 'red' }}>*</span>
                                    </label>
                                    <input
                                        value={timeCome}
                                        onChange={(e) => setTimeCome(e.target.value)}
                                        type="date"
                                        id="dateComelUser"
                                        className={cx('info__input')}
                                    />
                                </div>
                                <div className="w-50">
                                    <label htmlFor="dateBacklUser" className={cx('info__label')}>
                                        Ngày trả phòng<span style={{ color: 'red' }}>*</span>
                                    </label>
                                    <input
                                        value={timeBack}
                                        onChange={(e) => setTimeBack(e.target.value)}
                                        type="date"
                                        id="dateBacklUser"
                                        className={cx('info__input')}
                                    />
                                </div>
                            </div>

                            <div className={cx('info__control')}>
                                <label htmlFor="cccdUser" className={cx('info__label')}>
                                    Nhập CCCD/CMND<span style={{ color: 'red' }}>*</span>
                                </label>
                                <input
                                    value={cccd}
                                    onChange={(e) => setCCCD(e.target.value)}
                                    type="text"
                                    id="cccdUser"
                                    className={cx('info__input')}
                                />
                            </div>
                            <div className={cx('info__control')}>
                                <label htmlFor="phoneUser" className={cx('info__label')}>
                                    Số điện thoại<span style={{ color: 'red' }}>*</span>
                                </label>
                                <input
                                    value={sdt}
                                    onChange={(e) => setSDT(e.target.value)}
                                    type="text"
                                    id="phoneUser"
                                    className={cx('info__input')}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className={cx('room__info')}>
                            <div className={cx('room_img')}>
                                <img src={room.hinhAnh} alt="hihi" />
                            </div>
                            <div className={cx('room__info-detail')}>
                                <div className={cx('room__info-name')}>{room.tenPhong}</div>
                                <div className={cx('room__info-address')}>{room.moTa}</div>
                            </div>
                        </div>
                        <div className={cx('discount-info')}>
                            <div className={cx('discount__control','flex-row','d-flex')}>
                                <img
                                    width={24}
                                    height={24}
                                    src="https://cdn6.agoda.net/images/default/ic-message-yellow-price@2x.png"
                                    alt=""
                                />
                                <div className={cx('discount__control-header')}>Mã Giảm Giá</div>
                            </div>
                            <div className={cx('discount__control', 'mt-2')}>
                                {mas?.map((ma,index)=>(
                                    

                                    <div key={index} className='d-flex gap-2 mb-3'>
                                        <input
                                            name="maDiscount"
                                            id={`discount${index}`}
                                            value={ma.giaTri}
                                            className={cx('discount__control-input')}
                                            type="radio"
                                            onChange={e=>setSelectedOption(e.target.value)}
                                        />
                                        <label htmlFor={`discount${index}`}>Phiếu Giảm Giá {ma.ma}</label>
                                    </div>
                                ))}
                            </div>
                           
                        </div>
                        <div className={cx('total_price')}>
                            <div className={cx('price__control')}>
                                <div className={cx('price__control-left')}>Giá của chúng tôi</div>
                                <div className={cx('price__control-right')}>
                                    {room.giaPhong ? (room.giaPhong).toLocaleString('en-US') : 0} <span style={{ textDecoration: 'underline' }}>đ</span>
                                </div>
                            </div>
                            <div className={cx('price__control', 'discount')}>
                                <FontAwesomeIcon className={cx('price__icon')} icon={faCheckCircle} />
                                <div className={cx('discount__name')}>Đã áp dụng Phiếu Giảm Giá</div>
                                <div className={cx('discount__price')}>{room.giaPhong ? (room.giaPhong*(selectedOption/100)).toLocaleString('en-US'):0} đ</div>
                            </div>
                            <div className={cx('price__control')}>
                                <div className={cx('price__control-left')}>
                                    Giá phòng (1 phòng x {isNaN(time) ? 1 : time} đêm)
                                </div>
                                <div className={cx('price__control-right')}>
                                    {room.giaPhong ? (room.giaPhong * (isNaN(time) ? 1 : time)).toLocaleString('en-US'):0}
                                    <span style={{ textDecoration: 'underline' }}>đ</span>
                                </div>
                            </div>
                            <div className={cx('price__control')}>
                                <div className={cx('price__control-left')}>Phí đặt trước</div>
                                <div
                                    className={cx('price__control-right')}
                                    style={{ color: '#488bf8', textTransform: 'uppercase' }}
                                >
                                    Miễn Phí
                                </div>
                            </div>
                            <hr />
                            <div className={cx('price__control')}>
                                <div className={cx('price__control-left')}>Tổng tiền</div>
                                <div className={cx('price__control-right', 'total')}>
                                    {room.giaPhong ? (room.giaPhong * (isNaN(time) ? 1 : time) - room.giaPhong*(selectedOption/100)).toLocaleString('en-US'):0}
                                    <span style={{ textDecoration: 'underline' }}>đ</span>
                                </div>
                            </div>
                            <div onClick={handleOrder} className={cx('btn', 'btn-success', 'btn-order')}>
                                Đặt ngay
                            </div>
                            
                        </div>
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
