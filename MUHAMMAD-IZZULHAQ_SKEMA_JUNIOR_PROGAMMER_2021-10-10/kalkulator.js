//Pertama, himpun data angka (number) dari html menggunakan querySelectorAll
const numbers= document.querySelectorAll(".number")
//Kemudian setting tampilan layar awal kalkulator agar menampilkan angka-anngka dari number
const layarKalkulator = document.querySelector('.layar-kalkulator')
const updateScrean = (number) => {
    layarKalkulator.value = number
}
//tetapkan angka '0' sebagai angka awal ketika kalkulator dibuka dan tetapkan dua variabel untuk menampung 2 angka dan 1 operator
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'
//tetapka function InputNumber menjadi string dan berikan if statement agar tidak didahului angka 0 setiap mengetikan angka
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number       
    }
}
//tambahkan forEach agar setiap angka dari number bisa dimuat dan addEventListener agar setiap angka numbers dapat ditampilkan pada layar kalkulator
//agar angka yang kita klik memperbaharui tampilan pada layar kalkulator
//tambahkan argument event dan function event.target.value
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScrean(currentNumber)
    })
})
//jangan lupa untuk melihat fungsi kalkulator dengan inspectool di browser, karena akan langsung ada tanda di string mana salahnya

//tetapkan function untuk operator dan hubungkan dengan menggunakan queryselector, forEach dan addEventListener seperti pada number
const operators = document.querySelectorAll(".operator")
//agar angka yang kita klik memperbaharui tampilan pada layar kalkulator
//tambahkan argument event dan function event.target.value
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})
//tetapkan function inputOperator dan berikan argumen operator
const inputOperator = (operator) => {
    if (calculationOperator === '') {
    prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}
//tetapkan function equalsign
const equalSign = document.querySelector('.equal-sign')
//tetapkan kasus-kasus operator yang akan dieksekusi oleh kalkulator
//gunakan parseFloat agar operasi angka-angka yang akan ditekan akan dibaca sebagai integer bukan string
const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            return

    }
    currentNumber = result
    calculationOperator = ''
}
//teteapkan addEventListener dari equalsign agar ketika diklik akan memunculkan hasil operasi
equalSign.addEventListener('click', () => {
    calculate ()
    updateScrean(currentNumber)
})
//teteapkan function dari all-clear
const clearBtn = document.querySelector('.all-clear')
//teteapkan addeventlistener dari all-clear agar ketika diklik angka di layar menjadi 0
clearBtn.addEventListener('click', () => {
    clearAll()
    updateScrean(currentNumber)
    
})
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}
//hubungkan tombol decimal dengan class di html
const decimal = document.querySelector('.decimal')
//teteapkan addeventlistener decimal agar ketika diklik integer akan dinyatakan sebagi decimal
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScrean(currentNumber)
})
//tetapkan tanda'.' sebagai tanda decimal dan mendeteksi setiap angka yang disertai dekan '.' akan dibaca sebagai integer decimal 
inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}
//hubungkan tombol percen dengan percentage yang ada di html
const percentage = document.querySelector('.percentage')
//tetapkan addeventListener agar tombol persen terdeteksi saat diklik
percentage.addEventListener('click', (event) => {
    inputPercentage(event.target.value)
    updateScrean(currentNumber)
})
//tetapkan function inputpercentagen dengan function velue, dimana value = value/100
//dan currentNumber = value agar hasil dari value langsung ditampilkan pada layar kalkulator.
inputPercentage = (value) => {
    var value = currentNumber;
    value = value/100;
   currentNumber = value
}