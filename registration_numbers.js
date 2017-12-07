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
        alert('I need a registration number PLEASE!!')
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
