let inputWidth;
let inputHeight;

inputWidth = prompt("Nhap chieu rong");
inputHeight = prompt("Nhap chieu cao");

let width = parseInt(inputWidth);
let height = parseInt(inputHeight);

let dientich = width * height;

document.write("Dien tich hinh chu nhat = ", dientich);