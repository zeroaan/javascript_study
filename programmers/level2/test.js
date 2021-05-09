const twoSum = function (nums, target) {
  const comp = {}
  for (let i = 0; i < nums.length; i++) {
    if (comp[nums[i]]) {
      return [comp[nums[i]], i]
    }
    comp[target - nums[i]] = i
    console.log(comp)
  }
}

console.log(twoSum([20, 11, 7, 15], 22))
