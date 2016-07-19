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

var checkpoints = [
  {
  _id: "578a941a41ae35f151b561b5",
    order: 3,
    title: "Download Atom",
    desc: "Text editor download and configuration",
    content: "hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ",
    assignment: "1) Do Your Homework\n2) Don't talk back.\n3) I will kill you.",
    module: "578a93ea41ae35f151b561b4",
    __v: 0,
    userCompletions: [
      "5786b46a3a132d320dd450c0"
    ]
  },
  {
    _id: "578a944441ae35f151b561b6",
    "order": 4,
    title: "Learn JavaScript",
    desc: "This is not even a joke. ",
    content: "This is not even a joke. This is not even a joke. This is not even a joke. This is not even a joke. This is not even a joke. This is not even a joke. This is not even a joke. This is not even a joke. This is not even a joke. This is not even a joke. This is not even a joke. This is not even a joke. This is not even a joke. This is not even a joke. This is not even a joke. This is not even a joke. This is not even a joke. This is not even a joke. This is not even a joke. This is not even a joke. This is not even a joke. This is not even a joke. This is not even a joke. ",
    assignment: "1) Do not mess around.",
    module: "578a93ea41ae35f151b561b4",
    __v: 0,
    userCompletions: [
      "5786b46a3a132d320dd450c0"
    ]
  },
  {
    _id: "578a945841ae35f151b561b7",
    "order": 5,
    title: "It is not funny.",
    "desc": "This is not a funny description.",
    content: "This is not a funny description. This is not a funny description. This is not a funny description. This is not a funny description. This is not a funny description. This is not a funny description. This is not a funny description. This is not a funny description. This is not a funny description. This is not a funny description. This is not a funny description. This is not a funny description. This is not a funny description. This is not a funny description. This is not a funny description. This is not a funny description. This is not a funny description.",
    assignment: "",
    module: "578a93ea41ae35f151b561b4",
    __v: 0,
    userCompletions: []
  },
  {
    _id: "578a947241ae35f151b561b8",
    "order": 6,
    title: "Learn HTML",
    "desc": "This is totally a description. ",
    content: "This is totally a description. This is totally a description. This is totally a description. This is totally a description. This is totally a description. This is totally a description. This is totally a description. This is totally a description. This is totally a description. This is totally a description. This is totally a description. This is totally a description. This is totally a description. This is totally a description. This is totally a description. This is totally a description. ",
    assignment: "1) Come up with a new description.",
    module: "578a93ea41ae35f151b561b4",
    __v: 0,
    userCompletions: []
  }
]

var newArray = [];
var studentId = "5786b46a3a132d320dd450c0";

var newCps = checkpoints.forEach((item) => {
  if (item.userCompletions.includes(studentId)) {
    item.completed = true;
    newArray.push(item);
  } else {
    item.completed = false;
    newArray.push(item);
  }
});

console.log(newArray);
