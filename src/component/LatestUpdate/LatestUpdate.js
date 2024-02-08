// // LatestUpdate.js
// import { updates } from '../../shared/LatestInformation';

// // LatestUpdate.js

// // LatestUpdate.js

// import React from 'react';
// import { motion } from 'framer-motion';
// import './LatestUpdate.css';


// const LatestUpdate = () => {
//   return (
//     <div className="latest-update-relative-container">
//       <motion.div
//         className="latest-update-container"
//         initial={{ y: '100%' }}
//         animate={{ y: 0 }}
//         whileHover={{ y: 0 }}
//         transition={{ type: 'spring', stiffness: 300, damping: 25, yoyo: Infinity }}

//       >
//         <h3>Latest Updates</h3>
//         <div className="updates-container">
//           <motion.div
//             className="updates-list"
//             initial={{ y: '100%' }}
//             animate={{ y: 0 }}
//             transition={{ type: 'spring', stiffness: 300, damping: 25, yoyo: Infinity }}
//           >
//             <ul>
//               {updates.map((update, index) => (
//                 <motion.li
//                 initial={{ y: '100vh' }}
//                 animate={{ y: '-100vh' }}
//                 exit={{y:'100vh'}}
//                 transition={{ duration: 10, repeat: Infinity, repeatType: 'loop' }}
//                 style={{
                  
//                   height: '50px',
//                   background: 'lightblue',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   {update}
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>
//         </div>
//         <button className='btn btn-light mt-3'>View All Updates</button>
//       </motion.div>
      
//     </div>
//   );
// };

// export default LatestUpdate;


import React from 'react';
import './LatestUpdate.css'



const LatestUpdate = () => {
  const updates = [
    {
      date: "December 19, 2023",
      event: "Greatest glory of RSCP in AVISHKAR 2023"
    },
    {
      date: "December 7, 2023",
      event: "World AIDS Day Awareness"
    },
    {
      date: "November 30, 2023",
      event: "Session on Cyber security and Addiction free Indian Awareness"
    },
    {
      date: "November 8, 2023",
      event: "Blood Donation Camp 2023"
    },
    {
      date: "October 28, 2023",
      event: "Skill Development Program 2023"
    },
    {
      date: "September 25, 2023",
      event: "Worlds Pharmacist Day 2023 - Manthan 2023"
    },
    {
      date: "September 18, 2023",
      event: "Eco friendly Ganapati Making Competition 2023"
    },
    {
      date: "September 12, 2023",
      event: "Direct second year Admission Notification 2023-24"
    },
    {
      date: "September 7, 2023",
      event: "Admission Notification 2023-24 for B. Pharmacy First Year Ag..."
    }
  ];

  return (
    <div className=' ms-5 text-center' style={{backgroundColor:"#053750"}}>
      <h2 className='text-light p-2'>Latest Updates</h2>
      <div className="latest-updates bg-light m-4" >
      
      <ul className="event-item">
        {updates.map((update, index) => (
          <li key={index} >
             {update.event} -<strong style={{fontSize:'12px', color:'gray'}}>{update.date}:</strong>
          </li>
        ))}
      </ul>
    </div>

    </div>
    
  );
};

export default LatestUpdate;
