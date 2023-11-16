<template>

  <div class="container-fluid">


    <h3 class="mb-4 text-muted"><i class="bi bi-mortarboard"></i> Administració > <span class="text-sjd-naranja">Convocatories</span></h3>

    <div class="row mt-3">
      <div class="col-lg-7 col-xlg-7 col-md-7">
        <div class="card mb-1 card-body-top-lila" >
          <div class="card-body" >

            <h4 class="card-title">
              <span class="text-sjd-lila">Llistat de docència</span>
            </h4>
            <hr>

            <div class="list-group list-group-flush mt-3">
              <div v-for="(item, index) in convocatorias" :key="index" class="list-group-item list-group-item-action  flex-column align-items-start">

                <div class="mt-2 mb-2 row"  @click="seleccionaConvocatoria(value)">
                  <div class="col-md-9">

                    <div>

                      <div class="mb-1 text-muted h5">
                        {{ (item.descripcio) }}
                      </div>

                      <div class="mb-1">

                        <div class="text-sjd-lila mt-2 mb-1" style="font-size: 0.8em;"> - Rang d'introducció de dades de formació continuada: </div>

                        <div class="small text-secondary mx-4">
                          <span class="badge bg-sjd-rojo me-1">Nivell B</span>
                          {{item.rangDatesFcB}}
                        </div>

                        <div class="small text-secondary mx-4">
                          <span class="badge bg-sjd-lila me-1">Nivell C</span>
                          {{item.rangDatesFcC}}
                        </div>

                        <div class="small text-secondary mx-4">
                          <span class="badge bg-sjd-naranja me-1">Nivell D</span>
                          {{item.rangDatesFcD}}
                        </div>

                      </div>

                    </div>

                  </div>

                  <div class="col-md-3">
                    <div class="text-secondary mb-1 me-5" >
                      <div class="mx-2">
                        <i class="bi bi-calendar-event text-secondary me-1"></i>
                        <span class="small">
                          {{item.dataIniciStr}} - {{item.dataFiIntroduccioDadesStr}}
                        </span>

                        <div class="form-check form-switch mt-2">
                          <input class="form-check-input" type="button" id="toogleActiva" checked="{{item.activa}}" @change="handleActivar(value.activa,index)">
                          <label v-if="item.activa" class="mt-1 bg-success" for="toogleActiva">ACTIVA</label>
                          <label v-else class="mt-1 badge bg-danger" for="toogleActiva">INACTIVA</label>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-5 col-xlg-5 col-md-5">
        <div class="card mb-5 card-body-top-naranja">

          <div class="card-body">
            <h4 class="card-title">
              <span class="text-sjd-lila">Detall de la convocatoria</span>
            </h4>
            <hr>

            <el-form :model="convocatoria" label-width="100px">


              <el-form-item prop="descripcio" label="Descripció">
                <el-input class="mx-0" placeholder="nom" v-model="convocatoria.descripcio"></el-input>
              </el-form-item>


              <el-form-item  prop="dataInici" label="Inici">
                <el-date-picker
                    v-model="convocatoria.dataInici"
                    type="date"
                    placeholder="Selecciona una data"
                    format="DD/MM/YYYY"
                    date-format="DD/MM/YYYY"
                />
              </el-form-item>


              <el-form-item  prop="dataFiIntroduccioDades" label="Fi">
                <el-date-picker
                    v-model="convocatoria.dataFiIntroduccioDades"
                    type="date"
                    placeholder="Selecciona una data"
                    format="DD/MM/YYYY"
                    date-format="DD/MM/YYYY"
                />
              </el-form-item>


              <el-alert type="info"  :closable="false">
                <p>
                  Rang de dates vàlid per la formació continuada per cada nivell
                </p>

              </el-alert>

              <p></p>

              <el-form-item  prop="rangDatesFCB" label="Nivell B">
                <el-date-picker
                    v-model="convocatoria.rangDatesFCB"
                    type="daterange"
                    start-placeholder="Data inici"
                    end-placeholder="Data fi"
                    format="DD/MM/YYYY"
                    date-format="DD/MM/YYYY"
                />
              </el-form-item>



              <el-form-item  prop="rangDatesFCC" label="Nivell C">
                <el-date-picker
                    v-model="convocatoria.rangDatesFCC"
                    type="daterange"
                    start-placeholder="Data inici"
                    end-placeholder="Data fi"
                    format="DD/MM/YYYY"
                    date-format="DD/MM/YYYY"
                />
              </el-form-item>

              <el-form-item  prop="rangDatesFCD" label="Nivell D">
                <el-date-picker
                    v-model="convocatoria.rangDatesFCD"
                    type="daterange"
                    start-placeholder="Data inici"
                    end-placeholder="Data fi"
                    format="DD/MM/YYYY"
                    date-format="DD/MM/YYYY"
                />
              </el-form-item>

              <el-button @click="saveConvocatoria">Guardar</el-button>
              <el-button @click="$router.push('/gestioCriteris/'+convocatoria.codiConvocatoria)">Gestió</el-button>

            </el-form>

          </div>

        </div>
      </div>
    </div>


  </div>
