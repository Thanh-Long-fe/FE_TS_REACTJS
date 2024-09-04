import { Link } from 'react-router-dom';

// Giả sử bạn đã có một mảng `vouchers` chứa dữ liệu voucher
const vouchers = [
    {
        code: 'SUMMER21',
        discountType: 'percentage',
        discountValue: 20,
        minOrderValue: 100,
        maxDiscount: 50,
        expirationDate: new Date('2024-12-31'),
        isDelete: false,
    },
    {
        code: 'WINTER22',
        discountType: 'fixed',
        discountValue: 15,
        minOrderValue: 50,
        expirationDate: new Date('2024-09-30'),
        isDelete: false,
    },
    // Các voucher khác
];

const VoucherTable = () => {
    return (
        <div className="overflow-x-auto bg-white dark:bg-gray-800 shadow-md rounded-lg">
            <div className="py-4 px-6 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    Voucher List
                </h4>
                <Link
                    to='/admin/vouchers/create'
                    className="inline-flex items-center justify-center rounded-full bg-blue-500 py-2 px-4 text-center font-medium text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                    Create Voucher
                </Link>
            </div>

            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Code</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Discount Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Discount Value</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Min Order Value</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Max Discount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Expiration Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Options</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    {vouchers.map((voucher, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{voucher.code}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{voucher.discountType}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                {voucher.discountType === 'percentage' ? `${voucher.discountValue}%` : `$${voucher.discountValue}`}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">${voucher.minOrderValue}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                {voucher.maxDiscount ? `$${voucher.maxDiscount}` : 'N/A'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                {voucher.expirationDate.toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                {voucher.isDelete ? 'Deleted' : 'Active'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex space-x-2">
                                <Link
                                    to={`/admin/vouchers/${index}/details`}
                                    className="inline-flex items-center justify-center px-4 py-2 border border-blue-500 text-blue-500 hover:bg-blue-100 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white rounded"
                                >
                                    Detail
                                </Link>
                                <Link
                                    to={`/admin/vouchers/${index}/update`}
                                    className="inline-flex items-center justify-center px-4 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-100 dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-600 dark:hover:text-white rounded"
                                >
                                    Update
                                </Link>
                                <button
                                    onClick={() => alert('Are you sure you want to delete this voucher?')}
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

export default VoucherTable;
