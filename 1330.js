//// you are given an array of nums
//the value of the array is deifned as the sum of nums[i] - nums[i+1] for all 0<= i < nums.length -1 
//you are allowed to select any subarray of the given array and reverse it. you can perform this operaiton only once.
//fin maximum possible value of the final array
//example 1
// input numers = [2,3,1,5,4]
// output 10
// explanation: By reversing the subarray [3,1,5] the array becomes [2,5,1,3,4] whose value is 10
var input = [2, 4, 9, 24, 2, 1, 10];
var done = valueArray(input);
function nullCheck(item) {
    if (!!item === true) {
        return true;
    }
    else {
        return false;
    }
}
function valueArray(arr) {
    var total = 0;
    for (var i = 0; i < arr.length - 1; i++) {
        total += Math.abs(arr[i] - (nullCheck(arr[i + 1]) ? arr[i + 1] : 0));
        // console.log(total)
    }
    return total;
}
function insertInPlace(start, reciever, presenter) {
    for (var i = 0; i < presenter.length; i++) {
        reciever[start + i] = presenter[i];
    }
    return reciever;
}
function checkRevisions(fieldSize) {
    if (fieldSize === void 0) { fieldSize = 2; }
    if (fieldSize > input.length) {
        return done;
    }
    else {
        checkSequence(0, fieldSize);
        checkRevisions(fieldSize + 1);
    }
}
function checkSequence(sequence, fieldSize) {
    if (nullCheck(input[sequence + fieldSize]) === false) {
        return done;
    }
    else {
        var sample = input.slice(sequence, sequence + fieldSize);
        console.log("I should be the sample to be swapped", sample);
        sample = sample.reverse();
        var bastard = hardCopyArray(input);
        var candadite = insertInPlace(sequence, bastard, sample);
        console.log("I should be the original input", input);
        console.log("i am a candadite", candadite);
        if (valueArray(candadite) > done) {
            done = valueArray(candadite);
        }
        checkSequence(sequence + 1, fieldSize);
    }
}
function hardCopyArray(insert) {
    var output = [];
    for (var i = 0; i < insert.length; i++) {
        output[i] = insert[i];
    }
    return output;
}
checkRevisions();
console.log(done);
