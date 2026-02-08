import React from 'react'

function ServiceCard({cardNo, ServiceTitle, ServiceDescription}) {
  return (
    <div className="w-full h-fit p-10 group bg-secondary rounded-2xl flex flex-row-reverse items-center justify-between group transition-all duration-500 hover:bg-white border border-secondary/20 hover:px-20 cursor-pointer ">
        <h1 className='text-4xl text-text group-hover:text-secondary uppercase font-semibold'> 
            {ServiceTitle}
        </h1>

        <div className="flex items-center gap-5">

        <h1 className='text-text flex group-hover:hidden group-hover:text-secondary opacity-100 group-hover:opacity-0 transition-opacity duration-500 text-4xl font-bold'>
            {cardNo}
        </h1>

            <p className='text-secondary text-sm max-w-sm  hidden opacity-0 group-hover:flex group-hover:opacity-100 transition-opacity duration-500'>
                {ServiceDescription}
            </p>
        </div>
    </div>
  )
}

export default ServiceCard