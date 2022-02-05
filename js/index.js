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