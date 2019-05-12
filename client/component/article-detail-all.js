Vue.component('hal-detail',{
    props: ['dataone'],
    methods : {
        back(){
            haldetail = false
            halutama = true
            this.$emit('mati-nyala', haldetail, halutama)
        }
    },
    template: `
    <div>
    <div class="col text-center">
    <h1>{{dataone.title}}</h1>
    <img :src="dataone.image" alt="naruto" style="width:500px; height:300px;">
   <p>author: {{dataone.author}}</p>
    <p v-html="dataone.content"></p>
    <p>{{dataone.createdAt}}</p>
    <a @click.prevent="back()" href="">back</a>
    </div>
  </div>
    
    `
})