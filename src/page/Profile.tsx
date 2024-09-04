import  { useCallback, useEffect, useRef, useState } from 'react';

const UserProfile = () => {
  const orders = [
    {
      id: '123456',
      total: '$120.00',
      paymethod: 'Credit Card',
      address: '123 Main St, Cityville, Country',
      status: 'pending',
      products: [
        {
          id: '1',
          name: 'Black Tea Cup',
          size: 'M',
          quantity: 2,
        },
        {
          id: '2',
          name: 'Green Tea Cup',
          size: 'L',
          quantity: 1,
        },
      ],
      orderDate: '2024-09-03',
    },
    {
      id: '789012',
      total: '$75.00',
      paymethod: 'PayPal',
      address: '456 Elm St, Townsville, Country',
      status: 'pending',
      products: [
        {
          id: '1',
          name: 'Red Tea Cup',
          size: 'M',
          quantity: 5,
        },
        {
          id: '2',
          name: 'Green Tea Cup',
          size: 'L',
          quantity: 1,
        },
      ],
      orderDate: '2024-09-02',
    },
    // Add more orders here
  ];
  const [products, setProducts] = useState<any>([])
  const modal = useRef<HTMLDivElement>(null)
  const btn = useRef<SVGSVGElement>(null)
  const item = useRef<HTMLDivElement>(null)
  
  const handleClose = useCallback(() => {
    modal.current?.classList.add('hidden')
    modal.current?.classList.remove('flex')
  },[])
  const handleClick= useCallback((id : number | string) => {
    modal.current?.classList.add('flex')
    modal.current?.classList.remove('hidden')
    const data = orders.find(product => product.id === id)
    setProducts(data?.products)
    
  },[])
   
   
    
    const [image, setImage] = useState<any>();
  
    useEffect(() => {
      return () => {
        if (image && image.preview) {
          URL.revokeObjectURL(image.preview);
        }
      };
    }, [image]);
  
    const handlePreviewImage = useCallback((e : any) => {
      const file = e.target.files[0];
      if (file) {
        file.preview = URL.createObjectURL(file);
        setImage(file);
      }
    },[]);
    console.log(image);
    

  return (
    <div className="container mx-auto p-4 lg:p-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">Cập nhật thông tin cá nhân</h2>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Tên người dùng
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Nhập tên người dùng"
            name="name"
     
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
            Số điện thoại
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNumber"
            type="text"
            placeholder="Nhập số điện thoại"
            name="phoneNumber"
          
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            Địa chỉ
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            placeholder="Nhập địa chỉ"
            name="address"
           
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profilePicture">
            Ảnh đại diện
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="profilePicture"
            type="file"
            placeholder="URL ảnh đại diện"
            name="profilePicture"
            onChange={handlePreviewImage}
            
          />
          <div className="mt-3">
            <div>Preview</div>
                    {(image && image.type.split('/')[0] === 'image')  ? <img className="w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] rounded-[50%]" src={image.preview} alt="Preview..." /> : <img className="w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] rounded-[50%]" src={'https://i.pinimg.com/736x/bc/43/98/bc439871417621836a0eeea768d60944.jpg'} alt="Preview..." />}
                  </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Cập nhật
          </button>
        </div>
      </form>

      <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 shadow-lg">
        <thead>
          <tr className="bg-gray-800 text-white text-sm leading-normal">
            <th className="py-3 px-6 text-left">Order ID</th>
            <th className="py-3 px-6 text-left">Total</th>
            <th className="py-3 px-6 text-left">Payment Method</th>
            <th className="py-3 px-6 text-left">Address</th>
            <th className="py-3 px-6 text-left">Order Date</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {orders.map((order) => (
            <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">{order.id}</td>
              <td className="py-3 px-6 text-left">{order.total}</td>
              <td className="py-3 px-6 text-left">{order.paymethod}</td>
              <td className="py-3 px-6 text-left">{order.address}</td>
              <td className="py-3 px-6 text-left">{order.orderDate}</td>
              <td className="py-3 px-6 text-left font-semibold">{order.status}</td>
              <td className="py-3 px-6 text-left flex justify-center items-center"> <button onClick={() => handleClick(order.id)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Details
                  </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div ref={modal} className="modal-cart fixed top-0 bottom-0 right-0 left-0  justify-center hidden items-center bg-custom-gray">
    <div ref={item} className="bg-white w-96 p-6 rounded-lg shadow-lg relative">
            {/* Close Button */}
            <button
          
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <svg
                ref={btn}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
                onClick={handleClose}
                
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Products List */}
            <div className="space-y-4">
              {products.map((product : any) => (
                <div key={product.id} className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{product.name}</div>
                    <div className="text-sm text-gray-500">Size: {product.size}</div>
                    <div className="text-sm text-gray-500">Price : 43.000 </div>
                  </div>
                  <div className="w-16 px-2 py-1 border border-gray-300 rounded-md text-center">12</div>
                </div>
              ))}
            </div>

            {/* Update Button */}
            <div className="mt-6">
              <button
             
                className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700"
              >
                Update
              </button>
            </div>
          </div>
    </div>
    </div>
  );
};

export default UserProfile;
