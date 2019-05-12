Vue.component('form-register',{
    data(){
        return {
            register : {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        formRegister(){
            this.$emit('signup-page', this.register)
            this.register = {
                name: '',
                email: '',
                password: ''

            }
        },
        back(){
            haldetail = false
            halutama = true
            this.$emit('back', haldetail, halutama)
        }
    },
    template: `
    <div>

    <form method="post" @submit.prevent="formRegister">

        <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input v-model="register.name" type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter Name">
        </div>

        <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input v-model="register.email" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input v-model="register.password" type="password" class="form-control" placeholder="Password">
        </div>

         <button type="submit" class="btn btn-primary">Submit</button>
         <a @click.prevent="back()" href="">back</a>
    </form>

  </div>
    `

})