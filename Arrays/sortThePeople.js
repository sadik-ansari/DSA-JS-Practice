// Problem: Sort the People (#2418) - https://leetcode.com/problems/sort-the-people/description/

var sortPeople = function(names,heights) {
   for(let i = 0; i < heights.length; i++){
    for(let j = i+1; j < heights.length; j++){
        if(heights[i] < heights[j]){
            let temp = heights[j];
            heights[j] = heights[i];
            heights[i] = temp;
             let temp2 = names[j];
            names[j] = names[i];
            names[i] = temp2
        }
    }
   }
    return names
};