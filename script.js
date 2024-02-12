var container = document.querySelector('.container');
var user = 0;
var game = false;
var rstBtn = document.querySelector('.rstBtn');


document.addEventListener('DOMContentLoaded', function () {
    var cells = document.querySelectorAll('.col-3');
    var user = 0;

    // Function to check for a winning combination
    function checkWin() {
        var winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]              // Diagonals
        ];

        for (var i = 0; i < winningCombinations.length; i++) {
            var [a, b, c] = winningCombinations[i];
            if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
                return true;
            }
        }
        return false;
    }
    var container = document.querySelector('.container');
    var user = 0;

    container.addEventListener('click', function (e) {
        var target = e.target;
        if (user == 0 && game == false) {
            if (target.classList.contains('col-3') && !target.querySelector('li')) {
                var elementLi = document.createElement('li');
                elementLi.style.color = 'darkblue';
                elementLi.textContent = "H"; // Set the text content of the li element
                target.appendChild(elementLi); // Append the li element to the clicked col-3 element
                user = 1;
                
            }
            checkWin();
        }
        else if (user == 1 && game == false) {
            if (target.classList.contains('col-3') && !target.querySelector('li')) {
                var elementLi = document.createElement('li');
                elementLi.style.color = 'red';
                elementLi.textContent = "X"; // Set the text content of the li element
                target.appendChild(elementLi); // Append the li element to the clicked col-3 element

                user = 0;
                
            }
            checkWin();
        }
    });

    // Function to check for a winning combination
    function checkWin() {
        var cells = document.querySelectorAll('.col-3');

        // Define winning combinations
        var winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]              // Diagonals
        ];

        // Check for winning combinations
        for (var i = 0; i < winningCombinations.length; i++) {
            var [a, b, c] = winningCombinations[i];
            if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
                if (cells[a].textContent == "H") {
                    alert("H Won!");
                    console.log("Checked");
                    game = true;
                    return;
                }
                else if(cells[a].textContent == "X"){
                    alert("X Won!");
                    console.log("Checked");
                    game = true;
                    return;
                }

            }
        }
    }

});


rstBtn.addEventListener('click', function (e) {
    location.reload();
})