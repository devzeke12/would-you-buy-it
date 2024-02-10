import React, { useContext } from 'react';
import { ImgContext } from '../db/imgcontext';
import row1Gig1Image from '../assets/Row 1/Gig 1/build-shopify-store-redesign-shopify-dropshipping-store-shopify-website.png';
import row1Gig2Image from '../assets/Row 1/Gig 2/create-shopify-dropshipping-store-shopify-website.png';
import row1Gig3Image from '../assets/Row 1/Gig 3/build-a-spawn-hub-or-map-for-your-minecraft-server.png';
import row1Gig4Image from '../assets/Row 1/Gig 4/create-modern-minimalist-and-luxury-logo-design.jpg';

import row2Gig1Image from '../assets/Row 2/Gig 1/convert-figma-design-to-responsive-react-website-or-css-bootstrap.jpg';
import row2Gig2Image from '../assets/Row 2/Gig 2/be-your-salesforce-administrator.png';
import row2Gig3Image from '../assets/Row 2/Gig 3/write-a-backstory-for-your-fictional-dnd-or-scifi-character.png';
import row2Gig4Image from '../assets/Row 2/Gig 4/do-article-and-proposal-writing-in-24-hour.png';

import row3Gig1Image from '../assets/Row 3/Gig 1/do-seo-backlinks-with-high-quality-dofollow-contextual-white-hat-link-building.jpg';
import row3Gig2Image from '../assets/Row 3/Gig 2/build-gpt4-auto-blogging-wp-site-for-any-niche-with-1k-articles.png';
import row3Gig3Image from '../assets/Row 3/Gig 3/create-chatbot-using-dialogue-flow-with-integration.png';
import row3Gig4Image from '../assets/Row 3/Gig 4/data-business-analysis-excel-r-python-automation-tableau-report-dashboard.png';

import row1Gig1Logo from '../assets/Row 1/Gig 1/39721ccc-fa83-4949-9025-a650bba7badb.webp';
import row1Gig2Logo from '../assets/Row 1/Gig 2/862cafa8-5f80-4196-a978-05d97d10abf4.webp';
import row1Gig3Logo from '../assets/Row 1/Gig 3/3618a12b-8088-4ff3-b3de-e1c1f5f15c7f.jpg';
import row1Gig4Logo from '../assets/Row 1/Gig 4/9e3d0068-7246-457f-8714-2cccde716e59.webp';

import row2Gig1Logo from '../assets/Row 2/Gig 1/2b41c6aa-8b43-43a3-8e6d-1407a7c76634.webp';
import row2Gig2Logo from '../assets/Row 2/Gig 2/c491aeed-18c1-4246-a208-d1fef7f9dd8a.webp';
import row2Gig3Logo from '../assets/Row 2/Gig 3/A435F4A8-07E2-4497-8248-14CEBD0153B8.jpg';
import row2Gig4Logo from '../assets/Row 2/Gig 4/3577009c-8307-40d1-a833-62d304711418.webp';

import row3Gig1Logo from '../assets/Row 3/Gig 1/c3ba991a-d0f5-4ba0-a09f-4d2d69f4f1b1.webp';
import row3Gig2Logo from '../assets/Row 3/Gig 2/JPEG_20231125_130030_8887875237402044413.webp';
import row3Gig3Logo from '../assets/Row 3/Gig 3/28a92893-f8d3-4415-aa1c-c22577e527cd.webp';
import row3Gig4Logo from '../assets/Row 3/Gig 4/b1b608d5-c2d2-4762-a5fe-ca6b3dab24de.webp';
import PhoneView from '../component/PhoneView';
import { FiStar } from 'react-icons/fi';

