window.onload = function() {
    //Bai 8 
    var input8 = document.querySelector("#input8");
    var output8 = document.querySelector("#output8");
    var click8 = document.querySelector("#click8");
    click8.addEventListener("click", function() {
        if (input8.value.length <= 0) {
            alert("Enter input (number)");
        } else if (input8.value > 0) {
            output8.value = "Chua lam...!!"
        } else {
            output8.value = "Input không hợp lệ (Input là number)";
        }
    });
    // Bai 9
    var input9 = document.querySelector("#input9");
    var output9 = document.querySelector("#output9");
    var click9 = document.querySelector("#click9");
    click9.addEventListener("click", function() {
        var count = 0;
        if (input9.value.length <= 0) {
            alert("Enter input (number)");
        } else if (input9.value > 0) {
            for (var i = 1; i <= input9.value; i++) {
                if (input9.value % i == 0) {
                    count++;
                }
            }
            if (count == 3) {
                console.log("YES");
                output9.value = "YES";
            } else {
                console.log("NO" + " - Count = " + count);
                output9.value = "NO";
            }
        } else {
            output9.value = "Input không hợp lệ (Input là number)";
        }
    });

    // Bai 10
    var input10 = document.querySelector("#input10");
    var output10 = document.querySelector("#output10");
    var click10 = document.querySelector("#click10");
    click10.addEventListener("click", function() {
        //event.preventDefault();
        if (input10.value.length <= 0) {
            alert("Enter input (number)");
        } else if (parseInt(input10.value) > 0) {
            var st = 0;
            var xx = parseInt(input10.value);
            console.log(xx);
            for (var i = 1; i <= xx; i++) {
                st += st + i;
                if (st >= xx) {
                    console.log(i);
                    output10.innerHTML = i;
                    break;
                }
            }
        } else {
            output10.value = "Input không hợp lệ (Input là number)"
        }
    });
}