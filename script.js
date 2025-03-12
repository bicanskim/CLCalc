function calculate() {
    var cl = parseInt(document.getElementById('clInput').value);
    
    var woi = Math.round((cl-cl*0.1)/2);
    var clLowerFilter = cl - 20;
    var clUpperFilter = cl + 20;
    var lat;
    var pos;
    var chamber;
    var chambers = document.getElementsByName('chamberOfInterest');
    for (i = 0; i < chambers.length; i++)
        {
            if (chambers[i].checked) {
                chamber = chambers[i].value;
            }
        }
    if (chamber == "Atria") {
        lat = "4-5";
        pos = "4-5";
    }
    else {
        lat = "6-8";
        pos = "6-8";
    }
    
    // Populate table
    document.getElementById('cl').innerText = cl;
    document.getElementById('woi').innerText = "-" + woi + " to +" + woi;
    document.getElementById('clFilter').innerText = clLowerFilter + " to " + clUpperFilter;
    document.getElementById('lat').innerText = lat;
    document.getElementById('pos').innerText = pos;
    
    if (document.getElementById('clInput').value.trim() > 0){
        document.getElementById('resultTable').style.display = "block";
        document.getElementById('resultPlaceholder').style.display = "none";
    }
    else {
        document.getElementById('resultTable').style.display = "none";
        document.getElementById('resultPlaceholder').style.display = "block";
    }
}

function checkClField() {
    var clInputField = document.getElementById('clInput').value.trim();
    var calculateButton = document.getElementById('calculate');
    if (clInputField <=0 || clInputField == undefined)
        {
            calculateButton.disabled = true;
        }
        else
        {
            calculateButton.disabled = false; 
        }
}