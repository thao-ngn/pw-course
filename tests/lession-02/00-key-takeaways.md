Version control system
Local: lưu ở máy cá nhân
Centralize: lưu ở máy chủ tập trung
Distributed: lưu ở nhiều máy khác nhau

Git: 3 states
Working Directory: file mới / file có update
Staging Area: file đưa vào vùng chuẩn bị tạo commit
Repository: Commit

git init: khởi tạo repo local
git remote add origin <url> :  tạo repo Github và liên kết tới repo local
git add . : thêm tất cả file vào staging
git commit -m "msg" : commit file
git push origin main: push code

git status: xem trạng thái file
git log: check danh sách commit

Git work flow: 
init > config > add > commit > push (không dùng global config)
init > add > commit > push (dùng global config)

Convention
<type> : <short_description>
type: chore(sửa lỗi nhỏ) /feat (thêm tính năng mới) /fix (sửa lỗi có trước đó)
short_description: mô tả ngắn gọn

Javascript
console.log ("abc")
console.log ('abc')

Chạy lệnh:
node <tên file>
node <đường dẫn tới file>

Comment
// : comment 1 dòng
/* */ : comment nhiều dòng

Biến: có thể thay đổi
<từ khóa> <tên biến> = <giá trị>
từ khóa = var/let

Hằng: khai báo các giá trị không có như cầu thay đổi hoặc giá trị chỉ dùng 1 lần
<từ khóa> <tên hằng> = <giá trị>
từ khóa = const