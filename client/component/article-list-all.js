Vue.component('hal-utama',{
    props: ['blog'],
    methods: {
        seeDetail(id){
            console.log(id);
            
            this.$emit('detail-all', id)
        }
    },
    template: `
    <div>
    <div class="card">
    <img class="card-img-top" :src="blog.image" alt="Card image">
    <div class="card-body">
      <h4 class="card-title">Title: {{blog.title}}</h4>
      <p class="card-text">Author: {{blog.author}}.</p>
      <a href="#" @click="seeDetail(blog._id)" class="btn btn-primary">See Detail</a>
    </div>
  </div>
  </div>
    
    `
})