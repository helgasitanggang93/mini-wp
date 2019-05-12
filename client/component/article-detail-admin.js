Vue.component('hal-detail-admin',{
    props: ['dataone'],
    methods : {
        backAdmin(){
            halutamaAdmin = true
            this.$emit('mati-nyala-admin', halutamaAdmin)
        }
    },
    template: `
    <div>
    <div class="card">
    <img class="card-img-top" :src="dataone.image" alt="Card image cap" style="width: 100%; height: 15vw;  object-fit: fill;">
    <div class="card-body">
    <h5 class="card-title text-center">{{dataone.title}}</h5>
    <p class="card-text text-center" v-html="dataone.content"></p>
    <p class="card-text text-center">{{dataone.createdAt}}</p>
    <a href="#" @click.prevent="backAdmin" class="btn btn-primary">Back Admin</a>
    </div>
    </div>
  </div>
    
    `
})