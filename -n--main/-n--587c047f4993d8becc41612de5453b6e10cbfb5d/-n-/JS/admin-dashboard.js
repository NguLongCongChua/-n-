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

    const changePasswordBtn = document.getElementById("changePasswordBtn");
    if (changePasswordBtn) {
        changePasswordBtn.addEventListener("click", function (e) {
            e.preventDefault();
            
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