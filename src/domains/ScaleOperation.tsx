import React from 'react'
import ScrollReveal from '../components/ScrollReveal';

const ScaleOperation = () => {
  return (
    <section className='bg-[#394760] py-16 flex items-center flex-col gap-4'>
        <ScrollReveal durationMs={1000} delayMs={200} distancePx={30}>
        <h1 className='text-[28px] md:text-[32px] font-extrabold text-white leading-[36.4px] md:leading-[41.6px]'>Scale your operations with Petra</h1>
        </ScrollReveal>

        {/* Animated Subtitle */}
        <ScrollReveal durationMs={1000} delayMs={200} distancePx={30}>
            <p className="mt-6 text-lg sm:text-xl text-white/90 font-normal text-center">
           Partner with us for reliable, efficient, and forward-thinking energy infrastructure solutions.
            </p>
        </ScrollReveal>

        <ScrollReveal>
            <button className='text-white bg-accent py-2 px-8 cursor-pointer'>Contact Us</button>
        </ScrollReveal>
    </section>
  )
}

export default ScaleOperation;