//.filter +
// .find +
// .findIndex +
// .map +
// .forEach+
// .includes +
// .indexOf +
// .every +
// .some + 
// .sort +
// Spread + 
// reduce +

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

// const numbers = [34, 100, 4, 54, 99]

// function calc(numb) {
//     return numb * 10
// }

// // console.log(numbers.map(calc))

// function map(arr, func) {
    
//     res = []

//     for(i = 0; i < arr.length; i++) {
//       res[i] = func(arr[i])
//     }

//     return res
// }

// console.log(map(numbers, calc))

//----------------------------------------------------------------------------------------------------

// const numbers = [4, 9, 16, 25];
// // const newArray = numbers.map(Math.sqrt)

// // console.log(newArray)

// function root(num) {
//     return Math.sqrt(num)
// }

// function map(arr, func) {
//     result = []
//     for(i = 0; i < arr.length; i++) {
//         result[i] = func(arr[i])
//     }
//     return result
// }

// console.log(map(numbers, root))



// function mapSq(arr) {
//     result = []
//     for(i = 0; i < arr.length; i++) {
//         result[i] = Math.sqrt(arr[i])
//     }
//     return result
// }

// console.log(mapSq(numbers))

//-------------------------------------------------------------------------------------------------------

// const fruits = ["apple", "orange", "cherry"];

// let text = ""

// function myFunc(index, item) {
//     text += index + ": " + item + "; ";
// }

// // fruits.forEach(myFunc)

// // console.log(text)

// function forEch(arr, func) {
//     for(i = 0; i < arr.length; i++) {
//         func(i, arr[i])
//     }
// }

// forEch(fruits, myFunc)

// console.log(text)

//---------------------------------------------------------------------------------------------------------

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // console.log(fruits.includes("Banana"))

// function includs(arr, item) {
    
//     result = false

//     for(i = 0; i < arr.length; i++) {
//         if(item == arr[i]) {
//             result = true
//         }
//     }

//     return result
// }

// console.log(includs(fruits, "Apple"))

//-------------------------------------------------------------------------------------------------------------

// const fruits = ["Apple", "Orange", "Apple", "Mango", "Apple"];
// // let index = fruits.lastIndexOf("Apple")

// function lastIndex(arr, item) {
//     result = -1

//     for(i = arr.length - 1; result == -1; i--) {
//         if(arr[i] == item) {
//             result = i
//         }
//         if(i < 0) {
//             break
//         }
//     }
    
//     return result
    
// }

// console.log(lastIndex(fruits, "Apple"))

// function lastIndexStart(arr, item) {
//     result = -1

//     for(i = 0; i < arr.length; i++) {
//         if(arr[i] == item) {
//             result = i
//         }
//     }
    
//     return result
// }

// console.log(lastIndexStart(fruits, "Apple"))

//---------------------------------------------------------------------------------------------------

// const ages = [21, 89, 22, 30, 38]

// function checkAge(age) {
//     return age > 17
// }

// // console.log(ages.every(checkAge))

// function everyMy(arr, func) {
//     result = true

//     for(i = 0; i < arr.length; i++)
//         if(func(arr[i]) !== true) {
//             result = false
//         }

//     return result
// }

// console.log(everyMy(ages, checkAge))

//-------------------------------------------------------------------------------------------------------

// const ages = [3, 10, 18, 22]
 
// function checkAdult(age) {
//     return age > 17
// }
 
// // console.log(ages.some(checkAdult))

// function some(arr, func) {
//     result = false

//     for(i = 0; i < arr.length; i++){
//         if(func(arr[i])) {
//             result = true
//             break
//         }
//     }

//     return result
// }

// console.log(some(ages, checkAdult))

//-----------------------------------------------------------------------------------------------------

// const fruits = ["Banana", "Orange", "Apple", "Mango"]

// console.log(fruits.sort())

// У тебя есть такой массив работников и тебе нужно отсортировать его в 
// алфавитном порядке, но при этом соблюдая иерархию (Сначала CEO, потом Manager, а затем Worker)

// Также есть поле isWorking, которое означает, работает ли еще этот человек или уволился. 
// Все не работающие сотрудники должны попадать в самый конец списка, 
// но при этом алфавитный порядок их имен и иерархия должны соблюдаться

// const workers =
// [
//     {
//       "name": "John",
//       "position": "Worker",
//       "isWorking": true
//     },
//     {
//       "name": "William",
//       "position": "Worker",
//       "isWorking": false
//     },
//     {
//       "name": "Abraham",
//       "position": "Manager",
//       "isWorking": false
//     },
//     {
//       "name": "James",
//       "position": "Manager",
//       "isWorking": true
//     },
//     {
//       "name": "Elon",
//       "position": "CEO",
//       "isWorking": true
//     },
//     {
//       "name": "Hoxton",
//       "position": "Worker",
//       "isWorking": true
//     },
//     {
//       "name": "Gregor",
//       "position": "Worker",
//       "isWorking": true
//     },
//     {
//       "name": "Casey",
//       "position": "Worker",
//       "isWorking": false
//     },
//     {
//       "name": "Charles",
//       "position": "Worker",
//       "isWorking": true
//     },
//     {
//       "name": "Richard",
//       "position": "Worker",
//       "isWorking": false
//     },
//     {
//       "name": "Leo",
//       "position": "Worker",
//       "isWorking": true
//     },
//     {
//       "name": "Leo",
//       "position": "Manager",
//       "isWorking": true
//     },
//     {
//       "name": "Charlie",
//       "position": "Manager",
//       "isWorking": true
//     },
//   ]
 
// function index(arr) {
//     // result = []

