interface NavItem {
    _id: number;
    title: string;
    link: string;
}

interface WorkExperienceItem {
    _id: number;
    title: string;
    subTitle: string;
    location: string;
    description: string[];
}

interface ProjectItem {
    title: string;
    des: string[];
    src?: string;
    githubLink?: string;
    dockerLink?: string;
    websiteLink?: string;
    techStack?: string;
}

export const navLinks: NavItem[] = [
    {
        _id: 1001,
        title: "About",
        link: "about",
    },
    {
        _id: 1002,
        title: "Experience",
        link: "experience",
    },
    {
        _id: 1003,
        title: "Skills",
        link: "skills",
    },
    {
        _id: 1004,
        title: "Projects",
        link: "projects",
    },
    {
        _id:1005,
        title: "Achievements",
        link:"achievements",
    },
    {
        _id: 1006,
        title: "Contact",
        link: "contact",
    },
];

export const workExperiences: WorkExperienceItem[] = [
    {
        _id: 2,
        title: "Graduate Engineering Trainee (Java Developer)",
        subTitle: "Snapdeal (Acevector Group Private Limited) - (09/2022 - 07/2023)",
        location: "Gurugram, Haryana, India",
        description: [
            "During my tenure at Snapdeal as a Graduate Engineering Trainee, I was involved in several key projects and responsibilities",
            "WhatsApp Shop System Implementation: Developed and integrated a system allowing customers to shop via WhatsApp. This included creating REST APIs to handle real-time, event-based interactions.",
            "Catalog Management: Managed and updated product catalogs in Meta product catalog ensuring accurate and current information for users.",
            "Secure Checkout Process: Ensured a seamless and secure checkout experience for users shopping through the WhatsApp platform.",
            "Issue Resolution: Proactively resolved refund voucher issues, ensuring customer satisfaction and system reliability.",
            "Debugging Internal Systems: Identified, analyzed, and fixed internal system problems to enhance performance and stability.",
            "Tech Stack: Java, Spring, Spring Boot, SQL, NoSQL, Jenkins, JIRA, AWS, Agile, SDLC, Grafana, JUnit.",
        ],
    },
    {
        _id: 1,
        title: "Content Intern",
        subTitle: "Coding Ninjas (Sunrise Mentors Private Limited) - (01/2022 - 07/2022)",
        location: "Gurugram, Haryana, India",
        description: [
            "As a Content Intern at Coding Ninjas, I contributed significantly to the development and enhancement of educational content. My responsibilities included:",
            "Content Development for Database Management Systems: Created comprehensive learning materials covering various aspects of DBMS, including SQL queries, database design, normalization, and transaction management.",
            "Operating Systems Content Creation: Developed detailed content explaining core operating system concepts such as process management, memory management, file systems, and synchronization.",
            "System Design Course Materials: Crafted educational resources focusing on system design principles, architectural patterns, scalability, and distributed systems.",
            "Tech Stack: HTML, SQL.",
        ],
    },
];

