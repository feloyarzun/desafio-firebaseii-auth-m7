<script setup>
import { $auth } from '@/firebaseApp'
import router from '@/router'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { ref } from 'vue'

const email = ref('')
const password = ref('')

async function handleLogin() {
  try {
    const { user } = await signInWithEmailAndPassword($auth, email.value, password.value)
    console.log(user)
    router.push('/home')
  } catch (error) {
    console.error(error)
  }
}

async function signInWithGoogle() {
  try {
    const provider = new GoogleAuthProvider()
    await signInWithPopup($auth, provider)
    router.push('/home')
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="container">
    <form @submit.prevent="handleLogin" class="mb-4 p-4 bg-dark text-white">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
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
          type="password"
          class="form-control bg-white text-dark"
          id="password"
          v-model="password"
          placeholder="Ingresa la contraseña"
        />
      </div>
      <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
      <button type="button" @click="signInWithGoogle" class="btn btn-primary ms-5">
        Acceder con
        <i class="fab fa-google me-2"></i>
      </button>
    </form>
  </div>
</template>

<style>
.container {
  width: 40%;
}
</style>
