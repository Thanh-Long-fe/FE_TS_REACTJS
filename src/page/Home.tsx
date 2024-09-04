

export const Home = () => {

  return (
    <main>
    <div className="slide-show lg:px-24 px-0">
      <div className="slider w-full">
        <img
          className="w-full"
          src="https://static.wixstatic.com/media/9d8ed5_6b6be1c97d1949c2b48bbdd68069ee35~mv2.jpg/v1/fill/w_1000,h_563,al_c/9d8ed5_6b6be1c97d1949c2b48bbdd68069ee35~mv2.jpg"
          alt=""
        />
      </div>
    </div>
    <div className="story">
      <div className="w-full flex items-center justify-center">
        <div className="xl:px-96 px-4 lg:px-64 md:px-32 py-32 text-center">
          <div className="text-3xl mb-6 leading-10">
            Even the all-powerful Pointing has no control about the blind texts.
          </div>
          <div>
            It is a paradisematic country, in which roasted parts of sentences fly
            into your mouth. Even the all-powerful Pointing has no control about
            the blind texts it is an almost unorthographic life One day however a
            small line of blind text by the name of Lorem Ipsum decided to leave
            for the far World of Grammar.
          </div>
          <div className="text-amber-800 py-4">
            <a
              href=""
              className="border-b-amber-600 border-b-2 hover:border-b-amber-900 transition-all ease-in-out duration-300"
            >
              Read the full Story
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center mb-24">
      <div className="w-8 inline-block bg-gray-400 h-[1px]" />
      <div className="mx-4 uppercase text-[12px] tracking-widest">
        FEATURED MUGS
      </div>
      <div className="w-8 inline-block bg-gray-400 h-[1px]" />
    </div>
    <div className="w-[95%] xl:w-[65%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="product-card group">
          <div className="h-[500px] relative bg-[url('./src/public/img/5be96251aaba7a25acecdfd6_jakub-dziubak-394720-unsplash.jpg')]  bg-no-repeat bg-cover bg-center">
            <a href="">
              <div className="w-full h-full hover:bg-gray-900 hover:opacity-15" />
              <div className="absolute w-11/12 left-1/2 -translate-x-1/2 text-center py-2 bg-white font-semibold text-amber-800 bottom-3 z-50 shadow opacity-0 translate-y-2 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500 group-hover:translate-y-[0%] group-hover:opacity-100">
                Explore Mug
              </div>
            </a>
          </div>
          <div className="w-full p-8 text-center ">
            <div className="name tracking-wider text-xl">
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
          <div className="h-[500px] relative bg-[url('./src/public/img/5be96251aaba7a512bece011_liana-mikah-698524-unsplash.jpg')]  bg-no-repeat bg-cover bg-center">
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
            <div className="name tracking-wider text-xl">
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
    <div className="flex items-center justify-center my-24">
      <div className="w-8 inline-block bg-gray-400 h-[1px]" />
      <div className="mx-4 uppercase text-[12px] tracking-widest">
        FEATURED MUGS
      </div>
      <div className="w-8 inline-block bg-gray-400 h-[1px]" />
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
      </div>
    </div>
    <div className="more-products lg:w-[850px]  mx-auto w-[65%]">
      <div className=" flex lg:flex-row flex-col gap-6 md:h-[280px]">
        <div className="flex basis-1/2 gap-4 lg:justify-normal justify-center flex-col sm:flex-row">
          <div className="img-pro-1 ">
            <img
              className="md:h-[280px] h-full  w-full"
              src="./src/public/img/5be96251aaba7a2f3decdfa9_Image.jpg"
              alt=""
            />
          </div>
          <div className="flex sm:flex-col md:justify-between  flex-row">
            <div className="img-pro-2">
              <img
                className="md:h-[130px] w-full"
                src="./src/public/img/5be96251aaba7a528fecdfa6_Image.jpg"
                alt=""
              />
            </div>
            <div className="img-pro-3">
              <img
                className="md:h-[130px] w-full"
                src="./src/public/img/5be96251aaba7aa6d0ecdfa7_Image 2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="content-text basis-1/2 flex justify-center lg:justify-normal">
          <div className="py-6 px-4">
            <div className="my-2 text-gray-400">PREMIUM OFFER</div>
            <div className="my-6 text-3xl">Get our Coffee Magazine</div>
            <div className="text-base text-gray-400 mb-4">
              The most versatile furniture system ever created. Designed to fit
              your life.
            </div>
            <div>
              <button className="bg-black text-white uppercase px-8 py-4">
                Start shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="parallax-section bg-[url('https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7ac1c6ecdfd2_Section%20Image%202.jpg')] bg-cover bg-no-repeat bg-center h-[340px] bg-fixed my-24  "></div>
    <div className="flex items-center justify-center mb-24">
      <div className="w-8 inline-block bg-gray-400 h-[1px]" />
      <div className="mx-4 uppercase text-[12px] tracking-widest">
        Behind the mugs, lifestyle stories
      </div>
      <div className="w-8 inline-block bg-gray-400 h-[1px]" />
    </div>
    <div className="story w-[95%] xl:w-[65%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="product-card group">
          <div className="h-[300px] relative bg-[url('./src/public/img/tttt.jpg')]  bg-no-repeat bg-cover bg-center">
            <a href="">
              <div className="w-full h-full hover:bg-gray-900 hover:opacity-15" />
              <div className="absolute w-11/12 left-1/2 -translate-x-1/2 text-center py-2 bg-white font-semibold text-gray-500 bottom-3 z-50 shadow opacity-0 translate-y-2 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500 group-hover:translate-y-[0%] group-hover:opacity-100">
                Read the full story
              </div>
            </a>
          </div>
          <div className="w-full">
            <div className="name tracking-wider text-lg pt-4">
              Health Check: why do I get a headache when I haven’t had my coffee?
            </div>
            <div className="price py-4">
              <span className="font-normal text-gray-400">
                It is a paradisematic country, in which roasted parts of sentences
                fly into your mouth.
              </span>{" "}
            </div>
            <div>
              <span className="font-bold text-gray-500 text-sm">
                October 9, 2018
              </span>
            </div>
          </div>
        </div>
        <div className="product-card group">
          <div className="h-[300px] relative bg-[url('./src/public/img/aaaaaaaaaaaaaaaa.jpg')]  bg-no-repeat bg-cover bg-center">
            <a href="">
              <div className="w-full h-full hover:bg-gray-900 hover:opacity-15" />
              <div className="absolute w-11/12 left-1/2 -translate-x-1/2 text-center py-2 bg-white font-semibold text-gray-500 bottom-3 z-50 shadow opacity-0 translate-y-2 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500 group-hover:translate-y-[0%] group-hover:opacity-100">
                Read the full story
              </div>
            </a>
          </div>
          <div className="w-full">
            <div className="name tracking-wider text-lg pt-4">
              Health Check: why do I get a headache when I haven’t had my coffee?
            </div>
            <div className="price py-4">
              <span className="font-normal text-gray-400">
                It is a paradisematic country, in which roasted parts of sentences
                fly into your mouth.
              </span>{" "}
            </div>
            <div>
              <span className="font-bold text-gray-500 text-sm">
                October 9, 2018
              </span>
            </div>
          </div>
        </div>
        <div className="product-card group">
          <div className="h-[300px] relative bg-[url('./src/public/img/ba.jpg')]  bg-no-repeat bg-cover bg-center">
            <a href="">
              <div className="w-full h-full hover:bg-gray-900 hover:opacity-15" />
              <div className="absolute w-11/12 left-1/2 -translate-x-1/2 text-center py-2 bg-white font-semibold text-gray-500 bottom-3 z-50 shadow opacity-0 translate-y-2 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500 group-hover:translate-y-[0%] group-hover:opacity-100">
                Read the full story
              </div>
            </a>
          </div>
          <div className="w-full">
            <div className="name tracking-wider text-lg pt-4">
              Health Check: why do I get a headache when I haven’t had my coffee?
            </div>
            <div className="price py-4">
              <span className="font-normal text-gray-400">
                It is a paradisematic country, in which roasted parts of sentences
                fly into your mouth.
              </span>{" "}
            </div>
            <div>
              <span className="font-bold text-gray-500 text-sm">
                October 9, 2018
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  
  )
}
