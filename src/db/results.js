import row1Gig1Image from '../assets/Row 1/Gig 1/build-shopify-store-redesign-shopify-dropshipping-store-shopify-website.png'
import row1Gig2Image from '../assets/Row 1/Gig 2/create-shopify-dropshipping-store-shopify-website.png'
import row1Gig3Image from '../assets/Row 1/Gig 3/build-a-spawn-hub-or-map-for-your-minecraft-server.png'
import row1Gig4Image from '../assets/Row 1/Gig 4/create-modern-minimalist-and-luxury-logo-design.jpg'

import row2Gig1Image from '../assets/Row 2/Gig 1/convert-figma-design-to-responsive-react-website-or-css-bootstrap.jpg'
import row2Gig2Image from '../assets/Row 2/Gig 2/be-your-salesforce-administrator.png'
import row2Gig3Image from '../assets/Row 2/Gig 3/write-a-backstory-for-your-fictional-dnd-or-scifi-character.png'
import row2Gig4Image from '../assets/Row 2/Gig 4/do-article-and-proposal-writing-in-24-hour.png'

import row3Gig1Image from '../assets/Row 3/Gig 1/do-seo-backlinks-with-high-quality-dofollow-contextual-white-hat-link-building.jpg'
import row3Gig2Image from '../assets/Row 3/Gig 2/build-gpt4-auto-blogging-wp-site-for-any-niche-with-1k-articles.png'
import row3Gig3Image from '../assets/Row 3/Gig 3/create-chatbot-using-dialogue-flow-with-integration.png'
import row3Gig4Image from '../assets/Row 3/Gig 4/data-business-analysis-excel-r-python-automation-tableau-report-dashboard.png'

import row1Gig1Logo from '../assets/Row 1/Gig 1/39721ccc-fa83-4949-9025-a650bba7badb.webp'
import row1Gig2Logo from '../assets/Row 1/Gig 2/862cafa8-5f80-4196-a978-05d97d10abf4.webp'
import row1Gig3Logo from '../assets/Row 1/Gig 3/3618a12b-8088-4ff3-b3de-e1c1f5f15c7f.jpg'
import row1Gig4Logo from '../assets/Row 1/Gig 4/9e3d0068-7246-457f-8714-2cccde716e59.webp'

import row2Gig1Logo from '../assets/Row 2/Gig 1/2b41c6aa-8b43-43a3-8e6d-1407a7c76634.webp'
import row2Gig2Logo from '../assets/Row 2/Gig 2/c491aeed-18c1-4246-a208-d1fef7f9dd8a.webp'
import row2Gig3Logo from '../assets/Row 2/Gig 3/A435F4A8-07E2-4497-8248-14CEBD0153B8.jpg'
import row2Gig4Logo from '../assets/Row 2/Gig 4/3577009c-8307-40d1-a833-62d304711418.webp'

import row3Gig1Logo from '../assets/Row 3/Gig 1/c3ba991a-d0f5-4ba0-a09f-4d2d69f4f1b1.webp'
import row3Gig2Logo from '../assets/Row 3/Gig 2/JPEG_20231125_130030_8887875237402044413.webp'
import row3Gig3Logo from '../assets/Row 3/Gig 3/28a92893-f8d3-4415-aa1c-c22577e527cd.webp'
import row3Gig4Logo from '../assets/Row 3/Gig 4/b1b608d5-c2d2-4762-a5fe-ca6b3dab24de.webp'
import { useContext } from 'react'
import { ImgContext } from './imgcontext'


const { selectedFile, title } = useContext(ImgContext);
  const yourGigImage = URL.createObjectURL(selectedFile) 


export const results = [
    {
      gigTitle: 'I will design a unique logo for your business',
      price: '50',
      gigImage: row1Gig1Image,
      logo: row1Gig1Logo
    },
    {
      gigTitle: title,
      price: '50',
      gigImage: yourGigImage,
      logo: row1Gig2Logo
    },
    {
      gigTitle: 'I will design a unique logo for your business',
      price: '50',
      gigImage: row1Gig3Image,
      logo: row1Gig3Logo
    },
    {
      gigTitle: 'I will design a unique logo for your business',
      price: '50',
      gigImage: row1Gig4Image,
      logo: row1Gig4Logo
    },
    {
      gigTitle: 'I will design a unique logo for your business',
      price: '50',
      gigImage: row2Gig1Image,
      logo: row2Gig1Logo
    },
    {
      gigTitle: 'I will design a unique logo for your business',
      price: '50',
      gigImage: row2Gig2Image,
      logo: row2Gig2Logo
    },
    {
      gigTitle: 'I will design a unique logo for your business',
      price: '50',
      gigImage: row2Gig3Image,
      logo: row2Gig3Logo
    },
    {
      gigTitle: 'I will design a unique logo for your business',
      price: '50',
      gigImage: row2Gig4Image,
      logo: row2Gig4Logo
    },
    {
      gigTitle: 'I will design a unique logo for your business',
      price: '50',
      gigImage: row3Gig1Image,
      logo: row3Gig1Logo
    },
    {
      gigTitle: 'I will design a unique logo for your business',
      price: '50',
      gigImage: row3Gig2Image,
      logo: row3Gig2Logo
    },
    {
      gigTitle: 'I will design a unique logo for your business',
      price: '50',
      gigImage: row3Gig4Image,
      logo: row3Gig4Logo
    }
    
  ]