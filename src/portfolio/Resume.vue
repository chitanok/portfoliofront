<template>
    <v-card tile class="mt-1">
        <v-card-text>
            <v-row><v-col cols="12"><span class="heading">Resume</span></v-col></v-row>

            <v-row>
                <v-col cols="12" md="8">
                    <div class="sub-heading">
                        <span>Professional Experiences</span>
                        <span class="sub-heading-icon"><v-icon class="white--text">mdi-facebook</v-icon></span>
                    </div>

                    <div class="resume-item" v-for="(experience, index) in experiences" :key="index">
                        <div class="resume-item-heading">
                            <div class="title">{{ experience.designation }}</div>
                            <div class="resume-item-preiod">{{experience.joining_date}}-{{experience.resign_date}}</div>
                        </div>
                        <div class="resume-item-organization">{{experience.company}}</div>
                        <div class="resume-item-description bb">{{experience.responsibilities}}</div>
                    </div>

                    <!-- Eduction Section -->
                    <div class="sub-heading mt-8">
                        <span>Educations</span>
                        <span class="sub-heading-icon"><v-icon class="white--text">mdi-facebook</v-icon></span>
                    </div>

                    <div class="resume-item" v-for="(education, index) in educations" :key="index">
                        <div class="resume-item-heading">
                            <div class="title">{{ education.area_of_study }}</div>
                            <div class="resume-item-preiod">{{education.start_year}}-{{education.completion_year}}</div>
                        </div>
                        <div class="resume-item-organization">{{education.school}}</div>
                        <div class="resume-item-description bb">{{education.description}}</div>
                    </div>
                    
                    <!-- Trainig Section -->
                    <div class="sub-heading mt-8">
                        <span>Training</span>
                        <span class="sub-heading-icon"><v-icon class="white--text">mdi-facebook</v-icon></span>
                    </div>

                    <div class="resume-item" v-for="(education, index) in trainigs" :key="index">
                        <div class="resume-item-heading">
                            <div class="title">{{ education.title }}</div>
                            <div class="resume-item-preiod">{{education.start_year}}-{{education.completion_year}}</div>
                        </div>
                        <div class="resume-item-organization">{{education.school}}</div>
                        <div class="resume-item-description bb">{{education.description}}</div>
                    </div>


                </v-col>

                <v-col cols="12" md="4">
                    <div class="sub-heading">
                      <span>Language</span>
                      <span class="sub-heading-icon"><v-icon color="white">mdi-speaker</v-icon></span>
                    </div>
                    <div class="skill-wrapper">
                      <div class="skill-item" v-for="(item, i) in languages" :key="i+200">
                        <div class="skill-name"> {{ item.name}}</div>
                        <v-progress-linear :value="item.percent_completed" height="7"></v-progress-linear>
                      </div>
                    </div>

                    <!-- Skill Group Section -->
                    <div v-for="(group, index) in skillGroups" :key="index">
                    <div class="sub-heading mt-8">
                      <span>{{ group.name }}</span>
                      <span class="sub-heading-icon"><v-icon color="white">{{group.icon}}</v-icon></span>
                    </div>
                    <div class="skill-wrapper" v-if="group.skills">
                      <div class="skill-item" v-for="(skill, index) in group.skills" :key="index+300">
                        <div class="skill-name"> {{ skill.name}}</div>
                        <v-progress-linear :value="skill.percent_completed" height="7"></v-progress-linear>
                      </div>
                    </div>
                    </div>


                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
   data(){
       return {
            experiences:[
                {
                id: 1,
                designation: 'Senior Web Developer',
                company: 'Jerbit',
                address: '',
                department: 'IT',
                responsibilities:'Jerbit is Thailand based company in Bankok. I am working here as a Web Developer. My main responsibilty is introduce new features as per CEO of this company for their property manange online portal. The online portal is based on Laravel framework and connected with Line messaging api and dialogflow for machine learning.',
                joining_date:'01-01-2017',
                resign_date:'',
                currently_working: 1,
                },
                {
                    id: 2,
                    designation: 'Lab Administrator',
                    company: 'Bangladesh University',
                    address: '',
                    department: 'Computer Science and Engineering',
                    responsibilities:'Bangladesh University is one of the Private University in Bangladesh. This is really a great place for learn and grow career. I was responsible for computer labs. Also I was acting as IT officer as their wasn\'t any IT person.',
                    joining_date:'01-01-2013',
                    resign_date:'12-30-2017',
                    currently_working: 0,
                },
                {
                    id: 3,
                    designation: 'IT officer',
                    company: 'Azmiry Enterprize',
                    address: '',
                    department: 'IT',
                    responsibilities:'I was acting as IT officer. I was responsible for document process.',
                    joining_date:'01-01-2012',
                    resign_date:'06-30-2012',
                    currently_working: 0,
                },
                {
                    id: 4,
                    designation: 'Network Support Engineer',
                    company: 'Prodesta Ltd (ISP)',
                    address: '',
                    department: 'Network Support',
                    responsibilities:'I was acting as network support engineer. My main responsibility was traffic manage using Mikrotik.',
                    joining_date:'07-01-2012',
                    resign_date:'01-30-2013',
                    currently_working: 0,
                },
                {
                    id: 5,
                    designation: 'Network Support Engineer',
                    company: 'CITech CyberNet Ltd',
                    address: '',
                    department: 'Network Support',
                    responsibilities:'This is my first opportunity for getting professional experiences. I was responsible for field level support ( Customers home, office) for networking issues.',
                    joining_date:'01-01-2010',
                    resign_date:'12-29-2011',
                    currently_working: 0,
                }
            ],
            educations:[
                {
                    id: 1,
                    degree: 'SSC',
                    start_year: '2003',
                    completion_year: '2005',
                    school: 'Sadullahpur ML. Pilot High School (18031), Gaibandha.',
                    area_of_study: 'Secondary School Certificate',
                    description: 'I completed my SSC in the discipline of General Mechanics.',
                },
                {
                    id: 2,
                    degree: 'Diploma',
                    start_year: '2005',
                    completion_year: '2009',
                    school: 'Bogra Polytechnic Institute, Bogra.',
                    area_of_study: 'Diploma in Computer Technology',
                    description: 'I started my Diploma Eduction at 2005 in Dinajpur Polytechnic Institute. After complete 3 semester I take TC ( Transfer Certificate) and start my diploma eduction at Bogra Polytechnic Institute. Here I have done my first software called library mangement software using Visual Basic. Here I have learn so many things, start from introduction of computer, history of computer and necessity of computer. After that I start learning various programming languages like c, c++.',
                },
                {
                    id: 3,
                    degree: 'Bachelor',
                    start_year: '2010',
                    completion_year: '2014',
                    school: 'Bangladesh University',
                    area_of_study: 'B.Sc. in Computer Science & Engineering',
                    description: 'I have completed my bachelor degree from Bangladesh University. It was really enjoyable session in my life. I was involved with co-curricular and academic activities.\
            In this study period, I have complete some project like checque and voucher printing, daily pretty cash manage software. Finally I have done a project called Bangladesh University Alumini Association. It was my final submission of my Bachelor Degree. Here I have learn so mony things, start from c/c++ then java programming. After that we learn basic computer networking like switching and routing. Then database management system, system analysis, software engineering, compiler design, web design and development etc.',
                }
            ],
            trainigs:[
                {
                    id: 1,
                    title: 'Mobile Application Development (Android)',
                    school: 'BASIS, Bangladesh',
                    address: 'Dhaka',
                    start_date: '06-01-2016',
                    completion_date: '12-30-2016',
                    duration: '6 months',
                    description: 'I have completed my Mobile Applicaton Development course from Bangladesh Association of Software and Information. This course duration was 3 months. I have learn basic java programming and then start mobile application development using java. I used android studio for develop mobile application. In this training session I have develop a mobile application called Tour Mat. It\'s developed for tourist people who love to share their experiences and want to take partner for upcoming tour.'
                },
                {
                    id: 2,
                    title: 'Cisco Certified Network Associate',
                    school: 'New Horizons CLC of Bangladesh',
                    address: 'Dhaka',
                    start_date: '06-01-2013',
                    completion_date: '12-30-2013',
                    duration: '6 months', 
                    description: 'I have completed my CCNA course from New Horizons CLC of Bangladesh. This course duration was 4 months. I learn Switching and routing and high level networking concept from this course.'
                },
                {
                    id: 3,
                    title: 'Web Application Development',
                    school: 'Optimal IT Solution',
                    address: 'Dhaka',
                    start_date: '06-01-2008',
                    completion_date: '09-30-2008',
                    duration: '3 months', 
                    description: 'I have completed my "Web Application Development" course from Optimal IT Solution of Bangladesh. This course duration was 4 months. I learnt HTML, CSS, JavaScript, Database basic. I got a general overview of website and web development concet.'
                }

            ],
            languages:[
                {
                    id: 1,
                    name: 'English',
                    percent_completed: 90
                },
                {
                    id: 2,
                    name: 'Bengali',
                    percent_completed: 99
                },
                {
                    id: 3,
                    name: 'Hindi',
                    percent_completed: 50
                }
            ],
            skillGroups:[
                {
                    id: 1,
                    name: 'DEVELOPMENT',
                    icon: 'mdi-developer-board',
                    skills:[
                    {
                        id: 1,
                        name: 'PHP',
                        percent_completed: 60
                    },
                    {
                        id: 2,
                        name: 'Laravel',
                        percent_completed: 70
                    },
                    {
                        id: 3,
                        name: 'Relational Database',
                        percent_completed: 60
                    },
                    {
                        id: 4,
                        name: 'VUEJS',
                        percent_completed: 85
                    },
                    {
                        id: 5,
                        name: 'Nodejs',
                        percent_completed: 40
                    },
                    {
                        id: 6,
                        name: 'Expressjs',
                        percent_completed: 60
                    },
                    {
                        id: 7,
                        name: 'Github.com',
                        percent_completed: 80
                    }
                    ]
                },
                {
                    id: 2, 
                    name: 'SERVER ADMINISTRATION',
                    icon: 'mdi-server',
                    skills:[
                    {
                        id: 1,
                        name: 'Ubuntu & Debian',
                        percent_completed: 70
                    },
                    {
                        id: 2,
                        name: 'Centos',
                        percent_completed: 60
                    },
                    {
                        id: 3,
                        name: 'Cisco',
                        percent_completed: 40
                    },
                    {
                        id: 4,
                        name: 'Mikrotik',
                        percent_completed: 50
                    }
                    ]
                },
                {
                    id: 3,
                    name: 'AWS CLOUD COMPUTING',
                    icon: 'mdi-cloud',
                    skills: [
                    {
                        id: 1,
                        name: 'AWS S3',
                        percent_completed: 70
                    },
                    {
                        id: 2,
                        name: 'AWS EC2',
                        percent_completed: 95
                    },
                    {
                        id: 3,
                        name: 'AWS Route 53',
                        percent_completed: 95
                    },
                    {
                        id: 4,
                        name: 'AWS Certificate Manager',
                        percent_completed: 97
                    },
                    {
                        id: 5,
                        name: 'AWS Elastic Beanstalk',
                        percent_completed: 80
                    },
                    {
                        id: 6,
                        name: 'AWS Load Balancer',
                        percent_completed: 98
                    },
                    {
                        id: 7,
                        name: 'AWS WorkSpace',
                        percent_completed: 95
                    },
                    {
                        id: 8,
                        name: 'AWS WorkMail',
                        percent_completed: 90
                    },
                    {
                        id: 9,
                        name: 'AWS SES',
                        percent_completed: 80
                    },
                    {
                        id: 10,
                        name: 'AWS CodeCommit',
                        percent_completed: 97
                    },
                    {
                        id: 11,
                        name: 'Amazon RDS',
                        percent_completed: 80
                    },
                    {
                        id: 12,
                        name: 'Amazon Lightsail',
                        percent_completed: 90
                    }

                    ]
                },
                {
                    id: 4,
                    name: 'GOOGLE CLOUD COMPUTING',
                    icon: 'mdi-cloud',
                    skills: [
                    {
                        id: 1,
                        name: 'App Engine',
                        percent_completed: 60 
                    },
                    {
                        id: 2,
                        name: 'Computer Engine',
                        percent_completed: 98 
                    },
                    {
                        id: 3,
                        name: 'Cloud DNS',
                        percent_completed: 80
                    },
                    {
                        id: 4,
                        name: 'APIS & SERVICES',
                        percent_completed: 40
                    },
                    {
                        id: 5,
                        name: 'Google Cloud IAM',
                        percent_completed: 80
                    },
                    {
                        id: 6,
                        name: 'Google Cloud Storage',
                        percent_completed: 70
                    }
                    ]
                },
                {
                    id: 5,
                    name: 'DIGITALOCEAN CLOUD',
                    icon: 'mdi-cloud',
                    skills: [
                    {
                        id: 1,
                        name: 'Droplet',
                        percent_completed: 97
                    },
                    {
                        id: 2,
                        name: 'Networking and DNS',
                        percent_completed: 80
                    },
                    {
                        id: 3,
                        name: 'Backup and Recovery',
                        percent_completed: 70
                    },
                    {
                        id: 4,
                        name: 'Space API',
                        percent_completed: 60
                    },
                    {
                        id: 5,
                        name: 'DigitalOcean API',
                        percent_completed: 40
                    }
                    ]
                }
            ]
       
        }
   }
}
</script>

<style>
.sub-heading{
    background-color: #313131;
    color: #fff;
    padding: 5px;
    position: relative;
}
.sub-heading-icon{
    position: absolute;
    right: 5px;
}

.resume-item-heading{
    position: relative;
}
.resume-item-preiod{
    position: absolute;
    right: 0px;
    top: 5px;
    border-bottom: 1px inset #ddd;
}

.resume-item-description{
    border-left: 1px solid #3c3c3c;
    padding: 10px;
}

.bb{
    border-bottom: 1px inset #4d4c4d;
}

.skill-item{
  padding: 5px 0px
}
</style>