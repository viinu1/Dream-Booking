/* eslint-disable jsx-a11y/scope */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Room.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import * as httpRequest from '../../api/httpRequests';
import uploadImagesToFirebase from '../../until/uploadImagesToFirebase';
import Dialog from '../../components/Dialog'
const cx = classNames.bind(styles);

export default function Room() {
    const [files, setFiles] = useState([]);
    const [listImg, setListImg] = useState([]);
    const [error,setError] = useState()

    const [hotels, setHotels] = useState([]);
    const [rooms, setRooms] = useState([]);

    const [idKhachSan, setIdKhachSan] = useState('');
    const [tenPhong, setTenPhong] = useState('');
    const [soPhong, setSoPhong] = useState('');
    const [giaPhong, setGiaPhong] = useState('');
    const [loai, setLoai] = useState('');
    const [moTa, setMoTa] = useState('');
    const [soLuongNguoiLon, SetSoLuongNguoiLon] = useState('');
    const [soLuongTreEm, SetSoLuongTreEm] = useState('');
    useEffect(() => {
        const getHotel = async () => {
            try {
                const result = await httpRequest.get('KhachSans');
                setHotels(result);
                console.log(result);
            } catch (error) {
                console.log(error);
            }
        };
        const getPhong = async () => {
            try {
                const result = await httpRequest.get(`Phong`);
                setRooms(result);
            } catch (error) {
                console.log(error);
            }
        };
        getPhong();
        getHotel();
    }, []);
    // handle Image
    const handleChange = async (event) => {
        const selectFiles = Array.from(event.target.files);
        const imageArr = selectFiles.map((file) => URL.createObjectURL(file));
        setFiles((prev) => prev.concat(imageArr));

        setListImg(selectFiles);
    };
    const handleSubmit = async () => {
        const uploadedImageUrls = await uploadImagesToFirebase(listImg);
        const fetchApi = async () => {
            try {
                const res = await httpRequest.post(`Phong`, {
                    idKhachSan,
                    tenPhong,
                    soPhong,
                    giaPhong: Number(giaPhong),
                    loai: Number(loai),
                    hinhAnh: uploadedImageUrls,
                    moTa,
                    soLuongNguoiLon: Number(soLuongNguoiLon),
                    soLuongTreEm: Number(soLuongTreEm),
                });
                if (res) {
                    window.location.href = '/admin/room';
                }
            } catch (error) {
                setError('Thêm không thành công')
            }
        };
        fetchApi();
    };

    const [dialog, setDialog] = useState({
        message: '',
        isLoading: false,
    });
    const idRooms = useRef();
    const handleDialog = (message,isLoading)=>{
        setDialog({
            message,
            isLoading
        })
    }
    const handleDelete = (item) => {
        handleDialog("Are You Sure Delete Item??",true)
        idRooms.current =item
    };
    const AreUSureDelete = (choose) => {
        if (choose) {
            httpRequest.deleTe(`Phong/${idRooms.current}`);
            setHotels(
                rooms.filter((post) => {
                    return post.id !== idRooms.current;
                }),
            );
            handleDialog("",false)
        }else{
            handleDialog("",false)
        }
    };
    return (
        <div className={cx('room')}>
            <h3 className={cx('room-title')}>Quản lý danh sách phòng</h3>
            <div className={cx('room__header')}>
                <div className={cx('room__search')}>
                    <input type="text" placeholder="Nhập loại phòng" />
                    <FontAwesomeIcon icon={faSearch} className={cx('search-icon')} />
                </div>
                <div className={cx('room__add')}>
                    <span
                        className={cx('btn', 'btn-success', 'btn-add-room')}
                        data-bs-toggle="modal"
                        data-bs-target="#addCustomer"
                    >
                        Thêm phòng mới
                    </span>
                </div>
            </div>
            <table className={cx('table', 'table-hover', 'table-room')}>
                <thead>
                    <tr className={cx('header__table')}>
                        <th style={{ minWidth: '150px' }} scope="col">
                            id Khách Sạn
                        </th>
                        <th style={{ minWidth: '200px' }} scope="col">
                            Hình ảnh
                        </th>
                        <th style={{ minWidth: '200px' }} scope="col">
                            Tên Phòng
                        </th>
                        <th style={{ minWidth: '100px' }} scope="col">
                            Số Phòng
                        </th>
                        <th style={{ minWidth: '200px' }} scope="col">
                            Giá Phòng
                        </th>
                        <th style={{ minWidth: '100px' }} scope="col">
                            Loại
                        </th>
                        <th style={{ minWidth: '450px' }} scope="col">
                            Mô tả
                        </th>
                        <th style={{ minWidth: '120px' }} scope="col">
                            SL Người lớn
                        </th>
                        <th style={{ minWidth: '100px' }} scope="col">
                            SL trẻ em
                        </th>
                        <th style={{ minWidth: '200px' }} scope="col">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className={cx('formRoom')}>
                    {rooms?.map((room, index) => {
                        const result = room.hinhAnh.split(' ');
                        result.splice(-1);
                        const formattedNumber = new Intl.NumberFormat('en-US').format(room.giaPhong);
                        return (
                            <tr key={index}>
                                <td>{room.idKhachSan}</td>

                                <td scope="row">
                                    <img className={cx('room__img')} src={result[0]} alt="" />
                                </td>
                                <td>{room.tenPhong}</td>
                                <td>{room.soPhong}</td>
                                <td>{formattedNumber} <span style={{textDecoration:'underline'}}>đ</span></td>
                                <td>{room.loai}</td>
                                <td className={cx('room-mota')}>{room.moTa}</td>
                                <td>{room.soLuongNguoiLon}</td>
                                <td>{room.soLuongTreEm}</td>
                                <td className={cx('action')}>
                                    
                                    <a
                                        onClick={() => handleDelete(room.id)}
                                        href="#"
                                        className={cx('btn', 'btn-danger', 'btn-room')}
                                    >
                                        Delete
                                    </a>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div
                className="modal fade"
                id="addCustomer"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                style={{ zIndex: '10000' }}
            >
                <div className="modal-dialog">
                    <div className={cx('modal-content')}>
                        <div className="modal-header">
                            <h5 className={cx('modal-title', 'modal-heading')} id="exampleModalLabel">
                                Thêm Phòng
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form action="" className={cx('form-addRoom')}>
                                <div className={cx('control')}>
                                    <label htmlFor="">Tên phòng:</label>
                                    <br />
                                    <input
                                        id=""
                                        onChange={(e) => setTenPhong(e.target.value)}
                                        type="text"
                                        value={tenPhong}
                                        placeholder="Nhập Tên Phòng"
                                        required
                                    />
                                </div>
                                <div className={cx('control')}>
                                    <label htmlFor="">Số phòng:</label>
                                    <br />
                                    <input
                                        onChange={(e) => setSoPhong(e.target.value)}
                                        value={soPhong}
                                        id=""
                                        type="text"
                                        placeholder="Nhập Số Phòng"
                                        required
                                    />
                                </div>

                                <div className={cx('control')}>
                                    <label htmlFor="">Giá phòng:</label>
                                    <br />
                                    <input
                                        onChange={(e) => setGiaPhong(e.target.value)}
                                        id=""
                                        value={giaPhong}
                                        type="text"
                                        placeholder="Nhập Giá Phòng"
                                        required
                                    />
                                </div>
                                <div className={cx('control')}>
                                    <label htmlFor="">Mô Tả:</label>
                                    <br />
                                    <input
                                        onChange={(e) => setMoTa(e.target.value)}
                                        id=""
                                        value={moTa}
                                        type="text"
                                        placeholder="Nhập mô tả"
                                        required
                                    />
                                </div>
                                <div className={cx('control')}>
                                    <label htmlFor="">Loại</label>
                                    <br />
                                    <input
                                        type="text"
                                        value={loai}
                                        onChange={(e) => setLoai(e.target.value)}
                                        placeholder="Nhập loại"
                                        required
                                    />
                                </div>
                                <div className={cx('control')}>
                                    <label htmlFor="">Số lượng người lớn</label>
                                    <br />
                                    <input
                                        type="text"
                                        value={soLuongNguoiLon}
                                        onChange={(e) => SetSoLuongNguoiLon(e.target.value)}
                                        placeholder="Nhập số lượng người lớn"
                                        required
                                    />
                                </div>
                                <div className={cx('control')}>
                                    <label htmlFor="">Số lượng trẻ em</label>
                                    <br />
                                    <input
                                        type="text"
                                        value={soLuongTreEm}
                                        onChange={(e) => SetSoLuongTreEm(e.target.value)}
                                        placeholder="Nhập số lượng trẻ em"
                                        required
                                    />
                                </div>
                                <div className={cx('control')}>
                                    <label htmlFor="">Khách sạn:</label>
                                    <br />
                                    <select
                                        value={idKhachSan}
                                        onChange={(e) => setIdKhachSan(e.target.value)}
                                        style={{ width: '100%' }}
                                    >
                                        <option>-----Chọn Khách Sạn-----</option>
                                        {hotels?.map((hotel, index) => (
                                            <option value={hotel.id} key={index}>
                                                {hotel.tenKhachSan}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className={cx('control')}>
                                    <label htmlFor="">Hình ảnh:</label>
                                    <br />
                                    <input
                                        name="img"
                                        type="file"
                                        multiple
                                        onChange={(e) => handleChange(e)}
                                        accept="image/png,image/jpeg,image/webp"
                                    />
                                    <div className={cx('list-img')}>
                                        {files &&
                                            files.map((item, index) => (
                                                <div key={index} className={cx('img')}>
                                                    <img className={cx('list-img__item')} src={item} alt="" />
                                                    <button
                                                        className={cx('btn-delete')}
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            setFiles(files.filter((e) => e !== item));
                                                        }}
                                                    >
                                                        x
                                                    </button>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                                <p style={{color:'red',fontSize:'16px',textAlign:'center'}}>{error}</p>
                            </form>
                            
                        </div>
                        
                        <div className="modal-footer">
                            <button
                                onClick={handleSubmit}
                                className="btn btn-success"
                                style={{ width: '100%', fontSize: '16px' }}
                            >
                                Thêm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {dialog.isLoading && <Dialog onDialog={AreUSureDelete} message={dialog.message} />}
        </div>
    );
}
