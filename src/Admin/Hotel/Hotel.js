import React, { useRef, useState } from 'react';
import classnames from 'classnames/bind';
import styles from './Hotel.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import * as httpRequest from '../../api/httpRequests';

import { imgDB } from '../../until/config';
import { v4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import Dialog from '../../components/Dialog';
import { ToastContainer, toast } from 'react-toastify';


const cx = classnames.bind(styles);
export default function Hotel() {
    const [hotels, setHotels] = React.useState([]);
    const [hotel, setHotel] = React.useState([]);
    const [tinh, setTinh] = React.useState([]);
    const [files, setFiles] = useState(null);

    const [editMode, setEditMode] = useState(false);

    // thong tin khach san
    const [idTinhThanh, setIdTinh] = React.useState('');
    const [maKhachSan, setMaKs] = React.useState('');
    const [tenKhachSan, setTenKhachSan] = React.useState('');
    const [diaChi, setDiaChi] = React.useState('');
    const [gioiThieu, setGioiThieu] = React.useState('');
    const [tieuDe, setTieuDe] = React.useState('');
    const [ghiChu, setGhiChu] = React.useState('');
    // const [hinhAnh, setHinhAnhFile] = React.useState('');


    const [dialog, setDialog] = React.useState({
        message: '',
        isLoading: false,
    });
    const idHotels = useRef();
    const handleDialog = (message, isLoading) => {
        setDialog({
            message,
            isLoading,
        });
    };
    const handleDelete = (item) => {
        handleDialog('Are You Sure Delete Item??', true);
        idHotels.current = item;
    };
    const AreUSureDelete = (choose) => {
        if (choose) {
            httpRequest.deleTe(`KhachSans/${idHotels.current}`);
            setHotels(
                hotels.filter((post) => {
                    return post.id !== idHotels.current;
                }),
            );
            handleDialog('', false);
        } else {
            handleDialog('', false);
        }
    };

    React.useEffect(() => {
        
        const getHotel = async () => {
            try {
                const result = await httpRequest.get('KhachSans');
                setHotels(result);
                console.log(result);
            } catch (error) {
                console.log(error);
            }
        };
        getHotel();
    }, []);

    const handleSelectFile = (event) => {
        setFiles(event.target.files[0]);
    };

    const handleSubmit = async (e) => {
        const imgs = ref(imgDB, `Imgs${v4()}`);
        const img = await uploadBytes(imgs, files).then((data) => {
            // console.log(data, 'imgs');
            return getDownloadURL(data.ref);
        });

        const addHotel = async () => {
            try {
                const result = await httpRequest.post(`KhachSans`, {
                    idTinhThanh,
                    hinhAnh: img,
                    maKhachSan,
                    tenKhachSan,
                    diaChi,
                    gioiThieu,
                    tieuDe,
                    ghiChu,
                });
                if (result) {
                    toast.success('Bạn đã thêm thành công');
                    setTimeout(() => {
                        window.location.href='/admin/hotel'
                    }, 2000);
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    toast.error('Thêm không thành công');
                }
            }
        };
        addHotel();
    };

    const handleEdit = async (id) => {
        const imgs = ref(imgDB, `Imgs${v4()}`);
        const img = await uploadBytes(imgs, files).then((data) => {
            return getDownloadURL(data.ref);
        });
        const editHotel = async () => {
            try {
                const result = await httpRequest.put(`KhachSans/${id}`, hotel);
                console.log(result);
                if (result) {
                    toast.success('Cập nhật thành công');
                    setTimeout(() => {
                        window.location.href='/admin/hotel'
                    }, 2000);
                }
            } catch (error) {
                toast.error('Cập nhật thất bại');
                console.log(error);
            }
        };
        editHotel();
    };
    const fetchApi = async () => {
        try {
            const result = await httpRequest.get('TinhThanh');
            setTinh(result);
        } catch (error) {
            console.log(error);
        }
    };

    const handladd = () => {
        fetchApi()
        setEditMode(false);
    };

    const handleChange = (e) => {
        setHotel({ ...hotel, [e.target.name]: e.target.value });
    };
    
    const handlEdit = (id) => {
        setEditMode(true);
        fetchApi()
        const getKsById = async () => {
            try {
                const result = await httpRequest.get(`KhachSans/${id}`);
                setHotel(result);
                // console.log(result);
            } catch (error) {
                console.log(error);
            }
        };
        getKsById();
    };

    return (
        <div className={cx('hotel')}>
            <h3 className={cx('hotelTitle')}>Quản lý Khách sạn</h3>
            <div className={cx('form-searchHotel')}>
                <div className={cx('search-hotel')}>
                    <input type="text" placeholder="Nhập tên khách hàng" />
                    <FontAwesomeIcon icon={faSearch} className={cx('hotel-icon')} />
                </div>
            </div>
            <div
                className={cx('btn', 'btn-success', 'btn-addHotel')}
                onClick={handladd}
                data-bs-toggle="modal"
                data-bs-target="#addhotel"
            >
                Thêm Khách Sạn
            </div>
            <table className={cx('table', 'table-hover', 'table-hotel')}>
                <thead>
                    <tr className={cx('table-header')}>
                        <th className={cx('header-hotel')} style={{ minWidth: '200px' }} scope="col">
                            Hình ảnh
                        </th>
                       
                        <th className={cx('header-hotel')} style={{ minWidth: '150px' }} scope="col">
                            Tên Khách sạn
                        </th>
                        <th className={cx('header-hotel')} style={{ minWidth: '150px' }} scope="col">
                            Mã Khách sạn
                        </th>
                        <th className={cx('header-hotel')} style={{ minWidth: '200px' }} scope="col">
                            Địa chỉ
                        </th>
                        <th className={cx('header-hotel')} style={{ minWidth: '200px' }} scope="col">
                            Tiêu Đề
                        </th>
                        <th className={cx('header-hotel')} style={{ minWidth: '400px' }} scope="col">
                            Giới Thiệu
                        </th>
                        <th className={cx('header-hotel')} style={{ minWidth: '300px' }} scope="col">
                            Ghi Chú
                        </th>
                        <th className={cx('header-hotel')} style={{ minWidth: '200px' }} scope="col">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className={cx('formHotel')}>
                    {hotels?.map((hotel, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <img style={{ width: '100%' }} src={hotel.hinhAnh} alt="" />
                                </td>
                                {/* <td>{hotel.idTinhThanh}</td> */}
                                <td>{hotel.tenKhachSan}</td>
                                <td>{hotel.maKhachSan} </td>
                                <td>{hotel.diaChi} </td>
                                <td>{hotel.tieuDe} </td>
                                <td style={{textAlign:'justify'}}>{hotel.gioiThieu} </td>
                                <td style={{textAlign:'justify'}}>{hotel.ghiChu} </td>
                                <td className={cx('action')}>
                                    <span
                                        onClick={() => handleDelete(hotel.id)}
                                        href="#"
                                        className={cx('btn', 'btn-danger', 'btn-action')}
                                    >
                                        Delete
                                    </span>

                                    <span
                                        onClick={() => handlEdit(hotel.id)}
                                        data-bs-toggle="modal"
                                        data-bs-target="#addhotel"
                                        href="#"
                                        className={cx('btn', 'btn-success', 'btn-action', 'ms-2')}
                                    >
                                        Edit
                                    </span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div
                className="modal fade"
                id="addhotel"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                style={{ zIndex: '10000' }}
            >
                <div className="modal-dialog">
                    <div className={cx('modal-content')}>
                        <div className="modal-header">
                            <h5 className={cx('modal-title', 'modal-heading')} id="exampleModalLabel">
                               {editMode ? "Cập nhật khách sạn" : "Thêm Khách Sạn"}
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form action="" method="">
                                <div className={cx('hotel-control')}>
                                    <label htmlFor="nameKS" className={cx('hotel-label')}>
                                        Tên khách sạn
                                    </label>
                                    <input
                                        name="tenKhachSan"
                                        value={editMode ? hotel.tenKhachSan : tenKhachSan}
                                        onChange={editMode ? handleChange : (e) => setTenKhachSan(e.target.value)}
                                        type="text"
                                        className={cx('hotel-input')}
                                        required
                                    />
                                </div>
                                <div className={cx('hotel-control')}>
                                    <label htmlFor="tinhKS" className={cx('hotel-label')}>
                                        Tỉnh Thành
                                    </label>
                                    <select
                                        name="idTinhThanh"
                                        value={editMode ? hotel.idTinhThanh : idTinhThanh}
                                        onChange={editMode ? handleChange : (e) => setIdTinh(e.target.value)}
                                        className={cx('hotel-input')}
                                    >
                                        <option>-----Chọn tỉnh thành-----</option>
                                        {tinh?.map((item) => (
                                            <option value={item.id} key={item.id}>
                                                {item.tenTinhThanh}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className={cx('hotel-control')}>
                                    <label htmlFor="maKS" className={cx('hotel-label')}>
                                        Mã khách sạn
                                    </label>
                                    <input
                                        name=""
                                        maKhachSan
                                        value={editMode ? hotel.maKhachSan : maKhachSan}
                                        onChange={editMode ? handleChange : (e) => setMaKs(e.target.value)}
                                        type="text"
                                        className={cx('hotel-input')}
                                        required
                                    />
                                </div>
                                <div className={cx('hotel-control')}>
                                    <label htmlFor="addressKS" className={cx('hotel-label')}>
                                        Địa chỉ
                                    </label>
                                    <input
                                        name="diaChi"
                                        value={editMode ? hotel.diaChi : diaChi}
                                        onChange={editMode ? handleChange : (e) => setDiaChi(e.target.value)}
                                        type="text"
                                        className={cx('hotel-input')}
                                        required
                                    />
                                </div>
                                <div className={cx('hotel-control')}>
                                    <label htmlFor="GTKS" className={cx('hotel-label')}>
                                        Giới thiệu
                                    </label>
                                    <input
                                        name="gioiThieu"
                                        value={editMode ? hotel.gioiThieu : gioiThieu}
                                        onChange={editMode ? handleChange : (e) => setGioiThieu(e.target.value)}
                                        type="text"
                                        className={cx('hotel-input')}
                                        required
                                    />
                                </div>
                                <div className={cx('hotel-control')}>
                                    <label htmlFor="TDKS" className={cx('hotel-label')}>
                                        Tiêu đề
                                    </label>
                                    <input
                                        value={editMode ? hotel.tieuDe : tieuDe}
                                        name="tieuDe"
                                        onChange={editMode ? handleChange : (e) => setTieuDe(e.target.value)}
                                        type="text"
                                        className={cx('hotel-input')}
                                        required
                                    />
                                </div>
                                <div className={cx('hotel-control')}>
                                    <label htmlFor="GCKS" className={cx('hotel-label')}>
                                        Ghi Chú
                                    </label>
                                    <input
                                        value={editMode ? hotel.ghiChu : ghiChu}
                                        name="ghiChu"
                                        onChange={editMode ? handleChange : (e) => setGhiChu(e.target.value)}
                                        type="text"
                                        className={cx('hotel-input')}
                                        required
                                    />
                                </div>
                                <div className={cx('hotel-control')}>
                                    <label htmlFor="nameKS" className={cx('hotel-label')}>
                                        Hình Ảnh khách sạn
                                    </label>
                                    <input
                                        onChange={(e) => handleSelectFile(e)}
                                        type="file"
                                        className={cx('hotel-input')}
                                    />
                                    <img src={editMode? hotel?.hinhAnh: ""} alt=""/>
                                </div>
        
                            </form>
                        </div>
                        <div className="modal-footer">
                            {!editMode ? (
                                <button
                                    onClick={handleSubmit}
                                    className="btn btn-success"
                                    style={{ width: '100%', fontSize: '16px' }}
                                >
                                    Thêm
                                </button>
                            ) : (
                                <button
                                    onClick={() => handleEdit(hotel.id)}
                                    className="btn btn-success"
                                    style={{ width: '100%', fontSize: '16px' }}
                                >
                                    Cập nhật
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {dialog.isLoading && <Dialog onDialog={AreUSureDelete} message={dialog.message} />}
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
