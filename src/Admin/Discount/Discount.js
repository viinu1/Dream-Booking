import classNames from 'classnames/bind';
import styles from './Discount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import * as httpRequest from '../../api/httpRequests';
import Dialog from '../../components/Dialog/Dialog';
import { ToastContainer, toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
export default function Discount() {
    const [discounts, setDiscounts] = useState([]);
    const [discount, setDiscount] = useState([]);
    const [hotels, setHotels] = useState([]);

    const [ma, setMa] = useState('');
    const [giaTri, setGiaTri] = useState('');
    const [idKhachSan, setIdKhachSan] = useState('');

    const [editMode, setEditMode] = useState(false);
    // const navigate = useNavigate();

    useEffect(() => {
        const getMa = async () => {
            try {
                const res = await httpRequest.get('MaGiamGia');
                setDiscounts(res);
            } catch (error) {
                console.log(error);
            }
        };
        getMa();
    }, []);
    const getHotel = async () => {
        try {
            const result = await httpRequest.get('KhachSans');
            setHotels(result);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };
    const handleAddMa = () => {
        setEditMode(false);
        getHotel();
    };

    const handleSubmit = () => {
        const addDiscount = async () => {
            try {
                const result = await httpRequest.post(`MaGiamGia`, {
                    idKhachSan,
                    ma,
                    giaTri,
                });
                if (result) {
                    toast.success("Bạn đã thêm thành công")
                    setTimeout(() => {
                        window.location.href="/admin/discount"
                    }, 2000);
                }
            } catch (error) {
                console.log(error);
            }
        };
        addDiscount();
    };

    //delete
    const [dialog, setDialog] = useState({
        message: '',
        isLoading: false,
    });
    const idDiscount = useRef();
    const handleDialog = (message, isLoading) => {
        setDialog({
            message,
            isLoading,
        });
    };
    const handleDelete = (item) => {
        handleDialog('Are You Sure Delete Item??', true);
        idDiscount.current = item;
    };
    const AreUSureDelete = (choose) => {
        if (choose) {
            httpRequest.deleTe(`MaGiamGia?id=${idDiscount.current}`);
            setDiscounts(
                discounts.filter((post) => {
                    return post.id !== idDiscount.current;
                }),
            );
            handleDialog('', false);
        } else {
            handleDialog('', false);
        }
    };

    // edit
    const handleChangeData = (e) => {
        setDiscount({ ...discount, [e.target.name]: e.target.value });
    };
    const handleEdit = (id) => {
        setEditMode(true);
        const getMagiamById = async () => {
            try {
                const result = await httpRequest.get(`MaGiamGia/GetById?id=${id}`);
                setDiscount(result);
            } catch (error) {
                console.log(error);
            }
        };
        getMagiamById();
        getHotel();
    };
    
    const handleSubmitEdit = (id) => {
        const editDiscount = async () => {
            try {
                const result = await httpRequest.put(`MaGiamGia?id=${id}`,discount);
                if(result){
                    toast.success('Cập nhật thành công')
                    setTimeout(() => {
                        window.location.href='/admin/discount'
                    }, 3000);
                } 
            } catch (error) {
                console.log(error);
            }
        };
        editDiscount();
    };

    return (
        <div className={cx('Discount')}>
            <h3 className={cx('DiscountTitle')}>Quản lý Mã giảm giá</h3>
            <div className={cx('form-searchDiscount')}>
                <div className={cx('search-Discount')}>
                    <input type="text" placeholder="Nhập mã giảm giá" />
                    <FontAwesomeIcon icon={faSearch} className={cx('Discount-icon')} />
                </div>
            </div>
            <div
                className={cx('btn', 'btn-success', 'btn-addDiscount')}
                data-bs-toggle="modal"
                data-bs-target="#addDiscount"
                onClick={handleAddMa}
            >
                Thêm mã giảm giá
            </div>
            <table className={cx('table', 'table-hover', 'table-Discount','table-striped')}>
                <thead>
                    <tr className={cx('table-header')}>
                        <th className={cx('header-Discount')} style={{ minWidth: '50px' }} scope="col">
                            id
                        </th>
                        <th className={cx('header-Discount')} style={{ minWidth: '150px' }} scope="col">
                            Mã giảm giá
                        </th>
                        <th className={cx('header-Discount')} style={{ minWidth: '100px' }} scope="col">
                            Id khách sạn
                        </th>
                        <th className={cx('header-Discount')} style={{ minWidth: '150' }} scope="col">
                            Giá Trị
                        </th>
                        <th className={cx('header-Discount')} style={{ minWidth: '100px' }} scope="col">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className={cx('formDiscount')}>
                    {discounts?.map((discount, index) => {
                        return (
                            <tr key={index}>
                                <td>{discount.id} </td>
                                <td>{discount.ma} </td>
                                <td>{discount.idKhachSan} </td>
                                <td>{discount.giaTri}% </td>
                                <td className={cx('action')}>
                                    <span
                                        onClick={() => handleDelete(discount.id)}
                                        href="#"
                                        className={cx('btn', 'btn-danger', 'btn-action','me-2')}
                                    >
                                        Delete
                                    </span>
                                    <span
                                        onClick={() => handleEdit(discount.id)}
                                        data-bs-toggle="modal"
                                        data-bs-target="#addDiscount"
                                        href="#"
                                        className={cx('btn', 'btn-primary', 'btn-action')}
                                    >
                                        Edit
                                    </span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {/* modal add khách sạn */}{' '}
            <div
                className="modal fade"
                id="addDiscount"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                style={{ zIndex: '10000' }}
            >
                <div className="modal-dialog">
                    <div className={cx('modal-content')}>
                        <div className="modal-header">
                            <h5 className={cx('modal-title', 'modal-heading')} id="exampleModalLabel">
                                {editMode ? "Cập nhật mã giảm giá" : "Thêm mã giảm giá"}
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form action="" method="">
                                <div className={cx('hotel-control')}>
                                    <label htmlFor="nameKS" className={cx('hotel-label')}>
                                        Mã Giảm Giá
                                    </label>
                                    <input
                                        value={editMode ? discount.ma : ma}
                                        name="ma"
                                        onChange={editMode ? handleChangeData : (e) => setMa(e.target.value)}
                                        type="text"
                                        className={cx('hotel-input')}
                                        required
                                    />
                                </div>
                                <div className={cx('hotel-control')}>
                                    <label htmlFor="nameKS" className={cx('hotel-label')}>
                                        Giá Trị
                                    </label>
                                    <input
                                        value={editMode ? discount.giaTri : giaTri}
                                        name="giaTri"
                                        onChange={editMode ? handleChangeData : (e) => setGiaTri(e.target.value)}
                                        type="text"
                                        className={cx('hotel-input')}
                                        required
                                    />
                                </div>
                                <div className={cx('hotel-control')}>
                                    <label htmlFor="nameKS" className={cx('hotel-label')}>
                                        Khách sạn
                                    </label>
                                    <select
                                        name="idKhachSan"  
                                        value={editMode ? discount.idKhachSan : idKhachSan}
                                        onChange={editMode ? handleChangeData : (e) => setIdKhachSan(e.target.value)}
                                    >
                                        <option>-----Chọn Khách Sạn-----</option>
                                        {hotels?.map((hotel, index) => (
                                            <option value={hotel.id} key={index}>
                                                {hotel.tenKhachSan}
                                            </option>
                                        ))}
                                    </select>
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
                                    onClick={()=>handleSubmitEdit(discount.id)}
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
