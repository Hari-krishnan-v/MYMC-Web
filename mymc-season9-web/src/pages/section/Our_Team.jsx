import React from 'react'
import sr from '../../assets/sr.jpg'

export const OurTeam = () => {
    return (
        <section className="our-team bg-[#2A2A2A] h-[600px] flex  " id={'OurTeam'}>
            <div className={'  w-full m-auto justify-center align-middle mx-auto pb-10'}>
                <h2 className={'text-center text-white text-[48px] '}>Our Team</h2>
                <p className={'text-center text-white'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                <div className=" flex mx-auto my-1 mt-6 max-w-screen-2xl  justify-center gap-10  flex-wrap">
                    {/*sr*/}
                    <div className="partner h-[350px] w-[250px] rounded-2xl overflow-hidden border">
                        <img src={sr} className={'bg-cover object-cover w-full h-full'} alt="partner1" />
                    </div>
   {/*sr*/}
                    <div className="partner h-[350px] w-[250px] rounded-2xl overflow-hidden border">
                        <img src={sr} className={'bg-cover object-cover w-full h-full'} alt="partner1" />
                    </div>
   {/*sr*/}
                    <div className="partner h-[350px] w-[250px] rounded-2xl overflow-hidden border">
                        <img src={sr} className={'bg-cover object-cover w-full h-full'} alt="partner1" />
                    </div>
   {/*sr*/}
                    <div className="partner h-[350px] w-[250px] rounded-2xl overflow-hidden border">
                        <img src={sr} className={'bg-cover object-cover w-full h-full'} alt="partner1" />
                    </div>

                </div>
            </div>
        </section>
    )
}
