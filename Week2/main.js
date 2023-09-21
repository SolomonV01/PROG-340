function sumNum()
{
    let numberOne, numberTwo, sum;

    numberOne = parseInt(document.getElementById("numberOne").value);
    numberTwo = parseInt(document.getElementById("numberTwo").value);

    sum = numberOne + numberTwo;
    document.getElementById("sumAnswer").value = sum;
}

function squareNum()
{
    let numberOne, numberTwo, squareRootOne, squareRootTwo;

    numberOne = parseInt(document.getElementById("numberOne").value);
    numberTwo = parseInt(document.getElementById("numberTwo").value);

    squareRootOne = Math.sqrt(numberOne);
    document.getElementById("sqrtAnswerOne").value = squareRootOne;

    squareRootTwo = Math.sqrt(numberTwo);
    document.getElementById("sqrtAnswerTwo").value = squareRootTwo;
}