//     for(i = 0; i < arr.length; i++) {
//         if(arr[i].position == "CEO") {
//             arr[i].index = 5
//         }
//         if(arr[i].position == "Manager") {
//             arr[i].index = 10
//         }
//         if(arr[i].position == "Worker") {
//             arr[i].index = 15
//         }

//         // result[i] = arr[i]
//     }
    
// }

// index(workers)
  

// workers.sort((a, b) => a.name.localeCompare(b.name))
// workers.sort((a, b) => a.index - b.index)
// workers.sort((a, b) => b.isWorking - a.isWorking) 

// console.log(workers)

//-----------------------------------------------------------------------------------------------------

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2]

// console.log(arr3)

// // let arrays = [[arr1], [arr2], [arr3]]

// // function spread(arrays) {
// // result = []
// // k = 0
// // for(let i = 0; i < arrays.length; i++) {
// //     for(arrays[i]; i < arrays[i].length; i++) {
// //         result[k] = arrays[i]
// //         i++
// //     }
// // }
// // return result
// // }

// // console.log(spread(arrays))

//---------------------------------------------------------------------------------------------------------

// console.log(numbers.reduce(myFunc))

// function myFunc(total, num) {
  //   return total + num;
  // }
  
  // function reduce(arr) {
    
  //   total = arr[0]
  //   num = arr[1]
  
  //   for(i = 1; i < arr.length; i++) {
    
  
  //     total = total + num
  
  //     num = arr[i++]
  //   }
  
  //   return total
  // }
  
  //not my solution >
  
//   const numbers = [100, 5, 27, 23]

// function reduce(array, callback, initial) {
//   let acc = initial
  
//   for (let i = 0; i < array.length; i++) {
//     acc = callback(acc, array[i])
//   }
  
//   return acc
// }

// console.log(reduce(numbers, (acc, cur) => acc + cur, 0))

//not my solution

//-------------------------------------------------------------------------------------------------
// TASK 1: Using reduce(), create a new array of people above 18 years old consisting of their full names
// adultsFullNames(TASK_1) -> ['Igor Ivanov', 'Valentina Rykova']



// const TASK_1 = [
//   {
//     firstName: 'Vova',
//     lastName: 'Khmelnikov',
//     age: 15
//   },
//   {
//     firstName: 'Igor',
//     lastName: 'Ivanov',
//     age: 24
//   },
//   {
//     firstName: 'Ibrahim',
//     lastName: 'Musaev',
//     age: 12,
//   },
//   {
//     firstName: 'Valentina',
//     lastName: 'Rykova',
//     age: 34
//   }
// ]



// function adultsFullNames(arr) {
//   let res = []
  
//   res = arr.reduce((acc, cur) => {
//     if(cur.age >= 18) {
//       const fullName = cur.firstName + " " + cur.lastName
//       acc.push(fullName)}
//     return acc
//   }, [])
  
//   return res
// }


// console.log(adultsFullNames(TASK_1))


//-----------------------------------------------------------------------------------------------------------

// const TASK_2 = [60, 2, 4, 7, 18]

// const result = TASK_2.reduce((acc, cur, index) => {
  //   if(cur > 5) {
    //     acc.push(cur)
    //   }
    //   return acc
    // }, [])

//--------------------------------------------------------------------------------------------------------

// TASK 2: Using reduce(), return true if there is a transaction in USDT, otherwise, return false
// hasUSDT(TASK_2_1) -> true
// hasUSD(TASK_2_2) -> false
// function hasUSDT(transactions) {
//   return transaction.reduce(...)
// }

// const TASK_2_1 = [
//   {
//     value: 15,
//     currency: 'BTC',
//   },
//   {
//     value: 549,
//     currency: 'RUB'
//   },
//   {
//     value: 12,
//     currency: 'USDT'
//   },
//   {
//     value: 12,
//     currency: 'USDT'
//   },
//   {
//     value: 1089,
//     currency: 'RUB'
//   },
// ]

// // first solution
// function hasUSDT(transactions) {

//   let res = false

//   res = transactions.reduce((acc, cur) => {
//   if(cur.currency == 'USDT') {
//     acc = true
//   }
  
//    return acc

//   }, false) 

//   return res
  
// }

// console.log(hasUSDT(TASK_2_1))

// //second solution
// function hasUSDTT(transactions) {

//   let result = []

//   result = transactions.reduce((acc, cur) => {
//   if(cur.currency == 'USDT') {
//     acc.push(cur.currency)}
//     return acc
//   }, [] ) 

//   if(result.length > 0) {
//     result = true
//   } else {
//     result = false
//   }

  
//   return result
//   }

// console.log(hasUSDTT(TASK_2_1))


// const TASK_2_2 = [
//   {
//     value: 150,
//     currency: 'TRX',
//   },
//   {
//     value: 20500,
//     currency: 'AMD'
//   },
//   {
//     value: 5,
//     currency: 'TON'
//   }
// ]

// function hasUSDT(transactions) {

//   let res = false

//   res = transactions.reduce((acc, cur) => {
//   if(cur.currency == 'USDT') {
//     acc = true
//   }
  
//    return acc

//   }, false) 

//   return res
// }

// console.log(hasUSDT(TASK_2_2))

// function hasUSDTT(transactions) {

//   let result = []

//   result = transactions.reduce((acc, cur) => {
//   if(cur.currency == 'USDT') {
//     acc.push(cur.currency)}
//     return acc
//   }, [] ) 

//   if(result.length > 0) {
//     result = true
//   } else {
//     result = false
//   }

  
//   return result
//   }

//   console.log(hasUSDTT(TASK_2_2))

//------------------------------------------------------------------------------------------------------
class Animal {
  constructor(animal, sound) {
  this.name = animal
  this.sound = sound
  this.speak()
}

speak() {
  console.log(`${this.name} say ${this.sound}!`)
}
}


const dog = new Animal("Dog", "gav")

console.log(dog)