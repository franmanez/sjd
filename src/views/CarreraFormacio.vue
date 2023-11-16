<template>

  <div class="container-fluid">

    <h3 class="mb-4 text-muted"><i class="bi bi-envelope-paper"></i> Omplir carrera professional > <span class="text-sjd-naranja">Formació Acadèmica</span></h3>

    <MenuFormacio></MenuFormacio>



    <div class="row mt-3">
      <div class="col-lg-12 col-xlg-12 col-md-12">
        <div class="card mb-1 card-body-top-lila" >
          <div class="card-body" >

            <el-form :model="itemFormacion" enctype="multipart/form-data" class="mb-0">
              <el-row >
                <!---<el-col :span="1">
                  <el-form-item label="" prop="checked">
                      <el-checkbox class="mx-1" v-model="checked" size="large" />
                  </el-form-item>
                </el-col>-->

                <el-col :span="12" >
                  <el-form-item class="mx-1">
                    <el-select v-model="itemFormacion.titol" placeholder="Selecciona" value-key="diccionari.clau" style="width: -webkit-fill-available"
                               @change="changeItem()">
                      <el-option v-for="item in selectTitolValues"
                                 :key="item.diccionari.clau"
                                 :label="item.diccionari.valor"
                                 :value="item"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="2" >
                  <el-form-item class="mx-1">
                    <el-text v-if="itemFormacion.titol && itemFormacion.titol.creditsHora" tag="b" class="mx-1" style="vertical-align: -webkit-baseline-middle;"> Crèdits/hora: {{itemFormacion.titol.creditsHora}}</el-text>
                    <el-text v-if="itemFormacion.titol && itemFormacion.titol.creditsAny" tag="b" class="mx-1" style="vertical-align: -webkit-baseline-middle;"> Crèdits/any: {{itemFormacion.titol.creditsAny}}</el-text>
                    <el-text v-if="itemFormacion.titol && itemFormacion.titol.creditsMes" tag="b" class="mx-1" style="vertical-align: -webkit-baseline-middle;"> Crèdits/mes: {{itemFormacion.titol.creditsMes}}</el-text>

                  </el-form-item>
                </el-col>
                <el-col :span="2" >
                  <el-form-item class="mx-1">
                    <el-input class="mx-1" placeholder="hores" v-model="itemFormacion.hores" v-if="itemFormacion.titol && itemFormacion.titol.creditsHora"  @change="calculCredits(itemFormacion.titol.creditsHora,this)"></el-input>
                    <el-input class="mx-1" placeholder="mesos" v-model="itemFormacion.mesos" v-if="itemFormacion.titol && itemFormacion.titol.creditsMes" style="width:100px"  @change="calculCredits(itemFormacion.titol.creditsMes,itemFormacion.mesos)"></el-input>
                    <el-input class="mx-1" placeholder="anys" v-model="itemFormacion.anys"  v-if="itemFormacion.titol && itemFormacion.titol.creditsAny"  @change="calculCredits(itemFormacion.titol.creditsAny,value)"></el-input>

                  </el-form-item>
                </el-col>
                <el-col :span="2">

                  <el-text v-if="totalCredits" tag="b" class="mx-1 text-dark badge bg-info-sjd" >Total Crèdits:   {{totalCredits}}</el-text>
                  <!--<el-text v-if="itemFormacion.titol && itemFormacion.titol.credits" tag="b" class="mx-1 text-dark badge bg-info-sjd" @change="calcuCredits(1,itemFormacion.titol.credits)"> Total Crèdits: {{itemFormacion.titol.credits}}</el-text>-->
                </el-col>
                <!--
                <el-col :span="2">
                  <el-button type="primary" v-if="totalCredits" @click="saveItemToDatabase" class="mx-1">Afegir</el-button>
                </el-col>
                -->
              </el-row>

              <el-row >
                <el-col :span="6">
                  <el-form-item prop="centre" class="mx-1">
                    <el-input placeholder="centre" v-model="itemFormacion.centre"></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="2" >
                  <el-form-item  prop="dataIni" class="mx-1">
                    <el-date-picker
                        v-model="itemFormacion.dataIni"
                        type="date"
                        placeholder="Data inici"
                        format="DD/MM/YYYY"
                        date-format="DD/MM/YYYY"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="2" class="mx-1">
                  <el-form-item  prop="dataFi">
                    <el-date-picker
                        v-model="itemFormacion.dataFi"
                        type="date"
                        placeholder="Data fi"
                        format="DD/MM/YYYY"
                        date-format="DD/MM/YYYY"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="3">
                  <el-form-item  prop="annex">
                    <el-upload
                        v-model="annex"
                        class="upload-demo"
                        :limit="1"
                        :on-exceed="handleExceed"
                        :auto-upload="false"
                        @change="handleChange(value)"
                        accept = ".pdf"

                    >

                      <template #trigger>
                        <el-button type="primary">
                          Afegir document <i class="bi bi-cloud-arrow-up mx-2" style="font-size: 1.3rem;"></i>
                        </el-button>
                      </template>
                    </el-upload>
                  </el-form-item>
                </el-col>
                <el-col :span="3"></el-col>
                <el-col :span="2" style="align-items:right">
                  <el-button type="primary" v-if="totalCredits" @click="saveItemToDatabase" class="mx-1" >Afegir</el-button>
                </el-col>

              </el-row>
            </el-form>
          </div>
        </div>
      </div>
    </div>


    <div class="row mt-3">
      <div class="col-lg-12 col-xlg-12 col-md-12">
        <div class="card mb-5 card-body-top-naranja">

          <div class="card-body">



            <h4 class="card-title">
              <span class="text-sjd-lila">Llistat de formacions</span>
            </h4>
            <hr>
            <table class="table table-hover" v-if="itemsFormacioAcademica && itemsFormacioAcademica.length > 0">
              <thead>
                <tr>
                  <th class="text-secondary">Titol</th>
                  <th class="text-secondary" >Centre</th>
                  <th class="text-secondary">X</th>
                  <th class="text-secondary d-none d-lg-table-cell" >Data Inici</th>
                  <th class="text-secondary d-none d-sm-table-cell" >Data Fi</th>
                  <th class="text-secondary" >Crèdits</th>
                  <th class="text-secondary" >Càlcul</th>
                  <th class="text-secondary"></th>
                  <th class="text-secondary" >Opcions</th>
                  <th class="text-secondary text-end">Crèdits Finals</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in itemsFormacioAcademica" :key="index" class="pt-5">
                  <td class="text-muted">{{ item.itemCriteri.diccionari.valor }}</td>
                  <td>{{ item.centre }}</td>
                  <td>{{ item.horesMesosAnysTxt }}</td>
                  <td><span class="mt-1 badge bg-sjd-naranja text-light">{{ format(item.dataIni, 'dd/MM/yyyy') }}</span></td>
                  <td><span class="mt-1 badge bg-sjd-lila text-light">{{ format(item.dataFi, 'dd/MM/yyyy') }}</span></td>
                  <td>{{ item.itemCriteri.creditsTxt }}</td>
                  <td>{{ item.puntsCalculats }}</td>
                  <td>{{ item.comentariPunts }}</td>
                  <td>
                    <el-button size="small" @click="handleEditFormacio(index, item)" :icon="Edit">
                      <i class="bi bi-pencil-square" ></i>
                    </el-button>
                    <el-button size="small"  type="danger" @click="handleDeleteFormacio(index, item)" :icon="Edit">
                      <i class="bi bi-trash" ></i>
                    </el-button>



                  </td>
                  <td class="text-end"><span class="h5 text-sjd-naranja">{{ item.puntsFinals.toString() }}</span></td>
                </tr>


                <tr v-for="(item, index) in content" :key="item.id" >
                  <td><span class="h4 text-secondary">{{ index + 1 }}</span></td>
                  <td><a :href="item.DOI" target="_blank">{{ item.DOI }} <i class="bi bi-box-arrow-up-right"></i></a></td>
                  <td class="text-secondary d-none d-lg-table-cell">{{ item.title[0] }}</td>
                  <td class="text-center d-none d-sm-table-cell"><span class="mt-1 text-dark badge bg-warning">{{ item.type }}</span></td>
                  <td class="text-end"><span class="h2 text-warning">{{ item['is-referenced-by-count'].toLocaleString() }}</span></td>

                </tr>
              </tbody>
            </table>
            <span class="text-danger" v-else>No hay elementos para mostrar.</span>

          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>



