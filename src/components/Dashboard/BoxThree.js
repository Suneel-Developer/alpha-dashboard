import React, { useState } from 'react';
import DocumentIcon from "../../assets/documet-icon.svg";
import EditIcon from "../../assets/edit-icon.svg";
import DeleteIcon from "../../assets/delete-icon.svg";
import { useNavigate } from 'react-router-dom';
import DeleteConfirmationPopup from '../DeleteConfirmationPopup';
import FilterSearchBox from '../FilterSearchBox';

const BoxThree = () => {
    const [activeTab, setActiveTab] = useState('nonCompliant');
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [selectedDocumentId, setSelectedDocumentId] = useState(null);
    const navigate = useNavigate();
    const [data, setData] = useState({
        nonCompliant: [
            { id: 1, name: 'CPR Document', foldername: 'Invoices', date: 'October 30, 2017' },
            { id: 2, name: 'CPR Document', foldername: 'Reports', date: 'October 30, 2017' },
            { id: 3, name: 'CPR Document', foldername: 'Receipts', date: 'October 30, 2017' },
        ],
        compliant: [
            { id: 1, name: 'CPR Document', foldername: 'Contracts', date: 'October 30, 2017' },
        ],
        partiallyCompliant: [
            { id: 1, name: 'CPR Document', foldername: 'Letters', date: 'October 30, 2017' },
            { id: 2, name: 'CPR Document', foldername: 'Statements', date: 'October 30, 2017' },
        ]
    });

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const tableData = data[activeTab];

    const handleEditDocument = (id) => {
        navigate(`/document-summary`);
    };

    const handleDeleteClick = (id) => {
        setSelectedDocumentId(id);
        setShowDeletePopup(true);
    };

    const handleConfirmDelete = () => {
        setData(prevData => {
            const updatedTabData = prevData[activeTab].filter(item => item.id !== selectedDocumentId);

            return {
                ...prevData,
                [activeTab]: updatedTabData
            };
        });
        setShowDeletePopup(false);
        setSelectedDocumentId(null);
    };

    const handleCancelDelete = () => {
        setShowDeletePopup(false);
        setSelectedDocumentId(null);
    };

    return (
        <div className='w-full shadow-boxshadow bg-white h-auto md:h-[448px] p-4 sm:p-5 rounded-[20px]'>
            <div className='flex items-center justify-between gap-1 mb-4'>
                <h4 className='text-lg font-semibold text-text-color-1'>Documents</h4>
                <div className='hidden md:block'>
                    <FilterSearchBox />
                </div>
            </div>

            {/* Tabs */}
            <div className='border-b border-[#EBEEF4] flex gap-0 sm:gap-6 mb-4'>
                <button
                    className={`px-1 pb-[11px] text-xs sm:text-sm font-semibold ${activeTab === 'nonCompliant' ? 'border-b-2 border-blue-normal text-blue-normal' : 'text-text-color-3'}`}
                    onClick={() => handleTabChange('nonCompliant')}
                >
                    Non-Compliant Documents
                </button>
                <button
                    className={`px-1 pb-[11px] text-xs sm:text-sm font-medium ${activeTab === 'compliant' ? 'border-b-2 border-blue-normal text-blue-normal' : 'text-text-color-3'}`}
                    onClick={() => handleTabChange('compliant')}
                >
                    Compliant Documents
                </button>
                <button
                    className={`px-1 pb-[11px] text-xs sm:text-sm font-medium ${activeTab === 'partiallyCompliant' ? 'border-b-2 border-blue-normal text-blue-normal' : 'text-text-color-3'}`}
                    onClick={() => handleTabChange('partiallyCompliant')}
                >
                    Partially Compliant Documents
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto overflow-y-auto h-[302px] border border-[#EBEEF4] rounded-2xl">
                <table className="min-w-full bg-white border-[#EBEEF4] rounded-2xl border-collapse overflow-hidden">
                    <thead className='bg-gray-100 sticky top-0 left-0 z-10 w-full'>
                        <tr>
                            <th className="py-5 px-4 text-left text-gray-600 uppercase text-sm font-medium">
                                Documents
                            </th>
                            <th className="py-5 pr-5 text-left text-gray-600 uppercase text-sm font-medium">
                                Uploaded
                            </th>
                            <th className="py-5 pr-4 text-left text-gray-600 uppercase text-sm font-medium">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((item) => (
                            <tr key={item.id} className='border-b border-[#EBEEF4] w-full'>
                                <td className='whitespace-nowrap'>
                                    <div className='flex items-center gap-4 py-[18px] pl-[18px] pr-20'>
                                        <div className='w-10 h-10 flex items-center justify-center rounded-full bg-blue-light'>
                                            <img src={DocumentIcon} alt="DocumentIcon" />
                                        </div>
                                        <div>
                                            <h3 className='text-text-color-1 font-medium text-sm leading-[22px]'>{item.name}</h3>
                                            <p className='text-text-color-3 font-normal text-xs leading-[18px]'>{item.foldername}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className='pr-20 py-5 whitespace-nowrap'>
                                    <div className='text-text-color-2 font-normal text-sm'>
                                        {item.date}
                                    </div>
                                </td>
                                <td className='py-5 pr-8 whitespace-nowrap'>
                                    <div className='flex items-center gap-5'>
                                        <button onClick={() => handleEditDocument(item.id)}>
                                            <img src={EditIcon} alt="EditIcon" className='min-w-4' />
                                        </button>
                                        <button onClick={() => handleDeleteClick(item.id)}>
                                            <img src={DeleteIcon} alt="DeleteIcon" className='min-w-4' />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Delete Confirmation Popup */}
            <DeleteConfirmationPopup
                isOpen={showDeletePopup}
                onConfirm={handleConfirmDelete}
                onClose={() => setShowDeletePopup(false)}
            />
        </div>
    );
};

export default BoxThree;
