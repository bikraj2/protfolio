export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Achievements", link: "#achievements" },
  { name: "Contact", link: "#contact" },
  { name: "Education", link: "#education" },
];

export const gridItems = [
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  //{
  //  id: 3,
  //  title: "My tech stack",
  //  description: "I constantly try to improve",
  //  className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  //  imgClassName: "",
  //  titleClassName: "justify-center",
  //  img: "",
  //  spareImg: "",
  //},
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  //{
  //  id: 5,
  //  title: "Currently working on GoKit and ZapUrl",
  //  description: "",
  //  className: "md:col-span-3 md:row-span-2",
  //  imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
  //  titleClassName: "justify-center md:justify-start lg:justify-center",
  //  img: "",
  //  spareImg: "/grid.svg",
  //},
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 0,
    title: "GoKit",
    des: "A simple Go-based CLI mimicking basic Linux commands like ls, mkdir,  cd, pwd and more.",
    img: "/Logos/go_kit_cover.png",
    iconLists: ["golang.svg"],
    link: "",
    live: "Github"
  },

  {
    id: 1,
    title: "Zap Url",
    des: "A tool for shortening urls and sharing it",
    img: "/zap_url_cover.png",
    iconLists: ["golang.svg", "svelte.svg", "docker.svg", "consul.svg", "redis.svg", "postgresql.svg"],
    link: "https://www.zapurl.tech",
    live: "Live"
  },
  {
    id: 2,
    title: "Movie Microservice",
    des: "A web api for storing and retrieving movie metadata and ratings.",
    img: "/Logos/movie_cover.png",
    iconLists: ["golang.svg", "docker.svg", "consul.svg", "kubernetes.svg", "kafka.svg"],
    link: "https://github.com/bikraj2/movie_microservice.git",
    live: "Github"
  },
  {
    id: 3,
    title: "Cinlim",
    des: "A CRUD app for movie with authenticaiton,pefromance metrics and many more features.",
    img: "/Logos/cinlim_cover.png",
    iconLists: ["golang.svg", "postgresql.svg"],
    link: "https://github.com/bikraj2/Cinlim",
    live: "Github"
  },
  {
    id: 4,
    title: "Aprupa_parichay",
    des: "UI only implementation of shopping app on flutter",
    img: "/Logos/apurap_parichaya_cover.png",
    iconLists: ["dart.svg", "flutter.svg"],
    link: "https://github.com/bikraj2/aprupa_parichay",

    live: "Github"
  },
  //{
  //  id: 5,
  //  title: "Snipit",
  //  des: "A simple web application App where users can save, manage, and retrieve code snippets or text files. ",
  //  img: "/Logos/bitebuddy_cover.png",
  //  iconLists: ["dart.svg", "flutter.svg", "node.svg", "mongo.svg", "express.svg"],
  //  link: "https://github.com/bikraj2/biteBuddy.git",
  //  live: "Github"
  //},
  {
    id: 6,
    title: "BiteBuddy",
    des: "dining experience. This innovative app allows users to explore a wide variety of foods from multiple restaurants while also offering valuable insights into the nutritional content of the dishes",
    img: "/Logos/bitebuddy_cover.png",
    iconLists: ["dart.svg", "flutter.svg", "node.svg", "mongo.svg", "express.svg"],
    link: "https://github.com/bikraj2/biteBuddy.git",
    live: "Github"
  },
  {
    id: 7,
    title: "3D Maze Exploration",
    des: "A simple 3D maze made with python and opengl",
    img: "/Logos/3D_maze_cover.png",
    iconLists: ["python.svg", "opengl.svg"],
    link: "https://github.com/bikraj2/3D-Maze",
    live: "Github"

  }
];


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Research Assistant",
    company: "Networked Wireless Systems (NeWS) Lab, IIT Hyderabad",
    companyLink: "",
    desc: "Developed PyTorch models with a novel continual learning approach. Worked with BODMAS, Androzoo, and ApiGraph datasets, benchmarking against 6+ state-of-the-art methods.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    startDate: "Sept 2025",
    endDate: "Jan 2025"
  },
  {
    id: 2,
    title: "Flutter Developer",
    company: "Freelance",

    companyLink: "",
    desc: "Developed a Flutter app for international trade of electronics, integrating Stream Chat for real-time messaging, Firebase for data storage, and BLoC for state management with clean architecture.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
    startDate: "March 2024",
    endDate: "May 2024"
  },
  {
    id: 3,
    title: "Javascript Community Co-ordinator ",
    company: "KUOSC",
    companyLink: "",
    desc: "Organized 10+ JavaScript workshops and led a '30 Days of Learning JavaScript' initiative, providing daily resources to help participants master web development fundamentals.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
    startDate: "Sept 2025",
    endDate: "Jan 2025"
  },
  {
    id: 4,
    title: "Logistics Lead",
    company: " KU Hackfest 2023",
    companyLink: "",
    desc: "Arranged accommodation, equipment, and tools for an in-person hackathon with 200+ participants.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    startDate: "Sep 2023",
    endDate: "Oct 2023"
  },
  {
    id: 5,
    title: "Operations Lead | AR Treasure Hunt 2022 & 2023",
    companyLink: "",
    company: "KUCC",
    desc: "Managed logistics for both online and physical phases of the AR Treasure Hunt, handling 500+ online participants and 12 on-site finalists.",
    className: "md:col-span-2",
    thumbnail: "/exp5.svg",
    startDate: "2022",
    endDate: "2023"
  },
  {
    id: 6,
    title: "Designer | IT Express 2022",
    company: "KUCC",
    companyLink: "",
    desc: "Designed dynamic magazine layouts to enhance content presentation, collaborating with the editorial team to improve reader engagement.",
    className: "md:col-span-2",
    thumbnail: "/exp6.svg",
    startDate: "2022",
    endDate: "2022"
  },
];
export const socialMedia = [
  {
    id: 1,
    name: "github",
    img: "/github.svg",
    link: "https://github.com/bikraj2"
  },
  {
    id: 2,

    name: "x",
    img: "/twit.svg",
    link: "https://x.com/xtha_bikraj"
  },
  {
    id: 3,

    name: "linkedin",
    link: "https://www.linkedin.com/in/bikraj-shrestha-75950a200/",
    img: "/link.svg",
  },
];


