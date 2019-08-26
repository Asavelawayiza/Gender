function TypeOfGender() {
    var enteredNames = [];


    function nameList(names) {
       
        if (!enteredNames.includes(names)) {
            enteredNames.push(names)
            return true
        } 
        return false
    }

    function nameCheck(gender) {

        var filtered = [];
        for (var i = 0; i < enteredNames.length; i++) {
            if (enteredNames[i].startsWith(gender)) {
                filtered.push(enteredNames[i])
            }
        }
        return filtered;

    }

    function nameAdded() {
       return  enteredNames;
    }




    return {
        nameList,
        nameCheck,
        nameAdded
    }
};