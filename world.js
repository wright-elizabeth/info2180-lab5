window.onload = function() {
    let lookupBtn = document.querySelector("#lookup");
    let lookupCitiesBtn = document.querySelector("#lookup-cities");

    lookupBtn.addEventListener("click", function() {
        let country = document.querySelector("#country").value;

        fetch(`world.php?country=${country}`)
            .then(response => response.text())
            .then(data => {
                document.querySelector("#result").innerHTML = data;
            });
    });

    lookupCitiesBtn.addEventListener("click", function() {
        let country = document.querySelector("#country").value;

        fetch(`world.php?country=${country}&lookup=cities`)
            .then(response => response.text())
            .then(data => {
                document.querySelector("#result").innerHTML = data;
            });
    });
};