export const achievements = [
  {
    position: "Winner",
    event: "Malware Analysis Hackathon",
    organizer: "IIT Madras",
    desc: "Developed a Machine Learning model for Malware Detection. Awarded a prize of Rs 1 Lakh for the winning submission.",
    link: "https://www.linkedin.com/posts/cystariitm_cybersecurity-techinnovation-hackathon-activity-7259838899672289280-l498?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADNVQ7UB4eZVBCGLepggS4sMQkLK4fQ5Hqo", // Replace with actual link if available
    image: "/Logos/iit_madras.png"
  },
  //{
  //  position: "Second Place",
  //  event: "Hackathon (CS3390)",
  //  organizer: "IIT Hyderabad",
  //  desc: "Secured second place in the Foundation of Machine Learning's Kaggle Based Hackathon.",
  //  //link: "https://example.com/cs3390-hackathon",
  //},
  {
    position: "Winner",
    event: "Mobile Rush, It Meet",
    organizer: "Kathmandu University",
    desc: "Developed a precise, responsive, and reactive user interface for mobile using Flutter adhering to the provided design.",
    link: "",
    image: "/Logos/it_meet.png"
  },
  {
    position: "Tourism Track Winner",
    event: "Hack-a-week, LOCUS",
    organizer: "IOE Pulchowk",
    desc: "Created an AR app using Vuforia and Unity for Mobile that can display information about different objects present in cultural heritage.",
    link: "",
    image: "/Logos/locus.png"
  },
  {
    position: "Open Innovation Track Winner",
    event: "AI Crusade, AI Meet",
    organizer: "Kathmandu University",
    desc: "Created a mobile app using Flutter that generates AI commentary.",
    image: "/Logos/ku.png"
    //link: "https://example.com/ai-crusade",
  },
  //{
  //  position: "Best Presentation",
  //  event: "OSM Hackfest",
  //  organizer: "Nepal",
  //  desc: "Used OSM and Machine Learning to identify areas requiring hospital construction. Applied K-Means clustering to find community points and DBSCAN to determine a central location for new hospitals.",
  //  link: "https://example.com/osm-hackfest",
  //},
];

export const TimelineData = [
  {
    course: "BTech. CSE (Final Year Exchange Student)",
    institution: "Indian Institute of Technology",
    location: "Hyderabad, India",
    date: "2024 - Present",
    gpa: "9.19/10",
  },
  {
    course: "Bachelors in Computer Engineering",
    institution: "Kathmandu University",
    location: "Dhulikhel, Nepal",
    date: "2020 - Present",
    gpa: "3.99 / 4.0",
  },
  {
    course: "+2 Science",
    institution: "St. Xavier's College",
    location: "Maitighar, Kathmandu",
    date: "2019",
    gpa: "3.69 / 4.0",
  },
  {
    course: "SEE",
    institution: "PPEHSS",
    location: "Imadol, Lalitpur",
    date: "2017",
    gpa: "3.9 / 4.0",
  },
];

export const skills = [
  { name: "Go", icon: "/golang.svg" },
  { name: "Python", icon: "/python.svg" },
  {
    name: "Javascript", icon: " /js.svg"
  },
  { name: "Dart", icon: "/dart.svg" },
  { name: "Html", icon: "/html.svg" },
  { name: "Css", icon: "/css.svg" },
  //{ name: "LaTeX", icon: "/latex.svg" },
];

export const technologies = [
  { name: "Kubernetes", icon: "/kubernetes.svg" },
  { name: "Git", icon: "/git.svg" },
  { name: "Pytorch", icon: "/pytorch.svg" },
  { name: "Docker", icon: "/docker.svg" },
  { name: "Redis", icon: "/redis.svg" },
  { name: "PostgreSQL", icon: "/postgresql.svg" },
  { name: "Flutter", icon: "/flutter.svg" },
  { name: "MongoDb", icon: "/mongo.svg" },
  { name: "Firebase", icon: "/firebase.svg" },
  { name: "Kafka", icon: "/kafka.svg" },
  { name: "Node", icon: "/node.svg" },
];


