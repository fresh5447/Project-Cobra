var nums = [1,2,3,4,5]

const stuff = nums.filter((item) => {
  return item > 4
}).map((item) => {
  return item
})


console.log(stuff)