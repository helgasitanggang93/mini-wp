var app = new Vue({
    el: '#page',
    data: {
        blogsByUser: [],
        blogs : [],
        gambar: '',
        dataone: {
            title: '',
            content:'',
            author: '',
            image:'',
            createdAt:''

        },
        search: '',
        edit : {
            id: '',
            title: '',
            content:'',
            author: '',
            image:'',
            CreatedAt: new Date()
        },
        isDataUtamaNull: false,
        isGoogleSignIn: false,
        isLogin: false,
        isRegister : false,
        isDetail: true,
        isUtama: true, 
        isAdmin: false,
        isLogout: false,
        isAddArticle: false,
        isDetailAdmin: false,
        isUtamaAdmin: false, 
        alertNull: false,
        isUpdateArticle:false,
        image: "https://vignette.wikia.nocookie.net/naruto/images/0/09/Naruto_newshot.png/revision/latest?cb=20170621101134",
        counter: 3
    },
    created(){
        this.tampil()
        this.getData()
        this.getAllbyUser()
    },
    methods : {
        tampil(){
            if(localStorage.token){
                this.isLogin = false
                this.isLogout = true
                this.isRegister = false
                this.isUtama = false
                this.isAdmin = true

            }else{
                this.isUtama = true
                this.getData()
            }

        },
        
        getData(){
            axios({
                url : "http://localhost:3000",
                method: "GET"
            })
            .then(({data}) => {
                
                this.blogs = []
                data.sort(function (a,b) {
                    return b.id - a.id
                })
                for (const aaa of data) {
                    this.blogs.push(aaa)
                }
                this.isDetail = false
                
            })
            .catch(err => {
                this.isDataUtamaNull = true
                console.log(err)
                
            })
        },
        getAllbyUser(){
            axios({
                url:'http://localhost:3000/miniwp',
                method: 'GET',
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            .then(({data})=>{
                this.blogsByUser = []
                this.alertNull = false
                for (const blog of data) {
                    this.blogsByUser.push(blog)
                }
                
                
            })
            .catch(err =>{
                this.alertNull = true
            })
        },
        hapus(id){
            axios({
                url : `http://localhost:3000/miniwp/${id}`,
                method: "DELETE",
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            .then(data => {
                this.blogsByUser = []
                this.getAllbyUser()
                this.blogsByUser = this.blogsByUser.filter(el => el._id !== id)
                this.halutamaAdmin = true 
                Swal.fire({
                    type: 'success',
                    title: `Delete Success`,
                    footer: '<a href>Why do I have this issue?</a>'
                })  
            })
            .catch(err => {
                console.log(err)
                
            })
            
        },
        calregister(){
            this.isDetail = false
            this.isUtama = false
            this.isRegister = true
            this.isLogin = false
        },
        calllogin(){
            this.isDetail = false
            this.isUtama = false
            this.isLogin = true
            this.isRegister = false
        },
        backHalAdmin(halutamaAdmin){
            this.isDetailAdmin = false
            this.isUtamaAdmin = halutamaAdmin
        },
        backHalUtama(haldetail, halutama){
            this.isDetail = haldetail
            this.isUtama = halutama
            this.isLogin = false
            this.isRegister = false
            this.isUtamaAdmin= false
            this.getData()
        },
        callAddArticle(){
            this.isAddArticle = true
            this.isUtamaAdmin = false
           
        },
        callListArticle(){
            this.isAddArticle = false
            this.isUpdateArticle = false
            this.isUtamaAdmin = true

        },
        getOneArticle(id){        
            axios({
                url:`http://localhost:3000/${id}`,
                method: 'GET'
            })
            .then(({data})=>{
                this.dataone.title = data.title
                this.dataone.content = data.content
                this.dataone.author = data.author
                this.dataone.image = data.image
                this.dataone.id = data._id
                this.dataone.createdAt = data.createdAt
                this.isDetail = true
                this.isUtama = false
            })
            .catch(err=>{
                console.log(err);
                
            })

        },
        getOneArticleAdmin(id){        
            axios({
                url:`http://localhost:3000/${id}`,
                method: 'GET'
            })
            .then(({data})=>{
                this.dataone.title = data.title
                this.dataone.content = data.content
                this.dataone.author = data.author
                this.dataone.image = data.image
                this.dataone.id = data._id
                this.dataone.createdAt = data.createdAt
                this.isDetailAdmin = true
                this.isUtamaAdmin = false
            })
            .catch(err=>{
                console.log(err);
                
            })

        },
        getOne(id){
            axios({
                url:`http://localhost:3000/${id}`,
                method: 'GET'
            })
            .then(({data}) =>{
                this.edit.title = data.title
                this.edit.content = data.content
                this.edit.author = data.author
                this.edit.image = data.image
                this.edit.id = data._id
                this.isUtamaAdmin = false
                this.isUpdateArticle = true               
            })
            .catch(err =>{
                console.log(err)
            })

        },
        update(id){
            let formData = new FormData()
            formData.append('image', this.edit.file)
            axios({
                url: "http://localhost:3000/upload",
                method: "POST",
                data: formData
            })
            .then((link)=>{
                this.gambar = link.data.link
                axios({
                    url:`http://localhost:3000/miniwp/${id}`,
                    method:"PUT",
                    data: {
                        title : this.edit.title,
                        content: this.edit.content,
                        image : this.gambar,
                        author: this.edit.author,
                        createdAt: new Date()
                    },
                    headers: {
                        token: localStorage.getItem('token')
                    }
                })
                .then(({data})=>{
                    this.edit.title = ''
                    this.edit.content = ''
                    this.edit.author = ''
                    this.edit.image = ''
                    this.edit.id = ''
                    this.edit.file = ''
                    this.blogsByUser = []
                    this.getAllbyUser()
                    this.gambar=''
                    Swal.fire({
                        type: 'success',
                        title: `Update Success`,
                        footer: '<a href>Why do I have this issue?</a>'
                    })  


                })
                .catch(err =>{
                    console.log(err)
                })
            })
            .catch(err=>{
                console.log(err)
            })
           

        },
        build(state){
            let formData = new FormData()
            formData.append('image', state.file)
           axios({
               url: "http://localhost:3000/upload",
               method: "POST",
               data: formData
           })
           .then((link) =>{
               this.gambar = link.data.link
               axios({
                   url:"http://localhost:3000/miniwp",
                   method:"POST",
                   data:{
                    title: state.title,
                    content : state.text,
                    image: this.gambar,
                    author: state.author,
                   },
                   headers: {
                       token: localStorage.getItem('token')
                   }
               })
               .then(({data})=>{
                   this.blogsByUser = []
                   this.getAllbyUser()
                   this.gambar=''
                   Swal.fire({
                    type: 'success',
                    title: `Create Article Success`,
                    footer: '<a href>Why do I have this issue?</a>'
                })

               })
               .catch(err =>{
                Swal.fire({
                    type: 'error',
                    title: `Create Error`,
                    text: 'something wrong',
                    footer: '<a href>Why do I have this issue?</a>'
                })
                   
               })
           })
           .catch(err =>{
            Swal.fire({
                type: 'error',
                title: `Create Error`,
                text: 'something wrong',
                footer: '<a href>Why do I have this issue?</a>'
            })
           })
        },
        login(state){
            axios({
                url:'http://localhost:3000/login',
                method:'POST',
                data: {
                    email: state.email,
                    password: state.password
                }
            })
            .then(response=>{
                let {data} = response
                localStorage.setItem(`token`, data.token)
                this.isAdmin = true
                this.isUtama = false
                this.isLogin = false
                this.isLogout = true
                Swal.fire({
                    type: 'success',
                    title: `Welcome ${data.details.name}`,
                    text: 'login successfull',
                    footer: '<a href>Why do I have this issue?</a>'
                  })
                  this.getAllbyUser()
            })
            .catch(err =>{
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'email/password incorect',
                    footer: '<a href>Why do I have this issue?</a>'
                  })
            })


        },
        logOutGoogle(){
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function() {
                Swal.fire({
                    type: 'success',
                    title: `Bye Bye`,
                    text: 'logout successfull',
                    footer: '<a href>Why do I have this issue?</a>'
                })
            })

        },
        logout(){
           if(this.isGoogleSignIn){
               this.logOutGoogle()

           }
            localStorage.clear()
            this.isAdmin = false
            this.tampil()
            this.getData()

           
        },
        register(state){
            axios({
                url: 'http://localhost:3000/signup',
                method: 'POST',
                data: {
                    name: state.name,
                    email: state.email,
                    password: state.password
                }
            })
            .then(({data})=>{
                Swal.fire({
                    type: 'success',
                    title: `Welcome To The Club`,
                    text: 'hit button login to continue your journey',
                    footer: '<a href>Why do I have this issue?</a>'
                })
                this.isUtama = true
                this.isRegister = false
            })
            .catch(err =>{
                console.log(err)
            })

        }

        
    },
    watch: {
        search(newSearch, oldSearch){
            let dataBaru = this.blogs.filter(el => {
                let cek = el.title.includes(this.search)
                if(cek) return el
            })
            this.blogs = dataBaru

            if(newSearch.length < oldSearch.length){
                this.getData()

            }  
        }
    }
  })

  function onSignIn(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    axios({
        url: 'http://localhost:3000/gSign',
        method: 'POST',
        headers : {
            token : id_token,
        }   
    })
    .then(({data})=>{
        app.isGoogleSignIn = true
        localStorage.setItem(`token`, data.token)
        app.isAdmin = true
        app.isUtama = false
        app.isLogin = false
        app.isLogout = true
        Swal.fire({
            type: 'success',
            title: `Welcome`,
            text: 'login successfull',
            footer: '<a href>Why do I have this issue?</a>'
          })
    })
    .catch(err=>{
        console.log(err);
        
    }) 
  }




