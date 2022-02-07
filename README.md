Get Country and flags using  promis fetch 


// Html Part
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <title>Promis-fetch</title>
</head>
<body>
    <input type="text" id="inputSearch" placeholder="searchCountry">
    <div class="root"></div>
    <script src="./js/index.js"></script>
</body>
</html>

// css part 

* {
  margin: 0;
  padding: 0;
}

body {
  background-color: blueviolet;
}

.root {
  position: relative;
  margin: 0 auto;
  width: 1440px;
}

.div-img {
  width: 250px;
  height: 250px;
  margin-top: 5px;
  font-size: 21px;
  font-weight: bold;
  float: left;
  margin-left: 100px;
}

.div-img img {
  width: 320px;
  height: 160px;
}


// Java Script Part 

let root = document.querySelector(".root");
fetch("https://restcountries.com/v3.1/all")
  .then(res => {
    return res.json();
  })
  .then(data => {
    getData(data);
  });

  
function getData(data) {
    let countryName = data.map(item => item.name.common);
    let flags = data.map(item => item.flags.png);
    for (let i = 0; i < flags.length && i < countryName.length; i++) {
      let img = document.createElement("img");
      let div1 = document.createElement("div");
      div1.className = "div-img";
      div1.textContent = countryName[i];
      div1.appendChild(img);
      img.src += flags[i];
      root.appendChild(div1);
    }
  }

  
let filterInput = document.querySelector("#inputSearch");
filterInput.addEventListener("keyup", function filterNames() {
  let filterValue = document.querySelector("#inputSearch").value;
  let items = document.querySelectorAll(".div-img");
  for (let i = 0; i < items.length; i++) {
    if (items[i].textContent.indexOf(filterValue) > -1) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
});

