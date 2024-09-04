import { Link } from "react-router-dom";

const productData = [
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW70G9vpZquY0kN0_7G_IDZX9J-aJVky7xlA&s',
        name: 'Apple Watch Series 7',
        category: 'Electronics',
        price: 296,
        sold: 22,
        profit: 45,
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW70G9vpZquY0kN0_7G_IDZX9J-aJVky7xlA&s',
        name: 'Macbook Pro M1',
        category: 'Electronics',
        price: 546,
        sold: 12,
        profit: 125,
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW70G9vpZquY0kN0_7G_IDZX9J-aJVky7xlA&s',
        name: 'Dell Inspiron 15',
        category: 'Electronics',
        price: 443,
        sold: 64,
        profit: 247,
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW70G9vpZquY0kN0_7G_IDZX9J-aJVky7xlA&s',
        name: 'HP Probook 450',
        category: 'Electronics',
        price: 499,
        sold: 72,
        profit: 103,
    },
];

const TableProducts = () => {
    return (
        <div className="overflow-x-auto bg-white dark:bg-gray-800 shadow-md rounded-lg">
            <div className="py-4 px-6 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    Top Products
                </h4>
                <Link
                    to={'/admin/products/create'}
                    className="inline-flex items-center justify-center rounded-full bg-blue-500 py-2 px-4 text-center font-medium text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                    Create Products
                </Link>
            </div>

            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Product Name</th>
                        <th className="hidden px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider sm:table-cell">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Price</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Sold</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Profit</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Options</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    {productData.map((product, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap flex items-center">
                                <img src={product.image} alt={product.name} className="h-12 w-12 rounded-md object-cover mr-4" />
                                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{product.name}</span>
                            </td>
                            <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 sm:table-cell">{product.category}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">${product.price}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{product.sold}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400">${product.profit}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex space-x-2">
                                <Link
                                    to={`/admin/products/${index}/details`}
                                    className="inline-flex items-center justify-center px-4 py-2 border border-blue-500 text-blue-500 hover:bg-blue-100 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white rounded"
                                >
                                    Detail
                                </Link>
                                <Link
                                    to={`/admin/products/${index}/update`}
                                    className="inline-flex items-center justify-center px-4 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-100 dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-600 dark:hover:text-white rounded"
                                >
                                    Update
                                </Link>
                                <button
                                    onClick={() => alert('Are you sure you want to delete this product?')}
                                    className="inline-flex items-center justify-center px-4 py-2 border border-red-500 text-red-500 hover:bg-red-100 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-600 dark:hover:text-white rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableProducts;