import {ref, onMounted } from "vue";
import {format} from "date-fns";
import MenuFormacio from "@/components/MenuFormacio.vue";

export default {
  name: "FormulariCarrera",
  components: {MenuFormacio},
  methods: {format},

  component: {
  },

  setup(){

    const itemsFormacioAcademica = ref([]);

    const itemFormacion = ref({});

    const respuestaItems = ref({});
    const error = ref(null);
    const message = ref(null);
    const selectedItems = ref([]);
    const selectTitolValues = ref([]);

    const activeTab = ref();

    onMounted(() => {
      activeTab.value ='formacioAC';
      getFormacioAcademica();
      getDiccionariTitol();
    });


    const  changeTab = (tabName) => {
      activeTab.value = tabName; // Cambia la pestaña activa al hacer clic
    }


    const getFormacioAcademica = async () => {

      try {
        //const response  = await http.get('/formacioAcademica?idUsuari='+1+"&idConvocatoria=6&codiArea=FAV");

        itemsFormacioAcademica.value = [{"itemCriteri":{"diccionari":{"codi":null,"clau":"FELLOW","valor":"Fellow (Subespecialitats o arees de capacitació específica)"},"area":null,"convocatoriaId":null,"puntsMinims":0.5,"puntsMaxims":null,"credits":null,"creditsHora":null,"creditsMes":0.25,"creditsTxt":"0.25 * mes"},"centre":null,"dataIni":1698793200000,"dataFi":1703199600000,"puntsCalculats":1.25,"puntsFinals":1.25,"comentariPunts":null,"hores":null,"mesos":5,"anys":null,"horesMesosAnysTxt":"5 mesos","annex":null},{"itemCriteri":{"diccionari":{"codi":null,"clau":"FELLOW","valor":"Fellow (Subespecialitats o arees de capacitació específica)"},"area":null,"convocatoriaId":null,"puntsMinims":0.5,"puntsMaxims":null,"credits":null,"creditsHora":null,"creditsMes":0.25,"creditsTxt":"0.25 * mes"},"centre":"asdfasd","dataIni":1701644400000,"dataFi":1703113200000,"puntsCalculats":0.25,"puntsFinals":0.0,"comentariPunts":"Els crèdits no arriben al mínim: 0.5","hores":null,"mesos":1,"anys":null,"horesMesosAnysTxt":"1 mes","annex":null},{"itemCriteri":{"diccionari":{"codi":null,"clau":"POSTGRAU","valor":"Titulació de Postgrau relacionat amb làmbit de treball"},"area":null,"convocatoriaId":null,"puntsMinims":3.0,"puntsMaxims":45.0,"credits":5.0,"creditsHora":null,"creditsMes":null,"creditsTxt":"5.0"},"centre":null,"dataIni":1549407600000,"dataFi":1616713200000,"puntsCalculats":5.0,"puntsFinals":5.0,"comentariPunts":null,"hores":null,"mesos":null,"anys":null,"horesMesosAnysTxt":null,"annex":null}]


      } catch (e) {
        error.value = 'Request ERROR: ' + e.message;
      }
    };

    const getDiccionariTitol = async () => {
      /*try {
        const response  = await http.get('/convocatorias/Area/items?idConvocatoria=6&codiArea=FAV');

        selectTitolValues.value =  response.data;

      } catch (e) {
        error.value = 'Request ERROR: ' + e.message;
      }*/
    };


    return{
      getDiccionariTitol,
      getFormacioAcademica,
      error,
      message,
      selectTitolValues,
      itemFormacion,
      respuestaItems,
      selectedItems,
      activeTab,
      changeTab,
      itemsFormacioAcademica
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