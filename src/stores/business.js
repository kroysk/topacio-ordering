import { ref, computed, reactive, toRaw } from 'vue'
import { defineStore } from 'pinia'
import api from '@/helpers/ordering'
export const useBusinessStore = defineStore('counter', () => {
    const business = ref({
        categories: []
    })
    async function getBusiness () {
    // const getBusiness = async () => {
        let res = await api.get('/v400/en/shopper/business/51')
        business.value = res.data.result
    }
    const getProducts = computed(() => {
        let products = []
        business.value.categories.forEach(category => {
            products = products.concat(toRaw(category.products))
        });
        return products
    })
    const getCategories = computed(() => {
        let categories = []
        business.value.categories.forEach(category => {
            categories.push({
                id: category.id,
                name: category.name,
                quantity: category.products.length
            })
        });
        return categories
    })
    return { business, getBusiness, getProducts, getCategories }
})
