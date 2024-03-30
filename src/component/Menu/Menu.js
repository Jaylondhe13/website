import React, {useState}from 'react';
import MenuItem from './MenuItem';
import logo from '../../assets/img/logo.jpg'
import Slider from '../Slider/Slider';
import { images} from '../../shared/constants';
import committeesData from '../../assets/data/committee.json'
import galleryImages from '../../assets/data/gallery.json'



function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { label: 'HOME', path: '/' },

    {
      label: 'ABOUT',
      model: [
        {
          title: 'ABOUT US',
          content: [
            { label: 'ABOUT SOCIETY', path: '/about/#' },
            { label: 'ABOUT THE SSGMCOP', path: '/about/#' },
            { label: 'VISION & MISSION', path: '/about/#' },
            { label: 'APPROVALS', path: '/about/#' },
            { label: 'WHY SSGMCOP ?', path: '/about/#' },
            { label: 'ANNUAL REPORTS', path: '/about/#' }
          ]
        },
        {
          title: 'MESSAGE',
          content: [
            { label: "FOUNDER'S MESSAGE", path: '/about/#' },
            { label: "PRINCIPAL'S MESSAGE", path: '/about/#' },
            { label: "IQAC COORDINATOR'S MESSAGE", path: '/about/#' },
            { label: "NSS COORDINATOR'S MESSAGE", path: '/about/#' },
            { label: 'FEEDBACKS', path: '/about/#' }
          ]
        },
        {
          title: 'OUR TEAM',
          content: [
            { label: 'OUR TEAM', path: '/about/#' },
            { label: 'GOVERNING BODY', path: '/about/#' },
            { label: 'CDC', path: '/about/#' },
            { label: 'IQAC COMMITTEE', path: '/about/#' },
            { label: 'TEACHING STAFF', path: '/about/#' },
            { label: 'ADMINISTRATIVE STAFF', path: '/about/#' },
            { label: 'NON-TEACHING STAFF', path: '/about/#' }
          ]
        },
        {
          title: '',
          content: [<img
            src={logo}
            alt="College Logo"
            className="img-fluid " style={{width:"150px", height:"150px", borderRadius:"45px"}}
          />]
        }
      ]
    },
    {
      label: 'ACADEMICS',
      model: [
        // {
        //   title: 'APPROVALS',
        //   content: ['PCI', 'SGBAU', 'AICTE', 'AICTE DISCLOSURES']
        // },

        // {
        //   title: 'APPROVALS',
        //   content: ["MAHARASHTRA GOVT.", "DTE", "AISHE"]
        // },
        // {
        //   title: 'DISCLOSURES',
        //   content: ['PCI-SIF', 'NIRF', 'AUDIT STATEMENT']
        // },
        // {
        //   title: 'DISCLOSURES',
        //   content: ['IQAC/AQAR', 'FEES STRUCTURE', 'ORGANOGRAM', 'COMMITTEES']
        // }
      ]
    },
    {
      label: 'ADMISSIONS',
      model: [
        // {
        //   title: 'APPROVALS',
        //   content: ['PCI', 'SGBAU', 'AICTE', 'AICTE DISCLOSURES']
        // },

        // {
        //   title: 'APPROVALS',
        //   content: ["MAHARASHTRA GOVT.", "DTE", "AISHE"]
        // },
        // {
        //   title: 'DISCLOSURES',
        //   content: ['PCI-SIF', 'NIRF', 'AUDIT STATEMENT']
        // },
        // {
        //   title: 'DISCLOSURES',
        //   content: ['IQAC/AQAR', 'FEES STRUCTURE', 'ORGANOGRAM', 'COMMITTEES']
        // }
      ]
    },
    {
      label: 'STUDENT CORNER',
      model: [
        // {
        //   title: 'APPROVALS',
        //   content: ['PCI', 'SGBAU', 'AICTE', 'AICTE DISCLOSURES']
        // },

        // {
        //   title: 'APPROVALS',
        //   content: ["MAHARASHTRA GOVT.", "DTE", "AISHE"]
        // },
        // {
        //   title: 'DISCLOSURES',
        //   content: ['PCI-SIF', 'NIRF', 'AUDIT STATEMENT']
        // },
        // {
        //   title: 'DISCLOSURES',
        //   content: ['IQAC/AQAR', 'FEES STRUCTURE', 'ORGANOGRAM', 'COMMITTEES']
        // }
      ]
    },
    {
      label: 'COMMITTEE',
      model: [

        {
          title: 'COMMITTEE',
          content: committeesData.map(committee => ({
            label: committee.name,
            pdfUrl: committee.pdfUrl 
          }))
        }
        // {
        //   title: 'COMMITTEE',
        //   content: ['Portfolio distribution', 'Gravience redrressal committee', 'Collge council comittee for inspection']
        // },

        // {
        //   title: 'APPROVALS',
        //   content: ["MAHARASHTRA GOVT.", "DTE", "AISHE"]
        // },
        // {
        //   title: 'DISCLOSURES',
        //   content: ['PCI-SIF', 'NIRF', 'AUDIT STATEMENT']
        // },
        // {
        //   title: 'DISCLOSURES',
        //   content: ['IQAC/AQAR', 'FEES STRUCTURE', 'ORGANOGRAM', 'COMMITTEES']
        // }
      ]
    },
    {
      label: 'GALLARY',
      model: [
        // {
        //   title: 'APPROVALS',
        //   content: ['PCI', 'SGBAU', 'AICTE', 'AICTE DISCLOSURES']
        // },

        {
          title: 'PHOTO GALLERY',
          content: [
            {label:'Gallery', path:'gallery'},
            {label:<Slider images={galleryImages} />},
         ]
        },
        // {
        //   title: 'DISCLOSURES',
        //   content: ['PCI-SIF', 'NIRF', 'AUDIT STATEMENT']
        // },
        // {
        //   title: 'DISCLOSURES',
        //   content: ['IQAC/AQAR', 'FEES STRUCTURE', 'ORGANOGRAM', 'COMMITTEES']
        // }
      ]
    },
    {
      label: 'ONLINE PAYMENT',
      model: [
        // {
        //   title: 'APPROVALS',
        //   content: ['PCI', 'SGBAU', 'AICTE', 'AICTE DISCLOSURES']
        // },

        // {
        //   title: 'APPROVALS',
        //   content: ["MAHARASHTRA GOVT.", "DTE", "AISHE"]
        // },
        // {
        //   title: 'DISCLOSURES',
        //   content: ['PCI-SIF', 'NIRF', 'AUDIT STATEMENT']
        // },
        // {
        //   title: 'DISCLOSURES',
        //   content: ['IQAC/AQAR', 'FEES STRUCTURE', 'ORGANOGRAM', 'COMMITTEES']
        // },
        
      ]
    },

    {
      label: 'OTHER',
      model: [
        // {
        //   title: 'APPROVALS',
        //   content: ['PCI', 'SGBAU', 'AICTE', 'AICTE DISCLOSURES']
        // },

        // {
        //   title: 'APPROVALS',
        //   content: ["MAHARASHTRA GOVT.", "DTE", "AISHE"]
        // },
        // {
        //   title: 'DISCLOSURES',
        //   content: ['PCI-SIF', 'NIRF', 'AUDIT STATEMENT']
        // },
        // {
        //   title: 'DISCLOSURES',
        //   content: ['IQAC/AQAR', 'FEES STRUCTURE', 'ORGANOGRAM', 'COMMITTEES']
        // },
        
      ]
    }

    


  ];

  // const menuItems = [
  //   {
  //     label: 'Item 1',
  //     models: ['Model A', 'Model B', 'Model C']
  //   },
  //   {
  //     label: 'Item 2',
  //     models: ['Model X', 'Model Y', 'Model Z']
  //   },
    
  // ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='position-relative' style={{backgroundColor:'#053750'}}>
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-dark ">
          <div className="container-fluid justify-content-between">
            <button className="navbar-toggler" type="button" onClick={toggleMenu}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''} `}>
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0" >
                {menuItems.map((item, index) => (
                  <li key={index} className="nav-item">
                    <MenuItem {...item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
