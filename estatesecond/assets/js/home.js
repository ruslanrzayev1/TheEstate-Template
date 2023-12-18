let prodCnt = document.querySelector(".prodCnt");
let db;
let loadMore = document.querySelector(".loadMore");
let limit = 3;
let page = 1;
const prodRender = () => {
  let skip = (1 - page) * limit;
  axios
    .get(
      `https://655c83c825b76d9884fd6f17.mockapi.io/products?limit=${limit}&page=${page}&skip=${skip}`
    )
    .then((res) => {
      db = res.data;
      db.map((item) => {
        let myDiv = document.createElement("div");
        myDiv.className = "myDiv";
        myDiv.innerHTML = `
        <div class = "imgAndName"><img src="${item.image}" alt="" />
        <h3>${item.name}</h3</div>
        <div class = "priceAndBtn"><p>${item.price}</p>
        <button onclick = "addToCart(${item.id})">ADD</button></div>
        `;
        prodCnt.append(myDiv);
      });
    });
};

loadMore.addEventListener("click", prodRender);

const addToCart = (prodId) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(db.find((item) => item.id == prodId));
  localStorage.setItem("cart", JSON.stringify(cart));
};

window.onload = () => {
  prodRender();
};
