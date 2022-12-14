  // window.alert('numa+scircle');


function ttlCart(){
  document.getElementById("addCartCopy").innerHTML= document.getElementById("addCart").innerHTML;
  var money=0;
  for(var j = 1; j<= 5; j++){
    var scircle= "cartnbs"+j+"Num";
    var s2circle= "cartnis"+j+"Num";
    var s3circle= "cartnvs"+j+"Num";
    if(document.getElementById(scircle)){
      money=Number(money)+Number(document.getElementById(scircle).innerHTML)*300;
    };
    if(document.getElementById(s2circle)){
      money=Number(money)+Number(document.getElementById(s2circle).innerHTML)*300;
    };
        if(document.getElementById(s3circle)){
      money=Number(money)+Number(document.getElementById(s3circle).innerHTML)*300;
    };
  };
  document.getElementById("ttlMoneyC").value= money;
  document.getElementById("timeDate").innerHTML= new Date().toLocaleString();
  document.getElementById("ttlMoney").innerHTML="total: $ "+ money;
  document.getElementById("addCart").innerHTML="";
  closeRightMenu();
  showhistory();
  hideindexP();
  hideproductP();
  closeInfo();

}


var deleteCart = function(numA){
  var scircle= numA+"Num";
  var money = Number(document.getElementById("ttlMoneyC").value);
  money-=Number(document.getElementById(scircle).innerHTML)*300;
  document.getElementById("ttlMoneyC").value=money;
  document.getElementById(numA).innerHTML="";
  document.getElementById("timeDate").innerHTML= new Date().toLocaleString();
  document.getElementById("ttlMoney").innerHTML="total:"+ money;
  
}

function addCartNB() {
  openRightMenu();
  const x = document.getElementById("addCart");
  for(var i = 1; i<= 5; i++){
    var circle= "nbs"+i;
    if (document.getElementById(circle).checked){      
      var scircle= "cart"+circle;
      var Dscircle= "'"+scircle+"'";
      var scircleNum= scircle+"Num"; 
      // Create an "li" node:
      const node = document.createElement("div");

      // Create a text node:
      const textnode = document.createTextNode("Water");

      // Append the text node to the "li" node:
      node.appendChild(textnode);

      if(!document.getElementById(scircle)){
        x.innerHTML=x.innerHTML+'<a id="'+scircle+'" class="w3-bar-item w3-button"><img src="img/NB.jpg" style="height:70px"><span>&ensp;NB'+ (i+5)+'~'+(i+6)+'&ensp;:&ensp;<span id="'+scircle+'Num">1</span>&ensp;雙</span><button class="w3-bar-item w3-button" onclick="deleteCart('+Dscircle+')">&ensp; &emsp; &emsp; &emsp; - delete &times;</button></a>';
      }else if(document.getElementById(scircle)&&!document.getElementById(scircleNum)){        
        document.getElementById(scircle).innerHTML='<img src="img/NB.jpg" style="height:70px"><span>&ensp;NB'+ (i+5)+'~'+(i+6)+'&ensp;:&ensp;<span id="'+scircle+'Num">1</span>&ensp;雙</span><button class="w3-bar-item w3-button" onclick="deleteCart('+Dscircle+')">&ensp; &emsp; &emsp; &emsp; - delete &times;</button>';
      }else{
        document.getElementById(scircleNum).innerHTML=Number(document.getElementById(scircleNum).innerHTML)+ 1;
      }      
    };
  }
}

function addCartNI() {
  openRightMenu();
  const x = document.getElementById("addCart");
  for(var i = 1; i<= 5; i++){
    var circle= "nis"+i;
    if (document.getElementById(circle).checked){      
      var scircle= "cart"+circle;
      var Dscircle= "'"+scircle+"'";
      var scircleNum= scircle+"Num"; 


      if(!document.getElementById(scircle)){
        x.innerHTML=x.innerHTML+'<a id="'+scircle+'" class="w3-bar-item w3-button"><img src="img/nike.jpg" style="height:70px"><span>&ensp;NIKE'+ (i+5)+'~'+(i+6)+'&ensp;:&ensp;<span id="'+scircle+'Num">1</span>&ensp;雙</span><button class="w3-bar-item w3-button" onclick="deleteCart('+Dscircle+')">&ensp; &emsp; &emsp; &emsp; - delete &times;</button></a>';
      }else if(document.getElementById(scircle)&&!document.getElementById(scircleNum)){        
        document.getElementById(scircle).innerHTML='<img src="img/nike.jpg" style="height:70px"><span>&ensp;NIKE'+ (i+5)+'~'+(i+6)+'&ensp;:&ensp;<span id="'+scircle+'Num">1</span>&ensp;雙</span><button class="w3-bar-item w3-button" onclick="deleteCart('+Dscircle+')">&ensp; &emsp; &emsp; &emsp; - delete &times;</button>';
      }else{
        document.getElementById(scircleNum).innerHTML=Number(document.getElementById(scircleNum).innerHTML)+ 1;
      }      
    };
  }
}

function addCartNV() {
  openRightMenu();
  const x = document.getElementById("addCart");
  for(var i = 1; i<= 5; i++){
    var circle= "nvs"+i;
    if (document.getElementById(circle).checked){      
      var scircle= "cart"+circle;
      var Dscircle= "'"+scircle+"'";
      var scircleNum= scircle+"Num"; 


      if(!document.getElementById(scircle)){
        x.innerHTML=x.innerHTML+'<a id="'+scircle+'" class="w3-bar-item w3-button"><img src="img/vans.jpg" style="height:70px"><span>&ensp;VANS'+ (i+5)+'~'+(i+6)+'&ensp;:&ensp;<span id="'+scircle+'Num">1</span>&ensp;雙</span><button class="w3-bar-item w3-button" onclick="deleteCart('+Dscircle+')">&ensp; &emsp; &emsp; &emsp; - delete &times;</button></a>';
      }else if(document.getElementById(scircle)&&!document.getElementById(scircleNum)){        
        document.getElementById(scircle).innerHTML='<img src="img/vans.jpg" style="height:70px"><span>&ensp;VANS'+ (i+5)+'~'+(i+6)+'&ensp;:&ensp;<span id="'+scircle+'Num">1</span>&ensp;雙</span><button class="w3-bar-item w3-button" onclick="deleteCart('+Dscircle+')">&ensp; &emsp; &emsp; &emsp; - delete &times;</button>';
      }else{
        document.getElementById(scircleNum).innerHTML=Number(document.getElementById(scircleNum).innerHTML)+ 1;
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

  function hideindex2P(){
    var x = document.getElementById("insidePage2");
    x.style.display = "none";
  }
  function showindex2P() {
    var x = document.getElementById("insidePage2");
    x.style.display = "block";
  }
  function hideindex3P(){
    var x = document.getElementById("insidePage3");
    x.style.display = "none";
  }
  function showindex3P() {
    var x = document.getElementById("insidePage3");
    x.style.display = "block";
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

