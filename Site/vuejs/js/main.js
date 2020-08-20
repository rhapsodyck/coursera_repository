var app = new Vue({
    el:'#app',
    data: {
        product: 'Socks',
        url: 'https://www.google.com',
        image: "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
        inStock: true,
        inventory: 10,
        onSale: true,
        details: ["70% cotton","20% polyester","Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",                
                variantImage: "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg"
            },
            {
                varianId: 2235,
                variantColor: "blue",
                variantImage: "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg"
                
            }
        ],
        sizes: ["Large","Medium","Small","Extra Small"],
        cart: 0
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        updateProduct(variantImage){
            this.image = variantImage
        },
        decrease(){
            this.cart -= 1        
        }
    }
})