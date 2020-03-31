function myFunction () {
    
     var message, x, y, z;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("kilometri").value;
    y = document.getElementById("kolicina").value;
    z = document.getElementById("cena").value;
    
    if (x == "" && y == "" && z == "") {
        document.getElementById("message").innerHTML = " You need to insert a form ";
        document.getElementById("kilometri").style.backgroundColor = "#B22222";
        document.getElementById("kolicina").style.backgroundColor = "#B22222";
        document.getElementById("cena").style.backgroundColor = "#B22222";
        document.getElementById("message").style.color = "#B22222";
    }
    
    else if (x == "" && y == "") {
        document.getElementById("message").innerHTML = " You need to insert the number of kilometers traveled + You need to insert the amount of fuel consumed ";
         document.getElementById("kilometri").style.backgroundColor = "#B22222";
        document.getElementById("kolicina").style.backgroundColor = "#B22222";
        document.getElementById("message").style.color = "#B22222";
    }
    
    else if (x == "" && z == "") {
        document.getElementById("message").innerHTML = " You need to insert the number of kilometers traveled + You need to insert the fuel price ";
        document.getElementById("kilometri").style.backgroundColor = "#B22222";
        document.getElementById("cena").style.backgroundColor = "#B22222";
        document.getElementById("message").style.color = "#B22222";
    }
    
    else if (y == "" && z == "") {
        document.getElementById("message").innerHTML = " You need to insert the amount of fuel consumed + You need to insert the fuel price ";
        document.getElementById("kolicina").style.backgroundColor = "#B22222";
        document.getElementById("cena").style.backgroundColor = "#B22222";
        document.getElementById("message").style.color = "#B22222";
    }
    
    else if (x == "") {
        document.getElementById("message").innerHTML = " You need to insert the number of kilometers traveled ";
        document.getElementById("kilometri").style.backgroundColor = "#B22222";
        document.getElementById("message").style.color = "#B22222";
    }
    
    else if (y == "") {
        document.getElementById("message").innerHTML = " You need to insert the amount of fuel consumed ";
        document.getElementById("kolicina").style.backgroundColor = "#B22222";
        document.getElementById("message").style.color = "#B22222";
    }
    
    else if (z == "") {
        document.getElementById("message").innerHTML = " You need to insert the fuel price ";
        document.getElementById("cena").style.backgroundColor = "#B22222";
        document.getElementById("message").style.color = "#B22222";
    }
    
    else  {
         document.getElementById("message").innerHTML =  " Check your cost ";
        document.getElementById("message").style.color = "#B22222";
    }
   
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

