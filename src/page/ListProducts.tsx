import React from 'react'

export const ListProducts = () => {
    return (
        <main>
            <div className="title text-center p-16 ">
                <div className='text-3xl mb-8'>Our Products</div>
                <div className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <div className="category flex xl:w-[65%] w-95% mx-auto justify-center gap-8 uppercase font-normal text-amber-700 md:flex-row flex-col mb-24">
                <div className='border-2 p-2 text-center'>All Products</div>
                <div className='border-2 p-2 text-center'>Coffee Mugs</div>
                <div className='border-2 p-2 text-center'>Others</div>
                <div className='border-2 p-2 text-center'>Premium</div>
                <div className='border-2 p-2 text-center'>Tea Mugs</div>
            </div>

            <div className="w-[95%] xl:w-[65%] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="product-card group">
                        <div className="h-[380px] relative bg-[url('./src/public/img/5be96251aaba7a25acecdfd6_jakub-dziubak-394720-unsplash.jpg')]  bg-no-repeat bg-cover bg-center">
                            <a href="">
                                <div className="w-full h-full hover:bg-gray-900 hover:opacity-15" />
                                <div className="absolute w-11/12 left-1/2 -translate-x-1/2 text-center py-2 bg-white font-semibold text-amber-800 bottom-3 z-50 shadow opacity-0 translate-y-2 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500 group-hover:translate-y-[0%] group-hover:opacity-100">
                                    Explore Mug
                                </div>
                            </a>
                        </div>
                        <div className="w-full p-8 text-center ">
                            <div className="name tracking-wider text-lg">
                                Pink Premium Ceramic
                            </div>
                            <div className="price">
                                <span className=" text-amber-800">$ 99.00 USD</span>{" "}
                                <span className="old-price line-through text-sm px-2">
                                    $ 99.00 USD
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="product-card  group">
                        <div className="h-[380px] relative bg-[url('./src/public/img/5be96251aaba7a512bece011_liana-mikah-698524-unsplash.jpg')]  bg-no-repeat bg-cover bg-center">
                            <a href="">
                                <div className="w-full h-full hover:bg-gray-900 hover:opacity-15" />
                                <div className="absolute bg-white top-3 right-3 text-center px-3 py-2 font-semibold text-amber-800">
                                    On Sale
                                </div>
                                <div className="absolute w-11/12 left-1/2 -translate-x-1/2 text-center py-2 bg-white font-semibold text-amber-800 bottom-3 z-50 shadow opacity-0 translate-y-2 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500 group-hover:translate-y-[0%] group-hover:opacity-100">
                                    Explore Mug
                                </div>
                            </a>
                        </div>
                        <div className="w-full p-8 text-center ">
                            <div className="name tracking-wider text-lg">
                                Pink Premium Ceramic
                            </div>
                            <div className="price">
                                <span className=" text-amber-800">$ 99.00 USD</span>{" "}
                                <span className="old-price line-through text-sm px-2">
                                    $ 99.00 USD
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="product-card  group">
                        <div className="h-[380px] relative bg-[url('./src/public/img/5be96251aaba7a512bece011_liana-mikah-698524-unsplash.jpg')]  bg-no-repeat bg-cover bg-center">
                            <a href="">
                                <div className="w-full h-full hover:bg-gray-900 hover:opacity-15" />
                                <div className="absolute bg-white top-3 right-3 text-center px-3 py-2 font-semibold text-amber-800">
                                    On Sale
                                </div>
                                <div className="absolute w-11/12 left-1/2 -translate-x-1/2 text-center py-2 bg-white font-semibold text-amber-800 bottom-3 z-50 shadow opacity-0 translate-y-2 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500 group-hover:translate-y-[0%] group-hover:opacity-100">
                                    Explore Mug
                                </div>
                            </a>
                        </div>
                        <div className="w-full p-8 text-center ">
                            <div className="name tracking-wider text-lg">
                                Pink Premium Ceramic
                            </div>
                            <div className="price">
                                <span className=" text-amber-800">$ 99.00 USD</span>{" "}
                                <span className="old-price line-through text-sm px-2">
                                    $ 99.00 USD
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="product-card  group">
                        <div className="h-[380px] relative bg-[url('./src/public/img/5be96251aaba7a512bece011_liana-mikah-698524-unsplash.jpg')]  bg-no-repeat bg-cover bg-center">
                            <a href="">
                                <div className="w-full h-full hover:bg-gray-900 hover:opacity-15" />
                                <div className="absolute bg-white top-3 right-3 text-center px-3 py-2 font-semibold text-amber-800">
                                    On Sale
                                </div>
                                <div className="absolute w-11/12 left-1/2 -translate-x-1/2 text-center py-2 bg-white font-semibold text-amber-800 bottom-3 z-50 shadow opacity-0 translate-y-2 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500 group-hover:translate-y-[0%] group-hover:opacity-100">
                                    Explore Mug
                                </div>
                            </a>
                        </div>
                        <div className="w-full p-8 text-center ">
                            <div className="name tracking-wider text-lg">
                                Pink Premium Ceramic
                            </div>
                            <div className="price">
                                <span className=" text-amber-800">$ 99.00 USD</span>{" "}
                                <span className="old-price line-through text-sm px-2">
                                    $ 99.00 USD
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="product-card  group">
                        <div className="h-[380px] relative bg-[url('./src/public/img/5be96251aaba7a512bece011_liana-mikah-698524-unsplash.jpg')]  bg-no-repeat bg-cover bg-center">
                            <a href="">
                                <div className="w-full h-full hover:bg-gray-900 hover:opacity-15" />
                                <div className="absolute bg-white top-3 right-3 text-center px-3 py-2 font-semibold text-amber-800">
                                    On Sale
                                </div>
                                <div className="absolute w-11/12 left-1/2 -translate-x-1/2 text-center py-2 bg-white font-semibold text-amber-800 bottom-3 z-50 shadow opacity-0 translate-y-2 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500 group-hover:translate-y-[0%] group-hover:opacity-100">
                                    Explore Mug
                                </div>
                            </a>
                        </div>
                        <div className="w-full p-8 text-center ">
                            <div className="name tracking-wider text-lg">
                                Pink Premium Ceramic
                            </div>
                            <div className="price">
                                <span className=" text-amber-800">$ 99.00 USD</span>{" "}
                                <span className="old-price line-through text-sm px-2">
                                    $ 99.00 USD
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="product-card  group">
                        <div className="h-[380px] relative bg-[url('./src/public/img/5be96251aaba7a512bece011_liana-mikah-698524-unsplash.jpg')]  bg-no-repeat bg-cover bg-center">
                            <a href="">
                                <div className="w-full h-full hover:bg-gray-900 hover:opacity-15" />
                                <div className="absolute bg-white top-3 right-3 text-center px-3 py-2 font-semibold text-amber-800">
                                    On Sale
                                </div>
                                <div className="absolute w-11/12 left-1/2 -translate-x-1/2 text-center py-2 bg-white font-semibold text-amber-800 bottom-3 z-50 shadow opacity-0 translate-y-2 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500 group-hover:translate-y-[0%] group-hover:opacity-100">
                                    Explore Mug
                                </div>
                            </a>
                        </div>
                        <div className="w-full p-8 text-center ">
                            <div className="name tracking-wider text-lg">
                                Pink Premium Ceramic
                            </div>
                            <div className="price">
                                <span className=" text-amber-800">$ 99.00 USD</span>{" "}
                                <span className="old-price line-through text-sm px-2">
                                    $ 99.00 USD
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="product-card  group">
                        <div className="h-[380px] relative bg-[url('./src/public/img/5be96251aaba7a512bece011_liana-mikah-698524-unsplash.jpg')]  bg-no-repeat bg-cover bg-center">
                            <a href="">
                                <div className="w-full h-full hover:bg-gray-900 hover:opacity-15" />
                                <div className="absolute bg-white top-3 right-3 text-center px-3 py-2 font-semibold text-amber-800">
                                    On Sale
                                </div>
                                <div className="absolute w-11/12 left-1/2 -translate-x-1/2 text-center py-2 bg-white font-semibold text-amber-800 bottom-3 z-50 shadow opacity-0 translate-y-2 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500 group-hover:translate-y-[0%] group-hover:opacity-100">
                                    Explore Mug
                                </div>
                            </a>
                        </div>
                        <div className="w-full p-8 text-center ">
                            <div className="name tracking-wider text-lg">
                                Pink Premium Ceramic
                            </div>
                            <div className="price">
                                <span className=" text-amber-800">$ 99.00 USD</span>{" "}
                                <span className="old-price line-through text-sm px-2">
                                    $ 99.00 USD
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="product-card  group">
                        <div className="h-[380px] relative bg-[url('./src/public/img/5be96251aaba7a512bece011_liana-mikah-698524-unsplash.jpg')]  bg-no-repeat bg-cover bg-center">
                            <a href="">
                                <div className="w-full h-full hover:bg-gray-900 hover:opacity-15" />
                                <div className="absolute bg-white top-3 right-3 text-center px-3 py-2 font-semibold text-amber-800">
                                    On Sale
                                </div>
                                <div className="absolute w-11/12 left-1/2 -translate-x-1/2 text-center py-2 bg-white font-semibold text-amber-800 bottom-3 z-50 shadow opacity-0 translate-y-2 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500 group-hover:translate-y-[0%] group-hover:opacity-100">
                                    Explore Mug
                                </div>
                            </a>
                        </div>
                        <div className="w-full p-8 text-center ">
                            <div className="name tracking-wider text-lg">
                                Pink Premium Ceramic
                            </div>
                            <div className="price">
                                <span className=" text-amber-800">$ 99.00 USD</span>{" "}
                                <span className="old-price line-through text-sm px-2">
                                    $ 99.00 USD
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="product-card  group">
                        <div className="h-[380px] relative bg-[url('./src/public/img/5be96251aaba7a512bece011_liana-mikah-698524-unsplash.jpg')]  bg-no-repeat bg-cover bg-center">
                            <a href="">
                                <div className="w-full h-full hover:bg-gray-900 hover:opacity-15" />
                                <div className="absolute bg-white top-3 right-3 text-center px-3 py-2 font-semibold text-amber-800">
                                    On Sale
                                </div>
                                <div className="absolute w-11/12 left-1/2 -translate-x-1/2 text-center py-2 bg-white font-semibold text-amber-800 bottom-3 z-50 shadow opacity-0 translate-y-2 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500 group-hover:translate-y-[0%] group-hover:opacity-100">
                                    Explore Mug
                                </div>
                            </a>
                        </div>
                        <div className="w-full p-8 text-center ">
                            <div className="name tracking-wider text-lg">
                                Pink Premium Ceramic
                            </div>
                            <div className="price">
                                <span className=" text-amber-800">$ 99.00 USD</span>{" "}
                                <span className="old-price line-through text-sm px-2">
                                    $ 99.00 USD
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex justify-center gap-16 py-8 ">
                <div className='p-4 border-2 border-red-700 text-xl'>1</div>
                <div className='p-4 border-2 border-red-700 text-xl'>2</div>
                <div className='p-4 border-2 border-red-700 text-xl'>3</div>
            </div>
        </main>
    )
}
