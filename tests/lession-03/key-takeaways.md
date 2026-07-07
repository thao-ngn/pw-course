# Git - undo
## Commit message
git commit --amend -m "message"

## File staging to working directory
git restore --staged <file_name> : restore file cu the
git restore --staged . : restore tat ca file

## File repository to Working directory
git reset HEAD ~1 : reset 1 commit
git reset HEAD ~N : reset n commit

# Git -branching
## Git: pull code
git pull origin main : pull code từ server về

git branch: xem danh sách nhánh
git branch <tên_branch>: tạo nhánh mới
git checkout <tên_branch>: chuyển sang nhánh mới
git checkout -b <tên>: tạo và chuyển sang nhánh mới
git branch -D <tên_branch> : xóa branch - Note: đứng ở nhánh khác trước khi xóa

Note: Luôn pull code về trước khi tạo nhánh mới

# Git - ignore file
- File .gitignore: file cấu hình, chỉ định những file và thư mục nào không được theo dõi bởi Git
- file không cần thiết đưa vào git repository: file tạm thời (.DS_Store, Thumbs.db) ; thư mục dependencies (node_modules/ , vendor/ ) ; File build và artifacts ; File cấu hình cá nhân ; File nhạy cảm ;  File log và DB local
## Cú pháp file:
abcd.txt : ignore file cụ thể
*.log : ignore tất cả file có extension .log
node_modules/ : ignore thư mục
**/*tmp : ignore file trong mọi thư mục con
!abcd.log : không ignore file này
/TODO : ignore file chỉ ở thư mục gốc
doc/**/*.txt : ignore tất cả file txt trong thư mục doc/

