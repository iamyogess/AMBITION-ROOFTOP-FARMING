import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Query.scss"
import { faComment, faThumbsDown, faThumbsUp, faUser } from '@fortawesome/free-solid-svg-icons';

function Forum() {
    const [showButton, setShowButton] = useState(false);

    const handleTextAreaClick = () => {
        setShowButton(true);
    };

    const handleBlur = () => {
        setShowButton(false);
    };

    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleShowModal = () => {
        setShowModal(true);
    };
    return (
        <>
            <div className="forum py-12 mb-10">
                <div className="container">
                    <div className="forum-input m-start rounded-3xl w-[80%] m-auto px-[40px] py-7 mb-8 bg-[#FBF9FF] shadow-md">
                        <form action="">
                            <div className="flex items-center">
                                <div className="user-icon">
                                    <FontAwesomeIcon className='inline-block text-[20px] text-[#777]' icon={faUser} />
                                </div>
                                <textarea
                                    onFocus={handleTextAreaClick}
                                    onBlur={handleBlur}
                                    cols="10"
                                    rows="10"
                                    placeholder='Add a Query...'
                                    required
                                ></textarea>
                                <input type="submit" value="Post" className='bg-[#f3f2f5] text-[#797979] py-[8px] px-[25px] rounded-[50px]' />
                            </div>
                        </form>
                    </div>

                    <div className="queries m-start rounded-3xl m-auto w-[80%] px-[40px] py-7 shadow-xl bg-[#FBF9FF]">
                        <div className="mb-7">
                            <div className="flex items-center mb-[16px]">
                                <div className="user-icon mr-2">
                                    <FontAwesomeIcon className='inline-block text-[14px] text-[#777] bg-[#f3f2f5] py-[8px] px-[10px] rounded-[50%]' icon={faUser} />
                                </div>
                                <h6 className='text-[15px] font-semibold'>Satish Gurung <span className='font-normal text-[#797979] text-[13px]'>4 weeks ago</span></h6>
                            </div>
                            <div className="comment-section pb-[20px] tracking-[1px] border-b-[1px]">
                                <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, laboriosam?</p>
                                <div className="review mt-5">
                                    <div className="flex justify-start mb-[10px]">
                                        <div className="rate flex items-center bg-[#F3F2F5] rounded-3xl px-4">
                                            <div className="like border-r-[1px] border-[rgba(0,0,0,0.1)] me-3">
                                                <a href=""><FontAwesomeIcon className='me-2 text-[14px]' icon={faThumbsUp} /></a>
                                                <span className='me-3 text-[14px]'>13k</span>
                                            </div>
                                            <div className="dislike">
                                                <a href=""><FontAwesomeIcon className='me-2 text-[14px]' icon={faThumbsDown} /></a>
                                                <span className='text-[14px]'>3k</span>
                                            </div>
                                        </div>
                                        <div className="rate flex bg-[#F3F2F5] rounded-3xl px-4 py-[6px] ms-3">
                                            <p><a href=""><FontAwesomeIcon className='text-[14px]' icon={faComment} /></a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-7">
                            <div className="flex items-center mb-[16px]">
                                <div className="user-icon mr-2">
                                    <FontAwesomeIcon className='inline-block text-[14px] text-[#777] bg-[#f3f2f5] py-[8px] px-[10px] rounded-[50%]' icon={faUser} />
                                </div>
                                <h6 className='text-[15px] font-semibold'>Satish Gurung <span className='font-normal text-[#797979] text-[13px]'>4 weeks ago</span></h6>
                            </div>
                            <div className="comment-section pb-[20px] tracking-[1px] border-b-[1px]">
                                <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, laboriosam?</p>
                                <div className="review mt-5">
                                    <div className="flex justify-start mb-[10px]">
                                        <div className="rate flex items-center bg-[#F3F2F5] rounded-3xl px-4">
                                            <div className="like border-r-[1px] border-[rgba(0,0,0,0.1)] me-3">
                                                <a href=""><FontAwesomeIcon className='me-2 text-[14px]' icon={faThumbsUp} /></a>
                                                <span className='me-3 text-[14px]'>13k</span>
                                            </div>
                                            <div className="dislike">
                                                <a href=""><FontAwesomeIcon className='me-2 text-[14px]' icon={faThumbsDown} /></a>
                                                <span className='text-[14px]'>3k</span>
                                            </div>
                                        </div>
                                        <div className="rate flex bg-[#F3F2F5] rounded-3xl px-4 py-[6px] ms-3">
                                            <p><a href=""><FontAwesomeIcon className='text-[14px]' icon={faComment} /></a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex items-center mb-[16px]">
                                <div className="user-icon mr-2">
                                    <FontAwesomeIcon className='inline-block text-[14px] text-[#777] bg-[#f3f2f5] py-[8px] px-[10px] rounded-[50%]' icon={faUser} />
                                </div>
                                <h6 className='text-[15px] font-semibold'>Satish Gurung <span className='font-normal text-[#797979] text-[13px]'>4 weeks ago</span></h6>
                            </div>
                            <div className="comment-section pb-[20px] tracking-[1px]">
                                <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, laboriosam?</p>
                                <div className="review mt-5">
                                    <div className="flex justify-start mb-[10px]">
                                        <div className="rate flex items-center bg-[#F3F2F5] rounded-3xl px-4">
                                            <div className="like border-r-[1px] border-[rgba(0,0,0,0.1)] me-3">
                                                <a href=""><FontAwesomeIcon className='me-2 text-[14px]' icon={faThumbsUp} /></a>
                                                <span className='me-3 text-[14px]'>13k</span>
                                            </div>
                                            <div className="dislike">
                                                <a href=""><FontAwesomeIcon className='me-2 text-[14px]' icon={faThumbsDown} /></a>
                                                <span className='text-[14px]'>3k</span>
                                            </div>
                                        </div>
                                        <div className="rate flex bg-[#F3F2F5] rounded-3xl px-4 py-[6px] ms-3">
                                            <p><a href=""><FontAwesomeIcon className='text-[14px]' icon={faComment} /></a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forum