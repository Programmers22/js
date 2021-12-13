function przelicz(){
    var dor = document.getElementById("d1").value;
    var dz = document.getElementById("d2").value;
    var dni = document.getElementById("d3").value;
    if(!isNaN(dor) && !isNaN(dz) && !isNaN(dni) && dor != "" && dz != "" && dni != ""){
        var koszt = (dor*35+dz*25)*dni;
        document.getElementById("wynik").innerHTML ="Dokonales rezerwacji na "+dni+" dni <br> dla "+dor+" doroslych i "+dz+" dzieci.<br>Koszt calkowity noclegow wynosi "+koszt+"zl.";
        document.getElementById("wynik").style.display = "block";
    }
    
};

window.addEventListener('contextmenu', function (e) { 
    // do something here... 
    e.preventDefault(); 
  }, false);