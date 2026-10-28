/* --- JAVASCRIPT XỬ LÝ ĐĂNG NHẬP ADMIN --- */

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            // Ngăn chặn form load lại trang mặc định
            event.preventDefault();
            alert("Đăng nhập thành công! Đang chuyển hướng sang trang Dashboard...");
            // Chuyển hướng ngay lập tức sang trang dashboard admin mà không cần kiểm tra mật khẩu
            window.location.href = "admin-dashboard.html";
        });
    }
});