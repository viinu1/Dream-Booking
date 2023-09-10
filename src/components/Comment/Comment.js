import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Comment.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import * as httpRequest from '../../api/httpRequests';

const cx = classNames.bind(styles);
const formatDate = (date) => {
    const inputDate = new Date(date);
    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, '0');
    const day = String(inputDate.getDate()).padStart(2, '0');
    const outputDateStr = `${year}/${month}/${day}`;
    return outputDateStr;
};
const calculateAverageRating = (reviews) => {
    if (reviews.length === 0) {
      return 0; // Default to 0 if there are no reviews to avoid division by zero.
    }

    // Calculate the sum of all ratings
    const sumOfRatings = reviews.reduce((total, review) => total + review.soSao, 0);

    // Calculate the average rating
    const averageRating = sumOfRatings / reviews.length;

    return averageRating;
  };
export default function Comment(props) {
    const user = useSelector((state) => state.user.user);
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);

    const [comments, setComments] = useState([]);
    const handleSubmitComment = () => {
        const postComment = async () => {
            try {
                const result = await httpRequest.post(`DanhGia`, {
                    email: user.email,
                    idKhachSan: props.id,
                    soSao: rating,
                    ngayDanhGia: new Date(),
                    binhLuan: comment,
                });
                // console.log(result);
                // setComments([...comments,result])
                return result;
            } catch (error) {
                console.log(error);
            }
            
        };
        postComment();
        setComment('')
    };
    const rate = calculateAverageRating(comments);
    const rateLength = comments.length;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const data = {rate,rateLength}
    useEffect(() => {
        const getComment = async () => {
            try {
                const result = await httpRequest.get(`DanhGia/GetByIdKhachSan?idKs=${props.id}`);
                setComments(result);
                console.log(result);
            } catch (error) {
                console.log(error);
            }
        };
        
        const sendData = () => {
            props.parentCallback(data);
        }
        sendData()
        getComment();
    }, [comments, data, props, props.id]);

    // const handleDelete = (id) =>{
    //     const deleteComment = async ()=>{
    //         try {
    //             const result = await httpRequest.deleTe(`DanhGia/${id}`)
    //             if(result){
    //                 console.log("bạn đã xóa thành công");
    //             }
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     deleteComment()
    // }
    const handleRatingClick = (value) => {
        setRating(value);
      };

    return (
        <div className={cx('comment')}>
            <div className={cx('comment-header')}>{comments.length} Comment</div>
            <form className={cx('form-comment')}>
                <div className={cx('form-comment__control')} style={{ width: '85%' }}>
                    <input
                        type="text"
                        placeholder="Nhập đánh giá"
                        name="binhLuan"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </div>
                <div className={cx('form-comment__control')} style={{ width: '15%' }}>
                    
                    <div className={cx("rating")}>
                        {[1, 2, 3, 4, 5].map((value) => (
                            <span
                                key={value}
                                className={cx('star', value <= rating ? 'selected' : '')}
                                onClick={() => handleRatingClick(value)}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                </div>
            </form>
            <button onClick={handleSubmitComment} className={cx('btn', 'btn-success', 'btn-add')}>
                Đánh giá
            </button>
            <hr />
            <div className={cx('comment-get')}>
                {comments.map((item, index) => (
                    <div key={index} className={cx('comment__by-user')}>
                        <div className={cx('comment-img')}>
                            <img src="https://haycafe.vn/wp-content/uploads/2022/02/Avatar-trang-800x505.jpg" alt="" />
                        </div>
                        <div className={cx('comment-content')}>
                            <div className={cx('comment-date')}>{formatDate(item.ngayDanhGia)}</div>
                            <div className={cx('comment-bl')}>{item.binhLuan}</div>
                        </div>
                        <div className={cx('comment-delete')}>
                            <FontAwesomeIcon
                                icon={faEllipsisVertical}
                                width={24}
                                style={{ fontSize: '24px', cursor: 'pointer' }}
                            />
                            <div className={cx('menu-comment')}>
                                <span
                                // onClick={()=>handleDelete(item.id)}
                                >
                                    Xóa
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
