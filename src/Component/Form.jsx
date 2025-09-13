import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Form = () => {
    return (
        <>
            <div className="form-main">
                <div className="container">
                    <div className="form">

                        <div className="form-card">
                            <div className="icon-form">
                                <div className='info'><FaLocationDot /></div>
                                <p>43 Raymouth Rd. Baltemoer, London 391</p>
                            </div>


                            <div className="icon-form">
                                <div className='info'><MdOutlineForwardToInbox /></div>
                                <p>info@yourdomain.com</p>
                            </div>


                            <div className="icon-form">
                                <div className='info'><IoCall /></div>
                                +1 294 3925 3939
                            </div>


                        </div>
                        <form className='form-parent'>
                            <div className="from-group--half">
                                <label htmlFor="fName">First Name</label>
                                <input type="text" id='fName' />
                            </div>
                            <div className="from-group--half">
                                <label htmlFor="lName">Last Name</label>
                                <input type="text" id='lName' />

                            </div>
                            <div className="from-group">
                                <label htmlFor="Email">Email</label>
                                <input type="text" />
                            </div>
                            <div className="from-group">
                                <label htmlFor="Massage">Massage</label>
                                <textarea name="massage" id="massage"></textarea>
                            </div>
                            <button className='form-btn'>Send Massage</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Form