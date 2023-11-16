<template>

  <div class="container-fluid">

    <h3 class="mb-4 text-muted"><i class="bi bi-house"></i> Inici </h3>



    <div class="row mt-3">


      <div class="col-lg-6 col-xlg-6 col-md-6">
        <div class="card">

            <div class="card-body text-secondary">
              <form>
                <div class="form-group">
                  <label for="input-01" class="form-label">Email address:</label>
                  <input type="email" class="form-control" id="input-01">
                </div>
                <div class="form-group">
                  <label for="input-02" class="form-label">Password:</label>
                  <input type="password" class="form-control" id="input-02">
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="rememberMe">
                    <label class="form-check-label" for="rememberMe">Remember me</label>
                  </div>
                </div>
                <div class="d-flex gap-2 flex-wrap">
                  <button type="button" class="btn btn-primary">Submit</button>
                  <button type="button" class="btn btn-danger">Cancel</button>
                </div>
              </form>
            </div>
          </div>
      </div>


      <div class="col-lg-6 col-xlg-6 col-md-6">
        <div class="card mb-5">
          <div class="card-header">
            <h5 class="text-muted">Convocatoria seleccionada</h5>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <h1 class="">342</h1>
              <i class="bi bi-info-circle-fill me-1" style="font-size: 2.3rem;"></i>
            </div>
          </div>

          <div class="card-footer">
            <a class="btn btn-light btn-sm" role="button"><i class="bi bi-wifi"></i> COVERAGE</a>
            <a class="btn btn-light btn-sm" role="button"><i class="bi bi-pie-chart-fill"></i> PUBLICATION</a>
            <a class="btn btn-light btn-sm" role="button"><i class="bi bi-bar-chart"></i> DEPOSITED</a>
          </div>

        </div>
      </div>



    </div>



    <div class="container col-12 alert alert-danger mt-4 rounded-0" v-if="error != null">{{error}}</div>

  </div>
</template>

<script>

  import http from '@/http-common';
  import {ref} from "vue";

  export default {
    name: "DoiSearch",
    components: {},

    setup(){
      const isLoading = ref(false)
      const contentPrefix = ref({})
      const doi = ref('10.5821/ace.v4i12.2483');
      const contentDOI = ref({});
      const error = ref(null);


      const clear = () => {
        contentDOI.value = ''
        error.value = null
      }

      const getDOI = async () => {
        isLoading.value = true
        clear()

        try {
          const response = await http.get('/works/'+doi.value.trim())
          if (response.status === 200) {

            let published = response.data.message.published['date-parts'][0]
            if(published.length === 1) published = published[0]
            else if(published.length === 2) published = published[0] + "-" + published[1]
            else if(published.length === 3) published = published[0] + "-" + published[1] + "-" + published[2]

            contentDOI.value = {
              'title': response.data.message.title[0],
              'author': response.data.message.author,
              'publisher': response.data.message.publisher,
              'published': published,
              'created': response.data.message.created['date-time'],
              'last-deposited': response.data.message.deposited['date-time'],
              'resource': response.data.message.resource.primary.URL,
              'type': response.data.message.type,
              'referenced': response.data.message['is-referenced-by-count']
            }

          } else {
            error.value = '404 Not Found';
          }
        } catch (e) {
          error.value = 'ERROR: DOI does not exists';
        }
        isLoading.value = false
      }

      return{
        contentPrefix,
        contentDOI,
        getDOI,
        doi,
        isLoading,
        error,
      }

    }


  }

</script>

<style scoped>

p {
  font-size: 1.2rem;
}


</style>
