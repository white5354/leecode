var minSubArrayLen = function (target, nums) {

    // 思路
    // 1.要有一个变量保存满足要求的最短长度
    // 2.循环遍历
    let res = Infinity 
    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i]
        if (sum >= target) {
            return 1
        }
        for (let j = i + 1; j < nums.length; j++) {
            sum = sum + nums[j]
            if (sum >= target) {               
                res = Math.min(Infinity, j - 1 +1)
                break
            }
        }
    }
    
    return res
};
minSubArrayLen(7,[2,3,1,2,4,3])