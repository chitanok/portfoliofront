<template>
    <div>
        <v-card tile class="mt-1">
            <v-card-text>
                <v-row><v-col cols="12"><span class="heading">Contact</span></v-col></v-row>
               
               <v-row>
                   <v-col cols="12" md="8">
                        <v-form ref="contactForm">
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-text-field
                                    v-model="email"
                                    outlined
                                    :rules="[
                                    (v)=> !!v || 'This fiedl is required.'
                                    ]"
                                    label="Enter Email"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field
                                    v-model="phone"
                                    outlined
                                    :rules="[
                                    (v)=> !!v || 'This fiedl is required.'
                                    ]"
                                    label="Enter Mobile"
                                    ></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12">
                                    <v-text-field
                                    outlined
                                    v-model="subject"
                                    :rules="[
                                    (v)=> !!v || 'This fiedl is required.'
                                    ]"
                                    label="Enter Subject"
                                    ></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12">
                                    <v-textarea
                                    label="Your message"
                                    v-model="message"
                                    outlined
                                    :rules="[
                                    (v)=> !!v || 'This fiedl is required.'
                                    ]"
                                    ></v-textarea>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12" align="right">
                                    <v-btn color="primary" tile @click="sendMessage">Send</v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                   </v-col>

                   <v-col cols="12" md="4">
                       <div><v-icon>mdi-email</v-icon> chitanok@yahoo.com </div>
                       <div><v-icon>mdi-phone</v-icon> +453245890045 </div>
                       <div><v-icon>mdi-skype</v-icon> chi.only </div>
                       <div><v-icon>mdi-whatsapp</v-icon> +2432rewrer </div>
                   </v-col>
               </v-row>
                

                <v-row>
                    <v-col cols="12">
                        <GmapMap
                        :center="center"
                        :zoom="7"
                        map-type-id="terrain"
                        style="width: 100%; height: 400px"
                        >
                        <GmapMarker
                            :position="center"
                            :clickable="true"
                            :draggable="true"
                            @click="center"
                        />
                        </GmapMap>
                    </v-col>
                </v-row>
                    
            
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            email: 'chitanok@yahoo.com',
            phone: '',
            subject: '',
            message: '',
            center:{
                lat: 23.7806207,
                lng: 90.3492857
            }
        }
    },
    methods:{
        sendMessage(){
            if(!this.$refs.contactForm.validate()) return

            let userInput = {
                email: this.email,
                phone: this.phone,
                subject: this.subject,
                message: this.message
            }

            axios.post('http://localhost:3000/sendmail', userInput)
                .then(response=>{
                    console.log(response.data)
                })
                .catch(error=>{
                    console.log(error.response.data)
                })
        }
    }
}
</script>