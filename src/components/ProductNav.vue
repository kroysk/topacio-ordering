<template>
    <div class="flex items-center justify-between border-b border-gray-200 pb-6 pt-24">
        <!-- <h1 class="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1> -->
        <div class="h-20 overflow-hidden flex items-center align-middle">
            <img :src="logo" alt="logo topacio" class="h-48">
        </div>
        <div class="flex items-center">
            <Menu as="div" class="relative inline-block text-left">
                <div>
                    <MenuButton
                        class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                        Sort
                        <ChevronDownIcon class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true" />
                    </MenuButton>
                </div>

                <transition enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95">
                    <MenuItems
                        class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div class="py-1">
                            <MenuItem v-for="option in sortOptions" :key="option.name" v-slot="{ active }">
                            <a :href="option.href"
                                :class="[option.current ? 'font-medium text-gray-900' : 'text-gray-500', active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm']">{{
                                    option.name }}</a>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </transition>
            </Menu>

            <!-- <button type="button" class="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span class="sr-only">View grid</span>
                <Squares2X2Icon class="h-5 w-5" aria-hidden="true" />
            </button> -->
            <button type="button" class="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                @click="MobileOpenChange">
                <span class="sr-only">Filters</span>
                <FunnelIcon class="h-5 w-5" aria-hidden="true" />
            </button>
        </div>
    </div>
</template>

<script setup>
import { toRefs } from 'vue'
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/vue'
import { ChevronDownIcon, FunnelIcon, Squares2X2Icon } from '@heroicons/vue/20/solid'
import logo from "@/assets/img/TOPACIOBISUTERIA.svg"
const props = defineProps(['sortOptions', 'mobileFiltersOpen'])
const { sortOptions } = toRefs(props)
const emit = defineEmits(["MobileOpenChange"]);
const MobileOpenChange = () => {
    emit("MobileOpenChange");
};
// const mobileFiltersOpen = ref(props.mobileFiltersOpen)
</script>

