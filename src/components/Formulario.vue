<template>
  <div class="container mt-5">
    <b-breadcrumb :items="items"></b-breadcrumb>
    <h1 class="mb-4">Formulario</h1>
    <form @submit.prevent="submitForm" action="http://localhost:8080/api/vehiculos/" method="post">
      <div class="form-group">
        <label for="brand">Marca</label>
        <input id="brand" v-model="brand" name="brand" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label for="model">Modelo</label>
        <input id="model" v-model="model" name="model" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label for="year">Año de fabricación</label>
        <input id="year" v-model="year" name="year" type="number" min="2024" class="form-control">
      </div>
      <div class="form-group">
        <label for="serial">Número de serie</label>
        <input id="serial" v-model="serial" name="serial" type="text" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Enviar</button>
      <p v-if="errors.length" class="mt-3 text-danger">
        <b>Por favor, corrige los siguientes errores:</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </p>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      brand: "",
      model: "",
      year: "",
      serial: "",
      errors: [],
      items: [
        { text: 'Examen', active: false, to: '/layout' },
        { text: 'Formulario', active: true },
      ]
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch("http://localhost:8080/api/vehiculos/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            brand: this.brand,
            model: this.model,
            year: this.year,
            serie: this.serial
          })
        });

        if (response.ok) {
          console.log("Datos enviados correctamente");
        } else {
          console.error("Error al enviar los datos al servidor");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    }
  }
};
</script>

<style>
</style>
