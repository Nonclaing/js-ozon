'use strict';

export default getData;

function getData() {
    return fetch('https://ozon-f435b-default-rtdb.europe-west1.firebasedatabase.app/goods.json')
        .then((res) => res.json());
}