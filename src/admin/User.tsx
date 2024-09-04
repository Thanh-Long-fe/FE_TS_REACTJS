import { Link } from 'react-router-dom';

// Giả sử bạn đã có một mảng `users` chứa dữ liệu người dùng
const users = [
    {
        email: 'john.doe@example.com',
        name: 'John Doe',
        phoneNumber: '123-456-7890',
        address: '123 Main St, Anytown, USA',
        profilePicture: 'https://example.com/profile-pic.jpg',
        role: 'user',
        isActive: true,
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z',
    },
    // Các người dùng khác
];

const UserTable = () => {
    return (
        <div className="overflow-x-auto bg-white dark:bg-gray-800 shadow-md rounded-lg">
            <div className="py-4 px-6 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    User List
                </h4>
                <Link
                    to='/admin/users/create'
                    className="inline-flex items-center justify-center rounded-full bg-blue-500 py-2 px-4 text-center font-medium text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                    Create User
                </Link>
            </div>

            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Profile Picture</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Phone Number</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Address</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Role</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Created At</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Updated At</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Options</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap flex items-center">
                                <img src={user.profilePicture} alt={user.name} className="h-12 w-12 rounded-full object-cover" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{user.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{user.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{user.phoneNumber}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{user.address}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100 capitalize">{user.role}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400">{user.isActive ? 'Active' : 'Inactive'}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{new Date(user.createdAt).toLocaleDateString()}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{new Date(user.updatedAt).toLocaleDateString()}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex space-x-2">
                                <Link
                                    to={`/admin/users/${index}/details`}
                                    className="inline-flex items-center justify-center px-4 py-2 border border-blue-500 text-blue-500 hover:bg-blue-100 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white rounded"
                                >
                                    Detail
                                </Link>
                                <Link
                                    to={`/admin/users/${index}/update`}
                                    className="inline-flex items-center justify-center px-4 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-100 dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-600 dark:hover:text-white rounded"
                                >
                                    Update
                                </Link>
                                <button
                                    onClick={() => alert('Are you sure you want to delete this user?')}
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

export default UserTable;
