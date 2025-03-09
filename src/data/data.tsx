import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import MediumIcon from '../components/Icon/MediumIcon';
import heroImage from '../images/header-background.webp';
import hospitalclaimsmanagement from '../images/portfolio/hospitalclaimsmanagement.jpg';
import kanban from '../images/portfolio/kanban.jpg';
import vehical from '../images/portfolio/vehical.jpg';
import image_matching from '../images/portfolio/image_matching.jpg';
import drivinglicense from '../images/portfolio/drivinglicense.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Rakshith Balasamudra Sudarshanreddy | Software Engineer',
  description: "Rakshith Balasamudra Sudarshanreddy - Full Stack Software Engineer & Cloud Enthusiast",
};


/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Rakshith Balasamudra Sudarshanreddy`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        A passionate <strong className="text-stone-100">Full Stack Software Engineer</strong> with expertise in 
        <strong className="text-stone-100"> ReactJS, Node.js, and AWS</strong>, currently pursuing my
        <strong className="text-stone-100"> Master of Science in Computer Science</strong> at George Washington University.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I thrive on solving complex engineering challenges, building scalable applications, and optimizing cloud architectures. 
        My background includes working on high-performance backend systems, developing efficient REST APIs, and 
        crafting seamless user experiences.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Outside of work, you'll find me watching <strong className="text-stone-100">Soccer & Cricket</strong>, 
        playing <strong className="text-stone-100">video games</strong>, or exploring new <strong className="text-stone-100">AI innovations</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/14Isa3qt0uYolidjb4CMFcrheo1zwHiXO/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a software engineer passionate about scalable web applications, specializing in ReactJS, Node.js, Express.js, and AWS. I focus on seamless user experiences and high-performance backend systems. Currently pursuing my MS in Computer Science at George Washington University, I explore Data Mining, Machine Learning, and Cloud Computing. I thrive on solving complex problems and continuously learning new technologies.`,
  
  aboutItems: [
    { label: 'Location', text: 'Arlington, VA', Icon: MapIcon },
    { label: 'Age', text: '26', Icon: CalendarIcon },
    { label: 'Nationality', text: 'Indian', Icon: FlagIcon },
    { label: 'Interests', text: 'Soccer, Cricket, Gaming, Cloud Computing & AI', Icon: SparklesIcon },
    { label: 'Study', text: 'George Washington University', Icon: AcademicCapIcon },
    { label: 'Employment', text: 'Software Engineer | Ex-TCS, Comviva', Icon: BuildingOffice2Icon },
  ],
};


/**
 * Skills section
 */
export const skillGroups = [
  { name: 'Frontend', skills: [{ name: 'HTML & CSS' }, { name: 'TypeScript' }, { name: 'JavaScript' }, { name: 'ReactJS' }, { name: 'NextJs' }] },
  { name: 'Databases & Cloud', skills: [{ name: 'PostgreSQL' }, { name: 'Rest API' }, { name: 'MongoDB' }, { name: 'AWS(Cloud9 IDE, IAM, S3, EC2, Lambda, Cloud Watch, RDS, VPC, Cognito)' }] },
  { name: 'Languages', skills: [{ name: 'Python' }, { name: 'JavaScript' }, { name: 'SQL' }] },
  { name: 'Backend', skills: [{ name: 'Node.js' }, { name: 'Express.js' }] },
  { name: 'Tools', skills: [{ name: 'GitHub' }, { name: 'Visual Studio Code' }, {name: 'Postman API'}, {name: 'Scrum'}] },
  { name: 'Machine Learning Frameworks', skills: [{ name: 'Pandas' }, { name: 'Numpy' }, { name: 'Matplotlib' }, { name: 'Keras' }, { name: 'Seaborn' }] },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'WeCureIT - Hospital Management System',
    description: 'A comprehensive hospital management system designed to streamline medical operations, allowing doctors and patients to manage appointments efficiently. The system supports role-based authentication, enabling secure access for administrators, doctors, and patients. Features include real-time appointment scheduling, doctor availability tracking, encrypted patient records, and automated email/SMS notifications for upcoming visits. Built with ReactJS, Node.js, Express.js, and MongoDB, WeCureIT ensures a seamless and secure experience for all users.',
    url: 'https://github.com/rakshithbs10/WeCureIT',
    image: hospitalclaimsmanagement,
  },
  {
    title: 'Kanban Project Management Board',
    description: 'A feature-rich project management tool built to facilitate team collaboration through a visually structured Kanban board. The system allows users to create, assign, and manage tasks with real-time updates using WebSockets. It implements drag-and-drop functionality for workflow organization, role-based user permissions (Admin, Editor, Viewer), and integrates Redux Toolkit for state management. The project is deployed on AWS, leveraging PostgreSQL for persistent storage and ensuring data consistency across multiple users.',
    url: 'https://github.com/rakshithbs10/Kanban-Board',
    image: kanban,
  },
  {
    title: 'Vehicle & License Plate Detection System',
    description: 'A real-time vehicle and license plate detection system designed for smart surveillance applications. The project leverages YOLOv5 for vehicle recognition and Optical Character Recognition (OCR) for license plate extraction. It features preprocessing techniques for improving detection accuracy under varying lighting and weather conditions. Deployed using Flask and TensorFlow, the system provides high-speed detection with minimal computational overhead, making it suitable for security enforcement and automated toll collection.',
    url: 'https://medium.com/@rakshithbs10/capturing-the-road-building-a-real-time-vehicle-and-license-plate-detection-system-1b7ff6e92115',
    image: vehical,
  },
  {
    title: 'Image Matching Challenge 2024',
    description: 'A Kaggle competition project focused on feature matching and 3D reconstruction from images using advanced computer vision techniques. This project applies deep learning for robust keypoint detection and feature matching, utilizing SIFT and SuperGlue for precise alignment. RANSAC-based geometric verification is implemented to refine matches and reduce false positives. Additionally, Structure-from-Motion (SfM) techniques are used to generate 3D reconstructions from image datasets. The project showcases state-of-the-art vision techniques for tasks like image stitching, AR applications, and 3D mapping.',
    url: 'https://medium.com/@rakshithbs10/kaggle-competition-image-matching-2024-our-attempt-0e090392e8d0',
    image: image_matching,
  },
  {
    title: 'Fingerprint-Based Licensing for Driving',
    description: 'A biometric-based licensing system that enhances security and identity verification using fingerprint authentication. This project, published in IEEE, introduces a secure digital alternative to traditional paper-based driving licenses. The system stores encrypted fingerprint data and matches it against a centralized database for identity verification. Implemented using OpenCV and biometric SDKs, the system ensures tamper-proof authentication, reducing fraud and improving government service efficiency. The project is designed for scalability, supporting large-scale implementations in government and private sectors.',
    url: 'https://ieeexplore.ieee.org/document/9418134',
    image: drivinglicense,
  }
];




