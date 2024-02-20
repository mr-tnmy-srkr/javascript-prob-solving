//find duplicate number from an array

const nums = [1, 4, 5, 5, 6, 7, 6, 8, 9, 10, 4];
    nums.sort();
    let duplicate = []

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
          duplicate.push(nums[i]);
        }
    }

console.log(duplicate) // [4,5,6]
