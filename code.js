
// var animal = "cat";
// animal = "dog";
// console.log("какой ты animal? - " + animal + "!");

// var apples = 8;
// var bananas = 2;

// console.log("вычитание:" + (apples - bananas))

// var num1 = "10";
// num1++;
// console.log("plus: " + num1)

// console.log("Math " + Math.PI)
// console.log("Math " + Math.min(0, 34, 37, 29, 0, -5, -9, 50))

// var number = 15;
// if (number<5) 
//     console.log("OK");
// else {
//     console.log("error!")}


// var stroka = "word";
    
//     switch(stroka) {
//         case ("4"): 
//             console.log("suppa 4");
//             break;

//         case ("wor"): 
//             console.log("suppa word");
//             break;

//         default:
//             console.log("riili");
//     }
    
//     var arr = [1, 2, 3, 5, true, "stroka", -100];
//     arr[3]= "kok";
//     console.log(arr[3]);

//     var arr = [1, 2, 3, 5, true, "stroka", -100];
//     arr[3]= "kok";
//     console.log(arr.length);

//     var matrix = [
//         [4, 5, 7, 2, -100], ["stroka", 6, 0, -1], ["bull", "null", 6, -100],
//     ]
    
//     console.log(matrix);
//     matrix [1][0] = 90;

    // for(var i = 140; i < 38; i /=3) {
    //     console.log(i);
    // }

    // var j = 500;
    // while(j > 10) {
    //     console.log(j);
    //     j /=1.33333333;
    // }

    // var isHasCar = true;
    // while(isHasCar) { 
    // }

    // var x = 66;
    // do {
    //     console.log(x);
    //     x *=1.1;
    // } while (x < 100);

    // for (var i = 30; i <= 90; i +=4) {
    //     if (i > 50) 
    //         break;
        
    //     console.log(i);
    // }

    // for (var i = 30; i <= 90; i++) {
    //     if (i %  == 0) 
    //         continue;
        
    //     console.log(i);
    // }

    // var arr = [5, 8, 3, 6 ,36, 89, 0, -3, -6, 'stroka', true]

    // for (var i = 0; i < arr.length; i++) {
    // arr[i] *=2;

    //     console.log("Элемент " + (i - 1) + ": " + arr[i]);
    // }

    // var al = alert("ok");
    // while (al < 8) {
    //     al++;
    // }

    // var data = confirm('do you at home now?');
    // if(data) {
    //     alert('you are cool!');
    // }
    // if(!data) {
    //     alert("you are not cool");
    //     }

    // var data = prompt('tell how old are you?');
    // console.log(data);

    // var var1 = null;

    // var person = null;
    // if(confirm('are you sure?')) {
    //     person = prompt ('your name');
    //     if(!person) {
    //         person = lina;
    //     }
    //     alert('hi, ' + person );
    // } else {
    //     alert("you pushed");
    // }

// function info (word) {
//     console.log(word + "!");
// }

// function summ (a, b) {
//     var res = a + b;
//     info(res);
// }

// summ (5, 7);

// function summ (arr) {
//     var sum = 0;

//     for (var i = 0; i < arr.length; i++) 
//         sum +=arr[i]

//     console.log(sum);
    
// }

// var array = [6, 8, 9];

// summ(array);

// for (var i = 0; i < 10; i++) {

// }

// function toFarenheit(celsius) {
//   return (celsius * 9 / 5) + 32
// }

// var turkeyC = 25
// var turkeyF = toFarenheit(turkeyC)

// var moscowC = 10
// var moscowF = toFarenheit(moscowC)

// var counter = 0;

// function onClickButton(el) {
//     counter++;
//     console.log(counter);
//     el.style.background = "red";
//     el.style.color = "blue";
//     el.style.cssText = "border-radius: 5px; font-size: 34px;";

//     el.innerHTML = 'hi ' + counter;
    
    // var person = null;
    // if(confirm('are you human?')) {
    //     person = prompt ('your name');
    //     if(!prompt) {
    //         person = "user";
    //     }
    //     alert('hi ' + person + ' !');
    // } else {
    //     alert('eerr');
    // };
// }

