let num1 = document.getElementById("num1");
        let num2 = document.getElementById("num2");
        let add = document.getElementById("add");
        let subs = document.getElementById("subs");
        let div = document.getElementById("div");
        let mul = document.getElementById("mul");
        let palin = document.getElementById("palin");
        let res = document.getElementById("res");

        add.addEventListener("click", function () {
            res.textContent = Number(num1.value) + Number(num2.value);
            num1.value = "";
            num2.value = "";
        })

        subs.addEventListener("click", function () {
            if (Number(num1.value) > Number(num2.value)) {
                res.textContent = Number(num1.value) - Number(num2.value);
            } else {
                res.textContent = Number(num2.value) - Number(num1.value);
            }
            num1.value = "";
            num2.value = "";
        })

        mul.addEventListener("click", function () {
            res.textContent = Number(num1.value) * Number(num2.value);
            num1.value = "";
            num2.value = "";
        })

        div.addEventListener("click", function () {
            if (Number(num1.value) > Number(num2.value)) {
                res.textContent = Number(num1.value) / Number(num2.value);
            } else {
                res.textContent = Number(num2.value) / Number(num1.value);
            }
            num1.value = "";
            num2.value = "";
        })

        palin.addEventListener("click", function () {
            let isResult = String(res.innerText);

            let i = 0, j = isResult.length - 1;
            while (i < j) {
                if (isResult[i] !== isResult[j]) {
                    res.textContent = isResult + " is NOT PALINDROME.";
                    return
                }
                i++; j--;
            }
            res.textContent = isResult + " is PALINDROME.";
        });