const Results = () => {
  const { selectedFile, title, showImage } = useContext(ImgContext);
  const yourGigImage = selectedFile ? URL.createObjectURL(selectedFile) : null;

  const results = [
    {
      gigTitle: 'Build shopify store redesign shopify dropshipping store shopify website',
      price: '70',
      gigImage: row1Gig1Image,
      logo: row1Gig1Logo,
      sellerName: 'James',
      sellerLevel: 'Level 1',
      reviews: 32,
      rating: 4.5
    },
    {
      gigTitle: title,
      price: '100',
      gigImage: yourGigImage,
      logo: row1Gig2Logo,
      sellerName: 'Your Name',
      sellerLevel: '',
      reviews: 0,
      rating: 0
    },
    {
      gigTitle: 'Design a spawn hub or map for your Minecraft server',
      price: '20',
      gigImage: row1Gig3Image,
      logo: row1Gig3Logo,
      sellerName: 'Walter',
      sellerLevel: 'Top Rated',
      reviews: 105,
      rating: 4.1
    },
    {
      gigTitle: 'Create modern, minimalist, and luxury logo design',
      price: '35',
      gigImage: row1Gig4Image,
      logo: row1Gig4Logo,
      sellerName: 'Cole',
      sellerLevel: 'Level 2',
      reviews: 62,
      rating: 3.5
    },
    {
      gigTitle: 'Convert Figma design to responsive React website or CSS Bootstrap',
      price: '120',
      gigImage: row2Gig1Image,
      logo: row2Gig1Logo,
      sellerName: 'Mascott',
      sellerLevel: '',
      reviews: 3,
      rating: 4.5
    },
    {
      gigTitle: 'Be your Salesforce administrator',
      price: '55',
      gigImage: row2Gig2Image,
      logo: row2Gig2Logo,
      sellerName: 'Will',
      sellerLevel: 'Level 1',
      reviews: 25,
      rating: 4.6
    },
    {
      gigTitle: 'Write a backstory for your fictional DnD or SciFi character',
      price: '70',
      gigImage: row2Gig3Image,
      logo: row2Gig3Logo,
      sellerName: 'Phlip',
      sellerLevel: '',
      reviews: 5,
      rating: 4.2
    },
    {
      gigTitle: 'Do article and proposal writing in 24 hours',
      price: '35',
      gigImage: row2Gig4Image,
      logo: row2Gig4Logo,
      sellerName: 'Smith',
      sellerLevel: 'Level 2',
      reviews: 77,
      rating: 2.5
    },
    {
      gigTitle: 'Do SEO backlinks with high-quality dofollow contextual white hat link building',
      price: '60',
      gigImage: row3Gig1Image,
      logo: row3Gig1Logo,
      sellerName: 'Jefferies',
      sellerLevel: 'Top Rated',
      reviews: 102,
      rating: 3.9
    },
    {
      gigTitle: 'Build GPT-4 auto-blogging WP site for any niche with 1k articles',
      price: '150',
      gigImage: row3Gig2Image,
      logo: row3Gig2Logo,
      sellerName: 'Zeke',
      sellerLevel: '',
      reviews: 0,
      rating: 3.6
    },
    {
      gigTitle: 'Create chatbot using Dialogue Flow with integration',
      price: '75',
      gigImage: row3Gig3Image,
      logo: row3Gig3Logo,
      sellerName: 'Blessing',
      sellerLevel: 'Level 1',
      reviews: 16,
      rating: 4.5
    },
    {
      gigTitle: 'Data business analysis: Excel, R, Python, automation, Tableau, report dashboard',
      price: '150',
      gigImage: row3Gig4Image,
      logo: row3Gig4Logo,
      sellerName: 'Emmanuel',
      sellerLevel: 'Level 1',
      reviews: 12,
      rating: 4.0
    },
  ];

  return (
    <div className='px-5 text-black dark:text-white'>
      {showImage === false ? (
        <div></div>
        ) : (
          <div className='w-full py-20' >
        <h1 className='text-4xl text-center'>On Desktop</h1>
        <div className='overflow-x-scroll overflow-y-hidden mobileView grid  grid-cols-auto whitespace-wrap w-full relative h-full max-w-screen-xl mx-auto'>
        <div className='grid grid-cols-[1fr_1fr_1fr_1fr] grid-rows-3 gap-7'>
          {results.map((item, index) => (
            <div key={index} className='relative rounded-md w-[300px] cursor-pointer flex flex-col gap-2 my-5'>
              <div className='relative w-full h-[150px]'>
                <img
                  src={item.gigImage}
                  alt="Selected"
                  style={{ maxWidth: '100%', maxHeight: '200px' }}
                  className='w-full h-full rounded-xl object-cover'
                />
              </div>
              <div className='flex justify-between font-bold items-center'>
                <div className='flex gap-2 '>
                  <img src={item.logo} alt="Selected" className='w-7 h-7 rounded-full' />
                  <h1>{item.sellerName}</h1>
                </div>
                <h1>{item.sellerLevel}</h1>
              </div>
              <div>
                <h1>I will {item.gigTitle}</h1>
                <h1>{item.reviews === 0  ? 'Not Rated Yet' : 
                <div className='flex items-baseline font-bold'>
                <FiStar />{item.rating}<h1 className='font-light'>({item.reviews})</h1>
                </div> }</h1>
                <h1 className='font-bold'>{`From $${item.price}`}</h1>
              </div>
            </div>
          ))}
        </div>
    </div>

    <div className='w-full py-20'>
        
    <h1 className='text-4xl text-center'>On Mobile</h1>

        <PhoneView>
        <div className='overflow-x-hidden overflow-y-scroll whitespace-wrap w-full relative h-[500px] mt-12 mb-5 mobileView mx-auto'>
      <div className='flex flex-col items-center flex-wrap justify-between'>
          {results.map((item, index) => (
            <div key={index} className='relative rounded-md w-[200px] cursor-pointer flex flex-col gap-2 my-5'>
              <div className='relative w-full h-[150px]'>
                <img
                  src={item.gigImage}
                  alt="Selected"
                  style={{ maxWidth: '100%', maxHeight: '200px' }}
                  className='w-full h-full rounded-xl object-cover'
                />
              </div>
              <div className='flex justify-between font-bold items-center'>
                <div className='flex gap-2 '>
                  <img src={item.logo} alt="Selected" className='w-7 h-7 rounded-full' />
                  <h1>{item.sellerName}</h1>
                </div>
                <h1>{item.sellerLevel}</h1>
              </div>
              <div>
                <h1>I will {item.gigTitle}</h1>
                <h1>{item.reviews === 0  ? 'Not Rated Yet' : 
                <div className='flex items-baseline font-bold'>
                <FiStar />{item.rating}<h1 className='font-light'>({item.reviews})</h1>
                </div> }</h1>
                <h1 className='font-bold'>{`From $${item.price}`}</h1>
              </div>
            </div>
          ))}
        </div>
    </div>
        </PhoneView>
    </div>
        </div>
      )}
    </div>
  );
};

export default Results;
