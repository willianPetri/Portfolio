import React, { useState } from 'react'
import Icon1 from '../../icons/icon-1.png'
import Icon2 from '../../icons/icon-2.png'
import Icon3 from '../../icons/icon-3.png'
import Icon4 from '../../icons/icon-4.png'
import Icon6 from '../../icons/icon-6.png'
import Icon7 from '../../icons/icon-7.png'
import Icon8 from '../../icons/icon-8.png'

const s1 = {
  title: 'HTML',
  image: Icon1
}
const s2 = {
  title: 'CSS3',
  image: Icon2
}
const s3 = {
  title: 'Javascript',
  image: Icon3
}
const s4 = {
  title: 'Sass',
  image: Icon4
}
const s5 = {
  title: 'Github',
  image: Icon8
}
const s6 = {
  title: 'React',
  image: Icon6
}
const s7 = {
  title: 'React Native',
  image: Icon6
}
const s8 = {
  title: 'Node',
  image: Icon7
}

const Skills = () => {
  const [skills, setSkills] = useState([s1, s2, s3, s4, s5, s6, s7, s8]);
  return (
    <>
      <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0 ml-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 text-left">
            Habilidades
          </h1>
          <div className="h-1 w-20 bg-secondary rounded"></div>
        </div>
      </div>

      <div className='grid md:grid-cols-4 grid-cols-2 gap-6 mb-20'>
        {skills.map(skill => (
          <div className='flex flex-wrap items-center  justify-center p-8 w-56 h-56 shadow-lg rounded-lg bg-gray-100 group hover:bg-golden mx-auto mb-4'>
            <img src={skill.image} alt="" className='h-28 mb-4 w-full object-contain' />
            <h3 className='text-2xl text-black font-normal uppercase'>{skill.title}</h3>
          </div>        
        ))}
      </div>
    </>
  )
}

export default Skills
