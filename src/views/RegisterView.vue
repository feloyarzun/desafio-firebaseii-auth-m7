<script setup>
import { ref } from 'vue'
import { $auth } from '@/firebaseApp'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import router from '@/router'

const email = ref('')
const password = ref('')

async function handleRegister() {
  try {
    const userCredential = await createUserWithEmailAndPassword($auth, email.value, password.value)

    console.log(userCredential.user)
    email.value = ''
    password.value = ''
    router.push('/login')
  } catch (error) {
    console.error(error)
  }
}
</script>
<template>
  <div class="container">
    <form @submit.prevent="handleRegister" class="mb-4 p-4 bg-dark text-white">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          required
          type="text"
          class="form-control bg-white text-dark"
          id="email"
          v-model="email"
          placeholder="Ingresa el email"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Contraseña</label>
        <input
          required
          type="password"
          class="form-control bg-white text-dark"
          id="password"
          v-model="password"
          placeholder="Ingresa la contraseña"
        />
      </div>
      <button type="submit" class="btn btn-primary">Registrar</button>
    </form>
  </div>
</template>

<style>
.container {
  width: 40%;
}
</style>
