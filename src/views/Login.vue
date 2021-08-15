<template>
    <div class="bg-gray-800 h-screen flex flex-col justify-center">
        <div class="bg-gray-400 w-1/2 mx-auto rounded-md">
            <div class="w-40 p-1 mx-auto p-2">
                <img src="../assets/user.png">
            </div>
            <div class="flex flex-col w-60 mx-auto space-y-4">
              <input v-model="email" placeholder="e-mail" class="bg-white-500 text-sm px-3 py-1 rounded outline-none">
              <input v-model="password" type="password" placeholder="password" class="bg-gray-200 text-sm px-3 py-1 rounded outline-none">
            </div>
            
            <button @click="login" class="bg-white hover:bg-gray-200 active:bg-gray-300 block w-20 mx-auto my-3 rounded">login</button>
            <div v-if="message" class="text-red-600">{{ message }}</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            email: null,
            password: null, 
            message: null           
        }
    },
    methods: {
        login() {
            const bodyFormData = new FormData()
            bodyFormData.append("mail", this.email)
            bodyFormData.append("password", this.password)
            axios.post("https://api.ziyuno.com/api/auth/login/en", bodyFormData, {
                headers: { 
                    "Content-Type": "multipart/form-data",
                    "X-Requested-With": "XMLHttpRequest"
                }

            })
            .then((response) => {
                if (response.data.result.user) {
                    this.$router.push('/panel')
                } else {
                    this.message = response.data.message.description
                }
                console.log(response)
                
            })

        }
    }
}
</script>