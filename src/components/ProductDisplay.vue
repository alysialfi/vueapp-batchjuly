<script>
    export default {
      name: 'ProductDisplay',
      data() {
        return {
            amount: 0,
            price: 0,
            isAmountGreaterThan3: false,
            amountIsTwo: false
        }
      },
      methods: {
        addToCart() {
            if (this.amount > 3) {
                this.isAmountGreaterThan3 = true
            }
        },
      },
    }
</script>

<template>
    <div class="flex w-full h-screen">
        <div class="bg-gray-200 w-1/2 flex">
            <!-- thumbnail -->
            <img src="../assets/sofa-thumbnail.png" alt="" srcset="" class="m-auto">
        </div>
        <div class="w-1/2">
            <!-- detail -->
            <div class="p-14">
                <!-- top detail -->
                <h1 class="font-bold text-5xl mb-2">Greyana Sofa</h1>
                <p class="leading-6">Introducing the Greyana Sofa. The perfect combination of style and comfort. With its sleek and modern design, this sofa is a statement piece that will elevate any living space. The Greyana Sofa features a stunning grey upholstery that is both soft to the touch and durable for everyday use. Crafted with a sturdy wooden frame and high-density foam cushions, the Greyana Sofa offers unbeatable comfort and support. The seat and back cushions are also removable and reversible, making it easy to maintain and keep looking like new.</p>
            </div>
            <!-- container detail -->
            <div class="p-14">
                <p class="font-semibold text-3xl">$75</p>
                <div class="flex mb-2">
                    <button @click="amount--" class="w-12 h-8 bg-black text-white">-</button>
                    <div class="w-12 h-8 bg-gray-100 text-center text-lg">{{ amount }}</div>
                    <button @click="amount++" class="w-12 h-8 bg-black text-white">+</button>
                </div>

                <!-- error msg -->
                <div v-if="isAmountGreaterThan3" class="mb-20 text-red-500">maximum items that can be added is 3</div>
                <!-- <div :class="isAmountGreaterThan3 ? 'block' : 'hidden'" class="mb-20 text-red-500">maximum items that can be added is 3</div> -->

                <p class="mb-6 text-2xl">Sub Total: $0</p>
                <div class="flex gap-4">
                    <button class="w-1/2 h-14 bg-black text-white">Buy Now</button>
                    <button @click="addToCart" class="w-1/2 bg-black text-white">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
</template>
