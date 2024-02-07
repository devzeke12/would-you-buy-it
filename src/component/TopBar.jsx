import React from 'react'
import DarkModeBtn from './DarkModeBtn'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const TopBar = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full h-fit py-5 px-5 sticky bg-white dark:bg-[#181A1E] transition-colors delay-300 top-0 z-20 border-b flex flex-row justify-between'>
      <motion.div initial={{ y:-60 }} whileInView={{ y: 0 }} transition={{type:'spring',duration: 1, delay: 1}} >
        <h1 className='text-4xl font-serif text-black dark:text-white cursor-pointer' onClick={() => navigate('/')}>Would You Buy It</h1>
      </motion.div>
      <motion.div initial={{ y:-60 }} whileInView={{ y: 0 }} transition={{type:'spring',duration: 1, delay: 1.5}} >
        <DarkModeBtn />
      </motion.div>
    </div>
  )
}

export default TopBar