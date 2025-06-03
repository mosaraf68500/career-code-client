import React, { Suspense } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';

const jobsPromises=fetch('http://localhost:3000/jobs').then(res=>res.json());

const Home = () => {
 
   
    return (
        <div className='w-11/12 mx-auto'>
            <Banner></Banner>
           <Suspense fallback={<h1>data loading</h1>}>
             <HotJobs jobsPromises={jobsPromises}></HotJobs>
           </Suspense>
        </div>
    );
};

export default Home;