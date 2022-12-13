  window.alert('numa+scircle');


function ttlCart(){
  document.getElementById("addCartCopy").innerHTML= document.getElementById("addCart").innerHTML;
  var money=0;
  for(var j = 1; j<= 100; j++){
    var scircle= "cart"+j;
    if(document.getElementById(scircle)){
      if ((document.getElementById(scircle).style.display!="none")) {
        money+=300;
      };
      }else{
        break;
    };
  };
  document.getElementById("timeDate").innerHTML= new Date().toLocaleString();
  document.getElementById("ttlMoney").innerHTML= money;
  document.getElementById("addCart").style.display="none";
}


var deleteCart = function(numA){
  var scircle= numA;
  document.getElementById(scircle).style.display="none";
  window.alert(numA+scircle);
}

function addCartNB() {
  const x = document.getElementById("addCart");
  for(var i = 1; i<= 5; i++){
    var circle= "nbs"+i;
    if (document.getElementById(circle).checked){      
      var scircle= "cart"+circle;
      if(!document.getElementById(scircle)){
        x.innerHTML=x.innerHTML+'<a id="'+scircle+'" class="w3-bar-item w3-button"><img src="img/NB.jpg" style="height:70px">&ensp;NB'+ (i+5)+'~'+(i+6)+'<input type="number" id="'+scircle+'Num" min="1" max="100" value="1"><button class="w3-bar-item w3-button" onclick="deleteCart('+scircle+')">&ensp; &emsp; &emsp; &emsp; - delete &times;</button></a>';
      }else{
        var scircleNum= scircle+"Num";
        document.getElementById(scircleNum).value=Number(document.getElementById(scircleNum).value)+ 1;
      }      
    };
  }
}



function afterLog() {
    document.getElementById("Info").style.display = "block";
  }

  function closeInfo() {
    document.getElementById("Info").style.display = "none";
  }
	function openRightMenu() {
	  document.getElementById("rightMenu").style.display = "block";
	}

	function closeRightMenu() {
	  document.getElementById("rightMenu").style.display = "none";
	}



  function c21() {
    var x = document.getElementById("i1");
    var y = document.getElementById("i2");
    x.src = y.src;
  }
  function c31() {
    var x = document.getElementById("i1");
    var y = document.getElementById("i3");
    x.src = y.src;
  }
  function c41() {
    var x = document.getElementById("i1");
    var y = document.getElementById("i4");
    x.src = y.src;
  }
  function c51() {
    var x = document.getElementById("i1");
    var y = document.getElementById("i5");
    x.src = y.src;
  }



  function hidehistory() {
    var x = document.getElementById("history");
    x.style.display = "none";
  }
  function showhistory() {
    var x = document.getElementById("history");
    x.style.display = "block";
  }
	function hideindexP() {
	  var x = document.getElementById("insidePage");
	  x.style.display = "none";
	}
	function showindexP() {
	  var x = document.getElementById("insidePage");
	  x.style.display = "block";
	}
	function hideproductP() {
	  var x = document.getElementById("productPage");
	  x.style.display = "none";
	}
	function showproductP() {
	  var x = document.getElementById("productPage");
	  x.style.display = "block";
	}


	function goProduct() {
  location.replace("product.html")
}


var f