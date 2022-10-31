function yardGreening(input) {
    let area = Number(input[0]);
    let price = area*7.61;
    let priceVAT = 0.18*price;
    let finalPrice = (price-priceVAT);
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${priceVAT} lv.`);

}
yardGreening(["550"]);
