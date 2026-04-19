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
        _id: 1005,
        title: "Achievements",
        link: "achievements",
    },
    {
        _id: 1006,
        title: "Contact",
        link: "contact",
    },
];

export const workExperiences: WorkExperienceItem[] = [
    {
        _id: 5,
        title: "Full Stack Developer — Contract Role via FDM Group",
        subTitle: "Citigroup (June 2025 - Present)",
        location: "Mississauga, Ontario, Canada",
        description: [
            "Boosted application execution efficiency by 25% by strategically refactoring the core Python codebase, driving higher maintainability and system modularity.",
            "Engineered an internal portal (React, FastAPI, MongoDB) that streamlined internal operations and improved cross-team resource visibility.",
            "Slashed manual processing time by over 40% by deploying automated Python and GraphQL scripts for complex administrative workflows.",
            "Accelerated delivery cycles and optimized internal tooling by spearheading automation initiatives across cross-functional Agile/Scrum teams.",
            "Ensured zero-downtime deployments and rapid scaling of full-stack services across ECS Kubernetes clusters using Harness, Lightspeed, and OpenShift."
        ],
    },
    {
        _id: 4,
        title: "IT Consultant",
        subTitle: "FDM Group (Apr 2025 - Present)",
        location: "Toronto, Ontario, Canada",
        description: [
            "This is during period of training at FDM Group",
            "Accelerated sprint cadences and improved software delivery predictability by enforcing rigorous Agile/Scrum and Git workflows.",
            "Reduced technical debt and future system maintenance costs by architecting features using SOLID design patterns and Clean Code principles.",
            "Delivered high-performance RESTful APIs leveraging microservices architecture (Java Spring Boot, Data JPA), enabling seamless data exchange between business units.",
            "Bolstered application reliability and achieved superior code quality metrics, utilizing TDD via JUnit, Mockito, and SonarLint.",
            "Optimized real-time data ingestion and monitoring capabilities through advanced Java 8 stream processing and robust logging.",
            "Enhanced database retrieval speeds and overall query performance by fine-tuning complex SQL operations."
        ],
    },
    {
        _id: 3,
        title: "Software Engineering Intern",
        subTitle: "GrayCyan (Sep 2024 - Dec 2024)",
        location: "Toronto, Ontario, Canada",
        description: [
            "Spearheaded the end-to-end development and successful market launch of HonestAi, delivering a production-grade platform on AWS (Next.js, Node.js).",
            "Empowered data-driven decision-making by architecting a scalable AWS Lambda intelligence pipeline powered by Generative AI (OpenAI API).",
            "Boosted customer engagement metrics and cut response times by deploying a real-time WebSocket-based AI chatbot.",
            "Maximized user acquisition and security compliance by integrating robust multi-channel authentication (AWS Cognito, Firebase Auth).",
            "Scaled marketing outreach capabilities effortlessly by integrating cloud-native email management targeting large customer bases."
        ],
    },
    {
        _id: 2,
        title: "Teaching Assistant & Marker",
        subTitle: "Dalhousie University (Sep 2024 - April 2025)",
        location: "Halifax, Nova Scotia, Canada",
        description: [
            "Served as a Teaching Assistant and Marker for Data Structures and Software Engineering courses.",
            "Conducted lab sessions, guided students, and taught core principles of software engineering, Git version control, TDD, and various algorithms.",
            "Created testing suites and added robust test cases to student systems to ensure code coverage of around 80%."
        ],
    },
    {
        _id: 1,
        title: "Software Developer",
        subTitle: "Snapdeal (Sep 2022 - Mar 2023)",
        location: "Gurugram, Haryana, India",
        description: [
            "Generated substantial increases in transactional security and ecosystem reliability by engineering real-time REST API integrations for Snapdeal’s core product line.",
            "Ensured alignment with critical business deliverables by taking an active role in cross-functional continuous delivery pipelines (Agile/Scrum).",
            "Reduced infrastructure overhead and significantly improved data availability by driving the migration of legacy on-premises data to AWS Cloud.",
            "Elevated critical system performance by leading rigorous performance tuning and testing initiatives."
        ],
    },
    {
        _id: 0,
        title: "Content Intern",
        subTitle: "Coding Ninjas — Sunrise Mentors (Jan 2022 – Jul 2022)",
        location: "Gurugram, Haryana, India",
        description: [
            "Created and updated course content for DBMS, Operating Systems, and System Design.",
            "Enhanced website content using HTML, CSS, and JavaScript for improved user experience.",
            "Collaborated with developers and designers to implement educational content, demonstrating strong communication and problem-solving skills.",
            "Documented processes and collaborated on content optimization. Suggested improvements, contributing to content refinement.",
            "Tech Stack: HTML, CSS, JavaScript, SQL."
        ],
    }
];