export const projectsData: ProjectItem[] = [
    {
        title: 'Wanderlust: A Virtual Tour Assistant',
        des: [
            'We developed a mobile application designed to enhance the travel experience for tourists. This comprehensive tool offers several features to ensure a seamless and enjoyable journey',
            'Recommendation System: Provides personalized suggestions for places to visit, eat, and stay based on user preferences and location.',
            'Tourist Support Chatbot: An AI-powered chatbot available 24/7 to answer queries, offer travel tips, and provide real-time assistance.',
            'Translator: Facilitates easy communication with locals by translating text and speech between multiple languages.',
            'Storytelling Feature: Delivers rich historical and cultural information about various attractions through engaging narratives.',
        ],
        githubLink:'https://github.com/aditidona/WonderLust-Virtual-Tour-Assistant',
        techStack: 'Flutter, Dart, Python, Django, Firebase, Figma'
    },
    {
        title: 'Rent-o-buy: Mobile Application for Renting and Buying Second-Hand Products',
        githubLink:'https://github.com/Rachit1606/rentobuy',
        des: [
            'This mobile application was created to streamline the process of renting and buying pre-owned items. I worked on',
            'Calling System: Allows users to directly contact sellers or renters via in-app calling using Zegocloud',
            'User Authentication: Ensures secure login and registration processes using firebase AUth',
            'User Profiles: Enables users to create and manage personal profiles with their listings and preferences.',
            'Homepage: Features a user-friendly interface displaying the latest items available for rent or purchase.',
        ],
        techStack: 'Kotlin, XML, Firebase, ZegoCloud, Figma, MVC.'
    },
    {
        title: 'Strangely: A Social Media Website',
        githubLink:'https://github.com/Rachit1606/Strangely',
        des: [
            "Developed the backend of a social media and events platform with robust features to enhance user interaction and engagement:",
            "Authentication: Secure login and registration system to protect user data by using Spring Security and JWT",
            "User Profiles: Comprehensive profile management allowing users to customize their online presence.",
            "Posts (CRUD Operations): Full suite of Create, Read, Update, and Delete functionalities for user posts.",
            "Chat Functionality: Real-time messaging system to facilitate communication between users.",
            "Worked in Test Driven Development and Agile Environment with Code Coverage of 85%",
        ],
        techStack: 'React, JavaScript, Java, Spring Boot, Spring Security, SQL, GitLab, Designite, TDD, Agile, Junit, REST',
    },
    {
        title: 'Eduhub: An Online Learning Platform',
        githubLink:'https://github.com/Rachit1606/eduhub',
        des: [
            'Contributed to the development of Eduhub, focusing on the online testing feature which includes:',
            'Question Banks: A repository of questions that can be categorized and reused in various tests. User is able to do CRUD operations on Questions',
            'Test Creation: Allows educators to create customized tests with varying levels of difficulty and formats. User is able to do CRUD on tests.',
            'Test Attempts: Enables students to take tests within a controlled environment and secure environment',
            'Result Generation: Automated evaluation and result generation providing immediate feedback to students',
        ],
        techStack: 'React, JavaScript, Java, Spring Boot, MongoDB, Netlify, Render, REST',
    },
    {
        title: 'TaskSync: A Collaborative Task Management Website',
        githubLink:'https://github.com/Rachit1606/TaskSync',
        des: [
            'Built a web platform aimed at improving team collaboration and productivity through effective task management. Features include:',
            'User Authentication: Secure login system using AWS Cognito.',
            'Data Storage: Persistent data storage and retrieval using SQL databases. with AWS RDS',
            'Deployment: Leveraged AWS services for robust deployment, including Elastic Beanstalk for application hosting, EC2 for scalable computing power, Load Balancers for traffic management, VPC for network isolation, and RDS for relational database services.',
            'Used AWS Cloudformation to deploy AWS resources '
        ],
        techStack: 'React, JavaScript, Java, Spring Boot, SQL, AWS (Amazon Web Services), CloudFormation'
    },
    {
        title: "Lightweight Fine Tuning to a Foundational Model",
        websiteLink:`https://drive.google.com/file/d/1lSv4r0mQY_hb9KJgi4zah7m-cXRpoqGM/view?usp=drive_link`,
        des: [
            "Loaded a pre-trained GPT-2 model and evaluated its performance.",
            "Performed parameter-efficient fine-tuning using the PEFT library with LoRA configuration.",
            "Conducted inference using the fine-tuned model and compared its performance to the original model."
        ],
        techStack: "Python, PyTorch, Hugging Face, PEFT, LoRA"
    },
    {
        title: "Image Classification Algorithm for Dogs",
        githubLink: `https://drive.google.com/file/d/1qaNU870CHurEpUOqff5UkYc7gNJgyfST/view?usp=sharing`,
        des: [
            "Used convolutional neural networks (CNN) to identify images as 'dogs' or 'not dogs'.",
            "Evaluated the algorithm's effectiveness in correctly identifying a dog's breed.",
            "Timed the algorithms to balance accuracy with runtime efficiency."
        ],
        techStack: "Python, TensorFlow, AlexNet, VGG, ResNet"
    },
    {
        title: 'K8 Product Services',
        des: [
            'Two microservices developed in Spring Boot. Implemented CI/CD pipeline in GCP using Cloud Build, Cloud Source Repository and Artifact Registry. Created Kubernetes cluster using terraform.',
            'Created cloudbuild.yaml which will package the source code, containerize it and deploy the workload to Kubernetes cluster using deployment yaml files, when a new commit is pushed to the repository.',
            'Attached persistent volume to the kubernetes cluster accessible by both microservice containers. Exposed one microservice as a service to the internet.'
        ],
        techStack: 'Spring boot, Kubernetes, Terraform, GCP Cloud Build, Cloud Source Repository, Artifact Registry'
    }, 
];

