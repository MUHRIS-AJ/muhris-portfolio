import { FaDiscord, FaGithub, FaMapPin, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase, HiAcademicCap, HiBadgeCheck } from "react-icons/hi";

export const config = {
    developer: {
        name: "Muhrees Abool Jayah",
        profileImage: "/profile-main.jpg",
        title: "Data Analyst | Machine Learning & Data Visualization | Python • SQL • Power BI",
        degrees: "BSc. Honours Degree in Computing & Information Systems"
    },
    social: {
        github: "MUHRIS-AJ",
        linkedin: "muhrees-abool-jayah-975220350",
        linkedinUrl: "https://www.linkedin.com/in/muhrees-abool-jayah-975220350/",
        instagram: "hum_x_nur",
        instagramUrl: "https://www.instagram.com/hum_x_nur/",
        whatsapp: "+94 77 5551 712",
        whatsappUrl: "https://wa.me/94775551712"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    // Optional curated projects for the /projects page
    projects: [],
    recentTracks: false, // Enable/disable Spotify recent tracks
    skills: [
        {
            title: "Technical Skills",
            icon: <HiCode />,
            description: "Core programming and analysis stack",
            bgClass: "bg-purple-500/10",
            iconClass: "text-purple-400",
            skills: [
                { name: "Python", level: "Advanced", hot: true, image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=2000&auto=format&fit=crop" },
                { name: "SQL", level: "Advanced", hot: true, image: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97663?q=80&w=2070&auto=format&fit=crop" },
                { name: "Microsoft Excel", level: "Advanced", hot: true, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" },
                { name: "Pandas & NumPy", level: "Advanced", image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=2070&auto=format&fit=crop" },
                { name: "React & Next.js", level: "Intermediate", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop" },
                { name: "PHP", level: "Intermediate", image: "https://images.unsplash.com/photo-1599507593361-9f9392ed93c9?q=80&w=2070&auto=format&fit=crop" },
                { name: "HTML5/CSS3", level: "Advanced", image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop" },
                { name: "Git & GitHub", level: "Advanced", image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop" }
            ]
        },
        {
            title: "Data Science & AI",
            icon: <HiBadgeCheck />,
            description: "Advanced analytics and intelligence",
            bgClass: "bg-indigo-500/10",
            iconClass: "text-indigo-400",
            skills: [
                { name: "Data Analytics", level: "Advanced", hot: true, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
                { name: "Machine Learning", level: "Intermediate", hot: true, image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2032&auto=format&fit=crop" },
                { name: "Deep Learning (CNN)", level: "Intermediate", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop" },
                { name: "Computer Vision", level: "Intermediate", image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=2070&auto=format&fit=crop" },
                { name: "NLP", level: "Intermediate", image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop" },
                { name: "Power BI & Tableau", level: "Intermediate", hot: true, image: "https://images.unsplash.com/photo-1543286282-e883584852cc?q=80&w=2070&auto=format&fit=crop" },
                { name: "Statistical Analysis", level: "Advanced", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop" },
                { name: "Model Evaluation", level: "Intermediate", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" }
            ]
        },
        {
            title: "Tools & Technologies",
            icon: <HiCube />,
            description: "Software and environment tools",
            bgClass: "bg-green-500/10",
            iconClass: "text-green-400",
            skills: [
                { name: "Jupyter", level: "Advanced", image: "https://images.unsplash.com/photo-1592609931095-54a2168ae893?q=80&w=2070&auto=format&fit=crop" },
                { name: "Antigravity AI", level: "Expert", hot: true, image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop" },
                { name: "Power Query", level: "Advanced", image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?q=80&w=2070&auto=format&fit=crop" },
                { name: "IBM Cloud", level: "Intermediate", image: "https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?q=80&w=2070&auto=format&fit=crop" },
                { name: "XAMPP/WAMP", level: "Intermediate", image: "https://images.unsplash.com/photo-1558494949-efc02570fbc9?q=80&w=2068&auto=format&fit=crop" },
                { name: "WordPress", level: "Intermediate", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop" },
                { name: "IOT", level: "Intermediate", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" }
            ]
        }
    ],
    education: [
        {
            institution: "Eastern University Sri Lanka",
            degree: "Bachelor's degree, Information Communication Technology",
            period: "2025 - Present",
            location: "Sri Lanka",
            description: "Currently pursuing Bachelor's degree in ICT",
            grade: "Just Selected",
            image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop"
        },
        {
            institution: "University of Colombo",
            degree: "Python Programming",
            period: "Aug 2025 - Sep 2025",
            location: "Colombo, Sri Lanka",
            description: "Comprehensive Python programming course covering fundamentals and advanced topics",
            skills: ["Pandas", "MySQL", "SQL", "NumPy", "Python", "Object-Oriented Programming (OOP)", "Graphical User Interface (GUI)"],
            image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop"
        },
        {
            institution: "British Council",
            degree: "BC English (B1)",
            period: "Feb 2025 - Aug 2026",
            location: "Sri Lanka",
            description: "English language proficiency certification",
            grade: "B1",
            skills: ["Speaking", "Listening", "Reading", "Writing"],
            image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop"
        },
        {
            institution: "Carmel Fatima College, KalmunaI",
            degree: "Grade 1-13",
            period: "Jan 2006 - Dec 2024",
            location: "KalmunaI, Sri Lanka",
            description: "A fast learner with a good performance in studies, class topper",
            grade: "Class Topper",
            achievements: [
                "A/L Examination in Technology: C3",
                "Z-Score: 1.0098",
                "O/L Examination: 3A4B2C",
                "Activities: GOOD STUDENT, BEST STUDENT"
            ],
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
        }
    ],
    certifications: [
        {
            title: "Data Analytics",
            issuer: "NoviTech R&D Pvt Ltd",
            issuedDate: "Dec 2025",
            credentialId: "NT_B36DAE05",
            skills: ["Data Analysis", "Python (Pandas, NumPy)", "Microsoft Excel", "Power BI"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Excel Dynamic Dashboards",
            issuer: "NoviTech R&D Pvt Ltd",
            issuedDate: "Dec 2025",
            skills: ["Microsoft Excel", "Power BI", "Power Query", "Dashboards"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
        },
        {
            title: "PYTHON FUNDAMENTALS",
            issuer: "University of Colombo School of Computing",
            issuedDate: "Oct 2025",
            credentialId: "CSC/PF/2025/GR_03/016",
            skills: ["Python", "NumPy", "pandas", "MySQLi"],
            image: "https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=2062&auto=format&fit=crop"
        },
        {
            title: "Algorithms & Flowcharts",
            issuer: "IBM",
            issuedDate: "Oct 2025",
            credentialId: "FRWLXZW4SGB9",
            skills: ["Program Development", "Computational Thinking", "Algorithms", "Computer Science"],
            image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2128&auto=format&fit=crop"
        },
        {
            title: "Tools for Data Science",
            issuer: "IBM",
            issuedDate: "Sep 2025",
            credentialId: "DIVCBPNU7C9N",
            skills: ["Data Science", "Python", "Github", "IBM Cloud", "Jupyter"],
            image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1974&auto=format&fit=crop"
        },
        {
            title: "The Data Science Profession",
            issuer: "IBM",
            issuedDate: "Apr 2025",
            credentialId: "D9OVHFOVNQB8",
            skills: ["Applied ML", "Data Science", "ML Algorithms", "Python"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
        }
    ],
    experiences: [
        {
            company: "NoviTech R&D Pvt Ltd",
            position: "Data Analyst Intern",
            period: "Nov 2025 - Dec 2025",
            description: "Assisted in data collection, cleaning, and preparation using Python and Excel. Created interactive dashboards and visual reports using Power BI and Tableau.",
            technologies: ["Python", "Excel", "Power BI", "Tableau", "PHP", "Statistical Analysis"]
        },
        {
            company: "NoviTech R&D Pvt Ltd",
            position: "Artificial Intelligence Intern",
            period: "Nov 2025 - Dec 2025",
            description: "Intensive program covering AI, ML, Deep Learning, CV, and NLP. Built projects like chatbots, face recognition, and object detection.",
            technologies: ["AI", "Computer Vision", "Deep Learning", "Machine Learning", "Neural Networks"]
        },
        {
            company: "NoviTech R&D Pvt Ltd",
            position: "Machine Learning Intern",
            period: "Nov 2025 - Dec 2025",
            description: "Data analysis to identify trends and patterns. Assisted in developing and evaluating machine learning models like CNN and NLP.",
            technologies: ["Machine Learning", "Model Evaluation", "Deep Learning (CNN)", "NLP", "Python"]
        }
    ],
    about: {
        title: "Who Am I?",
        description: "Data Analyst skilled in Machine Learning and Data Visualization with hands-on experience in building intelligent solutions. Currently working at NoviTech R&D Pvt Ltd.",
        fit: "How I Fit",
        fitDescription: "I transform complex data into actionable insights through Python, SQL, Power BI, and Machine Learning. Passionate about making data-driven decisions accessible.",
        knowledge: "My Knowledge",
        knowledgeDescription: "Expertise in data analysis, ML model development, statistical analysis, and dashboard creation using industry-standard tools and frameworks."
    },
    contactInfo: [
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@MUHRIS-AJ",
            link: `https://github.com/MUHRIS-AJ`
        },
        {
            icon: <FaLinkedin className="w-5 h-5" />,
            label: "LinkedIn",
            value: "Muhrees Abool Jayah",
            link: "https://www.linkedin.com/in/muhrees-abool-jayah-975220350/"
        },
        {
            icon: <FaInstagram className="w-5 h-5" />,
            label: "Instagram",
            value: "@hum_x_nur",
            link: "https://www.instagram.com/hum_x_nur/"
        },
        {
            icon: <FaWhatsapp className="w-5 h-5" />,
            label: "WhatsApp",
            value: "+94 77 5551 712",
            link: "https://wa.me/94775551712"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "Colombo, Sri Lanka",
            link: null
        }
    ]
}
