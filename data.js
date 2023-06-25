const prod = [
    {
        id: 1,
        name: "Coca-cola",
        price: 1.19,
        image: require("../images/CocaCola.jpg"),
        description: "Coca‑Cola je najpopularnije i najprodavanije bezalkoholno piće u povijesti, kao i jedan od najprepoznatljivijih brendova na svijetu.",
    },
    {
        id: 2,
        name: "Jana",
        price: 0.79,
        image: require("../images/Jana.jpg"),
        description: "Idealan mineralni sastav, jedinstven okus i iznimna čistoća pozicionirali su Janu kao vrhunski prirodni proizvod.",
    },
    {
        id: 3,
        name: "Karlovačko",
        price: 1.29,
        image: require("../images/Karlovacko.jpg"),
        description: "Karlovačko je lager pivo kojeg obilježava zlatno-žuta boja i osvježavajuće gorak okus. Posebno je po skladnoj aromi i punoći okusa."
    }
]

export function getProducts(){
    return prod;
}

export function getProduct(id){
    return prod.find((product) => product.id == id);
}