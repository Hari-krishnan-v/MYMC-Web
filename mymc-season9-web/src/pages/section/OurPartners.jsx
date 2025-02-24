import React from 'react'
import Rectangle from '../../assets/Rectangle.png'
import exitlag from '../../assets/exitlag.png'
import uh_logo from '../../assets/uh_logo.png'

export const OurPartners = () => {
    return (
        <section className="min-h-screen  flex justify-center items-center relative" id={'OurPartners'}>
            <div className="gradient-overlay2 h-full"></div>

            <div className={'z-20 max-w-[1000px] flex-col  w-full m-auto justify-center align-middle  mx-auto '}>
                <h2 className={'text-center font-bold text-white text-[56px] '}>Our Partners</h2>
                <p className={'text-center text-white'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore</p>
                <div className=" flex mx-auto my-1   justify-center gap-40 flex-wrap">
                    <div className="partner rounded-full overflow-hidden w-1/4 ">
                        <img src={exitlag} className={'bg-cover'} alt="partner1"/>
                    </div>
                    <div className="partner rounded-full overflow-hidden  w-1/4">
                        <img src={uh_logo} alt="partner2"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