export const projectsData: ProjectItem[] = [
    {
        title: 'ILikeImage: An Image Type Converter Platform',
        des: [
            "Designed a serverless architecture with AWS Lambda and API Gateway, ensuring scalable and cost-effective backend operations.",
            "Deployed frontend via Elastic Beanstalk and used S3 for secure image storage, integrating user-facing elements with server-side logic.",
            "Enhanced reliability with SNS and SQS integration for robust messaging, and implemented AWS CloudWatch for comprehensive monitoring and debugging."
        ],
        techStack: 'AWS Lambda, API Gateway, Elastic Beanstalk, S3, SNS, SQS, CloudWatch'
    },
    {
        title: 'Wanderlust: A Virtual Tour Assistant',
        des: [
            'We developed a mobile application designed to enhance the travel experience for tourists. This comprehensive tool offers several features to ensure a seamless and enjoyable journey',
            'Recommendation System: Provides personalized suggestions for places to visit, eat, and stay based on user preferences and location.',
            'Tourist Support Chatbot: An AI-powered chatbot available 24/7 to answer queries, offer travel tips, and provide real-time assistance.',
            'Translator: Facilitates easy communication with locals by translating text and speech between multiple languages.',
            'Storytelling Feature: Delivers rich historical and cultural information about various attractions through engaging narratives.',
        ],
        githubLink: 'https://github.com/aditidona/WonderLust-Virtual-Tour-Assistant',
        techStack: 'Flutter, Dart, Python, Django, Firebase, Figma'
    },
    {
        title: 'Rent-o-buy: Mobile Application for Renting and Buying Second-Hand Products',
        githubLink: 'https://github.com/Rachit1606/rentobuy',
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
        githubLink: 'https://github.com/Rachit1606/Strangely',
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
        githubLink: 'https://github.com/Rachit1606/eduhub',
        des: [
            "Developed an Online Test feature enabling teachers to create and manage tests, and students to attempt them.",
            "Implemented a Question Bank feature for easy access to a pool of questions and Test Creation functionality for teachers.",
            "Designed algorithms for automatic test creation based on specified parameters and implemented secured attempts and result generation features.",
            "Deployed the Application using AWS Elastic Beanstalk for frontend and backend."
        ],
        techStack: 'React, JavaScript, Java, Spring Boot, MongoDB, Netlify, Render, REST',
    },
    {
        title: 'TaskSync: A Collaborative Task Management Website',
        githubLink: 'https://github.com/Rachit1606/TaskSync',
        des: [
            "Developed a collaborative task management platform with user authentication and robust data storage, focusing on coding, debugging, and system consistency.",
            "Deployed using AWS services for scalability and reliability, including EC2 instances, Elastic Beanstalk, and VPC.",
            "Integrated RDS for database deployment and AWS Cognito for secure authentication, ensuring a seamless user experience.",
            "Implemented AWS Backup for data protection, optimizing performance, and following emerging technologies."
        ],
        techStack: 'React, JavaScript, Java, Spring Boot, SQL, AWS (Amazon Web Services), CloudFormation'
    },
    {
        title: "Lightweight Fine Tuning to a Foundational Model",
        websiteLink: `https://drive.google.com/file/d/1lSv4r0mQY_hb9KJgi4zah7m-cXRpoqGM/view?usp=drive_link`,
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
        "Python",
        "Node.js",
        "Next.js",
        "Spring",
        "SpringBoot",
        "Fast API",
        "Spring Cloud",
        "Spring Security",
        "Django"
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
        "Firestore",
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
        "Azure",
        "Firebase"
    ],
    devops: [
        "Git",
        "Docker",
        "CI/CD",
        "Kubernetes",
        "Openshift",
        "Harness",
        "Lightspeed",
        "Linux CLI",
        "Terraform",
        "AWS CloudFormation",
        "GCP Cloud Build",
        "Jenkins"
    ],
    misc:
        [
            "Agile Methodlogies",
            "Software Development Lifecycle",
            "OOPs",
            "Jira",
            "Confluence",
            "Maven",
            "UML",
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
    "Python",
    "Fast API",
    "AI Agents",
    "AWS",
    "Agile",
    "Microservices",
    "SQL",
];

export const resumeLink = `https://drive.google.com/file/d/1KdJGqbpbRAq-XZAX8t2sva9KhKcz2sx_/view?usp=sharing`;


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
        title: "Solace Certified Developer Practitioner",
        description: "Achieved the Developer Practitioner (Level 1) certification from Solace Academy. Demonstrated proficiency in event-driven architecture, messaging concepts, and leveraging the Solace PubSub+ event broker platform.",
        imgSrc: "/assets/solace.png",
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

