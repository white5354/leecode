var removeDuplicates = function (nums) {
    let k = 0
    for(let i = 0;i < nums.lengt; i++) {
        if(nums[i] !== 0 && nums[k] == 0) {
            nums[k] = nums[i]
            nums[i] = 0
            k++
        }
    }
};
removeDuplicates([0,1,0,3,12])