function solve(pesho) {
    let procent = Number(pesho.pop()) / 100;


    let sum = 1;
    for (let el of pesho) {
        sum = Number(el)
    }
    let sum1 = sum / 1000;
     let occupiedSpace = sum1 procent;
    //  50.93625

    let tottal = sum1 - occupiedSpace
    console.log(tottal);

}
solve(['200'])