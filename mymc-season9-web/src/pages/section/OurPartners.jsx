import React from 'react'
import Rectangle from '../../assets/Rectangle.png'
import exitlag from '../../assets/exitlag.png'
import uh_logo from '../../assets/uh_logo.png'

export const OurPartners = () => {
    return (
        <section className="min-h-screen  flex justify-center items-center " id={'OurPartners'}>
            <div className={'max-w-[1000px]  w-full m-auto justify-center align-middle mx-auto pb-10' }>
                <h2 className={'text-center text-white text-[48px] '}>Our Partners</h2>
                <p className={'text-center text-white'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                <div className=" flex mx-auto my-1 mt-6  justify-center gap-10 flex-wrap">
                    <div className="partner rounded-full overflow-hidden w-1/3 ">
                        <img src={exitlag}  className={'bg-cover'} alt="partner1"/>
                    </div>
                    <div className="partner rounded-full overflow-hidden  w-1/3">
                        <img src={uh_logo} alt="partner2"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
