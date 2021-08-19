// https://leetcode.com/problems/two-sum/ returning boolean instead of indexes
function sumToNumber(array, target): boolean{
    const differenceHash = {}
    for(let i = 0; i < array.length; i++){
        const element = array[i]
        if(differenceHash[element]) return true
        differenceHash[target - element] = true
    }
    return false
}


  const arrayInput = [10,15,3,7];
  const targetInput = 17;
  console.log(sumToNumber(arrayInput, targetInput));