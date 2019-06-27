// BAI 9
window.onload = function() {
    var click = document.getElementById("click");

    click.addEventListener("click", function() {
        alert("hello");
        // console.log("logabc");
        // if (input.value.length <= 0) {
        //     alert("Enter input (number)");
        // } else {
        //     for (i = 1; i <= input.value; i++) {
        //         if (input.value % i == 0) {
        //             count++;
        //         }
        //     }
        //     if (count == 3) {
        //         console.log("YES");
        //         output.value = "YES";
        //     } else {
        //         console.log("NO" + " - Count = " + count);
        //         output.value = "NO";
        //     }
        // }
    });
};



// // Bai 1

// /* Bai 1: Cấp 1 */
// var string = "OOOCCHH";
// var result = 0;

// for (var i = 0; i <= string.length - 1; i++) {
//     var a = string.charAt(i);

//     if (a == "C") {
//         result += 12;
//     } else if (a == "O") {
//         result += 16;
//     } else if (a == "H") {
//         result += 1;
//     }
// }
// document.write("Cấp 1: Tính khối lượng " + string + "<br>");
// document.write("Khối lượng của " + string + " là: " + result + "<br><br><br>");


// /* -------------------------------------------------------- */


// /* Bài 1: cấp 2 */
// var txt = "CH(CO2H)3";
// var kq = 0;
// var h;
// var kq1 = 0;
// var kq2 = 0;
// var kq12 = 0;
// var total = 0;

// for (var i = 0; i <= txt.length - 1; i++) {
//     var a = txt.charAt(i);
//     if (a == "(") {
//         var cat = txt.substring(0, i);
//         document.write("Cấp 2: Tính khối lượng của " + txt + "<br>");
//         document.write("Cắt ra trước ngoặc đơn CH: " + cat + "<br>");

//         for (var j = 0; j <= cat.length - 1; j++) {
//             var b = cat.charAt(j);
//             if (b == "C") {
//                 kq += 12;
//             } else if (b == "O") {
//                 kq += 16;
//             } else if (b == "H") {
//                 kq += 1;
//             }
//         }
//         document.write("Khối lượng CH: " + kq + "<br><br>");
//         total += kq;
//     }
// }


// var newTxt = txt.split('(');

// for (var k = 1; k < newTxt.length; k++) {
//     var txt2 = newTxt[k].split(')')[0];
//     document.write("Lấy ra trong ngoặc đơn CO2H: " + txt2 + "<br>");
//     for (h = 0; h <= txt2.length - 1; h++) {
//         var c = txt2.charAt(h);
//         if (c == "C") {
//             kq1 += 12;
//         } else if (c == "O") {
//             kq1 += 16;
//         } else if (c == "H") {
//             kq1 += 1;
//         }

//         if (h > 1) {
//             var d = txt2.charAt(h - 1);
//             if (d == "C") {
//                 kq2 += 12 * h - 12;
//             } else if (d == "O") {
//                 kq2 += 16 * h - 16;
//             } else if (d == "H") {
//                 kq2 += 1 * h - 1;
//             }
//         }
//     }
//     kq12 = kq1 + kq2;
//     //document.write("Đây là kết qủa 1: " + kq1 + "<br>");
//     //document.write("Tính kết quả O2: " +  kq2 + "<br>");
//     document.write("Khối lượng CO2H: " + kq12);
//     total += kq1 + kq2;
// }

// document.write("<br><br> Total: " + total + "<br>");


// // Bai 10
// var input = document.getElementById("input");
// var output = document.getElementById("output");
// var btn = document.getElementById("click");

// var st = 0;
// btn.addEventListener("click", function() {
//     //event.preventDefault();
//     var xx = parseInt(input.value);
//     console.log(xx);
//     for (var i = 1; i <= xx; i++) {
//         st += st + i;
//         if (st >= xx) {
//             console.log(i);
//             output.innerHTML = i;
//             break;
//         }
//     }
// });