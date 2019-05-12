Vue.component('form-create-article',{
    data(){
        return {
            file:null,
            input:{
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
        addArticle(){
            this.$emit('add-article', this.input)
            this.input = {
                title:'',
                file:null,
                author:'',
                text:''
            }
               
        }
    },
    template: `
    <div>

    <h3> Create Article </h3>
    <form @submit.prevent="addArticle" method='post'>

        <div class="form-group">
            <label for="exampleInputEmail1">Title</label>
            <input required v-model="input.title" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Title...">
        </div>

        <div class="form-group">
            <label for="exampleInputPassword1">Author</label>
            <input required v-model="input.author" type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Author...">
        </div>

        <div class="mb-3">Choose Image: {{ file ? file.name : '' }}
            <b-form-file required v-model="input.file" :state="Boolean(file)" placeholder="Choose a file..." drop-placeholder="Drop file here..."></b-form-file>
        </div>

        <div class="form-group">
            <label for="exampleInputPassword1">Content</label>
            <wysiwyg v-model="input.text"></wysiwyg>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>

    `

})