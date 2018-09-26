// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Все маленькие буквы  - обозначения значений
    // Маленькие буквы с 0 - остаток от деления на аналогичную букву без 0;
    // Большие буквы - для - для обозначения букв в итоговом объекте
    let h = 50;
    let h0;
    let H;
    let q = 25;
    let q0;
    let Q; 
    let d = 10;
    let d0;
    let D;
    let n = 5;
    let n0;
    let N;
    let p = 1;
    let p0;
    let P;
        
    // Проверка на значение 0 или меньше
    if (currency <= 0){
        return {};
    }
    // Проверка на то, что значение больше 10000
    if (currency > 10000){
        return  {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    if (currency >= 50 && currency <= 10000){
        h0 = (currency - currency%h)/h;
        makeExchange(currency%h);
        return Object.assign({"H":h0}, makeExchange(currency%h));
    }
    if (currency >= 25 && currency < 50){
        q0 = (currency - currency%q)/q;
        makeExchange(currency%q);
        return Object.assign({"Q":q0}, makeExchange(currency%q));
        
    }
    if (currency>=10 && currency<25){
        d0 = (currency - currency%d) / d;
        makeExchange(currency%d);
        return Object.assign({"D":d0}, makeExchange(currency%d));
        
    }
    if(currency >= 5 && currency < 10){
        n0 = 1; 
        makeExchange(currency - n);
        return Object.assign({"N":n0}, makeExchange(currency - n));
    }
    
    if (currency<5){
        p0 = currency;
        return {"P":p0};
    }
    
    // Return an object containing the minimum number of coins needed to make change

}
