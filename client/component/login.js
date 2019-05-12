Vue.component('form-login',{
    data(){
        return {
            login : {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        formLogin(){
            this.$emit('signin-page', this.login)
            this.login = {
                email: '',
                password: ''

            }
        },
        back(){
            haldetail = false
            halutama = true
            this.$emit('back', haldetail, halutama)
        },
        onSignIn(){
            this.$emit('g-sign')
        }
    },
    template: `
    <div >
   
    <h2 class="text-center">LOGIN PAGE</h2>
    <form method="post" @submit.prevent="formLogin">

        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input v-model="login.email" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input v-model="login.password" type="password" class="form-control" placeholder="Password">
        </div>
        <div class="g-signin2" data-onsuccess="onSignIn"></div>    
         <button type="submit" class="btn btn-primary">Submit</button>
         <a @click.prevent="back()" href="">back</a>
    </form>
  </div>

    `

})