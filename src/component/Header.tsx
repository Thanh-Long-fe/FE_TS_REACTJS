import{ useCallback, useEffect, useRef } from 'react'

const Header = () => {
  const cart = useRef<HTMLDivElement>(null);
  const modal = useRef<HTMLDivElement>(null);
  const menu = useRef<HTMLUListElement>(null);
  const btn = useRef<SVGSVGElement>(null);
  const handleClick = useCallback((e: MouseEvent) => {
    if (menu.current && btn.current) {
      if (btn.current.contains(e.target as Node)) {
        menu.current.classList.toggle('hidden');
        menu.current.classList.toggle('top-menu-epx');
      } else {
        if (menu.current.classList.contains('top-menu-epx')) {
          menu.current.classList.remove('top-menu-epx');
          menu.current.classList.add('hidden');
        }
      }
    }
  },[]);

  const handleClickCart = useCallback(() => {
    modal.current?.classList.add('flex')
    
    modal.current?.classList.remove('hidden')
  },[]);
  const handleCloseCart = useCallback(() => {
    console.log(2);
    
    modal.current?.classList.remove('flex')
    modal.current?.classList.add('hidden')
  },[]);

  const handleCloseCartModal = useCallback((e:any) => {
    if (cart.current && !cart.current.contains(e.target as Node)) {
      handleCloseCart();
    }
    
  
  },[]);

  useEffect(() => {
   
 
    document.addEventListener('click', handleClick);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClick);
  
    };
  }, [])

  return (
    <header className="py-8 mx-10">
      <nav className="flex justify-between items-center relative">
        <div className="logo lg:basis-1/6 text-center uppercase hover:cursor-pointer font-bold">
          CoffeeStyle
        </div>
        <ul
          ref={menu}
          id="top-menu"
          className="lg:flex hidden lg:gap-8 uppercase items-center lg:justify-end basis-3/6 text-sm text-gray-500 font-medium px-4"
        >
          <li className="item-navbar-menu">
            <a href="">Home</a>
          </li>
          <li className="item-navbar-menu">
            <a href="">Product</a>
          </li>
          <li className="item-navbar-menu">
            <a href="">About</a>
          </li>
          <li className="item-navbar-menu">
            <a href="">Contact</a>
          </li>
          <li className="item-navbar-menu">
            <a href="">Blog</a>
          </li>
          <li className="item-navbar-menu text-nowrap menu-active">
            <a href="">Nguyen Thanh Long</a>
          </li>
        </ul>
        <div className="basis-3/6 lg:basis-1/6 flex items-center uppercase justify-end lg:justify-start ml-16 ">
          <div className="flex items-center justify-center hover:cursor-pointer " onClick={handleClickCart}>
            <i className="fa-solid fa-cart-shopping" />{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <span className="px-2">Cart</span>{" "}
            <span className="px-1.5 rounded-full bg-orange-500 text-center flex items-center justify-center">
              10
            </span>
          </div>
        </div>
        <div className="lg:hidden basis-1/6 px-4">
          <svg
            ref={btn}
            id="hide-btn"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 hover:cursor-pointer hover:opacity-50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
      </nav>
      <div ref={modal} onClick={handleCloseCartModal} className="modal-cart fixed top-0 bottom-0 right-0 left-0 hidden justify-end bg-custom-gray">
        <div ref={cart} className="cart bg-dark-blue w-full sm:w-[50%] lg:w-[33%] flex flex-col overflow-y-scroll animate-fade_in_cart">
          <div className="head flex text-gray-500 px-12 justify-between py-8 ">
            <div className='font-semibold tracking-wider uppercase'>Your Cart</div>
            <div><svg onClick={handleCloseCart}
            
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 hover:cursor-pointer "
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            </div>
          </div>
          <div className="products border-t py-8">
          <div className="product flex px-8 justify-between items-center py-4">
              <div><img className='w-[80px] h-[80px]' src="./src/public/img/a12.jpg" alt="" /></div>
              <div>
                <div className='text-white tracking-wider'>Black Tea Cup</div>
                <div className='text-white tracking-wider text-sm'> Size: S</div>
                <div className='text-white tracking-wider'>$ 37.00 USD</div>
                <div className='text-gray-500 tracking-wider uppercase'>Remove</div>
              </div>
              <div>
                <input className='outline-none border-2 w-[50px] p-2' min={1} type="number" name="" id="" />
              </div>
            </div>
            
          </div>
          <div className='check-out mt-auto mb-8 px-12 border-t pt-4'>
            <div className='flex justify-between text-xl text-white tracking-wider'>
              <div>Subtotal</div>
              <div>$ 208.00 USD</div>
            </div>
            <div className='my-4'><select className='w-full py-2 px-1' name="" id="">
              <option value="" disabled selected>SELECT PAY METHOD</option>
              <option value="1">MOMO</option>

            </select></div>
            <div><button className='w-full py-4 border-2 border-black text-black uppercase tracking-wider font-semibold text-sm bg-white'>continue to checkout</button></div>
          </div>
        </div>
      </div>
    </header>

  )
}

export default Header
