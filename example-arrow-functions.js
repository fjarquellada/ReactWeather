/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var names = ['Francisco', 'Manolo', 'Judith', 'Inma'];

names.forEach(function (name){
    console.log('forEach', name);
});

names.forEach((name)=>{
    console.log('arrowFunc', name);
    console.log('something else');
});

names.forEach((name) => console.logname);

var returnMe = (name) => name + '!';

console.log(returnMe('Franisco'));


var person = {
    name: 'Franisco',
    greet: function(){
        names.forEach((name)=>{
           console.log(this.name + ' says hi to '+ name); 
        });
    }
};
person.greet();

/* Challenger area */

function add(a, b){
    return a +b;
}

// addStatement
var addStatement = (a, b)=>{
  return a+b;  
};
console.log(addStatement(4,7));
// addExpression

var addExpression = (a, b) => a + b;

console.log(addExpression(3, -2));

console.log(add(1, 3));
console.log(add(9, 0));