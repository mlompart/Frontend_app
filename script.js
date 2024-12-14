function addMovie() {
            
    var movieTitle = document.getElementById("inputTitle").value;
    var movieYear = document.getElementById("inputYears").value;
    var movieActors = document.getElementById("inputActors").value;

    if (!movieTitle || !movieYear || !movieActors) {
        alert("Please fill out all fields!");
        return;
    }

    var ul = document.getElementById("moveList");
    var li = document.createElement("li");
    li.innerHTML = `<input type='checkbox'> ${movieTitle}, ${movieYear}, ${movieActors}`;

    ul.appendChild(li);

    document.getElementById("inputTitle").value = "";
    document.getElementById("inputYears").value = "";
    document.getElementById("inputActors").value = "";
}

function deleteSelected() {
    var ul = document.getElementById("moveList");
    var items = ul.getElementsByTagName("li");

    for (var i = items.length - 1; i >= 0; i--) {
        var checkbox = items[i].querySelector("input[type='checkbox']");
        if (checkbox && checkbox.checked) {
            ul.removeChild(items[i]);
        }
    }
}