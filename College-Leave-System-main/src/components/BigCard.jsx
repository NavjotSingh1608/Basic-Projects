import React from 'react'

import '../index.css'
const BigCard = (props) => {
  return (

        <article class="bg-slate-100 p-4 flex max-w-xl flex-col items-start justify-between rounded-2xl">
          <div class="relative mt-8 flex items-center gap-x-4">
            <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-10 w-10 rounded-full bg-gray-50"/>
            <div class="text-sm leading-6">
              <p class="font-semibold text-gray-900">
                <a href="#">
                  <span class="absolute inset-0"></span>
                   {props.name}
                </a>
              </p>
              <p class="text-gray-600">{props.regno} / {props.year}</p>
            </div>
          </div>
          <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <div>
                
                Reason : {props.reason}
              </div>
            </h3>
            <div class="flex items-center gap-x-4">
            <div class="flex items-center gap-x-4 text-xs mb-1">
            
           
            <div  class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">From</div>
            <time datetime="2020-03-16" class="text-gray-500">{props.startDate}</time>
          </div>
          <div class="flex items-center gap-x-4 text-xs">
            
           
            <div class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">To</div>
            <time datetime="2020-03-16" class="text-gray-500">{props.endDate}</time>
          </div>
            </div>
          
          <div class="group relative">
            <div class="flex items-center gap-x-4">
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{props.yes}</p>
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{props.no}</p>
            </div>
           
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{props.denialreason}</p>
          </div>
          
        </article>
  
        
    

  )
}

export default BigCard