</template>

<script>


import {onMounted, ref} from "vue";
import {format} from "date-fns";

export default {
  name: "CarreraDocencia",
  components: {},
  methods: {format},

  component: {
  },

  setup(){

    const convocatorias = ref([]);
    const convocatoria = ref({});
    const error = ref(null);
    //const message = ref(null);

    onMounted(() => {
      getConvocatorias();
    });


    const handleActivar = (value, index) => {

      let nuevoEstado = !value;
      // convocatoria.value.activa = nuevoEstado;
      convocatorias.value[index].activa = nuevoEstado;

      //activarConvocatoria(convocatorias.value[index].codiConvocatoria,nuevoEstado);
    }


    const getConvocatorias = async () => {
      try {
        //const response = await http.get('/convocatorias/list');
        //convocatorias.value = response.data;

        convocatorias.value = [
          {
            "codiConvocatoria": 6,
            "descripcio": "CONVOCATORIA TEST",
            "dataIniciStr": "08/11/2023",
            "dataFiIntroduccioDadesStr": "08/12/2023",
            "dataInici": 1699398000000,
            "dataFiIntroduccioDades": 1701990000000,
            "activa": false,
            "rangDatesFcB": "10/11/2023 - 10/11/2023",
            "rangDatesFcC": "08/11/2023 - 08/11/2023",
            "rangDatesFcD": "08/11/2023 - 08/11/2023",
            "dataMinimaFcB": 1699570800000,
            "dataMaximaFcB": 1703890800000,
            "dataMinimaFcC": 1699398000000,
            "dataMaximaFcC": 1699398000000,
            "dataMinimaFcD": 1699398000000,
            "dataMaximaFcD": 1699398000000
          },
          {
            "codiConvocatoria": 14,
            "descripcio": "test",
            "dataIniciStr": "06/11/2023",
            "dataFiIntroduccioDadesStr": "10/11/2023",
            "dataInici": 1699225200000,
            "dataFiIntroduccioDades": 1699570800000,
            "activa": false,
            "rangDatesFcB": "08/11/2023 - 08/11/2023",
            "rangDatesFcC": "16/11/2023 - 16/11/2023",
            "rangDatesFcD": "13/11/2023 - 13/11/2023",
            "dataMinimaFcB": 1699398000000,
            "dataMaximaFcB": 1702335600000,
            "dataMinimaFcC": 1700089200000,
            "dataMaximaFcC": 1702422000000,
            "dataMinimaFcD": 1699830000000,
            "dataMaximaFcD": 1703026800000
          }
        ]

      } catch (e) {
        error.value = 'Request ERROR: ' + e.message;
      }
    }


    return{
      convocatorias,
      convocatoria,
      handleActivar,
      error,
    }
  }
}

</script>
<style>

.list-group .list-group-item:nth-child(odd) {
  background-color: #f5f5f5;
}

.list-group .list-group-item:nth-child(even) {
  background-color: #ffffff;
}


</style>