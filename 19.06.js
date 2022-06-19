//1.
//Напишите функцию, которая принимает 
//целое число n и строку s в качестве параметров 
//и возвращает строку s, повторяющуюся ровно n раз.

function repeatStr (n, s) {
    if (n > 0)
      return s.repeat(n);
    else
      return false;
    }

// 2.Умножьте первые n элементов массива, 
// чтобы создать произведение этих элементов. 
// Используя цикл for

function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }