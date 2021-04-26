function addToCart(button) {
    const item = button.closest(".item");
    const title = item.querySelector(".item-title").innerText;
    const price = +item.querySelector(".item-price").innerText.replace("₽", "");
    const id = title.replaceAll(" ", "-").toLocaleLowerCase() + "-cart";
    let cartRow = document.querySelector("#" + id);
    const basketList = document.querySelector(".basket-list");
    const basketSum = document.querySelector(".basket-sum");
    const basket = document.querySelector(".shop-basket");
    basket.classList.remove("shop-basket--hidden");

    if(!cartRow) {
        cartRow = document.createElement("div");
        cartRow.id = id;
        const cartTitle = document.createElement("div");
        cartTitle.innerText = title;
        const cartPrice = document.createElement("div");
        cartPrice.innerText = `${price}₽`;
        cartPrice.classList.add("cart-price");
        cartRow.append(cartTitle, cartPrice);
        basketList.append(cartRow);
    } else {
        const cartPrice = cartRow.querySelector(".cart-price");
        cartPrice.innerText = cartPrice.innerText ? +cartPrice.innerText.replace("₽", "") +
            price + "₽" : `${price}₽`;
    }
    basketSum.innerText = basketSum.innerText ? +basketSum.innerText.replace("₽", "") +
        price + "₽" : `${price}₽`;
}