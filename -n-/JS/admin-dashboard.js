/* --- JAVASCRIPT CHO ADMIN DASHBOARD & DROPDOWN AVATAR --- */

document.addEventListener("DOMContentLoaded", function () {
    console.log("Admin Dashboard JS đã sẵn sàng hoạt động!");

    // 1. Xử lý mở/tắt Dropdown Menu khi bấm vào Avatar hoặc tên Admin ở góc dưới Sidebar
    const userToggle = document.getElementById("adminUserToggle");
    const userInfoToggle = document.getElementById("adminUserInfoToggle");
    const dropdownMenu = document.getElementById("adminDropdownMenu");

    function toggleDropdown(e) {
        e.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
        if (dropdownMenu) {
            dropdownMenu.classList.toggle("show");
        }
    }

    if (userToggle) {
        userToggle.addEventListener("click", toggleDropdown);
    }
    if (userInfoToggle) {
        userInfoToggle.addEventListener("click", toggleDropdown);
    }

    // Click ra ngoài vùng menu thì tự động ẩn menu đi
    document.addEventListener("click", function (e) {
        if (dropdownMenu && !dropdownMenu.contains(e.target) && e.target !== userToggle && e.target !== userInfoToggle) {
            dropdownMenu.classList.remove("show");
        }
    });

    // 2. Xử lý sự kiện hiển thị Cửa sổ nổi (Modal) Thông tin tài khoản
    const infoModalBtn = document.getElementById("infoModalBtn");
    const adminInfoModal = document.getElementById("adminInfoModal");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const closeModalFooterBtn = document.getElementById("closeModalFooterBtn");

    function openModal(e) {
        if (e) e.preventDefault();
        if (dropdownMenu) {
            dropdownMenu.classList.remove("show"); // Ẩn menu dropdown
        }
        if (adminInfoModal) {
            adminInfoModal.classList.add("show"); // Hiện Modal cửa sổ nổi
        }
    }

    function closeModal() {
        if (adminInfoModal) {
            adminInfoModal.classList.remove("show"); // Tắt Modal
        }
    }

    if (infoModalBtn) {
        infoModalBtn.addEventListener("click", openModal);
    }
    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", closeModal);
    }
    if (closeModalFooterBtn) {
        closeModalFooterBtn.addEventListener("click", closeModal);
    }

    // Bấm ra ngoài vùng nền mờ của Modal thì tự động đóng Modal
    if (adminInfoModal) {
        adminInfoModal.addEventListener("click", function (e) {
            if (e.target === adminInfoModal) {
                closeModal();
            }
        });
    }


/* ===== XỬ LÝ MODAL ĐỔI MẬT KHẨU ===== */

const changePasswordBtn = document.getElementById("changePasswordBtn");
const changePasswordModal = document.getElementById("changePasswordModal");
const changePasswordForm = document.getElementById("changePasswordForm");

const closeAddModalBtn = document.getElementById("closeAddModalBtn");
const loseModalBtn = document.getElementById("loseModalBtn");

// Mở modal đổi mật khẩu
if (changePasswordBtn && changePasswordModal) {
    changePasswordBtn.addEventListener("click", function (e) {
        e.preventDefault();

        // Đóng dropdown tài khoản
        if (dropdownMenu) {
            dropdownMenu.classList.remove("show");
        }

        changePasswordModal.classList.add("show");
    });
}

// Đóng modal
function closeChangePasswordModal() {
    if (changePasswordModal) {
        changePasswordModal.classList.remove("show");
    }
}

if (closeAddModalBtn) {
    closeAddModalBtn.addEventListener(
        "click",
        closeChangePasswordModal
    );
}

if (loseModalBtn) {
    loseModalBtn.addEventListener(
        "click",
        closeChangePasswordModal
    );
}

// Bấm ra ngoài nền mờ để đóng modal
if (changePasswordModal) {
    changePasswordModal.addEventListener("click", function (e) {
        if (e.target === changePasswordModal) {
            closeChangePasswordModal();
        }
    });
}

// Hàm hiển thị thông báo nổi
function showPasswordToast(title, description, isError = false) {
    // Xóa thông báo cũ nếu có
    const oldToast = document.querySelector(".toast-notification");

    if (oldToast) {
        oldToast.remove();
    }

    const toast = document.createElement("div");
    toast.className = "toast-notification";

    if (isError) {
        toast.classList.add("error");
    }

    const iconClass = isError
        ? "fa-solid fa-circle-exclamation"
        : "fa-solid fa-check";

    toast.innerHTML = `
        <div class="toast-icon">
            <i class="${iconClass}"></i>
        </div>

        <div class="toast-text">
            <span class="title"></span>
            <span class="desc"></span>
        </div>
    `;

    // Gán nội dung bằng textContent để tránh chèn HTML ngoài ý muốn
    toast.querySelector(".title").textContent = title;
    toast.querySelector(".desc").textContent = description;

    document.body.appendChild(toast);

    // Hiển thị hiệu ứng
    requestAnimationFrame(function () {
        toast.classList.add("show");
    });

    // Tự ẩn sau 3 giây
    setTimeout(function () {
        toast.classList.remove("show");

        setTimeout(function () {
            toast.remove();
        }, 300);
    }, 3000);
}

// Xử lý khi nhấn Xác nhận
if (changePasswordForm) {
    changePasswordForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // THÀNH CÔNG: Hiện thông báo
        closeChangePasswordModal();

        changePasswordForm.reset();

        showPasswordToast(
            "Đổi mật khẩu thành công!",
        );
    });
}


    // --- 3. Chức năng tìm kiếm nhanh (Live Search) trên Header không lệch layout ---
    const searchInput = document.querySelector(".search-box input");
    const tableRows = document.querySelectorAll(".admin-table tbody tr");

    if (searchInput) {
        searchInput.addEventListener("input", function (e) {
            const keyword = e.target.value.toLowerCase().trim();
            
            tableRows.forEach(row => {
                const textContent = row.textContent.toLowerCase();
                if (textContent.includes(keyword)) {
                    row.style.display = ""; // Hiển thị lại dòng nếu khớp từ khóa
                } else {
                    row.style.display = "none"; // Ẩn dòng không khớp
                }
            });
        });
    }

    // 4. Chức năng thông báo khi bấm vào nút chuông
    const bellBtn = document.querySelector(".icon-btn");
    const notificationDot = bellBtn ? bellBtn.querySelector(".dot") : null;

    if (bellBtn) {
        bellBtn.addEventListener("click", function () {
            if (notificationDot) {
                notificationDot.style.display = "none"; // Ẩn chấm đỏ thông báo
            }
            
        });
    }
});