// Bài 1: Tính tiền lương nhân viên
document.getElementById("tinhLuong").onclick = function () {
  let luongNgay = document.getElementById("luongNgay").value * 1;
  let soNgayLam = document.getElementById("soNgayLam").value * 1;
  let tongLuong = luongNgay * soNgayLam;
  document.getElementById("ketQua1").innerHTML = `
    <p>Tiền lương nhân viên :
    ${Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
      tongLuong
    )}</p>
    `;
};

// Bài 2: Tính giá trị trung bình
document.getElementById("tinhGiaTriTrungBinh").onclick = function () {
  let soThuNhat = document.getElementById("soThuNhat").value * 1;
  let soThuHai = document.getElementById("soThuHai").value * 1;
  let soThuBa = document.getElementById("soThuBa").value * 1;
  let soThuTu = document.getElementById("soThuTu").value * 1;
  let soThuNam = document.getElementById("soThuNam").value * 1;

  let tongCacSo = soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam;
  let trungBinh = tongCacSo / 5;
  document.getElementById("ketQua2").innerHTML = `
        <p>Giá trị trung bình của 5 số là : ${trungBinh.toFixed(2)}</p>
    `;
};

// Bài 3: Chuyển đổi tiền tệ USD -> VND
document.getElementById("doiTien").onclick = function () {
  let tienUSD = document.getElementById("tienUSD").value * 1;
  let tienVND = tienUSD * 23500;
  document.getElementById("tienViet").innerHTML = `
        <p>${Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(tienUSD)}  <==> ${Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(tienVND)}</p>
    `;
};

// Bài 4: Tính chu vi & diện tích hình chữ nhật
document.getElementById("tinhToan").onclick = function () {
  let chieuDai = document.getElementById("chieuDai").value * 1;
  let chieuRong = document.getElementById("chieuRong").value * 1;
  let dienTich = chieuDai * chieuRong;
  let chuVi = (chieuDai + chieuRong) * 2;
  document.getElementById("ketQua3").innerHTML = `
    <p>Diện tích hình chữ nhật : ${dienTich}</p>
    <p>Chu vi chữ nhật : ${chuVi}</p>
  `;
};

// Bài 5: Tính tổng 2 ký số
document.getElementById("kySo").onclick = function () {
  let number1 = document.getElementById("number1").value * 1;
  let soDonVi = number1 % 10;
  let soHangChuc = Math.floor(number1 / 10);
  let tong2KySo = soDonVi + soHangChuc;
  document.getElementById(
    "ketQua4"
  ).innerHTML = `<p>Tống 2 ký số là : ${soHangChuc} + ${soDonVi} = ${tong2KySo}</p>`;
};
