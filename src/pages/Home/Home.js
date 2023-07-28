import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const data = [
    {
        id: 1,
        nameRoom: 'São Borja Airport',
        descripton: 'Removal of Extraluminal Device from Left Eye, Open Approach',
        price: '$763.31',
        priceDiscount: '$226.90',
    },
    {
        id: 2,
        nameRoom: 'Vilankulo Airport',
        descripton: 'Excision of Peroneal Nerve, Percutaneous Approach, Diagn',
        price: '$177.10',
        priceDiscount: '$747.16',
    },
    {
        id: 3,
        nameRoom: 'Fleetlands Heliport',
        descripton: 'Bypass Innom Art to Bi Up Leg Art w Autol Vn, Open',
        price: '$196.12',
        priceDiscount: '$318.41',
    },
    {
        id: 4,
        nameRoom: 'Quảng Ngãi Airfield',
        descripton: 'Beam Radiation of Hard Palate using Photons 1 - 10 MeV',
        price: '$621.09',
        priceDiscount: '$288.61',
    },
    {
        id: 5,
        nameRoom: 'Gabbs Airport',
        descripton: 'Removal of Brace on Left Upper Arm',
        price: '$312.38',
        priceDiscount: '$728.48',
    },
    {
        id: 6,
        nameRoom: 'Maun Airport',
        descripton: 'Release Left Lesser Saphenous Vein, Open Approach',
        price: '$145.78',
        priceDiscount: '$821.62',
    },
    {
        id: 7,
        nameRoom: 'Konge Airport',
        descripton: 'Drainage of Left Carpal Joint, Percutaneous Approach, Diagn',
        price: '$424.73',
        priceDiscount: '$721.40',
    },
    {
        id: 8,
        nameRoom: 'Igiugig Airport',
        descripton: 'Removal of Autol Sub from L Acromioclav Jt, Perc Approach',
        price: '$244.71',
        priceDiscount: '$216.46',
    },
    {
        id: 9,
        nameRoom: 'Innisfail Airport',
        descripton: 'Extirpate matter from Conduction Mechanism, Perc Endo',
        price: '$188.08',
        priceDiscount: '$138.61',
    },
    {
        id: 10,
        nameRoom: 'Matão Airport',
        descripton: 'Supplement Hyoid Bone with Nonaut Sub, Perc Approach',
        price: '$812.71',
        priceDiscount: '$706.26',
    },
    {
        id: 11,
        nameRoom: 'Malamala Airport',
        descripton: 'Dilate L Fem Art, Bifurc, w 3 Drug-elut, Perc Endo',
        price: '$179.50',
        priceDiscount: '$657.05',
    },
    {
        id: 12,
        nameRoom: 'Fulleborn Airport',
        descripton: 'Fluoroscopy of Right Renal Artery using Low Osmolar Contrast',
        price: '$268.82',
        priceDiscount: '$704.25',
    },
];

const facilities = [
    {
        id: 1,
        title: 'Hà Nội',
        src: 'https://chuyenkhachsan.com/wp-content/uploads/2017/01/khach-san-avatar-da-nang-1.jpg',
    },
    {
        id: 2,
        title: 'Đà Nẵng',
        src: 'https://bravatmienbac.com.vn/wp-content/uploads/2018/12/Holiday-beach-da-nang-1.jpg',
    },
    {
        id: 3,
        title: 'Vũng tàu',
        src: 'https://bazantravel.com/cdn/medias/uploads/83/83317-khu-nghi-duong-lan-rung-700x420.jpg',
    },
    {
        id: 4,
        title: 'Hà tiên',
        src: 'https://www.haydocla.com/wp-content/uploads/2021/10/Khach-san-ha-tien-gan-bien-2.jpg',
    },
    {
        id: 5,
        title: 'Hồ Chí Minh',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7a4pqqmHjB8eWa4hTHRC7TmGYWfuniR6uKw&usqp=CAU',
    },
];

