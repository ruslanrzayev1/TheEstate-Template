let productsCnt = document.querySelector(".productsCnt");

const displayProd = () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  productsCnt.innerHTML = "";
  cart.map((item, index) => {
    let miniDiv = document.createElement("div");
    miniDiv.className = "miniDiv";
    miniDiv.innerHTML = `
    <div class = "imgAndName"><img src="${item.image}" alt="" />
    <h3>${item.name}</h3</div>
    <div class = "priceAndBtn"><p>${item.price}</p>
    <button onclick = "removeFromCart(${index})">Remove</button></div>
        `;
    productsCnt.append(miniDiv);
  });
};

const removeFromCart = (index) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayProd();
};

window.onload = () => {
  displayProd();
};
