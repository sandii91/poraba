function myFunction () {
    var t = parseFloat(document.getElementById("kilometri").value);
    var p = parseFloat(document.getElementById("kolicina").value);
    var c = parseFloat(document.getElementById("cena").value);
    var rezultat = p / t * 100;
    document.getElementById("poraba").innerHTML = rezultat;
    var rezultat1 = p * c;
    document.getElementById("strosek").innerHTML = rezultat1; 
    
    if (rezultat <= 6) {
        var img = document.createElement("img");
        img.src="slike/download.jpg";
        var src = document.getElementById("smile");
        src.appendChild(img);
        document.getElementById("poraba").style.color = '#99C262';
    }
    
    else if (rezultat >= 6 && rezultat <= 9) {
        var img = document.createElement("img");
        img.src="slike/images (2).jpg";
        var src = document.getElementById("smile");
        src.appendChild(img);
        document.getElementById("poraba").style.color = "#FF4500";
    }
     
    else {
       var img = document.createElement("img");
        img.src="slike/images (1).jpg";
        var src = document.getElementById("smile");
        src.appendChild(img); 
        document.getElementById("poraba").style.color = "#B22222";
    }
  
}