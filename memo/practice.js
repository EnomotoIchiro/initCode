// 初期化
let food;

let aut;

let flesh

// 値代入
food = "サンマ";

act = 2;

flesh = false;

console.log(food,aut,flesh);

food = "わたあめ";

console.log("2回目代入",food);

const favoriteFood = "パスタ";

console.log("不変なもの代入")

const cookie = {
    name: "バタークッキー",
    price: 450,
    isLimited: false,
};

let price = cookie.price;
if(cookie.isLimited === false){
    price = price * 1.1;
}else{
    price = price * 1.2
}

console.log('結果',price)

const winners = [
    {
        name: "渡辺",
        isOpen: true,
        price: 1000
    },
    {
        name: "田中",
        isOpen: false,
        price: 1500
    },
    {
        name: "斉藤",
        isOpen: true,
        price: 1400
    }
];

for (const winner of winners) {
    let price = winner.price;
    if(winner.isOpen === true){
        price = price * 1.1;
    }else{
        price = price * 1.2;
    }
    console.log("結果",winner.name,price)
}

function calucurateMax(product){
    let price = product.price;
    price = price*1.1;
    return price;
}

for (const winner of winners) {
    const price = calucurateMax(winner)
    console.log("結果",winner.name,price)
}
