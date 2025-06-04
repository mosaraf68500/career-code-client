import React, { Suspense, use } from 'react';
import { AuthContex } from '../contex/AuthContex';
import MyJobList from '../components/MyJobList';
import { MyPostedJObsPromise } from '../api/MypostedJobs';

const MyPostedJob = () => {
    const {user}=use(AuthContex);
    return (
        <div>
            <h1>My posted jobs</h1>
            <Suspense fallback={<h1>loading...</h1>}>
            <MyJobList MyPostedJObsPromise={MyPostedJObsPromise(user.email)}></MyJobList>


            </Suspense>
        </div>
    );
};

export default MyPostedJob;