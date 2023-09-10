import React from 'react';
import classNames from 'classnames/bind';
import styles from './About.module.scss';

const cx = classNames.bind(styles);
export default function About() {
    return (
        <div className={cx('about', 'container', 'my-3')}>
            <h3 className={cx('about__header')}>Về Booking Dream</h3>
            <div className="row">
                <div className="col-lg-6">
                    <div className={cx('about__content')}>
                        <div className={cx('about__content-header')}>
                            Booking Dream - công cụ tìm kiếm khách sạn khắp thế giới
                        </div>
                        <div className={cx('about__content-body')}>
                            Chỉ với vài lượt bấm, hệ thống tìm kiếm khách sạn của Booking Dream hỗ trợ người dùng so
                            sánh giá phòng giữa hàng trăm website đặt phòng với hơn 5 triệu khách sạn và các loại hình
                            nơi lưu trú khác tại hơn 190 quốc gia. Mỗi năm, chúng tôi hỗ trợ hàng triệu khách du lịch so
                            sánh giá tốt của khách sạn và các nơi lưu trú khác. Chuẩn bị ngay cho kỳ nghỉ cuối tuần của
                            bạn tại các thành phố như Hà Nội hay Nha Trang và bạn có thể dễ dàng tìm thấy khách sạn mong
                            muốn tại Booking Dream. Khu vực Đà Nẵng và vùng phụ cận cũng rất phù hợp cho một chuyến du lịch
                            cuối tuần với rất nhiều khách sạn còn phòng trống.
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className={cx('about__content')}>
                        <div className={cx('about__content-header')}>Tìm khách sạn giá rẻ với Booking Dream</div>
                        <div className={cx('about__content-body')}>
                            Với Booking Dream bạn có thể dễ dàng so sánh giá phòng trên các website khác nhau và tìm
                            được khách sạn phù hợp nhất. Nhập địa điểm bạn muốn đến và ngày dự định đi và hãy để công cụ
                            tìm kiếm của chúng tôi so sánh giá cả chỗ ở cho bạn. Để điều chỉnh các kết quả tìm kiếm, bạn
                            có thể lọc theo giá, khoảng cách (VD: từ bãi biển), số lượng sao, tiện nghi và các tiêu
                            chuẩn khác. Booking Dream giúp bạn dễ dàng đặt phòng trực tuyến ngay cả tại các nhà nghỉ vừa túi
                            tiền hay các khách sạn sang trọng. Bạn có thể tìm trong số hàng ngàn khách sạn tại Việt Nam
                            và Đông Nam Á, như Singapore và Bangkok đến các thành phố nổi tiếng và các điểm đến hấp dẫn
                            trên toàn thế giới!
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className={cx('about__content')}>
                        <div className={cx('about__content-header')}>
                            Đánh giá khách sạn giúp bạn tìm nơi dừng chân lý tưởngi
                        </div>
                        <div className={cx('about__content-body')}>
                            Cơ sở dữ liệu gồm hơn 175 triệu đánh giá và hơn 19 triệu ảnh của chúng tôi giúp bạn hiểu rõ
                            hơn về nơi mình định đến. Để có được cái nhìn tổng quan về cơ sở vật chất của khách sạn,
                            chúng tôi hiển thị mức xếp hạng trung bình và các nhận xét từ các website đặt phòng như
                            Hotels.com, Expedia, Agoda hay các khách sạn hàng đầu khác. Booking Dream giúp bạn dễ dàng tìm
                            thông tin cho các chuyến du lịch cuối tuần tới Thành phố Hồ Chí Minh và chọn khách sạn theo
                            yêu cầu riêng của bạn.
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className={cx('about__content')}>
                        <div className={cx('about__content-header')}>Cách đặt phòng</div>
                        <div className={cx('about__content-body')}>
                            Booking Dream là một công cụ so sánh và tìm kiếm giá phòng khách sạn tối ưu. Giá phòng hiển
                            thị được cung cấp bởi rất nhiều khách sạn và website đặt phòng. Điều này đồng nghĩa với việc
                            khi người dùng quyết định chọn khách sạn nào trên Booking Dream, thủ tục đặt phòng sẽ được thực
                            hiện bởi công ty cung cấp (được kết nối tới Booking Dream). Bằng cách nhấn vào nút "Xem Giá tốt",
                            bạn sẽ được chuyển tiếp đến trang web đặt phòng, tại đây bạn có thể kiểm tra và đặt phòng
                            như ý muốn. Hãy để Booking Dream giúp bạn tìm giá lý tưởng từ hàng trăm website khách sạn!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
