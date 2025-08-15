import React from 'react'
import taskLogo from '../assets/logo.png';
import Places from '../components/Places';
const Home = () => {
    return (
        <div className=" container  py-4">
            <div className='text-center'>
                <img className='img-fluid' style={{ width: '80px', height: '90px' }} src={taskLogo} alt="" />
                <h1 className="fw-bold p-2" style={{ letterSpacing: '20px' }}>PLACEPICKER</h1>
                <p>create your personal collection of  places you <br />
                    would like to visit or you have visited</p>

                <div className='border border-1 rounded border-primary p-3'>
                    <h1 className="fw-bold fs-3" style={{ color: 'blue'}}>i'd like to visit...</h1>
                    <h5>select the places you would like to visit below</h5>
                </div>
                <div className='mt-3'>
                    <Places />
                </div>
            </div>

        </div>


    )
}

export default Home