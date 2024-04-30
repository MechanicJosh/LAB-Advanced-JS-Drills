
// setName();

// function setName(){
//     name = 'Josh';
//     var name;
//     console.log(name);
// }

// console.log('some text');
// let avg = findAverage(2,2);
// console.log('some text ' + avg);

// function findAverage(a,b){
//     console.log('some text');
//     var answer = (a + b)/2 ;
//     return answer;
// }

let fruits = ['bluberries', 'strawberries', 'banana'];

//let favFruit;

function printFruits(){
    console.log(fruits[0]);
    let favFruit = fruits[1];

    function printFavFruit(){
        console.log(favFruit);
        let leastFav = fruits[2];
    }
    //console.log(leastFav);
    printFavFruit();
}

printFruits();
//printFavFruit();

greet();

function greet(){
    console.log('Hello, Josh');
}

// myAlert();
// let myAlert = function(){
//     alert('You Have Been Alerted!');
// }


myAlert();
function myAlert(){
    alert('You Have Been ALerted!');
}