<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
    <div class="bg-white">
        <div>
            <!-- Mobile filter dialog -->
            <MobileProductFilter :categories="getCategories" :mobileFiltersOpen="mobileFiltersOpen"
                @MobileCloseChange="MobileCloseChange" :selectedCategory="selectedCategory"
                @selectCategory="selectCategory" />
            <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <ProductNav :sortOptions="sortOptions" @MobileOpenChange="MobileOpenChange" />

                <section aria-labelledby="products-heading" class="pb-24 pt-6">
                    <h2 id="products-heading" class="sr-only">Products</h2>

                    <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                        <!-- Filters -->
                        <ProductFilter :categories="getCategories" :selectedCategory="selectedCategory"
                            @selectCategory="selectCategory" />

                        <!-- Product grid -->
                        <div class="lg:col-span-3">
                            <!-- Your content -->
                            <ProductList :products="filteredProducts" :selectedCategory="selectedCategory" />
                            <!-- <ProductList /> -->
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import MobileProductFilter from '@/components/MobileProductFilter.vue'
import ProductFilter from '@/components/ProductFilter.vue'
import ProductNav from '@/components/ProductNav.vue'
import ProductList from '@/components/ProductList.vue'
import { useBusinessStore } from '@/stores/business'
import { storeToRefs } from 'pinia'

const businessStore = useBusinessStore()
const { getProducts, getCategories } = storeToRefs(businessStore)
const selectedCategory = ref(null)
const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]

const mobileFiltersOpen = ref(false)
const MobileOpenChange = () => {
    mobileFiltersOpen.value = true;
};
const MobileCloseChange = () => {
    mobileFiltersOpen.value = false;
};
const selectCategory = (category_id) => {
    selectedCategory.value = category_id
};
const filteredProducts = computed(() => {
    return getProducts.value.filter((product) => (product.category_id == selectedCategory.value) || !selectedCategory.value)
})
</script>   
