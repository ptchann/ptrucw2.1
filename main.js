function hinhvuong() {
  var canh = parseInt(document.forms["hinhvuongform"]["canh"].value);
  var chuvihv = canh * 4;
  var dientichhv = canh * canh;
  if (isNaN(canh) || canh <= 0) {
    alert("Vui lòng nhập số nguyên dương");
  } else {
    document.getElementById("chuvihv").innerHTML =
      "Chu vi hình vuông là: " + chuvihv;
    document.getElementById("dientichhv").innerHTML =
      "Diện tích hình vuông là: " + dientichhv;
  }
}
function hinhtron() {
  var r = parseInt(document.forms["hinhtronform"]["r"].value);
  var chuviht = 2 * 3.14 * r;
  var dientichht = 3.14 * r * r;
  if (isNaN(r) || r <= 0) {
    alert("Vui lòng nhập số nguyên dương");
  } else {
    document.getElementById("chuviht").innerHTML =
      "Chu vi hình tròn là: " + chuviht;
    document.getElementById("dientichht").innerHTML =
      "Diện tích tròn là: " + dientichht;
  }
}
function hinhtamgiac() {
  var A = parseInt(document.forms["hinhtamgiacform"]["A"].value);
  var B = parseInt(document.forms["hinhtamgiacform"]["B"].value);
  var C = parseInt(document.forms["hinhtamgiacform"]["C"].value);
  var P = (A + B + C) / 2;
  var chuvihtg = A + B + C;
  var dientichhtg = Math.sqrt(P * (P - A) * (P - B) * (P - C));
  if (isNaN(A) || isNaN(B) || isNaN(C) || A <= 0 || B <= 0 || C <= 0) {
    alert("Vui lòng nhập số nguyên dương");
  } else {
    document.getElementById("chuvihtg").innerHTML =
      "Chu vi hình tam giác là: " + chuvihtg;
    document.getElementById("dientichhtg").innerHTML =
      "Diện tích tam giác là: " + dientichhtg;
  }
}
function hinhthang() {
  var a = parseInt(document.forms["hinhthangform"]["a"].value);
  var b = parseInt(document.forms["hinhthangform"]["b"].value);
  var c = parseInt(document.forms["hinhthangform"]["c"].value);
  var d = parseInt(document.forms["hinhthangform"]["d"].value);
  var h = parseInt(document.forms["hinhthangform"]["h"].value);
  var chuvihth = a + b + c + d;
  var dientichhth = ((a + b) * h) / 2;
  if (
    isNaN(a) ||
    isNaN(b) ||
    isNaN(c) ||
    isNaN(d) ||
    isNaN(h) ||
    a <= 0 ||
    b <= 0 ||
    c <= 0 ||
    d <= 0 ||
    h <= 0
  ) {
    alert("Vui lòng nhập số nguyên dương");
  } else {
    document.getElementById("chuvihth").innerHTML =
      "Chu vi hình thang là: " + chuvihth;
    document.getElementById("dientichhth").innerHTML =
      "Diện tích hình thang là: " + dientichhth;
  }
}
