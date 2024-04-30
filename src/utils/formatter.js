export const priceFormatter = (price, index) => {
    if (price !== undefined) {
        //С бэка может прийти обычная цен а может быть несколько через ";".
        return price.includes(';') ? parseInt(price.split(';')[index]) : parseInt(price);
    }
}