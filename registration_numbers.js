var btn = document.querySelector(".theButton");
var plateNum = document.querySelector(".regNum");
var regNumbers = document.querySelector(".regNumbers");
var filterBtn = document.querySelector(".filterButton");
var townFilter = document.getElementsByName("town");
var townAmount = [];

btn.addEventListener('click', function() {
    if (plateNum.value.length > 0) {
        var newPlate = document.createElement('div');
        plateNum.value.toUpperCase();
        plateNum.value.className = 'regPlates';
        newPlate.textContent = plateNum.value;
        newPlate.className = 'regPlates';
        regNumbers.appendChild(newPlate);
        plateNum.value = '';
        townAmount.push(newPlate);
    } else {
        alert('Please enter a plate value!')
    }

});

function filter(location) {
    for (var i = 0; i < townAmount.length; i++) {
        if (regNumbers.children[i].textContent.startsWith(location)) {
            regNumbers.children[i].style.display = 'block'
        } else {
            regNumbers.children[i].style.display = 'none'
        }
    }
};


filterBtn.addEventListener('click', function() {
    var printedPlates = document.querySelectorAll('.regPlates');
    for (var i = 0; i < 4; i++) {
        if (townFilter[i].checked) {
            switch (i) {
                case 0:
                    filter('CJ')
                    break;
                case 1:
                    filter('CA')
                    break;
                case 2:
                    filter('CY')
                    break;
                case 3:
                    filter('CB')
                    break;
                case 4:
            }
        }
    }
});

//button
// var button = document.getElementById('addButton');
// //textbox
// var regNumber = document.getElementById('regNum');
//
// //empty array
// var regNumbersList = [];
// var selectedREG = [];
//
//
// //get list items
// var list = document.querySelector('.list');
// var list2 = document.querySelector('.list2');
//
// //get and set the drop down element in variable
// var dropDown = document.querySelector('select');
//
// //////////////HANDLEBARS SETUP////////////////////////
//
// //get the template
// var source = document.getElementById('registrationList').innerHTML;
//
// var sourceTown = document.getElementById('town').innerHTML;
//
// //compile the template
// var template = Handlebars.compile(source);
// var templateTown = Handlebars.compile(sourceTown);
//
//
// //////////////////BUTTON///////////////////////
// button.addEventListener('click', function () {
//     //check if textbox is empty or not
//     if (regNumber.value === "") {
//         //alert user
//         alert('Input a Registration Number!');
//     } else {
//         //convert text to uppercase
//         var text = regNumber.value;
//
//         //push value entered to an array
//         regNumbersList.push(text.toUpperCase());
//
//         populateLists();
//     }
//
// }, false);
//
// //populate list items
// function populateLists() {
//     for (var i = 0; i < regNumbersList.length; i++) {
//         var listHTML = template({
//             registration_number: regNumbersList[i]
//         });
//
//         var LI = listHTML;
//     };
//     list.innerHTML += LI;
// }
//
//
// dropDown.onchange = function () {
//     //save the selected index's in a variable
//     var town = dropDown.options[dropDown.selectedIndex];
//
//     //Get the heading tag
//     var searchedTown  = document.querySelector('.searchedTown');
//
//     //store the dropDown text in object
//     var towns = {'selectedTown':[{'city': town.text}]};
//
//     //output the search results with selected town
//     searchedTown.innerHTML = 'Showing search results for: ' + towns.selectedTown[0].city;
//
//     //clear the ul innerHMTL element
//     list2.innerHTML = "";
//
//     //Loop through array of regNumbers
//     for (var i = 0; i < regNumbersList.length; i++) {
//         if (regNumbersList[i].startsWith(town.value)) {
//             //create li
//             var li = document.createElement('li');
//             //add a id to the list item
//             li.setAttribute("class", "townList");
//
//             //add the list item with text inside it
//             li.innerHTML = regNumbersList[i];
//
//             //append list item to the ul tag
//             list2.appendChild(li);
//             //list2.innerHTML = list2.innerHTML + li;
//         }
//     }
//
//    var content = list2.innerHTML;
//
// if (content === "") {
//     var p = document.createElement('p');
//     var div = document.createElement('div');
//
//     p.setAttribute("id", "invalidSearch");
//     p.innerHTML ="No Registrations Found!"
//
//
//
//     list2.appendChild(p);
//     list2.appendChild(div);
// }
// }