// var tet = document.getElementById('tet');
// tet.title = "new_text";
// console.log(tet.title);
// tet.style.color = "red";
// tet.style.backgroundColor = "blue";

// tet.innerHTML = "Nev<br>string";

// document.getElementById('tet').style.color = "black";

// var spans = document.getElementsByTagName('span');

// var spans = document.getElementsByClassName('smth');

// for (var i = 0; i < spans.length; i++) {
//     console.log(spans[i].innerHTML);
// }

// var form = document.getElementById('main-form') // {innerHTML: '<div>'}

// form.addEventListener(
//     'submit',
//     function (biba) {
//         biba.preventDefault()
//         console.log(biba)
//     }
// )


// // function onSubmit(event) {
// //     // event.preventDefault()
// //     console.log(form.innerHTML)
// //     form.innerHTML = '<div>Privet bov</div>'
// // }


// function checkForm(el) {
//     var name = el.name.value;
//     var pass = el.pass.value;
//     var repass = el.repass.value;
//     var state = el.state.value; 

//     var fail = "";

//     if (name == "" || pass == "" || state == "") {
//         fail = "Fill out all inputs";
//     }
//     if (name.length < 2 || name.length >= 30) {
//         if (fail !== "") {
//             fail = fail + "; " + "Enter the name";
//         }
//     }
//     if (pass != repass) {
//         if (fail !== "") {
//         fail = fail + "; " + "Check the password";
//     }
// }
//     if (pass.split("#").length > 1) {
//         if (fail !== "") {
//             fail = fail + "; " + "Uncorrect password";
//         }
//     }
//         if (fail !="") {
//             var error = document.getElementById('error');
//             error.innerHTML = fail;
//             return false;
//         }

//     else {
//         alert("Success");
//         return true
//     }

    //  if (fail !== "") {
    //     for (fail > 1; fail < fail.length; fail + "; ") {
    //     }
        
    //     alert(fail);
    //     }


    // function sep(fail) {
    //     var i = 0;
    //     for (i > 1; i < fail.length; i++) {
    //     }
    //     fail[i] + "; "
    // }
    // alert(fail);



    // if (fail !== "") {
    //     for (fail > 1; fail < fail.length; fail + "; ") {
    //     }
        
    //     alert(fail);
    //     }


    // return false;
// }

// Если сообщений больше чем одно то между ними ставить "; ", 
// перед первой ошибкой и после последней ошибки точки с запятой не должно быть

// function sayHi() {
//     console.log('Привет')
//   }

//   sayHi()






// function chooseToy(callback) {
//   var toys = ['мячик', 'собачий корень', 'тапок']
//   var randomToy = toys[Math.round(Math.random() * (toys.length - 1))]
//   callback(randomToy)
// }

// function toy(i) {
//     alert("Песа выбрала " + i)
// }

// var button = document.getElementById("button")
// button.addEventListener('click', function () {
//     chooseToy(toy)
// })

// button.addEventListener('click', () => {
//     chooseToy(toy)
// })

// button.addEventListener('click', function () {
//     chooseToy(toy)
// })

// var customBov = 14

// customBov()

// function customBov() {
//   var sum = 2 + 2
//   return 'hello bov'
// }

// 15

// 'hello bov'

// var result = customBov

// console.log(result)

// button.addEventListener('click', result)



// var button = document.getElementById("button");
// button.addEventListener('click',



// function displayConsole(i) {
//     console.log(i)
// }

// chooseToy(displayConsole)



// var toy = 


// var button = document.getElementById("button");
// button.addEventListener('click', function() {
// alert("Песа выбрала " + )
// }) 



// Задание:
// Сделать кнопку, по нажатию на которую будет показывать алерт в
// котором будет написано: "Пёса выбрала [рандомная_игрушка]"










    // //     hello();
        
    // //     function hello() {
    // //         setTimeout(function() {
    // //             console.log("hello");
    // //         }, 3000);
    // //         }
    
    // // function bye() {
    // //     console.log("bye");
    // // }
    
    // hello(poka);
    
    // function hello(callback) { 
    //    hi()
    
    //     callback()
    // }
    
    // function hi(){
    //     setTimeout(console.log("hello"), 3000)
    // }
    
    // function poka() {
    //     console.log("poka!")
    // }
