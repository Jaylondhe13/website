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
      // date: "December 19, 2023",
      event: "update 1"
    },
    {
      // date: "December 7, 2023",
      event: "update 2"
    },
   
    {
      // date: "November 8, 2023",
      event: "update 3"
    },
    {
      // date: "October 28, 2023",
      event: "update 4"
    },
    {
      // date: "September 25, 2023",
      event: "update 5"
    },
    {
      // date: "September 18, 2023",
      event: "update 6"
    },
    
  ];

  return (
    <div className=' ms-5 text-center' style={{backgroundColor:"#053750"}}>
      <h2 className='text-light p-2'>Latest Updates</h2>
      <div className="latest-updates bg-light m-4" >
      
      <ul className="event-item text-center">
        {updates.map((update, index) => (
          <li key={index} >
             {/* {update.event} -<strong style={{fontSize:'12px', color:'gray'}}>{update.date}:</strong> */}
             {update.event}
          </li>
        ))}
      </ul>
    </div>

    </div>
    
  );
};

export default LatestUpdate;
