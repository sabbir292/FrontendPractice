import React from 'react'

const Footer = () => {
    return (
        <footer className='p-4 py-12 md:py-16 grid  gap-8 bg-white text-xs lg:text-base font-regular capitalize max-w-[100rem] mx-auto md:px-16 border-t-[1px]'>
            <h1 className='text-4xl lg:text-6xl font-semibold py-6'>Ableton</h1>
            <div className='grid gap-6 lg:gap-24 lg:grid-cols-3 lg:grid-rows-2 items-start'>
                <div className='grid gap-1'>
                    <h3 className='font-semibold'>Sign up to our newsletter</h3>
                    <p>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.
                    </p>
                    <div className='flex py-4'>
                        <input type="email" placeholder='Email Address' className='bg-slate-200 outline-none w-full font-semibold px-3 py-2'/>
                        <button className='bg-textBlue min-w-20 text-white font-semibold px-3 py-2'>Sign up</button>
                    </div>
                </div>

                <div className='grid gap-4'>
                    <div className='grid gap-1'>

                    <h4 className='flex items-center'>
                        Register Live or Push
                        <box-icon size='xs' name='chevron-right'></box-icon>
                    </h4>

                    <h4 className='flex items-center'>
                        About Ableton
                        <box-icon size='xs' name='chevron-right' ></box-icon>
                    </h4>

                    <h4 className='flex items-center'>
                        Jobs
                        <box-icon size='xs' name='chevron-right'></box-icon>
                    </h4>
                    </div>
                    <div className='flex gap-2 py'>
                        <box-icon size = 'md' name='facebook-circle' type='logo' ></box-icon>
                        <box-icon size = 'md' name='youtube' type='logo' ></box-icon>
                        <box-icon size = 'md' name='instagram-alt' type='logo' ></box-icon>
                        <box-icon size = 'md' name='twitter' type='logo' ></box-icon>
                        <box-icon size = 'md' name='tiktok' type='logo' ></box-icon>
                    </div>
                </div>

                <div className='grid gap-1'>
                    <h3 className='font-semibold'>Education</h3>
                    <h4 className='flex items-center'>
                        Offers for students and teachers
                        <box-icon size='xs' name='chevron-right'></box-icon>
                    </h4>
                    <h4 className='flex items-center'>
                        Ableton for the Classroom
                        <box-icon size='xs' name='chevron-right'></box-icon>
                    </h4>
                    <h4 className='flex items-center'>
                        Ableton for Colleges and Universities
                        <box-icon size='xs' name='chevron-right'></box-icon>
                    </h4>
                </div>

                <div className='grid gap-1'>
                    <h3 className='font-semibold'>Community</h3>
                    <h4 className='flex items-center'>
                        Find Ableton User Groups
                        <box-icon size='xs' name='chevron-right'></box-icon>
                    </h4>
                    <h4 className='flex items-center'>
                        Find Certified Training
                        <box-icon size='xs' name='chevron-right'></box-icon>
                    </h4>
                    <h4 className='flex items-center'>
                        Become a Certified Trainer
                        <box-icon size='xs' name='chevron-right'></box-icon>
                    </h4>
                </div>

                <div className='grid gap-2'>
                    <h3 className='font-semibold'>Language and Location</h3>
                    <div className='flex gap-1'>
                        <select id="country" name="country" className='bg-slate-200 p-1 outline-none'>
                            <option value="us">United States</option>
                            <option value="ca">Canada</option>
                            <option value="uk">United Kingdom</option>
                            <option value="de">Germany</option>
                            <option value="fr">France</option>
                            <option value="jp">Japan</option>
                            <option value="au">Australia</option>
                            <option value="br">Brazil</option>
                            <option value="in">India</option>
                            <option value="cn">China</option>
                        </select>

                        <select id="language" name="language" className='bg-slate-200 p-1 outline-none'>
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                            <option value="zh">Mandarin</option>
                            <option value="ja">Japanese</option>
                            <option value="pt">Portuguese</option>
                            <option value="hi">Hindi</option>
                            <option value="ar">Arabic</option>
                            <option value="ru">Russian</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='grid gap-12 lg:grid-cols-2 items-center text-xs'>
                <div className='grid gap-2 lg:flex'>
                    <h4>contact Us</h4>
                    <h4>press resources</h4>
                    <h4>Legal Info</h4>
                    <h4>Privacy Policy</h4>
                    <h4>Cookie Setting</h4>
                    <h4>Imprint</h4>
                </div>
                <div className='flex gap-2 items-center lg:ml-auto'>
                <svg fill="#000000" width="40" height="40" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M0 6.4v11.2h1.6V6.4zm3.2 0v11.2h1.6V6.4zm3.2 0v11.2H8V6.4zm3.2 0v11.2h1.6V6.4zm3.2 0V8H24V6.4zm0 3.2v1.6H24V9.6zm0 3.2v1.6H24v-1.6zm0 3.2v1.6H24V16z"/></svg>
                <h4>Cloned By Sabbir Hossain</h4>
                </div>
            </div>
        </footer>
    )
}

export default Footer