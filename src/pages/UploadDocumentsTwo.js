import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import UploadDocumentIcon from "../assets/upload-documents.svg";
import DownloadCloudIcon from "../assets/download-cloud-01.svg";
import SummaryPopup from '../components/SummaryPopup';
import EditIcon from "../assets/edit-icon.svg";
import DeleteIcon from "../assets/delete-icon.svg";
import Table from '../components/Table';
import DeleteConfirmationPopup from '../components/DeleteConfirmationPopup';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Breadcrumb from '../components/BreadCrumb';
import FilterSearchBox from '../components/FilterSearchBox';

const UploadDocumentsTwo = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
    const [currentDocumentIndex, setCurrentDocumentIndex] = useState(null);
    const [documentToDelete, setDocumentToDelete] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);

    const [files, setfiles] = useState([
        {
            id: 1,
            name: 'Financial Statements Q1',
            description: 'Financial summary for the first quarter.',
            isUploading: false,
            uploadProgress: 0,
            fileName: 'financial_statements_q1.pdf',
            isUploaded: false,
            status: 'Not uploaded',
            statusBg: '#EBEEF4',
            statusColor: '#5F6170',
        },
        {
            id: 2,
            name: 'Annual Report 2023',
            description: 'Complete annual report for 2023.',
            isUploading: false,
            uploadProgress: 0,
            fileName: 'annual_report_2023.pdf',
            isUploaded: false,
            status: 'Not uploaded',
            statusBg: '#EBEEF4',
            statusColor: '#5F6170',
        },
        {
            id: 3,
            name: 'Audit Report',
            description: 'Audit report for the fiscal year.',
            isUploading: false,
            uploadProgress: 0,
            fileName: 'audit_report.pdf',
            isUploaded: false,
            status: 'Not uploaded',
            statusBg: '#EBEEF4',
            statusColor: '#5F6170',
        },
        {
            id: 4,
            name: 'Expense Reimbursement Form',
            description: 'Form for expense reimbursement requests.',
            isUploading: false,
            uploadProgress: 0,
            fileName: 'expense_reimbursement_form.pdf',
            isUploaded: false,
            status: 'Not uploaded',
            statusBg: '#EBEEF4',
            statusColor: '#5F6170',
        },
        {
            id: 5,
            name: 'Employee Benefits Enrollment',
            description: 'Form for enrolling in employee benefits.',
            isUploading: false,
            uploadProgress: 0,
            fileName: 'employee_benefits_enrollment.pdf',
            isUploaded: false,
            status: 'Not uploaded',
            statusBg: '#EBEEF4',
            statusColor: '#5F6170',
        },
        {
            id: 6,
            name: 'Project Proposal',
            description: 'Proposal for the new project.',
            isUploading: false,
            uploadProgress: 0,
            fileName: 'project_proposal.pdf',
            isUploaded: false,
            status: 'Not uploaded',
            statusBg: '#EBEEF4',
            statusColor: '#5F6170',
        },
        {
            id: 7,
            name: 'Sales Report Q2',
            description: 'Sales report for the second quarter.',
            isUploading: false,
            uploadProgress: 0,
            fileName: 'sales_report_q2.pdf',
            isUploaded: false,
            status: 'Not uploaded',
            statusBg: '#EBEEF4',
            statusColor: '#5F6170',
        },
        {
            id: 8,
            name: 'Client Feedback Summary',
            description: 'Summary of client feedback and suggestions.',
            isUploading: false,
            uploadProgress: 0,
            fileName: 'client_feedback_summary.pdf',
            isUploaded: false,
            status: 'Not uploaded',
            statusBg: '#EBEEF4',
            statusColor: '#5F6170',
        },
        {
            id: 9,
            name: 'Marketing Plan 2024',
            description: 'Marketing plan for the year 2024.',
            isUploading: false,
            uploadProgress: 0,
            fileName: 'marketing_plan_2024.pdf',
            isUploaded: false,
            status: 'Not uploaded',
            statusBg: '#EBEEF4',
            statusColor: '#5F6170',
        },
        {
            id: 10,
            name: 'Training Materials',
            description: 'Materials for the upcoming training sessions.',
            isUploading: false,
            uploadProgress: 0,
            fileName: 'training_materials.pdf',
            isUploaded: false,
            status: 'Not uploaded',
            statusBg: '#EBEEF4',
            statusColor: '#5F6170',
        },
    ]);

    const handleOpenPopup = (index) => {
        setCurrentDocumentIndex(index);
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setCurrentDocumentIndex(null);
    };

    const handleUploadComplete = () => {
        setfiles((prevDocs) =>
            prevDocs.map((doc, i) =>
                i === currentDocumentIndex ? {
                    ...doc,
                    isUploaded: true,
                    isUploading: false,
                    status: 'Compliant',
                    statusBg: '#4EE42826',
                    statusColor: '#1E9A49',
                } : doc
            )
        );
        handleClosePopup();
    };

    const handleFileUpload = () => {
        setfiles((prevDocs) =>
            prevDocs.map((doc, i) =>
                i === currentDocumentIndex ? { ...doc, isUploading: true } : doc
            )
        );

        setTimeout(() => {
            handleUploadComplete();
        }, 2000);
    };

    const handleEdit = (index) => {
        const fileName = files[index].name;
        navigate('/document-summary', { state: { folderName, fileName } });
    };

    const handleDelete = (index) => {
        setDocumentToDelete(index);
        setIsConfirmPopupOpen(true);
    };

    const confirmDelete = () => {
        setfiles((prevDocs) =>
            prevDocs.filter((_, i) => i !== documentToDelete)
        );
        setIsConfirmPopupOpen(false);
        setDocumentToDelete(null);
    };

    const cancelDelete = () => {
        setIsConfirmPopupOpen(false);
        setDocumentToDelete(null);
    };

    const handleCheckboxChange = (index) => {
        setSelectedItems(prevSelectedItems => {
            const newSelectedItems = [...prevSelectedItems];
            if (newSelectedItems.includes(index)) {
                return newSelectedItems.filter(item => item !== index);
            } else {
                return [...newSelectedItems, index];
            }
        });
    };

    // Retrieve folder name from the location state
    const { folderName } = location.state || { folderName: 'Unknown Folder' };

    // Determine button color based on selection
    const buttonBgColor = selectedItems.length > 0 ? 'bg-blue-normal' : 'bg-gray-200';
    const buttonTextColor = selectedItems.length > 0 ? 'text-white' : 'text-gray-500';
    const buttonDisabled = selectedItems.length === 0;

    return (
        <Table showFilterSearchBox={true}>
            <section className='p-4'>

                {/* Navigation  */}
                <div className='mb-7 flex items-center gap-1'>
                    <Link to="/" className='text-[10px] md:text-xs text-heading-text'>Dashboard</Link>
                    <MdOutlineKeyboardArrowRight />
                    <Link to="/uploaddocumentsone" className='text-[10px] md:text-xs text-heading-text'>Compliance Documents</Link>
                    <MdOutlineKeyboardArrowRight />
                    <p className='text-[10px] md:text-xs text-heading-text font-medium'>{folderName}</p>
                </div>


                <div className='flex xxlg:items-center gap-4 mb-5 flex-wrap flex-col xxlg:flex-row'>
                    <h2 className='text-2xl font-bold text-[#2D3643]'>Upload Documents</h2>
                    <div className='flex items-start md:items-center gap-4 flex-1 flex-col md:flex-row justify-start md:justify-end'>
                        <div className='flex items-center gap-4 w-full flex-1 md:justify-end'>
                            <div className='md:max-w-[240px] w-full h-2 rounded-lg bg-blue-light'>
                                <div className='bg-blue-normal rounded-lg w-[60%] h-full'></div>
                            </div>
                            <p className='text-sm font-medium text-normal-text'>60%</p>
                        </div>

                        <FilterSearchBox/>

                        <button
                            className={`flex items-center justify-center gap-2 py-[10px] max-w-[130px] w-full px-4 ${buttonBgColor} rounded-lg ${buttonTextColor} text-sm font-semibold`}
                            disabled={buttonDisabled}
                        >
                            <img src={DownloadCloudIcon} alt="DownloadCloudIcon" />
                            Download
                        </button>
                    </div>
                </div>

                <ul className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5'>
                    {files.map((doc, index) => (
                        <li key={doc.id} className='flex items-center gap-5 shadow-boxshadowtwo bg-white py-4 px-3 md:px-5 rounded-xl'>
                            <input
                                type="checkbox"
                                id={`document-${doc.id}`}
                                className="ui-checkbox"
                                checked={selectedItems.includes(index)}
                                onChange={() => handleCheckboxChange(index)}
                            />
                            <div className='flex items-center justify-between flex-1 gap-3'>
                                <div className='flex items-center gap-3 flex-1 w-full'>
                                    <img src={UploadDocumentIcon} alt="UploadDocumentIcon" />
                                    <div className='flex flex-col gap-1'>
                                        <h3 className='text-text-color-1 truncate font-medium text-base leading-[22px] max-w-[150px] xsm:max-w-[200px]'>{doc.name}</h3>
                                        <p className='text-text-color-3 font-normal text-xs leading-[18px] max-w-[150px] xsm:max-w-[200px] truncate'>{doc.description}</p>
                                    </div>
                                </div>
                                {doc.isUploaded && (
                                    <span
                                        className='py-1 px-2 rounded-lg text-xs font-medium'
                                        style={{ backgroundColor: doc.statusBg, color: doc.statusColor }}
                                    >
                                        {doc.status}
                                    </span>
                                )}
                                <div className='flex items-center gap-3'>
                                    {!doc.isUploaded ? (
                                        !doc.isUploading ? (
                                            <button
                                                className='py-2 px-[10px] text-center rounded-[10px] bg-[#E4EDFB] font-semibold text-xs text-[#1E55A8]'
                                                onClick={() => handleOpenPopup(index)}
                                            >
                                                Upload
                                            </button>
                                        ) : (
                                            <div className='flex items-center gap-3'>
                                                <p className='text-xs font-semibold'>Uploading...</p>
                                            </div>
                                        )
                                    ) : (
                                        <div className='flex items-center gap-3'>
                                            <button onClick={() => handleEdit(index)}><img src={EditIcon} alt="EditIcon" /></button>
                                            <button onClick={() => handleDelete(index)}><img src={DeleteIcon} alt="DeleteIcon" /></button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                {isPopupOpen && (
                    <SummaryPopup isOpen={true} onClose={handleClosePopup} onUploadComplete={handleUploadComplete} />
                )}

                {isConfirmPopupOpen && (
                    <DeleteConfirmationPopup
                        isOpen={isConfirmPopupOpen}
                        onClose={cancelDelete}
                        onConfirm={confirmDelete}
                    />
                )}
            </section>
        </Table>
    );
};

export default UploadDocumentsTwo;
