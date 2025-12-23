import { Edit2, Plus } from 'lucide-react'

function RecordTable() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h1 className="font-3xl font-bold text-gray-800 mb-2">Employee Management</h1>
            <p className='text-gray-600'>
                Manage Employee Record with Redux Toolkit
            </p>
        </div>
        <div className='bg-white rounded-lg shadow-md p-6 mb-6'>
            <div className='flex flex-col md:flex-row gap-4'>
                <div>
                    <search className='absolute left-3 top-1/2 transform-translate-y-1/2 text-gray-400 size={20}' />
                    <input type='text' placeholder='search by name, email or position' className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus-ring-blue-500' />
                </div>
                <button className='flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all'>
                    <Plus size={20} />
                Add New Record
                </button>
            </div>
        </div>

        <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <div className='overflow-x-auto'>
                <table className='w-full'>
                    <thead className='bg-gray-50 border-b border-gray-200'>
                        <tr>
                            <th className='px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase'>
                                ID
                            </th>
                            <th className='px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase'>
                                Name
                            </th>
                            <th className='px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase'>
                                Email
                            </th>
                            <th className='px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase'>
                                Phone
                            </th>
                            <th className='px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase'>
                                Position
                            </th>
                            <th className='px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase'>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200'>
                        <tr className='px-6 py-12 text-center text-gray-500'>
                            <td colspan="6">
                                No Record Found
                            </td>
                        </tr>
                        {/* else, map */}
                        <tr className='hover:bg-gray-50 transition-colors'>
                            <td className='px-6 py-2 whitespace-nowrap text-sm text-gray-900'>
                                1
                            </td>
                            <td className='px-6 py-2 whitespace-nowrap text-sm text-gray-900'>
                                Batman
                            </td>
                            <td className='px-6 py-2 whitespace-nowrap text-sm text-gray-900'>
                                batM@gmail.com
                            </td>
                            <td className='px-6 py-2 whitespace-nowrap text-sm text-gray-900'>
                                5588546
                            </td>
                            <td className='px-6 py-2 whitespace-nowrap text-sm text-gray-900'>
                                Data analyst
                            </td>
                            <td className='px-6 py-2 whitespace-nowrap text-sm text-gray-900'>
                                <button className='flex items-center gap-1 bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700 transition-all text-sm font-medium'>
                                    <Edit2 size={16}/> Edit
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

      </div>
    </div>
  )
}

export default RecordTable
