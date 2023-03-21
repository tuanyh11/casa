import React from 'react';

const DetailsOrders = () => {
    return (
        <div className="table-container">
            <table>
                <tr>
                    <th>STT</th>
                    <th>Thông tin sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Ngày đặt</th>
                    <th>Tổng giá</th>
                    <th>Trạng thái</th>
                </tr>
                <tr >
                    <td>1</td>
                    <td >abc</td>
                    <td>1</td>
                    <td>20/3/2023</td>
                    <td> $5</td>
                    <td>   Chờ xử lý</td>
                </tr>

            </table>
        </div>
    );
};

export default DetailsOrders;