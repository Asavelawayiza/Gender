var inputName = document.querySelector(".inputName")
var AddBtnElem = document.querySelector(".AddBtn")
var Genders = document.querySelector(".Genders")
var ShowBtnElem = document.querySelector(".ShowBtn")
var genes = document.querySelector(".genes")
var errorMessage = document.querySelector(".error");

if (localStorage['name']) {
    var nameStore = JSON.parse(localStorage['name'])
}
else {
    nameStore = []
}


var instanceGender = TypeOfGender(nameStore);

function clearError() {
    setTimeout(function () {
        errorMessage.innerHTML = "";
    }, 9000);

}

AddBtnElem.addEventListener("click", function () {
    if (inputName.value === "") {
        errorMessage.innerHTML = "Please write a name"
        clearError();
        return;
    }


    var results = instanceGender.nameList(inputName.value);
    var newName = instanceGender.nameAdded();

    if (results) {
        for (var i = 0; i < newName.length; i++) {
            var selectName = newName[i];
        }

        var nameName = document.createElement("li")
        nameName.textContent = selectName;
        genes.appendChild(nameName)
        localStorage['name'] = JSON.stringify(instanceGender.nameAdded())

    } else {
        errorMessage.innerHTML = "Name Already Exits"
        clearError();
        return;
    }

});

ShowBtnElem.addEventListener("click", function () {

    var showButton = document.querySelector(".radio-inline:checked")

    // var showButton = document.getElementById("myGender")
    
    genes.innerHTML = "";
    if (showButton) {
        var showBtn = showButton.value
    }

    var currentName = instanceGender.nameCheck(showBtn);


    for (var i = 0; i < currentName.length; i++) {
        var selectedName = currentName[i];


        var surname = document.createElement("li")
        surname.textContent = selectedName;
        genes.appendChild(surname);

    }
});



