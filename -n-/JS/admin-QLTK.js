
document.addEventListener("DOMContentLoaded", function () {

    // =========================================
    // 1. LẤY CÁC PHẦN TỬ HTML
    // =========================================
    const openModalBtn = document.getElementById("btnOpenAddManual");
    const addModal = document.getElementById("addManualModal");
    const addForm = document.getElementById("addManualForm");
    const closeModalBtn = document.getElementById("closeAddModalBtn");
    const cancelModalBtn = document.getElementById("cancelAddModalBtn");
    const autoAddBtn = document.getElementById("btnAddAuto");
    // const searchBtn = document.getElementById("btnSearch");

    // =========================================
    // 2. HIỂN THỊ TOAST
    // =========================================
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

        const icon = document.createElement("div");
        icon.className = "toast-icon";

        const checkIcon = document.createElement("i");
        checkIcon.className = "fa-solid fa-check";
        icon.appendChild(checkIcon);

        const textBox = document.createElement("div");
        textBox.className = "toast-text";

        const titleElement = document.createElement("span");
        titleElement.className = "title";
        titleElement.textContent = title;

        const descriptionElement = document.createElement("span");
        descriptionElement.className = "desc";
        descriptionElement.textContent = description;

        textBox.append(titleElement, descriptionElement);
        toast.append(icon, textBox);
        container.appendChild(toast);

        // Tự động ẩn Toast sau 3 giây
        setTimeout(function () {
            toast.classList.add("hide");

            setTimeout(function () {
                toast.remove();
            }, 300);
        }, 3000);
    }

    // Hiệu ứng làm mờ rồi reload trang
    function reloadPageWithEffect() {
            window.location.reload();
    }
    // =========================================
    // 3. MỞ MODAL THÊM THỦ CÔNG
    // =========================================
    if (openModalBtn && addModal) {
        openModalBtn.addEventListener("click", function () {
            addModal.classList.add("show");
        });
    }


    // =========================================
    // 4. ĐÓNG MODAL
    // =========================================
    function closeAddModal() {
        if (addModal) {
            addModal.classList.remove("show");
        }
    }

    // Nút đóng
    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", closeAddModal);
    }

    // Nút hủy
    if (cancelModalBtn) {
        cancelModalBtn.addEventListener("click", closeAddModal);
    }

    // Nhấn vùng tối bên ngoài modal
    if (addModal) {
        addModal.addEventListener("click", function (event) {
            if (event.target === addModal) {
                closeAddModal();
            }
        });
    }

    // Nhấn phím Escape
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeAddModal();
        }
    });


    // =========================================
    // 5. THÊM THỦ CÔNG
    // CHỈ HIỂN THỊ GIAO DIỆN, KHÔNG THÊM DÒNG
    // =========================================
    if (addForm) {
        addForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Không kiểm tra dữ liệu bắt buộc.
            // Không tạo dòng mới trong bảng.

            closeAddModal();
            addForm.reset();

            showFloatingToast(
                "Thao tác thành công!",
                "Đã mô phỏng chức năng thêm tài khoản thủ công."
            );
            setTimeout(function () {
                reloadPageWithEffect();
            }, 400);
        });
    }


    // =========================================
    // 6. THÊM TỰ ĐỘNG
    // CHỈ HIỂN THỊ TOAST, KHÔNG THÊM DÒNG
    // =========================================
    if (autoAddBtn) {
        autoAddBtn.addEventListener("click", function () {
            showFloatingToast(
                "Thao tác thành công!",
                "Đã mô phỏng chức năng thêm tài khoản tự động."
            );
            setTimeout(function () {
                reloadPageWithEffect();
            }, 400);
        });
    }


    // =========================================
    // 7. GÁN VAI TRÒ CỐ ĐỊNH CHO NGƯỜI DÙNG
    // DỰA TRÊN THỨ TỰ CÁC HÀNG TRONG HTML
    // =========================================
    const userRoles = [
        { name: "Quản lý", className: "role-manager" },
        { name: "Nhân viên", className: "role-employee" },
        { name: "Khách hàng", className: "role-customer" },
        { name: "Nhân viên", className: "role-employee" },
        { name: "Khách hàng", className: "role-customer" },
        { name: "Khách hàng", className: "role-customer" },
        { name: "Nhân viên", className: "role-employee" },
        { name: "Khách hàng", className: "role-customer" },
        { name: "Khách hàng", className: "role-customer" },
        { name: "Quản lý", className: "role-manager" }
    ];

    const userRows = document.querySelectorAll("#userTableBody tr");

    userRows.forEach(function (row, index) {
        const roleCell = row.querySelector(".role-cell");

        if (!roleCell || !userRoles[index]) {
            return;
        }

        const role = userRoles[index];

        const badge = document.createElement("span");
        badge.className = "role-badge " + role.className;
        badge.textContent = role.name;

        roleCell.replaceChildren(badge);
    });


    // =========================================
    // 8. KIỂM TRA KHỞI TẠO
    // =========================================
    console.log("Admin Users JS đã sẵn sàng!");

    // 9. MODAL CHO THANH TÌM KIẾM
    if (searchIdInput) {
        searchIdInput.addEventListener("keydown", function () {
            if (event.key === "Enter") {
                showFloatingToast(
                    "Đang tìm kiếm..."
                );
                setTimeout(function () {
                    reloadPageWithEffect();
                }, 600);
            }
        });
    }
    
    });
