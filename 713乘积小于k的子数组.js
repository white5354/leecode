/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let res = 0
    let left = 0
    let sum = 1
    for(let right = 0 ; right < nums.length; right ++) {
        sum *= nums[right]
        // 思路
        while(sum < k) {
            res++
            sum = sum/nums[left]
            left++
        }
    }
    return res
};
numSubarrayProductLessThanK([10,5,2,6], 100)