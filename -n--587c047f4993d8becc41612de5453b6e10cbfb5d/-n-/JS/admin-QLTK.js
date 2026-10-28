/* --- JAVASCRIPT QUẢN LÝ TÀI KHOẢN & HIỆU ỨNG THÔNG BÁO --- */

document.addEventListener("DOMContentLoaded", function () {
    console.log("Admin Users JS đã sẵn sàng!");

    // 1. Hàm hiển thị cửa sổ nổi thông báo (Toast) lướt từ trái qua phải
    function showFloatingToast(title, description) {
        let container = document.getElementById("toastContainer");
        if (!container) {
            container = document.createElement("div");
            container.id = "toastContainer";
            container.className = "toast-container";
            document.body.appendChild(container);
        }

        const toast = document.createElement("div");
        toast.className = "toast-notification";
        toast.innerHTML = `
            <div class="toast-icon">
                <i class="fa-solid fa-check"></i>
            </div>
            <div class="toast-text">
                <span class="title">${title}</span>
                <span class="desc">${description}</span>
            </div>
        `;

        container.appendChild(toast);

        // Sau 3 giây tự động trượt ẩn đi và xóa khỏi giao diện
        setTimeout(() => {
            toast.classList.add("hide");
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // 2. Xử lý Thêm thủ công (Modal form)
    const addManualForm = document.getElementById("addManualForm");
    const addManualModal = document.getElementById("addManualModal");
    const userTableBody = document.getElementById("userTableBody");

    if (addManualForm) {
        addManualForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const userId = document.getElementById("userId").value.trim();
            const userName = document.getElementById("userName").value.trim();
            const userDob = document.getElementById("userDob").value;
            const userPhone = document.getElementById("userPhone").value.trim();
            const userEmail = document.getElementById("userEmail").value.trim();
            const userAddress = document.getElementById("userAddress").value.trim();

            const dobFormatted = userDob ? userDob.split("-").reverse().join("/") : "";
            const todayFormatted = new Date().toLocaleDateString("vi-VN");

            // Thêm dòng mới vào bảng
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td><strong>#${userId}</strong></td>
                <td>
                    <div class="user-name-cell">
                        <div class="user-avatar-sm">${userName.substring(0, 2).toUpperCase()}</div>
                        <span>${userName}</span>
                    </div>
                </td>
                <td>${dobFormatted}</td>
                <td>${userPhone}</td>
                <td>${userEmail}</td>
                <td>${userAddress}</td>
                <td>${todayFormatted}</td>
                <td><span class="badge-status status-active">Hoạt động</span></td>
                <td class="action-cell">
                    <button class="btn-icon btn-edit" title="Sửa"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="btn-icon btn-lock" title="Khóa/Mở khóa"><i class="fa-solid fa-lock"></i></button>
                    <button class="btn-icon btn-delete" title="Xóa"><i class="fa-solid fa-trash"></i></button>
                </td>
            `;

            if (userTableBody) {
                userTableBody.appendChild(newRow);
            }

            // Đóng Modal và gọi cửa sổ nổi thông báo
            if (addManualModal) {
                addManualModal.classList.remove("show");
            }
            addManualForm.reset();

            // KÍCH HOẠT THÔNG BÁO THÊM THÀNH CÔNG
            showFloatingToast("Thêm thành công!", "Đã thêm thủ công tài khoản mới vào hệ thống.");
        });
    }

    // 3. Xử lý Thêm tự động (Auto Add)
    const btnAddAuto = document.getElementById("btnAddAuto");
    if (btnAddAuto) {
        btnAddAuto.addEventListener("click", function () {
            const randomNum = Math.floor(100 + Math.random() * 900);
            const autoId = `US${randomNum}`;
            const todayFormatted = new Date().toLocaleDateString("vi-VN");

            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td><strong>#${autoId}</strong></td>
                <td>
                    <div class="user-name-cell">
                        <div class="user-avatar-sm">KH</div>
                        <span>Khách Hàng ${randomNum}</span>
                    </div>
                </td>
                <td>01/01/2000</td>
                <td>090${randomNum}888</td>
                <td>user${randomNum}@gmail.com</td>
                <td>Thành phố Hồ Chí Minh</td>
                <td>${todayFormatted}</td>
                <td><span class="badge-status status-active">Hoạt động</span></td>
                <td class="action-cell">
                    <button class="btn-icon btn-edit" title="Sửa"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="btn-icon btn-lock" title="Khóa/Mở khóa"><i class="fa-solid fa-lock"></i></button>
                    <button class="btn-icon btn-delete" title="Xóa"><i class="fa-solid fa-trash"></i></button>
                </td>
            `;

            if (userTableBody) {
                userTableBody.appendChild(newRow);
            }

            // KÍCH HOẠT THÔNG BÁO THÊM TỰ ĐỘNG THÀNH CÔNG
            showFloatingToast("Thêm thành công!", `Đã thêm tự động tài khoản #${autoId}.`);
        });
    }
});