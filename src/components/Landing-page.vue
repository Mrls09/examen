<template>
  <div class="landing-page">
    <div class="hero">
      <h1>Bienvenido</h1>
      <router-link to="/layout" class="btn">Ir al sitio principal</router-link>
    </div>
    <div class="main-content">
      <h2>Contenido Principal</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan fringilla turpis, non mattis odio vestibulum at. Duis a velit ac sem rhoncus volutpat.</p>
    </div>

    <footer>
      <p>Ivan Samuel Mata Nieto 8° C &copy; 2024</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
}
</script>

<style scoped>
.landing-page {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hero {
  background-image: url('../assets/hero-image.jpg');
  height: calc(100vh - 100px); 
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.hero h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

.btn {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
}

.main-content {
  text-align: center;
  padding: 50px;
}

footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px 0;
}
</style>
