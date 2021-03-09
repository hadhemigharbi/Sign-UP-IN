<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="mx-auto elevation-14">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 mb-6 deep-purple--text accent-1">Sign In OurApp</h1>                      
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="blue" outlined>
                            <v-icon>fab fa-facebook</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="red" outlined>
                            <v-icon>fab fa-google-plus-g</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="blue darken-4" outlined>
                            <v-icon>fab fa-linkedin-in</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4 deep-purple--text accent-1">Ensure your email for register</h4>
                        <v-form>
                          <v-text-field 
                          label="Email" 
                          name="Email"
                          prepend-icon="email"
                          type="text"
                          color="teal accent-3"/>
                          <v-text-field 
                          id="password"
                          label="Password" 
                          name="password"
                          prepend-icon="lock"
                          type="password"
                          color="teal accent-3"/>
                        </v-form>     
                        <h3 class="text-center mt-3 deep-purple--text accent-1">Forget Your Password?</h3>                     
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn rounded color="deep-purple mb-4" dark>SIGN In</v-btn>
                      </div>
                    </v-col>
                     <v-col cols="12" md="4" class="teal accent-3 body-bg">
                       <v-card-text class="white--text mt-12">
                         <h1 class="text-center display-1">Hello, Friends !</h1>
                         <h5 class="text-center">Enter Your Personnel details and Start with US</h5>
                       </v-card-text>
                       <div class="text-center">
                         <v-btn rounded outlined="" dark @click="step++">SIGN UP</v-btn>
                       </div>
                     </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="teal accent-3 body-bg">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Welcome Back</h1>
                        <h5 class="text-center">To Keep Connected with US Login with Your Personnel infos</h5>                        
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--">SIGN IN</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 deep-purple--text accent-1 mb-6">Create Account</h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="blue" outlined>
                            <v-icon>fab fa-facebook</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="red" outlined>
                            <v-icon>fab fa-google-plus-g</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="blue darken-4" outlined>
                            <v-icon>fab fa-linkedin-in</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4 deep-purple--text accent-1">Ensure Your Email For Registration</h4>
                        <v-form>
                          <v-text-field 
                          label="Userame"
                          name="username"
                          prepend-icon="person"
                          type="text"
                          color="teal accent-3"
                          />
                          <v-text-field 
                          label="Email" 
                          name="Email"
                          prepend-icon="email"
                          type="text"
                          color="teal accent-3"/>
                          <v-text-field 
                          id="password"
                          label="Password" 
                          name="password"
                          prepend-icon="lock"
                          type="password"
                          color="teal accent-3"/>
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn rounded color="deep-purple accent-1 mb-4" dark>SIGN UP</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    step: 1
  }),
  props: {
    source: String
  }
};
</script>

<style>
.body-bg {
  background-color: #ac4533;
  background-image: linear-gradient(315deg, #8d422f 0%, #624ddb 74%);
}
#a {
  color: rgb(32, 32, 209);
}
</style>