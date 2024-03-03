import { academicIcons } from '../../shared/constants';
import PhotoSlider from '../Slider/PhotoSlider';
import Section1 from './Section1';
import dept1 from '../../assets/img/dept1.jpeg'
import dept2 from '../../assets/img/dept2.jpeg'
// const photos = [
//     {
//       src: 'https://rscp.ac.in/wp-content/uploads/flayer-450x267.jpg ',
//     //   description: 'Description for Image 1',
//     },
//     {
//       src: 'https://rscp.ac.in/wp-content/uploads/ecmg-day-450x267.png',
//     //   description: 'Description for Image 2',
//     },
  
//     {
//       src: 'https://rscp.ac.in/wp-content/uploads/Skill-Development-Program-2023-5-450x267.jpg',
//     //   description: 'Description for Image 3',
//     },
//     // Add more images as needed
//   ];
const MainSection = () => {
    return (
        <section className="container d-flex justify-content-between">
            <div className="flex flex-column justify-content-center" style={{ width: "30%" }}>
                <div className="flex flex-column" style={{ backgroundColor: "#053750" }}>
                    <h3 className='p-3 pt-5 text-light'>LIFE @ssgmcop</h3>
                    {academicIcons.map(item => <Section1 key={item.id} {...item} />)}
                    <button className='btn btn-outline-info m-3 p-2'>View All Facilities</button>

                </div>
                {/* <div><PhotoSlider photos={photos}/></div> */}
                {/* <div>3</div> */}
            </div>
            <div className="flex flex-column " >
                <div className='d-flex justify-content-between m-5'>
                    <div className='shadow p-3 mb-5 bg-body rounded'><img src={dept1} width="280px"/></div>
                    <div className='shadow p-3 mb-5 bg-body rounded'><img src={dept2} width="280px"/></div>

                </div>
                
                {/* <div className='d-flex justify-content-evenly'><span>..................................................  </span><h3>FEEDBACKS</h3><span>..........................................................</span></div>
                <div className='d-flex my-5'>
                    <div className='mx-3'>
                        <iframe width="418" height="235"
                        src="https://www.youtube.com/embed/HzaYtcsFQg8" 
                        title="Parent Feedback - Rajarshi Shahu College of Pharmacy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div>
                        <iframe width="418" height="235"
                        src="https://www.youtube.com/embed/BH7QAdD5kr4" 
                        title="Parent Feedback - Rajarshi Shahu College of Pharmacy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <div> <div className='d-flex justify-content-evenly'><span>..................................................  </span><h3>ALUMNI TESTIMONIALS</h3><span>..........................................................</span></div></div>
                <div className='mt-5'>
                    <div>
                        <p>
                            
						RSCP was more than a college to me. Its a privilege to be connected to this institution. A place where I gained knowledge at best which is needed for survival in the outer world. The environment of RSCP was very nice just like a family. The teachers were like a backbone for me, friends were the reason for my smile and juniors were like younger siblings. Everyone recognized my talent with open arms always. An Amazing institution that teaches you self discipline, confidence, and problem-solving essential traits to start your journey. 					
                        </p>
                    </div>
                    <div className='d-flex justify-content-left align-items-center'>
                        <div><img src="https://rscp.ac.in/wp-content/uploads/AMRUTA.jpg" className="rounded-circle mx-3" alt="..." width={75}/></div>
                        <div><h4>Amruta S Khande</h4></div>

                    </div>
                </div> */}
            </div>

        </section>
    );
};

export default MainSection;