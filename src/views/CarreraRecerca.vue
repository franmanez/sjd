<template>

  <div class="container-fluid">

    <h3 class="mb-4 text-muted"><i class="bi bi-journals"></i> Omplir carrera professional > <span class="text-sjd-naranja">Recerca</span></h3>

    <MenuFormacio></MenuFormacio>

    <div class="row mt-3">
      <div class="col-lg-12 col-xlg-12 col-md-12">
        <div class="card mb-1 card-body-top-lila" >
          <div class="card-body" >
            Formulario
          </div>
        </div>
      </div>
    </div>


    <div class="row mt-3">
      <div class="col-lg-12 col-xlg-12 col-md-12">
        <div class="card mb-5 card-body-top-naranja">

          <div class="card-body">
            <h4 class="card-title">
              <span class="text-sjd-lila">Llistat de recerca</span>
            </h4>
            <hr>

          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>



import {onMounted } from "vue";
import {format} from "date-fns";
import MenuFormacio from "@/components/MenuFormacio.vue";

export default {
  name: "CarreraDocencia",
  components: {MenuFormacio},
  methods: {format},

  component: {
  },

  setup(){


    onMounted(() => {

    });


    return{

    }
  }
}

</script>
<style>

.table>tbody>tr>td {
  padding-top: 20px;
  padding-bottom: 20px;
  color: #5e696f;
}

.table>tbody>tr:nth-child(odd)>td,
.table>tbody>tr:nth-child(odd)>th {
  /*background-color: #ffdbb6;*/
  background-color: whitesmoke;
}

.table>tbody>tr:nth-child(even)>td,
.table>tbody>tr:nth-child(even)>th {
  /*background-color: #ffdbb6;*/
  background-color: #ffffff;
}


</style>