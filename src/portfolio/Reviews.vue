<template>
    <div>
        <v-card tile class="mt-1">
          <v-card-text>
              <v-row>
                <v-col cols="12"><span class="heading elevation-2">Reviews</span></v-col>
              </v-row>

              <v-row>
                <v-col cols="12" md="8" class="">
                  <div class="sub-heading">
                    <span>Reviews</span>
                    <span class="sub-heading-icon"><v-icon color="white">mdi-electron-framework</v-icon></span>
                  </div>
                  <div class="resume-item" v-for="(item, index) in reviews" :key="index+30">
                    <div class="resume-item-heading">
                      <h3 class="subtitle-2">{{ item.projectTitle}}</h3>
                      <span class="job-period">{{item.completionDate}}</span>
                    </div>
                    <div class="review-rating pl-0">
                        <v-rating v-model="item.rating" dense class="pl-0"></v-rating>
                   </div>
                    <div class="resume-item-company">{{ item.client }}</div>
                    <div class="resume-item-description bb">{{item.text}}</div>
                  </div>
                </v-col>
                <v-col cols="12" md="4">
                   <v-img :src="profileImage" class="elevation-2"></v-img>
                   <div class="marketplace-profile-title subtitle-2">Full stack web developer - PHP, Laravel, Node, Express, Vue</div>
                   <v-btn color="primary" width="100%" tile to="//upwork.com/fl/chitano" target="_blank">Hire Me</v-btn>
                

                    <v-col cols="12">
                        <v-icon>mdi-skype</v-icon> chi.only
                    </v-col>
                    <v-col cols="12">
                        <v-icon>mdi-email</v-icon> chitanokumar@gmail.com
                    </v-col>
                    <v-col cols="12">
                        <v-icon>mdi-twitter</v-icon> chi.only
                    </v-col>
                    <v-col cols="12">
                        <v-icon>mdi-phone</v-icon> +880 1710 048212
                    </v-col>
                    <v-col cols="12">
                        <v-icon>mdi-whatsapp</v-icon> 0 1710 048212
                    </v-col>
                </v-col>
              </v-row>

             
          </v-card-text>
      </v-card>  
    </div>
</template>
<script>
export default {
    data(){
        return{
            profileImage: require('../assets/profile-img.jpg'),
            reviews:[
                {
                    id: 1,
                    text: 'Chitano delivered great work on this Larvel development project and I enjoyed working with him as always. His communication and availability were excellent especially given our differences in time. He met all deadlines, and his skills are very strong. I prefer working with Chitano and already have additional jobs for him in the future',
                    marketplace: 'https://www.upwork.com',
                    profileLink: 'https://www.upwork.com/fl/chitano',
                    client: 'Upwork Client',
                    projectTitle: 'Laravel 5.2 Support',
                    completionDate: 'Jan 2020',
                    rating: 5
                },
                {
                    id: 2,
                    text: 'Chitano was professional in his approach to my problem script, having fixed it up quickly with excellent communication and high quality of work. I would definately hire Chitano again',
                    marketplace: 'https://www.freelancer.com',
                    profileLink: 'https://www.freelancer.com/u/Chitanok',
                    client: 'Freelancer Client',
                    projectTitle: 'fix a registration script',
                    completionDate: 'Dec 2019',
                    rating: 5
                },
                {
                    id: 3,
                    text: 'I\'ve worked with dozens of contractors and Chitano is the best I\'ve worked with so far. He understands the technology and takes real initiative to solve problems. He exercises good judgement and always finishes on budget. Can\'t rate him high enough.',
                    marketplace: 'https://www.upwork.com',
                    profileLink: 'https://www.upwork.com/fl/chitano',
                    client: 'Upwork Client',
                    projectTitle: 'Password ResetThrows Error (Laravel App)',
                    completionDate: 'Nov 2019',
                    rating: 5
                },
                {
                    id: 4,
                    text: 'Excellent as always. Chitano is a strong communicator. Finishes everything on time and on budget. Just as important his technical skills are superb. We will continue to use him on our next project. I highly recommend him to anyway doing Laravel and/or AWS development.',
                    marketplace: 'https://www.upwork.com',
                    profileLink: 'https://www.upwork.com/fl/chitano',
                    client: 'Upwork Client',
                    projectTitle: 'Fix AJAX DataTable sorting',
                    completionDate: 'Nov 2019',
                    rating: 4.9
                },
                {
                    id: 5,
                    text: 'Working with Chitano was very easy, he listens to what you want and gets the job done quickly, what more could you want! I would definitely hire him again. Thanks!',
                    marketplace: 'https://www.freelancer.com',
                    profileLink: 'https://www.freelancer.com/u/Chitanok',
                    client: 'Freelancer Client',
                    projectTitle: 'PHP MVC Multi Language Fix',
                    completionDate: 'Oct 2019',
                    rating: 5
                },
                {
                    id: 6,
                    text: 'Excellent job and very knowledgeable moving 2 websites to a new host. Much better than the person hired before him that did nothing but make a mess of things. Chitano found and corrected the problems quickly, professionally, and was very nice to work with. Highly recommend.',
                    marketplace: 'https://www.freelancer.com',
                    profileLink: 'https://www.freelancer.com/u/Chitanok',
                    client: 'Freelancer Client',
                    projectTitle: 'Move Website to New Host (BlueHost)',
                    completionDate: 'Oct 2019',
                    rating: 5
                },
                {
                    id: 7,
                    text: 'Chitano contacted me within a couple minutes of my post. And within 15 minutes he had solved my problem',
                    marketplace: 'https://www.freelancer.com',
                    profileLink: 'https://www.freelancer.com/u/Chitanok',
                    client: 'Freelancer Client',
                    projectTitle: 'Deploy AWS SSL Certificate via Load Balancer for my Website',
                    completionDate: 'Sep 2019',
                    rating: 5
                },
                {
                    id: 8,
                    text: 'Chitano worked hard on this difficult project. He managed to complete most of it, but there were some technical problems which were out of his control. He is a good contractor and I\'ll use him again',
                    marketplace: 'https://www.freelancer.com',
                    profileLink: 'https://www.freelancer.com/u/Chitanok',
                    client: 'Freelancer Client',
                    projectTitle: 'Migrate legacy application from VPS to aws ec2 bucket',
                    completionDate: 'Sep 2019',
                    rating: 4.5
                },
                {
                    id: 9,
                    text: 'Nice job, Chitano fixed a issue in minutes that our current developer couldn\'t. Will hire again.',
                    marketplace: 'https://www.freelancer.com',
                    profileLink: 'https://www.freelancer.com/u/Chitanok',
                    client: 'Freelancer Client',
                    projectTitle: 'Wordpress with woocommerce with email notification to aws ses',
                    completionDate: 'Sep 2019',
                    rating: 5
                },
                {
                    id: 10,
                    text: 'a smart programmer and an expert in openstack, I would hire him again. He found a way to manage the difficulties in my pc.',
                    marketplace: 'https://www.freelancer.com',
                    profileLink: 'https://www.freelancer.com/u/Chitanok',
                    client: 'Freelancer Client',
                    projectTitle: 'devstack installation (Cloud)',
                    completionDate: 'Jul 2019',
                    rating: 5
                }
            ]
        }
    }
}
</script>