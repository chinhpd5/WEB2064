
Dữ liệu:

```json
{
  "events": [
    {
      "id": 1,
      "title": "Workshop AI4Life 2025",
      "date": "2025-12-20",
      "location": "Hà Nội",
      "image": "https://picsum.photos/id/1015/300/200",
      "status": "Sắp diễn ra"
    },
    {
      "id": 2,
      "title": "FPT Hackathon",
      "date": "2025-11-15",
      "location": "Đà Nẵng",
      "image": "https://picsum.photos/id/1018/300/200",
      "status": "Đã kết thúc"
    }
  ],
  "users": []
}
```
1. Giao diện & Điều hướng (1 điểm)
- Có navbar gồm: Trang chủ, Thêm sự kiện, Đăng nhập / Đăng ký.
- Giao diện rõ ràng, responsive.

2. Hiển thị danh sách sự kiện (1 điểm)
- Gọi GET /events để hiển thị danh sách.
- Hiển thị dạng thẻ (card) hoặc bảng các thông tin:
- Tiêu đề, Địa điểm, Ảnh, Trạng thái.
- Mỗi thẻ có nút Sửa, Xóa.

3. Xóa sự kiện (1 điểm)
- Nút Xóa có xác nhận confirm().
- Gọi DELETE /events/:id, sau đó cập nhật lại danh sách.

4. Thêm mới sự kiện (2.5 điểm)
- Tạo form thêm sự kiện.
- Gọi POST /events thành công → alert + quay về danh sách.
- Yêu cầu validate form (1 điểm):
  + `title`: bắt buộc.
  + `location`: bắt buộc.
  + `image`: là URL hợp lệ.
  + `status`: chọn từ `select-option` (Sắp diễn ra, Đang diễn ra, Đã kết thúc)

5. Chỉnh sửa sự kiện (2.5 điểm)
- Trang sửa sự kiện dùng GET /events/:id để nạp dữ liệu ban đầu.
- Sửa xong gọi PUT /events/:id → alert + điều hướng về danh sách.
- Form giống form thêm mới, cần có validate tương tự.
6. Đăng ký & Đăng nhập (1 điểm)
- Đăng ký (0.5 điểm):
  + `email`: đúng định dạng.
  + `password`: từ 6 ký tự trở lên.
  + Thành công → alert thông báo.
- Đăng nhập (0.5 điểm):
  + Nhập đúng `email`/`password` → alert đăng nhập thành công.

- Bonus – Bảo vệ truy cập (1 điểm)
+ Nếu chưa đăng nhập (không có `token` trong `localStorage`) → tự động điều hướng về trang đăng nhập khi truy cập trang danh sách hoặc thêm/sửa.
+ Nếu đăng nhập → lưu token vào `localStorage`.