import { faTwitter, faFacebook, faInstagram, faWhatsapp, faYoutubeSquare  } from '@fortawesome/free-brands-svg-icons'
import { faGraduationCap, faFlask, faMusic, faGavel, faComments,  faCreditCard, faHeart, faPhoneAlt, faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import President from '../assets/img/President.jpg'
import Principal from '../assets/img/Principal_Sir.jpg'

export const socialLinks = [
    {
        icon: faFacebook,
        url: '#',
        backgroundColor: '#3b5998'

    },
    {
        icon: faTwitter,
        url: '#',
        backgroundColor: '#1da1f2'
    },
    {
        icon: faInstagram,
        url: '#',
        backgroundColor: '#e4405f'
    },

    {
        icon: faYoutubeSquare,
        url: '#',
        backgroundColor: '#ff0000'
    },

    {
        icon: faWhatsapp,
        url: '#',
        backgroundColor: '#25D366'
    }
];

export const headerInfo = {
    subtitle: 'Dwarka Bahuddeshiya Gramin Vikas Foundation’s',
    title: 'Shree Sant Gajanan Maharaj College of Pharmacy',
    subjects: '(B.Pharmacy & D.Pharmacy)',
    address: (
      <>
        Near Palnaghar, Sagwan Road, Buldhana, Maharashtra 443001.<br />
        Affiliated to Sant Gadge Baba Amravati University, Amravati | Estd. in 2012.
      </>
    ),
    certification: 'GOLD CATEGORY IN AICTE-CII SURVEY | Approved by PCI and AICTE, New Delhi | ISO 9001:2015 Certified'
};





  export const academicIcons = [

    { id:1,
      title: "ACADEMICS",
      content: "We provide excellent quality of education to our learners. Our aim is to bring all round development in our students.",
      icon: faGraduationCap
    },
    { id:2,
      title: "RESEARCH",
      content: "Come, satisfy your greed for research. We have M.Pharm and Ph.D. programs with excellent lab facilities.",
      icon: faFlask
    },
    { id:3,
      title: "SPORTS & CULTURE",
      content: "Humongous playground with variety of sports facilities is available at RSCP, Buldana. It's your play time!",
      icon: faMusic
    }
  ];


  export const photoGallaryImg =[
    "https://rscp.ac.in/wp-content/uploads/DSC_4354-scaled-300x200.jpg",
    "https://rscp.ac.in/wp-content/uploads/IMG-20230316-WA0033-300x225.jpg",
    "https://rscp.ac.in/wp-content/uploads/IMG-20230308-WA0032-300x169.jpg"
  ];

  export const items = [
    { name: 'e-Grievances', icon: faGavel },
    { name: 'Online Feedback', icon: faComments },
    { name: 'Alumni', icon: faGraduationCap },
    { name: 'Online Payment', icon: faCreditCard },
    { name: 'vmeduLife', icon: faHeart }
  ];


  export const footerSections = [
    {
      title: 'Dwarka Bahuddeshiya Gramin Vikas Foundation’s',
      content: [
        'Shri Sant Gajanan Maharaj , College of Pharmacy',
        'Sagwan -Buldhana',
        'Buldhana, 443001, M.S., India'
      ]
    },
    {
      title: 'IMPORTANT LINKS',
      content: ['IQAC', 'NIRF', 'AISHE', 'Approvals', 'CO, PO, PEO, PSO', 'CDC']
    },
    {
      title: 'QUICK LINKS',
      content: ['Admissions', 'Facilities', 'Research', 'Activities', 'Committees', 'Courses', 'Feedback', 'Email Login']
    },
    {
      title: 'STUDENT CORNER',
      content: ['Courses', 'Grievances', 'SC/ST Cell', 'Anti-ragging Help', 'Scholarships', 'Hall of Fame', 'Feedback', 'eLearning System']
    },
    {
      title: 'CONTACT US',
      content: [
        { icon: faPhoneAlt, text: '+91-9921638101' },
        
        { icon: faEnvelope, text: 'ssgm.bpharm@gmail.com' }
      ]
    }
  ];


  export const messagesData = [
    {
      title: "Founder's Message",
      name: "Hon. Shri. Dhrupatraoji Sawale",
      position: "President, Ex.MLA",
      message: "We appreciate your interest in the Rajarshi Shahu College of Pharmacy (RSCP) at Dwarka Bahuddeshiya Gramin Vikas Foundation (DBGVF). Global recognition and contributions to nationa ...",
      image: President
    },
    {
      title: "Principal's Message",
      name: "Dr. Shirish Jain",
      qualifications: "M.Pharm, Ph.D.",
      message: "Welcome to RSCP, an institute whose major emphasis is assisting students in realizing their goals and ambitions. Our great leader, Hon. President, Shri. Dhrupatraoji Sawale Saheb has always wished to...",
      image: Principal
    }
  ];
  