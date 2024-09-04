import React from 'react'

export const Footer = () => {
  return (
 <footer className='w-full bg-slate-300 mt-4'>
     <div className="h-[350px] w-[95%] xl:w-[65%] mx-auto flex gap-8 pt-28 text-sm flex-wrap sm:flex-nowrap">
  <div className="item1 basis-2/6">
    <div className="uppercase hover:cursor-pointer font-bold mb-4">
      CoffeeStyle
    </div>
    <div className="">
      Delivering the best coffee life since 1996. From coffee geeks to the real
      ones.
    </div>
    <div className="mt-10 text-xs text-gray-400">CoffeeStyle Inc. © 1996</div>
    <div></div>
  </div>
  <div className="item2 basis-1/6 flex flex-col gap-4">
    <div className="uppercase hover:cursor-pointer font-bold text-sm text-gray-500">
      Menu
    </div>
    <div className="">
      <ul>
        <li>Home</li>
        <li>Our Products</li>
        <li>About</li>
        <li>Contact</li>
        <li>Styleguide</li>
      </ul>
    </div>
  </div>
  <div className="item3 basis-1/6 basis-1/6 flex flex-col gap-4">
    <div className="uppercase hover:cursor-pointer font-bold text-sm text-gray-500">
      Follow Us
    </div>
    <div className="">
      <ul>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Pinterest</li>
        <li>Twitter</li>
      </ul>
    </div>
  </div>
  <div className="item4 basis-2/6 flex flex-col gap-4">
    <div className="uppercase hover:cursor-pointer font-bold text-sm text-gray-500 mb-4">
      Follow Us
    </div>
    <div className="">We’re Always Happy to Help</div>
    <div className="text-base">us@coffeestyle.io</div>
    <div className="text-xs text-gray-400">Powered by Webflow</div>
  </div>
</div>
 </footer>

  )
}