/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2023 - May 2025 (Expected)',
    location: 'George Washington University, Washington, DC',
    title: 'Master of Science in Computer Science',
    content: (
      <p>
        Pursuing advanced coursework in <strong>Data Mining, Machine Learning, Cloud Computing, and Computer Vision</strong>. 
        Engaged in projects related to full-stack development, AI-driven applications, and scalable cloud architectures.
      </p>
    ),
  },
  {
    date: 'August 2016 - May 2020',
    location: 'PES University, Bangalore, India',
    title: 'Bachelor of Technology in Electronics and Communication Engineering',
    content: (
      <p>
        Developed a strong foundation in <strong>Data Structures, Algorithms, and Software Development</strong>. 
        Conducted research on <strong> Fingerprint-Based Licensing for Driving</strong>, which was published in IEEE.
      </p>
    ),
  },
];


export const experience: TimelineItem[] = [
  {
    date: 'August 2020 – July 2023',
    location: 'Tata Consultancy Services, Bangalore, India',
    title: 'Systems Engineer',
    content: (
      <p>
        Developed and optimized high-performance web applications using <strong>ReactJS, Node.js, and AWS</strong>. 
        Led the migration of legacy Dust-based pages to a modern ReactJS architecture, reducing page load times by 20% 
        and increasing user engagement by 15%. Implemented SEO best practices and caching strategies, improving 
        system scalability. Collaborated in an agile environment, employing CI/CD pipelines and automated testing to 
        enhance software quality and release cycles.
      </p>
    ),
  },
  {
    date: 'June 2019 – September 2019',
    location: 'Comviva Technologies, Bangalore, India',
    title: 'Software Engineer Intern',
    content: (
      <p>
        Designed and implemented automated test scripts to ensure cross-browser compatibility, improving system reliability.
        Provided key recommendations for enhancing system security and performance, contributing to overall user experience improvements.
      </p>
    ),
  },
];




/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to contact or reach out to me',
  items: [
    {
      type: ContactType.Email,
      text: 'rakshith.balasamudrasudarshanreddy@gwu.edu',
      href: 'mailto:rakshith.balasamudrasudarshanreddy@gwu.edu',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      type: ContactType.Location,
      text: 'Arlington, Virginia',
      href: 'https://maps.app.goo.gl/dq6MwXjPAhcuxJg79',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      type: ContactType.Github,
      text: 'rakshithbs10',
      href: 'https://github.com/rakshithbs10',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/rakshithbs10', target: '_blank', rel: 'noopener noreferrer'},
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/rakshith-bs/', target: '_blank', rel: 'noopener noreferrer'},
  { label: 'Medium', Icon: MediumIcon, href: 'https://medium.com/@rakshithbs10', target: '_blank', rel: 'noopener noreferrer'},
];
