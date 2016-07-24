
'use strict';
// STUDENT
//
// RESOURCES
//
// - GET
//   / ALL
//   / FAVORITES
//
//

const USER = {
    name: 'doug',
    favorites: [1234, 4567, 8910, 1111, 2222, 3333, 4444]
}

const FAVORITES = [
  {
    title: 'first one',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: null,
    categories: ['js', 'css', 'html', 'node', 'react'],
    id: 12354,
    fav: null
  },
  {
    title: 'second one',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: null,
    categories: ['js', 'css', 'html', 'node', 'react'],
    id: 4567,
    fav: null
  },
  {
    title: 'third one',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: null,
    categories: ['js', 'css', 'html', 'node', 'react'],
    id: 8989,
    fav: null
  }
];

const RESOURCES = [
  {
    title: 'first one',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: null,
    categories: ['js', 'css', 'html', 'node', 'react'],
    id: 12354
  },
  {
    title: 'second one',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: null,
    categories: ['js', 'css', 'html', 'node', 'react'],
    id: 4567
  },
  {
    title: 'third one',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: null,
    categories: ['js', 'css', 'html', 'node', 'react'],
    id: 8989
  },
  {
    title: 'fourth one',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: null,
    categories: ['js', 'css', 'html', 'node', 'react'],
    id: 12390
  },
  {
    title: 'fifth one',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: null,
    categories: ['js', 'css', 'html', 'node', 'react'],
    id: 45637
  },
  {
    title: 'sixth one',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: null,
    categories: ['js', 'css', 'html', 'node', 'react'],
    id: 89104
  }
];

// const getResources = function(rezs, favs){
//   //get all resouces
//   const ress = rezs;
//
//   //get all favorites
//   const favRess = favs;
//
//   const allRess = []
//
//   //map thorugh each resource, is this rez in my fav?
//   favRess.forEach((item) => {
//     item.fav = true
//   }).map((nextItem) => {
//     allRess.push(nextItem)
//   });
//
//   return allRess;
// };
//
// console.log(getResources(RESOURCES,  FAVORITES));

// LOOP THROUGH RESOURCES:
//
// IF FAVORITES.INCLUDES ITEM === true;
//   item.fav = true
//   else
//   item.fav = false
// RETURN newArray
//
// const getResources = function () {
//   const newArr = [];
//   for (var i = 0; i < FAVORITES.length; i++) {
//     FAVORITES[i].fav = true;
//     newArr.push(FAVORITES[i]);
//   }
//   for (var i = 0; i < FAVORITES.length; i++) {
//     FAVORITES[i].fav = true;
//     newArr.push(FAVORITES[i]);
//   }
//   return newArr;
//
// };
//
// console.log(getResources());

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
      if (searchElement == currentElement ||
         (searchElement != searchElement && currentElement !== currentElement)) { // NaN !== NaN
        return true;
      }
      k++;
    }
    return false;
  };
}

const getResources = function() {
  const arrOfFavs = [];

  for (var i = 0; i < FAVORITES.length; i++) {
    arrOfFavs.push(FAVORITES[i].id);
  }

  const allResources = [];
  for (var i = 0; i < RESOURCES.length; i++) {
    if (arrOfFavs.includes(RESOURCES[i].id)) {
      RESOURCES[i].fav = true;
      allResources.push(RESOURCES[i]);
    } else {
      RESOURCES[i].fav = false;
      allResources.push(RESOURCES[i]);
    }
  }
  return allResources;
};

// const getResources = function() {
//
//   const arrOfFavs = [];
//
//   for (var i = 0; i < FAVORITES.length; i++) {
//     arrOfFavs.push(FAVORITES[i].id);
//   }
//
//   const allResources = [];
//   for (var i = 0; i < RESOURCES.length; i++) {
//     if
//   }
//   return allResources;
// };
//
// console.log(getResources());
