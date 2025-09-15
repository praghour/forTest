let btnType = document.getElementById('btnType')
let btnClear = document.getElementById('btnClear')
let result = document.getElementById('result')
let error = document.getElementById('error')


function get_triangle_type() {
    let side1 = Number(document.getElementById('side1').value)
    let side2 = Number(document.getElementById('side2').value)
    let side3 = Number(document.getElementById('side3').value)
    let summa = side1 + side2 + side3
    if (isNaN(summa)) {
        error.textContent = 'Можно вводить только числа!'
        result.textContent = ''
    }
    else if (side1 == '' || side2 == '' || side3 == ''){
        error.textContent = 'Должны быть введены все стороны!'
        result.textContent = ''
    }
        else if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
        error.textContent = 'Все стороны должны быть больше нуля!'
        result.textContent = ''
    }
    else if (side1+side2<=side3 
    || side2+side3<=side1 
    || side1+side3<=side2) {
        error.textContent = 'Треугольник с такими сторонами не существует!'
        result.textContent = ''
    }
    else if (side1 == side2 && side2 == side3) {
        error.textContent = ''
        result.textContent = 'Это равносторонний треугольник :)'
    }
    else if (side1 == side2 && side2 !== side3
    || side2 == side3 && side3 !== side1
    || side1 == side3 && side3 !== side2) {
        error.textContent = ''
        result.textContent = 'Это равнобедренный треугольник :)'
    }
    else if (side1 !== side2 && side2 !== side3) {
        error.textContent = ''
        result.textContent = 'Это разносторонний треугольник :)'
    }
}


function clear() {
    side1.value = ''
    side2.value = ''
    side3.value = ''
    result.textContent = ''
    error.textContent = ''
}


btnType.addEventListener('click', get_triangle_type)
btnClear.addEventListener('click', clear)