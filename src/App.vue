<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { signOut } from 'firebase/auth'
import { $auth } from './firebaseApp'
import router from '@/router'
// import RegisterView from './views/RegisterView.vue'

async function handleSignOut() {
  signOut($auth).then(() => {
    alert('Cerraste Sesion')
    router.push({ name: 'login' })
  })
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-dark mb-4">
    <div class="container-fluid">
      <RouterLink class="navbar-brand text-white" to="/login">FirebaseII</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <RouterLink class="nav-link text-white" to="/home">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-white" to="/register">Registrarse</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-white" to="/login">Iniciar Sesion</RouterLink>
          </li>
        </ul>
        <button @click="handleSignOut" type="submit" class="btn btn-secondary">
          Cerrar Sesion
        </button>
      </div>
    </div>
  </nav>
  <RouterView />
  <!-- <RegisterView /> -->
</template>

<style scoped></style>
