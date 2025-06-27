//.filter +
// .find +
// .findIndex +
// .map 
// .forEach
// .includes
// .indexOf
// .every
// .some
// .sort
// Spread

// var arr = ['boba', 'biba', 'kaka']

// arr.push('popa')



// var arr_1 = ['biba']
// var arr_2 = ['boba']
// var arr_4 = ['bob']

// arr_1.push('bird', 'rabbit')

// var arr_3 = arr_1.concat(['something'])
// console.log(arr_3)

// var kiki = [
//     ['gigi', 'hihi'], 
//     ['popa', 'muj'], 
//     [1, 'ttttt']
// ]

// kiki[0].push(['popka'])
// var plus = kiki[0].flat()

// var koko = kiki.flat()

// console.log(koko, plus)

// your solution
// arr=[18, 7, 1111, "", -3, null, 5, 5, 0, 5]

//--------------------------------------------------------------------------------------------

// function length(arr) {
//     var i = 0
    
//     // if(i == 0) {
//     //     i = 1
//     // }

//     while(arr[i] || arr[i] == 0 || arr[i] == "") {
//        i++
//     }

//     return i
// }



// console.log(length(arr))

//---------------------------------------------------------------------------------------------


// massiv = ['popa', 'red', 7, , "rrrrrrr", 9, -345, 'kiki']

// function sep(arr, x) {
//     var res = ''
//     for (let i = 0; i < arr.length; i++) {
//         if (i != arr.length - 1) {
//             res = res + arr[i] + x
//         }
//     }
//     res = res + arr[arr.length-1]
//     return res
// }

// console.log(sep(massiv, ' * '))

//---------------------------------------------------------------------------------------------

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.at(2))

// function choose(arr, i) {
//         console.log(arr[i])
// }

// console.log(choose(fruits, 3))

//-------------------------------------------------------------------------------------------------

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// function del(arr) {
//     res = []
//     for(var i = 0; i < arr.length - 1; i++) {
//         res[i] = arr[i]
//     }

//     return res
// }

// console.log(del(fruits))

//--------------------------------------------------------------------------------------------------

// const fruits = ["Banana", "Orange", "Apple", "Mango"]
// function push(arr, ...x) {
//     res = []

//     for(var i = 0; i < arr.length; i++) {
//         res[i] = arr[i]
//     }

//     for (var i = 0; i < x.length; i++) {
//         res[i + arr.length] = x[i]
//     }

//     return res
// }

// console.log(push(fruits, "Popa", 'Boba'))

//---------------------------------------------------------------------------------------------------

// const ages = [32, 33, 16, 40, 102, 8, 30];
// const result = ages.filter(check)

// function check(age) {
//     return age >= 21
// }

// console.log(result)



// const ages = [32, 33, 16, 40, 102, 8, 30];

// function check(age) {
//     return age >=21
// }

// function filter(arr) {
    
//     result = []
//     var k = 0
    
//     for(var i = 0; i < arr.length; i++) {
//         if (check(arr[i]) == true)  {
//             result[k] = arr[i]
//             k++
//         }

//     }

//     return result
        
// }

// console.log(filter(ages))

//--------------------------------------------------------------------------------------------------

// const ages = [32, 33, 16, 40, 102, 8, 30];

// function checkAge(age) {
//    return age > 18
// }

// const result = ages.filter(checkAge)

// console.log(result)

//-----------------------------------------------------------------------------------------------------

// const ages = [34, 100, 54, 8, 99, 12, 22, 30, 4,]

// function checkAge(age) {
//     res = age < 18;
//     return res
// }

// function find(age, fun) {
 
//     result = ''

//     for(i = 0; result == ''; i++) {
    
//         if(fun(age[i]) == true) {
//             result = result + age[i]
//         }
        
//     }
//     return result   
// }    

// console.log(find(ages, checkAge))

// function find(age, fun) {

//     result = ''
//     i = 0
//     if(fun(age[i]) == true) {
//         result = result + age[i]
//     } do {
//         i++
//     } while(result == '')

//    result = age[i]

// }

//--------------------------------------------------------------------------------------

// const ages = [34, 100, 4, 54, 99, 12, 22, 30, 4,]

// function checkAge(age) {
//     return age < 18
// }

// function findIndex(arr, func) {
    
//     res = ''

//     for(var i = 0; res == ''; i++) {
//         if(func(arr[i]) == true) 
//             res = i
//     }
//     return res
// }

// console.log(findIndex(ages, checkAge))

//--------------------------------------------------------------------------------------------

const numbers = [34, 100, 4, 54, 99]

function calc(numb) {
    return numb * 10
}

// console.log(numbers.map(calc))

function map(arr, func) {
    
    res = []

    for(i = 0; i < arr.length; i++) {
      res[i] = func(arr[i])
    }

    return res
}

console.log(map(numbers, calc))


