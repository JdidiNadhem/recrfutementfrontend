import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faBrain, faTicket } from "@fortawesome/free-solid-svg-icons"
import NavBar from './NavBar'

const JobDescription = () => {
    return (
        <>
            <NavBar />
            <div className='flex flex-row w-full'>
                <div className="w-[75%] shadow-md m-2 p-10 border-solid border-2 border-grey-500 rounded-lg">
                    <div class="flex flex-row mb-5">
                        <div class="flex flex-col w-full">
                            {/* <FontAwesomeIcon icon={faArrowLeft} /> */}
                            <p className='text-lg font-bold'>Job details</p>
                        </div>
                    </div>
                    <div class="flex flex-row mb-5">
                        <div class="flex flex-col w-full">
                            <h2 className='font-medium text-lg'>MERN professional dev needed</h2>
                        </div>
                    </div>

                    <div class="flex flex-row mb-5">
                        <div class="flex flex-col w-1/4">
                            <div className="p-2 rounded-md bg-slate-300 text-center font-md">
                                <p>Full Stack Developer</p>
                            </div>
                        </div>

                        <div class="flex flex-col w-1/4">
                            <p className='p-2 rounded-md text-sm'>Posted May 10, 2024</p>
                        </div>
                    </div>


                    <div class="flex flex-row mb-5">
                        <div class="flex flex-col w-full">
                            <h4 className='font-medium text-md'>Description</h4>
                        </div>
                    </div>

                    <div class="flex flex-row mb-5">
                        <div class="flex flex-col w-full">
                            <p>
                                In the world of AI, behavioural predictions are leading the charge to better machine learning.

                                There is so much happening in the AI space. Advances in the economic sectors have seen automated business practices rapidly increasing economic value. While the realm of the human sciences has used the power afforded by computational capabilities to solve many human based dilemmas. Even the art scene has adopted carefully selected ML applications to usher in the technological movement.

                                As a Senior Client Engineer, you'll work alongside other engineers, designers, and product managers to tackle everything from huge company initiatives to modest but important bug fixes, from start to finish. You'll also collaborate with your product team on discovery, helping to assess the direction and feasibility of product changes. And, perhaps most importantly, you'll actively contribute to the evolution of the culture and processes of a growing engineering team.</p>
                        </div>
                    </div>

                    <div class="flex flex-row mb-5">
                        <div class="flex flex-col w-full">
                            <hr />
                        </div>
                    </div>

                    <div class="flex flex-row mb-5">
                        <div class="flex flex-col w-full">
                            <h4 className='font-medium text-md'>Skills and expertise</h4>
                        </div>
                    </div>

                    <div class="flex flex-row mb-5">
                        <div class="flex flex-row w-full gap-4">
                            <div className="p-2 rounded-md bg-slate-300 text-center font-md">
                                <p>Reactjs</p>
                            </div>
                            <div className="p-2 rounded-md bg-slate-300 text-center font-md">
                                <p>Node.js</p>
                            </div>
                            <div className="p-2 rounded-md bg-slate-300 text-center font-md">
                                <p>HTML</p>
                            </div>

                            <div className="p-2 rounded-md bg-slate-300 text-center font-md">
                                <p>CSS</p>
                            </div>

                            <div className="p-2 rounded-md bg-slate-300 text-center font-md">
                                <p>Redux</p>
                            </div>

                            <div className="p-2 rounded-md bg-slate-300 text-center font-md">
                                <p>Web Development</p>
                            </div>

                            <div className="p-2 rounded-md bg-slate-300 text-center font-md">
                                <p>TypeScript</p>
                            </div>

                            <div className="p-2 rounded-md bg-slate-300 text-center font-md">
                                <p>Web Application</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[25%] shadow-md m-2 p-10  border-solid border-2 border-grey-500 rounded-lg">
                    <div class="flex flex-row mb-5">
                        <div class="flex flex-row w-full gap-5">
                            <div className='flex justify-center items-center'>
                                <FontAwesomeIcon icon={faBrain} size="lg" />
                            </div>
                            <p>Expert</p>
                        </div>
                    </div>
                    <div class="flex flex-row mb-5">
                        <div class="flex flex-row w-full gap-5">
                            <div className='flex justify-center items-center'>
                                <FontAwesomeIcon icon={faTicket} size='lg' />
                            </div>
                            <p>$2000--$3000</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobDescription
