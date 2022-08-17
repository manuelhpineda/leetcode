const pivotIndex = (nums) => {
  if (nums.length === 0) return -1
  if (nums.length === 1) return 0
  let total = nums.reduce((a, b) => a + b, 0)

  let leftSum = 0

  for (let i = 0; i < nums.length; i++) {
    if (leftSum === total - leftSum - nums[i]) {
      return i
    } else {
      leftSum += nums[i]
    }
  }

  return -1
};

console.log(pivotIndex([1,2,3]))
