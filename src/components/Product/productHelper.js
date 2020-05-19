export function formatPrice(price) {
    if(typeof(price) !== "number"){
        price = parseInt(price);
    }
    return "₹" + price.toLocaleString();
}