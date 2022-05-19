"use strict";

export function searchFilter(items, value) {
    return  items.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));
}

export function categoryFilter(items, value) {
    return  items.filter((item) => item.category.includes(value));
}

export function priceFilter(items, values, sale) {
    return items.filter((item) => {
        console.log(item.price <= +values.maxPrice);
        if (values.maxPrice != '') {
            return +item.price >= +values.minPrice && +item.price  <= +values.maxPrice && item.sale == sale;
        }
        else {
            return +item.price >= +values.minPrice && item.sale == sale;
        }
    });
}