import React from 'react'
import DocumentIcon from "../../assets/documet-icon.svg"
import ErrorIcon from "../../assets/error.svg"
import EditIcon from "../../assets/edit-02.svg"
import UploadIcon from "../../assets/upload-01.svg"
import { Link, useNavigate } from 'react-router-dom'
import FilterSearchBox from '../FilterSearchBox'

const rowData = [
    {
        name: 'CPR Document',
        foldername: 'Invoices',
        status: 'Non Compliant',
        actionRequired: 'Edit the document',
        statusBg: '#E4282826',
        statusColor: "#D62334",
        actions: ['Edit'],
    },
    {
        name: 'Report Document',
        foldername: 'Reports',
        status: 'Not uploaded',
        actionRequired: 'Upload the document',
        statusBg: '#EBEEF4',
        statusColor: "#5F6170",
        actions: ['Upload'],
    },
    {
        name: 'Invoice Document',
        foldername: 'Receipts',
        status: 'Compliant',
        actionRequired: 'No action required',
        statusBg: '#4EE42826',
        statusColor: "#1E9A49",
        actions: ['Upload'],
    },
    {
        name: 'Tax Document',
        foldername: 'Contracts',
        status: 'Partially Compliant',
        actionRequired: 'Review the document',
        statusBg: '#FFA6212E',
        statusColor: "#FFA51F",
        actions: ['Upload'],
    },

];


const BoxFive = () => {
    const naviagte = useNavigate()
    const handleNavigateDocument = (() => {
        naviagte("/uploaddocumentsone")
    })
    return (
        <div className='w-full shadow-boxshadow bg-white p-4 mt-5 rounded-[20px]'>
            <div className='flex items-center justify-between gap-1 pb-4'>
                <h4 className='text-lg font-semibold text-text-color-1'>Pending Actions</h4>
                <div className='hidden md:block'>
                    <FilterSearchBox />
                </div>
            </div>


            <div className="overflow-x-auto overflow-y-auto boxscrollbar h-[422px] border border-[#EBEEF4] rounded-2xl">
                <table className="min-w-full bg-white border-[#EBEEF4] rounded-2xl border-collapse overflow-hidden">
                    <thead className='bg-gray-100 sticky top-0 left-0 z-10 w-full'>
                        <tr>
                            <th className="py-5 px-4 text-left text-gray-600 uppercase text-sm font-medium">
                                Document’s Name
                            </th>
                            <th className="py-5 pr-5 text-left text-gray-600 uppercase text-sm font-medium">
                                Status
                            </th>
                            <th className="py-5 pr-4 text-left text-gray-600 uppercase text-sm font-medium">
                                Action Required
                            </th>
                            <th className="py-5 pr-4 text-left text-gray-600 uppercase text-sm font-medium">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rowData.map((row, index) => (
                            <tr key={index} className='border-b border-[#EBEEF4] w-full cursor-pointer'>
                                <td className='whitespace-nowrap'>
                                    <div className='flex items-center gap-4 py-[18px] pl-[18px] pr-20 md:pr-40'>
                                        <div className='w-10 h-10 flex items-center justify-center rounded-full bg-blue-light'>
                                            <img src={DocumentIcon} alt="DocumentIcon" />
                                        </div>
                                        <div>
                                            <h3 className='text-text-color-1 font-medium text-sm leading-[22px]'>{row.name}</h3>
                                            <p className='text-text-color-3 font-normal text-xs leading-[18px]'>{row.foldername}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className='pr-20 py-5 whitespace-nowrap'>
                                    <div className={`w-fit py-[6px] px-4 rounded-[90px] text-xs font-medium`}  style={{ backgroundColor: row.statusBg, color: row.statusColor }}>
                                        {row.status}
                                    </div>
                                </td>
                                <td className='py-5 pr-8 whitespace-nowrap'>
                                    <div className="text-left whitespace-nowrap w-fit flex items-center gap-2">
                                        <img src={ErrorIcon} alt="ErrorIcon" />
                                        <p className='leading-[14px] text-sm text-[#3E424D]'>{row.actionRequired}</p>
                                    </div>
                                </td>
                                <td className='py-5 pr-8 whitespace-nowrap'>
                                    <div className='flex items-center gap-2'>
                                        {row.actions.includes('Edit') && (
                                            <Link to="/document-summary" className='flex items-center gap-2 w-[72px] bg-[#E4EDFB] rounded-lg py-2 px-[10px] text-xs font-semibold leading-[16px] text-[#1E55A8]'>
                                                <img src={EditIcon} alt="EditIcon" className='w-[10px] h-[10px]' />
                                                Edit
                                            </Link>
                                        )}
                                        {row.actions.includes('Upload') && (
                                            <Link to="/uploaddocumentstwo" className='flex items-center gap-2 w-[83px] bg-[#E4EDFB] rounded-lg py-2 px-[10px] text-xs font-semibold leading-[16px] text-[#1E55A8]'>
                                                <img src={UploadIcon} alt="UploadIcon" className='w-[10px] h-[10px]' />
                                                Upload
                                            </Link>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default BoxFive