var sortedSquares = function(nums) {
    let i = 0
    let j = nums.length - 1
    let res = []
    for(let k = 0; k < nums.length ; k++) {
        if(nums[i] * nums[i] >= nums[j] * nums[j] ) {
            res.unshift(nums[i]*nums[i])
            i++
            
        } else {
            res.unshift(nums[j]*nums[j])
            j--
        }
    }
    return res
};
sortedSquares([-4,-1,0,3,10])