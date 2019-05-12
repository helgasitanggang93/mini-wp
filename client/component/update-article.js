Vue.component('unique-ubah-article',{
    props: ['edit'],
    data(){
        return {
            file:null,
            ubah: {
                title:'',
                file:null,
                author:'',
                text:''
            }
                
        }
    },
    components: {
        wysiwyg: vueWysiwyg.default.component,
    },
   
    methods: {
        ubahArticle(id){
            this.$emit('ubah', id)
            this.ubah = {
                title:'',
                file:null,
                author:'',
                text:''
            }
               
        }
    },
    template: `
    <div>
    
    <h3> Update Article </h3>
    <form @submit.prevent="ubahArticle(edit.id)" method='post'>

        <div class="form-group">
            <label for="exampleInputEmail1">Title</label>
            <input required v-model="edit.title" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Title...">
        </div>

        <div class="form-group">
            <label for="exampleInputPassword1">Author</label>
            <input required v-model="edit.author" type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Author...">
        </div>

        <div class="mb-3">Choose Image: {{ file ? file.name : '' }}
            <b-form-file required v-model="edit.file" :state="Boolean(file)" placeholder="Choose a file..." drop-placeholder="Drop file here..."></b-form-file>
        </div>

        <div class="form-group">
            <label for="exampleInputPassword1">Content</label>
            <wysiwyg v-model="edit.content"></wysiwyg>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>

    `

})