import React, { useCallback, useState } from 'react'
const star = [1, 2, 3, 4, 5];
export const ProductsDetail = () => {
    const [stars, setStars] = useState(5)
    const [comment, setcomment] = useState('')
    console.log(comment);

    const increment = useCallback((value: number) => {
        setStars(value);
    }, []);
    const commentChange = useCallback((string: string) => {
        setcomment(string);
    }, []);
    return (
        <main>
            <div className="product-detail-head flex lg:w-[920px] w-[95%] mx-auto mt-28 flex-col lg:flex-row">
                <div className='products-image basis-1/2'>
                    <img className='h-[460px] w-full object-cover' src="./src/public/img/detail.jpg" alt="" />
                </div>
                <div className='lg:ps-16 basis-1/2 py-16 text-center lg:text-left'>
                    <div className='text-4xl tracking-wide mt-2 mb-6'>Red Love Cup</div>
                    <div className='text-lg tracking-wider text-gray-500'>Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus.</div>
                    <div className='my-8'>
                        <div className='py-4'><span className='text-3xl tracking-wider text-amber-700'>$25.00$</span> <span className='text-gray-400 text-base line-through'>37.00 USD</span></div>
                        <div className='uppercase text-gray-400 text-xs tracking-wider mb-4'>Quantity</div>
                        <div className="flex justify-center lg:justify-normal">
                            <div className='me-2'><input className='outline-none border-2 w-[100px] p-4' min={1} type="number" name="" id="" /></div>
                            <div className='p-4 flex justify-center items-center border-2 border-black bg-black uppercase font-semibold text-xs text-white'>ADD TO CART</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-detail-head flex lg:w-[920px] w-[95%] mx-auto flex-col lg:flex-row gap-8 lg:gap-0 mb-16">
                <div className="basis-1/2 lg:text-left text-center">
                    <div className='text-sm font-semibold uppercase tracking-wider text-gray-500 mb-8'>Details</div>
                    <div className='text-gray-400 text-base leading-relaxed'>Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.</div>
                </div>
                <div className="basis-1/2 lg:ps-16 ">
                    <div className='text-sm font-semibold uppercase tracking-wider text-gray-500 mb-8 lg:text-left text-center'>Dimensions</div>
                    <div className='flex justify-center items-center lg:block'>
                        <ul className='list-disc ms-4'>
                            <li className='mb-2'><span className='tracking-wider text-gray-500 text-base'>Lenght (in):</span>56.0</li>
                            <li className='mb-2'><span className='tracking-wider text-gray-500 text-base'>Lenght (in):</span>56.0</li>
                            <li className='mb-2'><span className='tracking-wider text-gray-500 text-base'>Lenght (in):</span>56.0</li>
                            <li className='mb-2'><span className='tracking-wider text-gray-500 text-base'>Lenght (in):</span>56.0</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full flex text-white lg:flex-row flex-col mb-16">
                <div className="lg:basis-1/2 lg:h-auto h-[460px]">
                    <div className="image bg-[url('./src/public/img/ss.jpg')]  bg-no-repeat bg-cover bg-center h-full "></div>
                </div>
                <div className="basis-1/2 bg-dark-blue py-16 lg:ps-20 ps-0 text-center lg:text-left">
                    <div className='text-3xl tracking-wider'>Handmade by <span className='font-semibold'>CoffeeStyle</span>.</div>
                    <div className='text-base tracking-wider font-semibold text-gray-300 my-6'>The most versatile furniture system ever created. Designed to fit your life.</div>
                    <div className='mb-8'>
                        <div className='flex font-semibold tracking-wide mb-4 justify-center lg:justify-normal'><img className='w-4 me-4' src="./src/public/img/di.png" alt="" /> Premium Quality</div>
                        <div className='ms-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.</div>
                    </div>
                    <div>
                        <div className='flex font-semibold tracking-wide mb-4 justify-center lg:justify-normal'><img className='w-4 me-4' src="./src/public/img/sa.png" alt="" /> Gentle to the Environment</div>
                        <div className='ms-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.</div>
                    </div>
                </div>
            </div>
            <div className="comment w-[95%] lg:w-[70%] mx-auto">
                <div>
                    <div className='text-3xl font-semibold tracking-wider text-center mb-8'>Comments-Reviews</div>
                    <div className='text-base font-semibold tracking-wider mb-8 '>Review start : <div className="flex"> {star.map((v, i) => <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill={stars >= v ? 'yellow' : 'none'}
                        viewBox="0 0 24 24"
                        strokeWidth="0.5"
                        stroke="currentColor"
                        className="size-6 hover:cursor-pointer"
                        key={i}
                        onClick={() => increment(v)}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                    </svg>

                    )}</div></div>
                    <div className='text-base font-semibold tracking-wider'>Write a review about the product</div>
                    <div><textarea onChange={(e) => commentChange(e.target.value)} value={comment} className='outline-none border-2 border-black w-full p-4' name="" id="" placeholder='So good'></textarea></div>
                    <div><button className='py-2 px-4 border-2 border-slate-700 text-white bg-blue-500'>SUBMIT</button></div>
                    <div className='list mt-8'>
                        <div className='border-b-2 pb-6'>
                            <div className='flex justify-between mb-2'><span className='text-lg font-semibold tracking-wider'>Long@gmail.com </span><span>01/02/2024</span> </div>
                            <div className='flex mb-4'>
                                {star.map((v, i) => <svg
                                key={i}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="yellow"
                                    viewBox="0 0 24 24"
                                    strokeWidth="0.5"
                                    stroke="yellow"
                                    className="size-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                                    />
                                </svg>
                                )}
                            </div>
                            <div className='tracking-wider text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.</div>
                            <div className='flex justify-end uppercase text-blue-500 '><span className='mx-4 hover:cursor-pointer hover:underline'>Edit</span> <span className='hover:cursor-pointer hover:underline'>Delete</span> </div>
                        </div>
                        
                    </div>
                   <div className="flex justify-center items-center"> <div className='px-4 py-2 border-2 my-4'>More</div></div>
                    
                </div>
            </div>

        </main>
    )
}
