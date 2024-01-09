import React from 'react';
import MenuItem from './MenuItem';

function Menu() {
  const menuItems = [
    {label: 'HOME'},

    {
      label: 'ABOUT',
      model: [
        {
          title: 'ABOUT US',
          content: ['ABOUT SOCIETY', 'ABOUT THE RSCP', 'VISION & MISSION', 'APPROVALS', 'WHY RSCP ?', 'ANNUAL REPORTS']
        },

        {
          title: 'MESSAGE',
          content: ["'FOUNDER'S MESSAGE','PRINCIPAL'S MESSAGE'", "IQAC COORDINATOR'S MESSAGE", "NSS COORDINATOR'S MESSAGE", 'FEEDBACKS']
        },
        {
          title: 'OUR TEAM',
          content: ['OUR TEAM', 'GOVERNING BODY', 'CDC', 'IQAC COMMITTEE', 'TEACHING STAFF', 'ADMINISTRATIVE STAFF', 'NON-TEACHING STAFF']
        },
        {
          title: '',
          content: ['Courses', 'Grievances', 'SC/ST Cell', 'Anti-ragging Help', 'Scholarships', 'Hall of Fame', 'Feedback', 'eLearning System']
        }
      ]
    },
    {
      label: 'ACADEMICS',
      model: [
        {
          title: 'APPROVALS',
          content: ['PCI', 'SGBAU', 'AICTE', 'AICTE DISCLOSURES']
        },

        {
          title: 'APPROVALS',
          content: ["MAHARASHTRA GOVT.", "DTE", "AISHE"]
        },
        {
          title: 'DISCLOSURES',
          content: ['PCI-SIF', 'NIRF', 'AUDIT STATEMENT']
        },
        {
          title: 'DISCLOSURES',
          content: ['IQAC/AQAR', 'FEES STRUCTURE', 'ORGANOGRAM', 'COMMITTEES']
        }
      ]
    },
    {
      label: 'ADMISSIONS',
      model: [
        {
          title: 'APPROVALS',
          content: ['PCI', 'SGBAU', 'AICTE', 'AICTE DISCLOSURES']
        },

        {
          title: 'APPROVALS',
          content: ["MAHARASHTRA GOVT.", "DTE", "AISHE"]
        },
        {
          title: 'DISCLOSURES',
          content: ['PCI-SIF', 'NIRF', 'AUDIT STATEMENT']
        },
        {
          title: 'DISCLOSURES',
          content: ['IQAC/AQAR', 'FEES STRUCTURE', 'ORGANOGRAM', 'COMMITTEES']
        }
      ]
    },
    {
      label: 'STUDENT CORNER',
      model: [
        {
          title: 'APPROVALS',
          content: ['PCI', 'SGBAU', 'AICTE', 'AICTE DISCLOSURES']
        },

        {
          title: 'APPROVALS',
          content: ["MAHARASHTRA GOVT.", "DTE", "AISHE"]
        },
        {
          title: 'DISCLOSURES',
          content: ['PCI-SIF', 'NIRF', 'AUDIT STATEMENT']
        },
        {
          title: 'DISCLOSURES',
          content: ['IQAC/AQAR', 'FEES STRUCTURE', 'ORGANOGRAM', 'COMMITTEES']
        }
      ]
    },
    {
      label: 'COMMITTEE',
      model: [
        {
          title: 'APPROVALS',
          content: ['PCI', 'SGBAU', 'AICTE', 'AICTE DISCLOSURES']
        },

        {
          title: 'APPROVALS',
          content: ["MAHARASHTRA GOVT.", "DTE", "AISHE"]
        },
        {
          title: 'DISCLOSURES',
          content: ['PCI-SIF', 'NIRF', 'AUDIT STATEMENT']
        },
        {
          title: 'DISCLOSURES',
          content: ['IQAC/AQAR', 'FEES STRUCTURE', 'ORGANOGRAM', 'COMMITTEES']
        }
      ]
    },
    {
      label: 'GALLARY',
      model: [
        {
          title: 'APPROVALS',
          content: ['PCI', 'SGBAU', 'AICTE', 'AICTE DISCLOSURES']
        },

        {
          title: 'APPROVALS',
          content: ["MAHARASHTRA GOVT.", "DTE", "AISHE"]
        },
        {
          title: 'DISCLOSURES',
          content: ['PCI-SIF', 'NIRF', 'AUDIT STATEMENT']
        },
        {
          title: 'DISCLOSURES',
          content: ['IQAC/AQAR', 'FEES STRUCTURE', 'ORGANOGRAM', 'COMMITTEES']
        }
      ]
    },
    {
      label: 'ONLINE PAYMENT',
      model: [
        {
          title: 'APPROVALS',
          content: ['PCI', 'SGBAU', 'AICTE', 'AICTE DISCLOSURES']
        },

        {
          title: 'APPROVALS',
          content: ["MAHARASHTRA GOVT.", "DTE", "AISHE"]
        },
        {
          title: 'DISCLOSURES',
          content: ['PCI-SIF', 'NIRF', 'AUDIT STATEMENT']
        },
        {
          title: 'DISCLOSURES',
          content: ['IQAC/AQAR', 'FEES STRUCTURE', 'ORGANOGRAM', 'COMMITTEES']
        },
        
      ]
    },

    {
      label: 'OTHER',
      model: [
        {
          title: 'APPROVALS',
          content: ['PCI', 'SGBAU', 'AICTE', 'AICTE DISCLOSURES']
        },

        {
          title: 'APPROVALS',
          content: ["MAHARASHTRA GOVT.", "DTE", "AISHE"]
        },
        {
          title: 'DISCLOSURES',
          content: ['PCI-SIF', 'NIRF', 'AUDIT STATEMENT']
        },
        {
          title: 'DISCLOSURES',
          content: ['IQAC/AQAR', 'FEES STRUCTURE', 'ORGANOGRAM', 'COMMITTEES']
        },
        
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

  return (
    <div className='position-relative' style={{backgroundColor:'#053750'}}>
      <div className="d-flex  justify-content-evenly container">
      {menuItems.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>

    </div>
    
  );
}

export default Menu;
