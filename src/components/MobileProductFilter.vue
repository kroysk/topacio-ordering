<template>
    <TransitionRoot as="template" :show="mobileFiltersOpen">
        <Dialog as="div" class="relative z-40 lg:hidden" @close="MobileCloseChange">
            <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
                enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
                leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 z-40 flex">
                <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                    enter-from="translate-x-full" enter-to="translate-x-0"
                    leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
                    leave-to="translate-x-full">
                    <DialogPanel
                        class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                        <div class="flex items-center justify-between px-4">
                            <h2 class="text-lg font-medium text-gray-900">Categories</h2>
                            <button type="button"
                                class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                @click="MobileCloseChange">
                                <span class="sr-only">Close menu</span>
                                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>

                        <!-- Filters -->
                        <form class="mt-4 border-t border-gray-200">
                            <h3 class="sr-only">Categories</h3>
                            <ul role="list" class="px-2 py-3 font-medium text-gray-900">
                                <li @click="selectCategory(null)">
                                    <a  :class="{ '!bg-gray-200': selectedCategory == null }" class="block px-2 py-3 hover:bg-gray-100">All</a>
                                </li>
                                <li v-for="category in categories" :key="category.name" @click="selectCategory(category.id)" :class="{ '!bg-gray-200': selectedCategory == category.id }">
                                    <a :href="category.href" class="block px-2 py-3 hover:bg-gray-100">{{ category.name }}
                                        <span class="bg-gray-200 p-1 rounded-full text-xs">{{ category.quantity
                                        }}</span></a>
                                </li>
                            </ul>
                        </form>
                    </DialogPanel>
                </TransitionChild>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { toRefs } from 'vue'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/vue/20/solid'

const props = defineProps(['categories', 'mobileFiltersOpen', 'selectedCategory'])
const { categories, mobileFiltersOpen } = toRefs(props)


const emit = defineEmits(["MobileCloseChange", "selectCategory"]);
const MobileCloseChange = () => {
    emit("MobileCloseChange");
};
const selectCategory = (category_id) => {
    emit("selectCategory", category_id);
}
</script>
