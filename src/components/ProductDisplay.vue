<script>
    export default {
      name: 'ProductDisplay',
      data() {
        return {
            amount: 0,
            price: 75,
            isAmountGreaterThan3: false,
            hasClickedCartButton: false,
            amountIsTwo: false,
            altImg: 'Greyana Sofa Thumbnail',
            colorList: [
                {
                    name: 'Merah',
                    class: 'bg-red-500',
                    price: 75
                },
                {
                    name: 'Biru',
                    class: 'bg-blue-500',
                    price: 85
                },
                {
                    name: 'Abu-abu',
                    class: 'bg-gray-500',
                    price: 95
                }
            ],
            dataAPI: {}
        }
      },
      methods: {
        addToCart() {
            this.hasClickedCartButton = true
            this.isAmountGreaterThan3 = this.amount > 3
        },
        changePrice(colorFromUser) {
            const chosenPrice = this.colorList.find((color) => color.name === colorFromUser)
            this.price = chosenPrice.price
            return chosenPrice
        },
        async getProducts() {
            const response = await fetch('https://fakestoreapi.com/products')
            const result = await response.json()
            this.dataAPI = result
            console.log(result);
        }
      },
      mounted() {
        this.getProducts()
      },
    }
</script>

<template>
    <div class="flex w-full h-screen">
        <div class="bg-gray-200 w-1/2 flex">
            <!-- thumbnail -->
            <img src="../assets/sofa-thumbnail.png" :alt="altImg" srcset="" class="m-auto">
        </div>
        <div class="w-1/2">
            <!-- detail -->
            <div class="p-14">
                <!-- top detail -->
                <h1 id="title" class="font-bold text-5xl mb-2">Greyana Sofa</h1>
                <p class="leading-6">Introducing the Greyana Sofa. The perfect combination of style and comfort. With its sleek and modern design, this sofa is a statement piece that will elevate any living space. The Greyana Sofa features a stunning grey upholstery that is both soft to the touch and durable for everyday use. Crafted with a sturdy wooden frame and high-density foam cushions, the Greyana Sofa offers unbeatable comfort and support. The seat and back cushions are also removable and reversible, making it easy to maintain and keep looking like new.</p>
                <div class="mt-8 flex gap-4">
                    <div v-for="(color, index) in colorList" :key="index" @click="changePrice(color.name)" class="flex gap-2">
                        <div :class="color.class" class="w-6 h-6 rounded-full"></div>
                        <span>{{ color.name }}</span>
                    </div>
                </div>
            </div>
            <!-- container detail -->
            <div class="p-14">
                <p class="font-semibold text-3xl">${{ price }}</p>
                <div class="flex mb-2">
                    <button @click="amount--" class="w-12 h-8 bg-black text-white disabled:bg-gray-500" :disabled="amount === 0">-</button>
                    <div class="w-12 h-8 bg-gray-100 text-center text-lg">{{ amount }}</div>
                    <button @click="amount++" class="w-12 h-8 bg-black text-white">+</button>
                </div>

                <!-- error msg -->
                <div v-if="hasClickedCartButton">
                    <div v-if="isAmountGreaterThan3" class="mb-20 text-red-500">maximum items that can be added is 3</div>
                    <div v-else class="mb-20 text-green-500">successfully added to cart</div>
                </div>

                <p class="mb-6 text-2xl">Sub Total: ${{ price * amount }}</p>
                <div class="flex gap-4">
                    <button class="w-1/2 h-14 bg-black text-white">Buy Now</button>
                    <button @click="addToCart" class="w-1/2 bg-black text-white">Add to Cart</button>
                </div>
                {{ dataAPI[0].title }}
            </div>
        </div>
    </div>
</template>
