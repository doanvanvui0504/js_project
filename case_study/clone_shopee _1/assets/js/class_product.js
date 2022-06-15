class Product {
    name
    path
    oldPrice
    currentPrice
    saled
    brand
    originName

    constructor(name, path, oldPrice, currentPrice, saled, brand, originName) {
        this.name = name
        this.path = path
        this.oldPrice = oldPrice
        this.currentPrice = currentPrice
        this.saled = saled
        this.brand = brand
        this.originName = originName
    }
}

export default Product