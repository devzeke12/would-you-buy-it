import React from 'react'
import questionlogo from '../assets/question.png'

const About = () => {
  return (
    <div className='mt-[100px] bg-white h-fit dark:bg-gray-800 px-10 py-14 text-black dark:text-white flex-col items-center text-center'>
      <h2 className="font-bold text-4xl mb-10">What is <span className='text-green-500'>Would You Buy It?</span></h2>
      <div className='flex flex-col justify-between md:flex-row'>
        <div className='w-full md:w-2/3 text-left'>
        <p>This website’s purpose is to help freelancers get a better view and a better understanding of how their gig image and title actually looks like to customers who search for gigs. Our software allows you to upload your gig image and title and then see it next to other gigs, replicating the Fiverr search page and how it looks like to someone browsing gigs.<br /> Would you click it? Is a software that every new freelancer or any freelancer who doesn't see any results should use. <br />
 
 Our mission is to help freelancers attract more clients and in general make their gig look better. Our goal, finally, is to help freelancers get more customers. We want to be the biggest software that helps you make a good looking gig image. 
  
 This website was made by ‘’Zeke’’ who coded the entire website. This site was made in 2024</p>
        </div>
        <div>
          <img src={questionlogo} alt='question' className='' />
        </div>
      </div>
      
    </div>
  )
}

export default About