export const skills = {
    backend: [
        "Java",
        "Spring",
        "SpringBoot",
        "Spring Cloud",
        "Spring Security",
        "Python", 
        "Django",
        "Kotlin",
        "Dart"
    ],
    frontend: [
        "React",
        "HTML",
        "CSS",
        "TypeScript",
        "JavaScript",
        "Flutter",
        "Android",
        "Material UI",
        "JUnit",
        "Mockito",
        "Microservices"
    ],
    database: [
        "MySQL",
        "MongoDB",
        "DynamoDB",
        "RDS"
    ], 
    cloud: [
        "AWS ECS",
        "Lambda",
        "AWS VPC",
        "EC2",
        "S3",
        "AWS Elastic Load Balancing",
        "AWS Elastic Beanstalk",
        "AWS Backup",
        "AWS Cognito",
        "GCP (Google Cloud Platform)",
        "Firebase"
    ],
    devops: [
        "Git",
        "Docker",
        "CI/CD",
        "GCP Cloud Build",
        "Kubernetes",
        "Terraform",
        "AWS CloudFormation"
    ],
    misc: 
    [
        "Agile Methodlogies",
        "Software Development Lifecycle",
        "OOPs",
        "Jira",
        "Jenkins",
        "Figma",
        "Grafana"
    ],
    softskills:
    [
        "Adaptable",
        "Innovative",
        "Team Player",
        "Self and Fast Learner",
        "Problem Solver",
        "Professional Communication skills"
    ]
};

export const bestSkills = [
    "Java",
    "Spring Boot",
    "Agile",
    "Microservices",
    "JUnit",
    "SQL",
    "AWS",
    "Generative AI",
];

export const resumeLink = `https://drive.google.com/file/d/1xqta_JXr-GRvfd88O6hskXNg2gmkI7Rx/view?usp=sharing`;


export const achievementsData = [
    {
      title: "Cognizant Genrative AI hackathon Runner-ups",
      description: "Won 2nd Price in Cognizant Generative AI hackathon by providing a viable solution regarding financial fraud in Canada. Got to know and Intereact with Industry Professionals and get a chance to join Generative AI Externship Program by Cognizant From June,2024 - July,2024",
      imgSrc: "/assets/cognizant.jpg",
    },
    {
      title: "Generative AI and Ocean Hackathon Runner-ups",
      description: "Won 2nd Prize in Generative AI & Oceans by providing a viable solution for marine life conservation with Gen AI. Presented our Idea at the 2024 Dalhousie AI Symposium. Got a chance to gain experience and knowledge for great minds in the field of Generative AI",
      imgSrc: "/assets/deepsense.jpg",
    },
    {
        title: "Cognizant Generative AI Externship",
        description: "Successfully completed the Cognizant Generative AI Externship, where I worked on two projects: using a pretrained Image Classifier to train dog breeds and applying lightweight fine-tuning to a foundation model. Gained hands-on experience in Python, deep learning fundamentals, foundation models, and fine-tuning a foundational model.",
        imgSrc: "/assets/CompletionCertificate.jpg",
    },
    {
        title: "Global Game Jam Participation",
        description: "Participated in Global Game Jam, 2024 and created a game using Phaser.js and shared our game globally ",
        imgSrc: "/assets/ggj.jpg",
    },
    {
        title: "AWS Certified Solution Architect Certification",
        description: "Achieved the certificate after completing the exam. Learned various AWS services and learned to implement various solution architectures for deploying web and mobile applications, etc. using those services.",
        imgSrc: "/assets/sa03.jpg",
    },
    {
        title: "AWS Certified Cloud Practioner Certification",
        description: "Completed training as a Cloud Practitioner as a Part of the Snapdeal Technology Team. Achieved the certificate after completing the exam with a score of 850/1000.",
        imgSrc: "/assets/cp01.jpg",
    },
    {
        title: "Core Java Programming",
        description: "Learned the core concepts of Java programming. Completed under MSD group of Institutions S.No. - A18-12014, Regn. No. - MSD/KPT/18-19/P08-12/014",
        imgSrc: "/assets/java.jpg",
    },
    {
        title: "Learn SQL in a simplified manner",
        description: "Learned the core concepts of SQL. Completed in Udemy. Certificate no: UC-814f5367-92ef-43d0-a477-cfa3a07b626a Certificate URL: ude.my/UC-814f5367-92ef-43d0-a477-cfa3a07b626a",
        imgSrc: "/assets/sql.jpg",
    },

  ];
  
