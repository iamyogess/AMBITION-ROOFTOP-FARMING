import React from 'react'
import "./Plan.scss"
import { Link } from 'react-router-dom';

function Plan() {
    return (
        <>
            <div className="plan mb-16">
                <div className="grid grid-cols-2 relative">
                    <div className="plan-left  text-center text-white">
                        <div className="left-bg py-[160px]">   
                          <h5 className='opacity-none'><a href="">Lets learn about Rooftop Farming</a></h5>
                        </div>
                    </div>
                    <div className="plan-right  text-center text-white">
                        <div className="right-bg py-[160px]">   
                          <h5 className='opacity-none'><Link to="/kitchen-waste">Lets learn about Fertilizing Kitchen Wastes</Link></h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Plan