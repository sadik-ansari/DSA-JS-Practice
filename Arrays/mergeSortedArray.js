// Problem: Merge Sorted Array (#88) - https://leetcode.com/problems/merge-sorted-array/description/

var merge = function (nums1, m, nums2, n) {
    let k = m + n - 1
    let i = m - 1
    let j = n - 1

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i]
            i--
        }
        else {
            nums1[k] = nums2[j]
            j--
        }
        k--
    }
    while (i >= 0) {
        nums1[k] = nums1[i]
        k--
        i--
    }
    while (j >= 0) {
        nums1[k] = nums2[j]
        k--
        j--
    }
};