function getMissingElement(superImportantArray) {
    matchArray = [0,1,2,3,4,5,6,7,8,9];
    superImportantArray.sort();
    for (var i=0; i<matchArray.length; i++) {
        if (superImportantArray.indexOf(matchArray[i]) == -1) {
            return matchArray[i];
        }
    }
}

console.log(getMissingElement([0,5,1,3,2,9,7,6,4])); // 8
console.log(getMissingElement([9,2,4,5,7,0,8,6,1])); // 3
