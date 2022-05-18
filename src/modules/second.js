'use strict';
import getData from "./getData";
import postData from "./postData";
export default second;

function second() {
    const cartButton = document.getElementById('cart');

    cartButton.addEventListener('click', () => {
        postData().then((data) => {
            console.log(data);
            getData().then((data) => {
                console.log(data);
            });
        });
    });
}