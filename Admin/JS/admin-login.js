
// /* XỬ LÝ ĐĂNG NHẬP ADMIN */

// document.addEventListener("DOMContentLoaded", function () {

//     // Lấy form đăng nhập từ HTML
//     const loginForm = document.getElementById("loginForm");

//     // Kiểm tra xem form có tồn tại không
//     if (loginForm) {

//         // Xử lý khi người dùng bấm nút Đăng nhập
//         loginForm.addEventListener("submit", function (event) {

//             // Ngăn trang tự tải lại
//             event.preventDefault();

//             // Tạo thông báo nổi
//             const toast = document.createElement("div");
//             toast.className = "toast-notification";

//             toast.innerHTML = `
//                 <div class="toast-icon">
//                     <i class="fa-solid fa-check"></i>
//                 </div>

//                 <div class="toast-text">
//                     <span class="title">Đăng nhập thành công!</span>
//                     <span class="desc">Đang chuyển đến trang quản trị...</span>
//                 </div>
//             `;

//             // Thêm thông báo vào trang
//             document.body.appendChild(toast);

//             // Chuyển sang trang Dashboard sau 1,5 giây
//             setTimeout(function () {
//                 window.location.href = "admin-dashboard.html";
//             }, 1500);

//         });
//     }

// });