function Home() {
    return (
        <div className={cx('home')}>
            <Banner />
            <div className={cx('container')}>
                <section className={cx('room-list')}>
                    <div className={cx('room-list__title')}>Danh sách Phòng</div>
                    <div className={cx('row')}>
                        {data.map((item, index) => (
                            <div className={cx('col-lg-3')} key={index}>
                                <Link to={`/detail/${item.id}`} style={{textDecoration:'none'}}>
                                    <div className={cx('card', 'card-item')}>
                                        <img
                                            src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/partner-images/20/ca/30c4e6746c52fb5bdaa2a3592c042abad405b8d4be5691abcced2be10dec.jpeg"
                                            alt="phòng khách sạn"
                                            className={cx('room-img')}
                                        />
                                        <div className={cx('card-body')}>
                                            <h5 className={cx('card-title')}>{item.nameRoom}</h5>
                                            <p className={cx('card-text')}>{item.descripton}</p>
                                            <div className='d-flex gap-2'>
                                                <FontAwesomeIcon icon={faStar} style={{color:"#ff567d",marginBottom:'8px'}}/>
                                                <FontAwesomeIcon icon={faStar} style={{color:"#ff567d",marginBottom:'8px'}}/>
                                                <FontAwesomeIcon icon={faStar} style={{color:"#ff567d",marginBottom:'8px'}}/>
                                                <FontAwesomeIcon icon={faStar} style={{color:"#ff567d",marginBottom:'8px'}}/>
                                                <FontAwesomeIcon icon={faStar} style={{color:"#ff567d",marginBottom:'8px'}}/>
                                            </div>
                                            <div className={cx('price')}>
                                                <p className={cx('card-price')}>{item.price}</p>
                                                <p className={cx('card-price-discount')}>{item.priceDiscount}</p>
                                            </div>
                                            {/* <Link className={cx('btn', 'btn-primary', 'btn-order')} to="/detail">
                                                Book now
                                            </Link> */}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={cx('facilities')}>
                    <div className={cx('room-list__title')}>Our Facilities</div>
                    <div className="row row-cols-5">
                        {facilities.map((item, index) => (
                            <div className="col" key={index}>
                                <div className={cx('facilities-item')}>
                                    <img className={cx('facilities-img')} src={item.src} alt={item.title} />
                                    <div className={cx('facilities-titile')}>{item.title}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Link className={cx('btn', 'btn-light', 'btn-more')} to="">
                        Xem Thêm
                    </Link>
                </section>
                <section className={cx('testimonials')}>
                    <div className={cx('room-list__title')}>Our Testimonials</div>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className={cx('card-comment')}>
                                <div className={cx('card-comment__title')}>Khách sạn Dream</div>
                                <div className={cx('card-comment__place')}>Ở Đà nẵng</div>
                                <div className={cx('card-comment__content')}>
                                    Tôi hoàn toàn hài lòng khi nghỉ tại Klausturhof. Cám ơn Agoda rất nhiều.
                                </div>
                                <div className={cx('card-comment__by')}>- Độ Mixi đến từ Cao Bằng</div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className={cx('card-comment')}>
                                <div className={cx('card-comment__title')}>Khách sạn Dream</div>
                                <div className={cx('card-comment__place')}>Ở Hồ Chí Minh</div>
                                <div className={cx('card-comment__content')}>
                                    Tôi hoàn toàn hài lòng khi nghỉ tại Klausturhof. Cám ơn Agoda rất nhiều.
                                </div>
                                <div className={cx('card-comment__by')}>- Minh Thùy đến từ An Giang</div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className={cx('card-comment')}>
                                <div className={cx('card-comment__title')}>Khách sạn Dream</div>
                                <div className={cx('card-comment__place')}>Vũng tàu</div>
                                <div className={cx('card-comment__content')}>
                                    Tôi hoàn toàn hài lòng khi nghỉ tại Klausturhof. Cám ơn Agoda rất nhiều.
                                </div>
                                <div className={cx('card-comment__by')}>- Anh Khoa đến từ Bình Dương</div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className={cx('card-comment')}>
                                <div className={cx('card-comment__title')}>Khách sạn Dream</div>
                                <div className={cx('card-comment__place')}>Hà Nội</div>
                                <div className={cx('card-comment__content')}>
                                    Tôi hoàn toàn hài lòng khi nghỉ tại Klausturhof. Cám ơn Agoda rất nhiều.
                                </div>
                                <div className={cx('card-comment__by')}>- Phương Thanh đến từ Dăklăk</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default Home;
