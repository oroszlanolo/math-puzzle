
/**
 * 
 * @param {string} text The solution of the puzzle
 * @param {Object} chars An object containing the values of the available characters
 * @param {Object} config An object containing configs for the puzzle generation
 *  - max - The largest number that can appear in the puzzle (except for the last number)
 */
function generatePuzzle(text, chars, config = {}) {
    const theConfig = {
        min: 10,
        max: 1000,
        maxNums: 4,
        canBeNegative: true,
        ...config
    }
    return text.split('').map(c => {
        const result = chars[c.toLowerCase()];
        const n = getRandom(theConfig.maxNums) + 1;
        return gen(result, n, theConfig);
    });
}

function gen(result, n, config) {
    let n1 = getRandom(Math.min(Math.max(result * 2, config.min), config.max));
    const nums = [n1];
    let current = n1;
    while(nums.length < n - 1) {
        const nextNum = getNextNum(result, current, config);
        current += nextNum;
        nums.push(nextNum);
    }
    const final = result - current;
    nums.push(final);

    return getRowString(nums, config.canBeNegative);
}

function getNextNum(result, current, config) {
    const numToGetTo = getRandom(Math.min(Math.max(result * 2, config.min), config.max));
    return numToGetTo - current;
}

function getRowString(nums, canBeNegative = true) {
    let str = [];
    str.push(nums[0]);
    for(let i = 1; i < nums.length; i++) {
        const flip = canBeNegative && Math.random() > 0.5;
        if(flip) {
            str.push(nums[i] < 0 ? '+' : '-');
            const newNum = 0 - Math.abs(nums[i]);
            str.push(newNum < 0 ? `(${newNum})` : newNum);
        } else {
            str.push(nums[i] < 0 ? '-' : '+');
            str.push(Math.abs(nums[i]));
        }
    }
    str.push('=');
    return str.join(' ');
}



function getRandom(n) {
    return Math.floor(Math.random() * n);
}