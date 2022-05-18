'use strict';

export default postData;

function postData() {
    return fetch('https://ozon-f435b-default-rtdb.europe-west1.firebasedatabase.app/goods.json', {
        method: 'POST',
        body: JSON.stringify({
            title: "Игровая приставка Sony PlayStation 4 Pro",
            price: 33990,
            sale: false,
            img: "https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg",
            category: "Игровая приставка"
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(res => res.json());
}