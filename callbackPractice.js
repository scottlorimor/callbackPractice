/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi


   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

and what you should write is the sayHi function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/



  //Code Here for first
function first(namesArray, firstNameFunc) {
    firstName = namesArray[0];
    firstNameFunc(firstName);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ' + firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last
function last(namesArray, lastNameFunc) {
  lastNameFunc(namesArray[namesArray.length - 1]);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  //Code Here for multiply
function multiply(num1, num2, multiplierFunc) {
    var answer = num1*num2;
    multiplierFunc(answer);
}

multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for contains
// function contains(namesArray, nameToSearch, isInArray) {
//     found = false;
//     for (i=0; i<namesArray.length; i++) {
//         if (namesArray[i] === nameToSearch) {
//             found = true;
//             break;
//         }
//     }
//     return isInArray(found);
// }

function contains(namesArray, nameToSearch, isInArray) {
    for (i=0; i<namesArray.length; i++) {
        if (namesArray[i] === nameToSearch) {
            return isInArray(true);       
        }
    }
    return isInArray(false);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for uniq

function uniq (namesArray, func) {
  var uniqNums = {}, uniqArray= [];
  for (i=0; i<namesArray.length; i++) {
    if (!uniqNums[namesArray[i]]) {
      uniqNums[namesArray[i]] = true;
      uniqArray.push(namesArray[i]);
    }
  }
  return func(uniqArray);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each
function each (nameArray, func) {
  nameArray.forEach(function(name, index) {
      func(name,index);
  });
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById

function getUserById (usersArray, id, func) {
  usersArray.forEach(function(user) {
    if (user.id == id) {
        func(user);
    }
  })
}
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});
