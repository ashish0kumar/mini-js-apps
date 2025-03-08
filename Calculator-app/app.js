let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let expression = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {

            try {
                expression = eval(expression);

                if (isNaN(expression)) {
                    throw new Error('')
                }

                input.value = expression;

            } catch (error) {
                input.value = "Format Error";
                setTimeout(() => {
                    input.value = "";
                }, 2000)
            }
        }

        else if (e.target.innerHTML == 'AC') {
            expression = "";
            input.value = expression;
        }

        else if (e.target.innerHTML == 'DEL') {
            expression = expression.substring(0, expression.length - 1);
            input.value = expression;
        }

        else {
            expression += e.target.innerHTML;
            input.value = expression;
        }
    })
})