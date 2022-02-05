let root = document.querySelector(".root");
fetch("https://restcountries.com/v3.1/all")
  .then(res => {
    return res.json();
  })
  .then(data => {
    getData(data);
  });

  