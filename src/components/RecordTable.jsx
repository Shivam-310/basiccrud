import React from 'react'

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
                    <search className='absolute left-3 top-1/2 transform-translate-y-1/2 text-gray-400 size={20}'/>
                    <input type='text' placeholder='search by name, email or position' className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus-ring-blue-500'/>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default RecordTable
