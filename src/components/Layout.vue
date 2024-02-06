<template>
    <div id="app" style="height: 100%; width: 100%;">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div class="container">
          <router-link to="/" class="navbar-brand">Examen Unidad 1</router-link>
          <router-link to="/landing-page" class="navbar-brand">Landing Page</router-link>

        </div>
      </nav>
      <div class="container-fluid">
        <div class="row">
          <nav class="col-md-3 col-lg-2 d-md-block bg-dark sidebar">
            <div class="sidebar-sticky">
              <div class="list-group">
                <router-link to="/formulario" class="list-group-item list-group-item-action">
                  Formulario
                </router-link>
                <router-link to="/pagination" class="list-group-item list-group-item-action">
                  Paginación
                </router-link>
              </div>
            </div>
          </nav>
          <div class="content">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  };
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
  
  .sidebar {
    position: fixed;
    top: 30px; 
    bottom: 0;
    left: 0;
    z-index: 100;
    padding-top: 48px;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
  }
  
  
  
  .navbar-brand {
    font-size: 1.25rem;
  }
  </style>
  