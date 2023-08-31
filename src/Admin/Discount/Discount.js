import classNames from 'classnames/bind';
import styles from './Discount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import * as httpRequest from '../../api/httpRequests';
import Dialog from '../../components/Dialog/Dialog';

const cx = classNames.bind(styles);
export default function Discount() {
    const [discounts, setDiscounts] = useState([]);
    const [hotels, setHotels] = useState([]);

    const [ma, setMa] = useState('');
    const [giaTri, setGiaTri] = useState('');
    const [idKhachSan, setIdKhachSan] = useState('');

    useEffect(() => {
        const getMa = async () => {
            try {
                const res = await httpRequest.get('MaGiamGia');
                setDiscounts(res);
            } catch (error) {
                console.log(error);
            }
        };
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
        getMa();
    }, []);

    const handleSubmit = () => {
        const addDiscount = async () => {
            try {
                const result = await httpRequest.post(`MaGiamGia`, {
                    idKhachSan,
                    ma,
                    giaTri,
                });
                if (result.status === 'Success') {
                    console.log('Add thành công');
                }
            } catch (error) {
                console.log(error);
            }
        };
        addDiscount();
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
            >
                Thêm mã giảm giá
            </div>
            <table className={cx('table', 'table-hover', 'table-Discount')}>
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
                                        // onClick={() => handleDelete(hotel.id)}
                                        href="#"
                                        className={cx('btn', 'btn-danger', 'btn-action')}
                                    >
                                        Delete
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
                                Thêm Khách sạn
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form action="" method="">
                                <div className={cx('hotel-control')}>
                                    <label htmlFor="nameKS" className={cx('hotel-label')}>
                                        Mã Giảm Giám
                                    </label>
                                    <input
                                        value={ma}
                                        onChange={(e) => setMa(e.target.value)}
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
                                        value={giaTri}
                                        onChange={(e) => setGiaTri(e.target.value)}
                                        type="text"
                                        className={cx('hotel-input')}
                                        required
                                    />
                                </div>
                                <div className={cx('hotel-control')}>
                                    <label htmlFor="nameKS" className={cx('hotel-label')}>
                                        Giá Trị
                                    </label>
                                    <select value={idKhachSan} onChange={(e) => setIdKhachSan(e.target.value)}>
                                        <option>-----Chọn Khách Sạn-----</option>
                                        {hotels.map((hotel, index) => (
                                            <option value={hotel.id} key={index}>
                                                {hotel.tenKhachSan}
                                            </option>
                                        ))}
                                    </select>
                                </div>
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
            {/* {dialog.isLoading && <Dialog onDialog={AreUSureDelete} message={dialog.message} />} */}
        </div>
    );
}
