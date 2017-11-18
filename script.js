// Birinci mesele
// ---------------------------------------------------
// var arr1 = [1, 2, 3, 4, 9, 8, 25];
// var arr2 = [3, 25, 8, 19, 85, 1];

// function ortaq(x, y) {
//     var ortaqEl = [];

//     for (var i = 0; i < x.length; i++) {
//         for (var j = 0; j < y.length; j++) {


//             if (x[i] == y[j]) {
//                 ortaqEl.push(y[j])
//             }

//         }

//     }

//     return ortaqEl;
// }

// console.log(ortaq(arr1, arr2));


// Ikinci mesele
// ---------------------------------------------------
// var arr1 = [1, 1, 1, 22, 22, 22, 22, 3, 5, 3];


// function unik(x) {
//     var unikElement = [];

//     for (var i = 0; i < x.length; i++) {
//         if (unikElement.indexOf(x[i]) == -1) {
//             unikElement.push(x[i]);
//         }

//     }

//     return unikElement;

// }


// console.log(unik(arr1));




// Ucuncu mesele
// ---------------------------------------------------

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd'];



// function passpordGenerator(arr, say) {
//     var password = '';

//     for (var i = 0; i < say; i++) {

//         var random = Math.floor(Math.random() * arr.length);

//         password += arr[random]

//     }
//     return password;

// }

// console.log(passpordGenerator(arr, 8))

// Dorduncu mesele
// ---------------------------------------------------

// var word = 'hello';

// function upper(word) {

//     return word.slice(0, 1).toUpperCase() + word.slice(1);
// }

// console.log(upper(word));


// Besinci mesele
// ---------------------------------------------------

// var arr = [111, 52, 35, 4, 5, 6, 7, 8, 9, ];


// function maxMin(arr, max) {
//     var minMAx = arr[0]

//     if (max == true) {
//         for (var i = 0; i < arr.length; i++) {
//             if (arr[i] > minMAx) {
//                 minMAx = arr[i]
//             }

//         }
//     } else {
//         for (var i = 0; i < arr.length; i++) {
//             if (arr[i] < minMAx) {
//                 minMAx = arr[i]
//             }

//         }
//     }
//     return minMAx
// }

// console.log(maxMin(arr, true));