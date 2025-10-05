// Problem: Intersection of Two Arrays (#350) - https://leetcode.com/problems/intersection-of-two-arrays-ii/description/

var intersect = function(nums1, nums2) {
    let newArr = [];
    let counter = 0;
    for(let i = 0; i < nums1.length; i++){
        for(let j = 0; j < nums2.length; j++){
            if(nums1[i] === nums2[j]){
                newArr[counter] = nums1[i]
                nums2[j] = null
                counter++
                break;
            }
        }
    }
    return newArr
};
