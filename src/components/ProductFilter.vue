<template>
    <form class="hidden lg:block">
        <div class="flex justify-center">
            <h1 class="text-lg font-bold">Categories </h1>
        </div>
        <ul role="list" class="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
            <li @click="selectCategory(null)" :class="{ '!bg-gray-200': selectedCategory == null}" class="rounded cursor-pointer hover:bg-gray-100 py-2">
                <a class="pl-5">All</a>
            </li>
            <li v-for="category in categories" :key="category.id" @click="selectCategory(category.id)" :class="{ '!bg-gray-200': selectedCategory == category.id }" class="rounded cursor-pointer hover:bg-gray-100 py-2">
                <a :href="category.href" class="ml-2">{{ category.name }} <span class="bg-gray-200 p-1 rounded-full text-xs">{{ category.quantity }}</span></a>
            </li>
        </ul>
    </form>
</template>

<script setup>

import { toRefs } from 'vue'

const props = defineProps(['categories', 'selectedCategory'])
const { categories, selectedCategory } = toRefs(props)
const emit = defineEmits(["selectCategory"]);
const selectCategory = (category_id) => {
    emit("selectCategory", category_id);
}
</script>
