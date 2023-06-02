let customer1 = {
    "ad": "selim",
    "soyad": "peker",
    "sehir": "istanbul",
    "yas": 25,
    "products": [
        "leptop", "car", "phone", 
    ]
};
let customer2 = {
    "ad": "nur",
    "soyad": "peker",
    "sehir": "istanbul",
    "yas": 25,
    "products": {
        "phone": "iphone5",
        "price": 10
    }
};
let customer3 = {
    "ad": "can",
    "soyad": "peker",
    "sehir": "istanbul",
    "yas": 25
};
console.log(customer2.products.price);