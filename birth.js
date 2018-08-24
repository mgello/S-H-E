
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}






function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("firstname").innerHTML = x +"? Perfect. " ;
    document.getElementById("afterInput").style.display = "block";

    for (i = 0; i<15; i++) {
      var str = document.getElementById('afterInput').innerHTMl;
      var res = str.replace("[charname]", x);
      document.getElementById('afterInput').innerHTML = res;
    }
}

function doctortoy() {
  document.getElementById("doctor").style.display = "block";
}

function nintendo() {
  document.getElementById("nintendo").style.display = "block";
}

function saturday() {
  document.getElementById("saturday").style.display = "block";
}

function complains() {
  document.getElementById("complain").style.display = "block";
}

function pushBack() {
  document.getElementById("pushback").style.display = "block";
}

function apologize() {
  document.getElementById("apoligize").style.display = "block";
}

function contplay() {
  document.getElementById("contplay").style.display = "block";
}

function accept() {
  document.getElementById("accept").style.display = "block";
}

function notaccept() {
  document.getElementById("notaccept").style.display = "block";
}

function firstclick() {
  document.getElementById("afterInput").style.display = "block";
}


function removeButtons() {
    var x = document.getElementById("button");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function removeButtons1() {
    var x = document.getElementById("button1", "button01");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function removeButtons2() {
    var x = document.getElementById("button2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function removeButtons01() {
    var x = document.getElementById("button01");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function removeButtons99() {
    var x = document.getElementById("button99");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
