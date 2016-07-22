if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement /*, fromIndex*/ ) {
    'use strict';
    var O = Object(this);
    var len = parseInt(O.length, 10) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1], 10) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {k = 0;}
    }
    var currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement ||
         (searchElement !== searchElement && currentElement !== currentElement)) { // NaN !== NaN
        return true;
      }
      k++;
    }
    return false;
  };
}

const resources = [
  {
    title: 'Learn JS',
    categories: [
      {
        name: 'javascript'
      },
      {
        name: 'css'
      }
    ]
  },
  {
    title: 'Learn CSS',
    categories: [
      {
        name: 'css'
      }
    ]
  },
  {
    title: 'Learn other stuff',
    categories: [
      {
        name: 'jQuery'
      },
      {
        name: 'javascript'
      }
    ]
  },
  {
    title: 'Learn node',
    categories: [
      {
        name: 'node'
      }
    ]
  },
  {
    title: 'Learn React',
    categories: [
      {
        name: 'react'
      }
    ]
  },

];


var fn = function (arr) {
  for (var i = 0; i <= arr.length - 1; i++) {
    return arr[i].categories.filter((item) => item.name === 'javascipt')
    .map((t) => t);
  }
};
console.log(fn(resources));

//
// //GOAL: Return only the resources that have a category with name 'javascript'
// const attemptOne = resources.filter((item) => {
//   return item.categories.forEach((thing, index) => {
//     return thing[index] === 'javascript'
//   });
// }).map((item) => {
//   return item;
// })
//
// const attemptTwo = resources.filter((item) => {
//   item.categories.filter((ci) => {
//     return ci.name === 'javascript'
//   }).map((nextItem) => {
//     return nextItem;
//   });
// })
//
// console.log(attemptOne);
