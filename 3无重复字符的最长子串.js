var lengthOfLongestSubstring = function (s) {
    let res = 0
    let left = 0
    let couter = {}
    for (let right = 0; right < s.length; right++) {

        couter[s[right]] = (couter[s[right]] ? couter[s[right]] : 0) + 1
        while (couter[s[right]] > 1) {
            couter[s[left]] -= 1
            left+=1
        }
        res = Math.max(res, right - left + 1)
    }
    return res
};
lengthOfLongestSubstring("pwwkew")