// getting elements
let image = document.getElementById("img");
let btn = document.getElementById("btn");

//function to display elements

let result = fetch("https://dog.ceo/api/breeds/image/random");
result
  .then((data) => data.json())
  .then((res) => {
    //console.log(res[0].url);
    image.setAttribute("src", res.message);
  })
  .catch((err) => console.log(err));

btn.addEventListener("click", () => {
  window.location.reload();
});
