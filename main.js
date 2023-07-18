class ProductManager{
    constructor(){
        this.products = []
        this.nextId = 1
    }

    addProduct(product){
        if(!this.isProductValid(product)){
            console.log("Error: El producto no es valido")
            return
        }

        if(this.isCodeDuplicate(product.code)){
            console.log("Error:El codigo del producto ya esta siendo utilizado")
            return
        }
        product.id= this.nextId++
        this.products.push(product)
    }
    
    getProducts(){
        return this.products
    }

    getProductById(id){
        const product = this.products.find((p)=>p.id === id)
        if(product){
            return product
        }else{
            console.log("Error: Producto no encontrado")
        }
    }
    isProductValid(product){
        return(
            product.title &&
            product.description &&
            product.price &&
            product.thumbnai &&
            product.code &&
            product.stock !== undefined
        )
    }
    isCodeDuplicate(code){
        return this.products.some((p)=> p.code === code)
    }
}

const productManager = new ProductManager()

//Agregar productos 

productManager.addProduct({
    title: "BROWNIE",
    description: "brownie, dulce de leche y merengue",
    price: 10,
    thumbnai: "/imagenBrownie.jpg",
    code: "P001",
    stock: 5
})

productManager.addProduct({
    title: "LemonPie",
    description: "Tarta de masa sable rellena de Lemon Curd con picos de merengue italiano",
    price: 20,
    thumbnai: "/imagenLemonPie.jpg",
    code: "P002",
    stock: 10
})

//Obtener productos

const productList = productManager.getProducts()

console.log(productList)

//Obtener productos por su Id

// const productId = productManager.getProductById(2)
// console.log(productId)

//Obtener producto inexistente

// const noProduct = productManager.getProductById(8)