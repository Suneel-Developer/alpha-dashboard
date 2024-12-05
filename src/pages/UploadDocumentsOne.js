import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DownloadCloudIcon from "../assets/download-cloud-01.svg";
import FileIcon from "../assets/file.svg";
import Table from '../components/Table';
import Breadcrumb from '../components/BreadCrumb';
import FilterSearchBox from '../components/FilterSearchBox';

const folders = [
    { name: 'Invoices', count: 5, percentage: 20 },
    { name: 'Reports', count: 8, percentage: 40 },
    { name: 'Receipts', count: 15, percentage: 80 },
    { name: 'Contracts', count: 12, percentage: 70 },
    { name: 'Letters', count: 20, percentage: 90 },
    { name: 'Statements', count: 3, percentage: 10 },
    { name: 'Forms', count: 7, percentage: 50 },
    { name: 'Applications', count: 6, percentage: 30 },
    { name: 'Notes', count: 9, percentage: 65 }
];

const UploadDocumentsOne = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const navigate = useNavigate();

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

    const handleNavigateDocumentTwo = (name) => {
        navigate("/uploaddocumentstwo", { state: { folderName: name } });
    };
    const isAnyItemSelected = selectedItems.length > 0;

    return (
        <Table showFilterSearchBox={true}>
            <section className='p-4'>
                <Breadcrumb
                    paths={[
                        { label: 'Dashboard', link: '/' },
                        { label: 'Compliance Documents' }
                    ]}
                />
                <div className='flex items-center justify-between gap-2 mb-7 flex-wrap md:flex-nowrap'>
                    <h2 className='text-2xl font-bold text-[#2D3643]'>Upload Documents</h2>
                    <div className='flex items-center gap-4 flex-wrap xsm:flex-nowrap'>
                        <FilterSearchBox />
                        <button
                            className={`flex items-center justify-center gap-2 py-[10px] max-w-[130px] w-full px-4 rounded-lg text-white text-sm font-semibold ${isAnyItemSelected ? 'bg-blue-normal' : 'bg-gray-200'}`}
                            disabled={!isAnyItemSelected}
                        >
                            <img src={DownloadCloudIcon} alt="DownloadCloudIcon" />
                            Download
                        </button>
                    </div>
                </div>

                <ul className='flex flex-col w-full gap-5'>
                    {folders.map((item, index) => (
                        <li key={index} className='flex items-center gap-6 shadow-boxshadowtwo bg-white py-4 px-4 md:px-6 rounded-[20px]' >
                            <input
                                type="checkbox"
                                id={`documents-${index}`}
                                className="ui-checkbox"
                                checked={selectedItems.includes(index)}
                                onChange={() => handleCheckboxChange(index)}
                            />
                            <div className='flex items-center justify-between flex-1 flex-col md:flex-row gap-4 h-full cursor-pointer' onClick={() => handleNavigateDocumentTwo(item.name)}>
                                <div className='flex items-center gap-3 flex-1 w-full'>
                                    <div className='w-10 h-10 flex items-center justify-center rounded-full bg-blue-light'>
                                        <img src={FileIcon} alt="FileIcon" />
                                    </div>

                                    <div className='flex flex-col gap-1'>
                                        <h3 className='text-text-color-1 font-medium text-base leading-[22px]'>{item.name}</h3>
                                        <p className='text-text-color-3 font-normal text-xs leading-[18px]'>{item.count} documents</p>
                                    </div>
                                </div>

                                <div className='flex items-center gap-4 w-full flex-1 md:justify-end'>
                                    <div className='md:max-w-[290px] w-full h-2 rounded-lg bg-blue-light'>
                                        <div className='bg-blue-normal rounded-lg' style={{ width: `${item.percentage}%`, height: '100%' }}></div>
                                    </div>
                                    <p className='text-sm font-medium text-normal-text'>{item.percentage}%</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </Table>
    );
};

export default UploadDocumentsOne;
