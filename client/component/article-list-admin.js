Vue.component('hal-utama-admin',{
    props: ['blog'],
    methods: {
        seeDetail(id){
            this.$emit('detail-all-admin', id)
        },
        hapus(id){
            this.$emit('delete-article', id)
        },
        ubah(id){
            console.log(id)
            this.$emit('getone-article', id)

        }
    },
    template: `
    <div>
    <h3> List Article </h3>
    <div class="card w-50">
        <img class="card-img-top" :src="blog.image" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">{{blog.title}}</h5>
            <p class="card-text">Author: {{blog.author}}</p>
            <a href="#" @click="seeDetail(blog._id)" class="btn btn-primary">Preview</a>
            <a href="#" @click="ubah(blog._id)" class="btn btn-info">Update</a>
            <a href="#" @click="hapus(blog._id)" class="btn btn-danger">Delete</a>
            </div>
        </div>
  </div>
    
    `
})