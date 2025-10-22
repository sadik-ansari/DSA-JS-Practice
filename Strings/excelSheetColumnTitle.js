// Problem: Excel Sheet Colum Title (#168) - https://leetcode.com/problems/excel-sheet-column-title/description/

var convertToTitle = function (columnNumber) {
    let obj = {};
    let i = 1
    let j = 65
    let str = ""
    while (i < 27) {
        obj[i] = j
        j++;
        i++
    }
    if (columnNumber <= 26) {
        return String.fromCharCode(obj[columnNumber])
    }
    else {
        while (columnNumber > 0) {
            columnNumber--;
            let remainder = columnNumber % 26;
            str = String.fromCharCode(obj[remainder + 1]) + str;
            columnNumber = Math.floor(columnNumber / 26);
        }
        return str;
    }

}
