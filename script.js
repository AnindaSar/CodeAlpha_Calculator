const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");

let expression = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "Clear") {
            expression = "";
        } else if (value === "=") {
            try {
                expression = eval(expression);
            } catch {
                expression = "Error";
            }
        } else {
            expression += value;
        }

        result.value = expression;
    });
});
