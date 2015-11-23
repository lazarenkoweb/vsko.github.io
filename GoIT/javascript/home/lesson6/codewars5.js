function isValidWalk(walk) {
    var s1 = 0,
        s2 = 0;

    if (walk.length !== 10) {
        return false;
    }

    for (k in walk)  {
        s1 = (walk[k] == "n") ? ++s1 : (walk[k] == "s") ? --s1 : s1;
        s2 = (walk[k] == "w") ? ++s2 : (walk[k] == "e") ? --s2 : s2;
    }

    return (s1 == 0 && s2 == 0);
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])); // true
console.log(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])); // false
console.log(!isValidWalk(['w'])); // false
console.log(!isValidWalk(['n','n','n','s','n','s','n','s','n','s'])); // false
