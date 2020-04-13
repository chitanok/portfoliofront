<template>
  <v-app>
     <v-content>
        <v-container>
            <v-row>
              <v-col cols="12" md="6" class="title">
                CHITANO KUMAR SARKER

              </v-col>
              <v-col cols="12" md="6" align="right">
                <v-btn v-for="(social, index) in socialLinks"  :key="social.name+index" color="#fff" class="icon" tile target="_blank" :to="social.url"><v-icon>{{social.icon}}</v-icon></v-btn>
              </v-col>
            </v-row>

            <v-card tile>
              <v-card-text>
                <v-row><v-col cols="12"><span class="heading">About Me</span></v-col></v-row>

                <v-row>
                  <v-col cols="12" md="3">
                    <v-img v-bind:src="profileImage"></v-img>
                  </v-col>
                  <v-col cols="12" md="4">
                    <h3 class="headline text-justified">Don't want to be all rounder. Love to know new technologies only. :)</h3>
<p>Good Day. This is Chitano. I was born in 1988 at Gaibandha, Bangladesh. I have received the B.Sc. degree in Computer Science and Engineering from Bangladesh University, Dhaka, Bangladesh, in 2014. Now I am working as a Web Developer</p>

<p>Love to do programming, server administration, website migration, cloud computing, test and make function in serverless technology. I also love to deploy code and application in cloud environment.</p>
                  </v-col>
                  <v-col cols="12" md="5">
                    <div class="my-attr"><span>Name </span> Chitano Kumar Sarker</div>
                    <div class="my-attr"><span>Age </span> 30</div>
                    <div class="my-attr"><span>Address </span> Dhaka, Bangladesh</div>
                    <div class="my-attr"><span>Email </span> chitanokumar@gmail.com</div>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-toolbar class="elevation-0">
                  <v-toolbar-items>
                    <v-btn color="primary" text >About Me</v-btn>
                    <v-btn color="primary" text to="/">Resume</v-btn>
                    <v-btn color="primary" text to="/reviews">Reviews</v-btn>
                    <v-btn color="primary" text to="/contact">Contact</v-btn>
                </v-toolbar-items>
                </v-toolbar>
              </v-card-actions>
            </v-card>

            <router-view></router-view>
            
        </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      profileImage: require('./assets/profile-img.jpg'),
      socialLinks:[
        {
          id: 1,
          icon: 'mdi-facebook',
          url: '//www.facebook.com/chitanoku',
          name: 'Facebook'
        },
        {
          id: 2,
          icon: 'mdi-twitter',
          url: '//www.twitter.com/chitano',
          name: 'Twitter'
        },
        {
          id: 3,
          icon: 'mdi-linkedin',
          url: '//www.linkedin.com/chitanoku',
          name: 'Linkedin'
        },
        {
          id: 4,
          icon: 'mdi-git',
          url: '//www.github.com/chitanok',
          name: 'Github'
        }
      ]
    }
  }

}
</script>


<style>
.heading{
  background-color: #313131;
  color: #fff;
  padding: 10px 5px;
  font-size: 18px;
  margin-left: -15px;
}

.my-attr{
  padding: 10px;
  margin: 5px 0px;
}

.my-attr>span{
  background-color:#1976d2;
  color: #fff;
  padding: 10px;
  margin-right: 15px;
}
</style>
