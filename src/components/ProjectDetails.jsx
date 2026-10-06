import React from 'react'
import {motion} from 'motion/react'


const ProjectDetails = ({title, description, subDescription, href, image, gallery, tags, closeModal}) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-hidden backdrop-blur-sm'>

        <motion.div className='relative max-w-2xl max-h-[90vh] overflow-y-auto border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10'
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}>

            <button  onClick={closeModal} className='absolute p-3 text-white bg-red-600 rounded-full top-4 right-4 hover:bg-red-700'>
                <img src="assets/close.svg" className='w-6 h-6' />
            </button>
            <img src={image} alt={title} className='w-full rounded-t-2xl'/>
            <div className='p-5'>
                <h5 className='mb-2 text-2xl font-bold text-white'>{title}</h5>
                <p className='mb-3 font-normal text-neutral-400'>{description}</p>
                {subDescription.map((subDesc, index)=>(
                <p key={index} className='mb-3 font-normal text-neutral-400'>{subDesc}</p>
                ))}
                {gallery && (
                    <div className='flex gap-3 pb-2 mt-4 overflow-x-auto'>
                        {gallery.map((src) => (
                            <img key={src} src={src} alt={title} loading='lazy' className='h-80 rounded-xl'/>
                        ))}
                    </div>
                )}
                <div className='flex flex-wrap items-center justify-between gap-4 mt-4'>
                    <div className='flex flex-wrap gap-3'>
                        {tags.map((tag) => (
                            <img key={tag.id}  src= {tag.path} alt={tag.name} title={tag.name} className='rounded-lg size-10 hover-animation'/>
                        ))}
                    </div>
                    {href && (
                        <a href={href} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-1 font-medium cursor-pointer hover-animation'>View Project
                            <img src="assets/arrow-up.svg"  className='size-4'/>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    </div>
    )
}

export default ProjectDetails
