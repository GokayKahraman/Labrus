<template>
    <div class="h-screen bg-gray-800 flex flex-col ">
        <div class="bg-gray-500 flex h-16 my-12 mx-20 rounded text-white">
            <div class="hover:bg-gray-400 w-48 text-center rounded "><div class="mt-5">Menü 1</div></div>
            <div class="hover:bg-gray-400 w-48 rounded flex">
                <div class="ml-2 my-5">Menü 2</div>
                <div class="bg-red-600 hover:bg-red-500 w-7 px-1.5 ml-20 my-auto text-white text-xs font-semibold rounded-3xl">41</div>
            </div>
            <div class="hover:bg-gray-400 ml-auto w-48 text-center rounded"><div class="mt-5">Menü 3</div></div>
        </div>
        <div class="flex px-10 md:w-full">
            <div class="bg-white absolute w-48 ml-10 h-40 rounded-lg">
                <div class="border-2 rounded-sm border-gray-300 h-10 hover:bg-blue-400 hover:text-white hover:border-blue-400 "><div class="ml-2 my-1 ">Anasayfa</div></div>
                <div class="border-2 rounded-sm border-gray-300 h-10 hover:bg-blue-400 hover:text-white hover:border-blue-400"><div class="ml-2 my-1">Kullanıcılar</div></div>
                <div class="border-2 rounded-sm border-gray-300 h-10 hover:bg-blue-400 hover:text-white hover:border-blue-400"><div class="ml-2 my-1">Paketler</div></div>
                <div class="border-2 rounded-sm border-gray-300 h-10 hover:bg-blue-400 hover:text-white hover:border-blue-400"><div class="ml-2 my-1">Çıkış</div></div>
            </div>

            <div class="grid gap-1 ml-72 text-center rounded md:w-screen">
                <div class="grid grid-cols-3 ">
                    <div class="bg-blue-900 text-white font-semibold rounded-sm">Adı</div>
                    <div class="bg-blue-900 text-white font-semibold rounded-sm">Fiyatı</div>
                    <div class="bg-blue-900 text-white font-semibold rounded-sm w-36">İşlem</div>
                </div>

                <div v-for="offer in offers" :key="offer.id" class="grid grid-cols-3">
                    <div class="bg-white">{{ offer.name }}</div>
                    <div class="bg-white">{{ offer.price }}</div>
                    <button class="bg-yellow-300 w-36">Sil</button>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            offers: []
        }
    },
    mounted() {
        axios.get("https://api.ziyuno.com/api/package/packages/en", {
            headers: {
                "X-Requested-With": "XMLHttpRequest"
                }
        })
        .then(response => {
            if (response.data.result) {
                this.offers = response.data.result 
            }
        })
    },   
}
</script>
