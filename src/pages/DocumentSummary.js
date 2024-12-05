import React, { useState } from 'react';
import EditIcon from "../assets/edit.svg";
import { RiDownloadCloud2Line } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import Table from '../components/Table';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import checkedbox from '../assets/checkedbox.svg'; 
import blackCheckbox from '../assets/black-checkbox.svg';
import downloadPDF from '../assets/pdf.pdf';
import { useLocation } from 'react-router-dom';


const DocumentSummary = () => {
    const navigate = useNavigate();
    const [selectedItems, setSelectedItems] = useState([]);
    const [popupContent, setPopupContent] = useState(null);

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

    const handlePTagClick = (pdfName) => {
        setPopupContent(pdfName);
    };

    const closePopup = () => {
        setPopupContent(null);
    };


    const location = useLocation();
    const { folderName, fileName } = location.state || { folderName: 'Unknown Folder', fileName: 'Unknown File' };

    return (
        <Table showFilterSearchBox={false}>
            <section className='p-4'>

                {/* Navigation  */}
                <div className='mb-7 flex items-center gap-1'>
                    <Link to="/" className='text-[10px] md:text-xs text-heading-text'>Dashboard</Link>
                    <MdOutlineKeyboardArrowRight />
                    <Link to="/uploaddocumentsone" className='text-[10px] md:text-xs text-heading-text'>Compliance Documents</Link>
                    <MdOutlineKeyboardArrowRight />
                    <Link to="/uploaddocumentstwo" className='text-[10px] md:text-xs text-heading-text'>{folderName}</Link>
                    <MdOutlineKeyboardArrowRight />
                    <p className='text-[10px] md:text-xs text-heading-text font-medium'>{fileName}</p>
                </div>

                <div className='flex items-center justify-between flex-wrap gap-4 mb-7'>
                    <h2 className='text-2xl font-bold text-[#2D3643]'>CPR Document</h2>
                    <div className='flex items-center gap-4'>
                        <a
                            href={downloadPDF}
                            download="CPR_Document.pdf"
                            className={`flex items-center justify-center gap-2 py-[10px] px-2 md:px-[18px] bg-blue-normal text-white text-sm font-semibold rounded-lg`}
                        >
                            <RiDownloadCloud2Line className='text-lg' />
                            Download Document
                        </a>
                        <button
                            onClick={() => navigate("/edit-document")}
                            className='flex items-center justify-center gap-2 py-[10px] px-2 md:px-[18px] bg-blue-normal rounded-lg text-white text-sm font-semibold'>
                            <img src={EditIcon} alt="EditIcon" className='w-4 h-4' />
                            Edit Document
                        </button>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-5'>
                    <div className='w-full md:w-[35%] shadow-boxshadowtwo rounded-[20px] p-5 bg-white h-fit'>
                        <h2 className='text-sm font-semibold text-text-color-1 mb-4'>Compliance Requirements</h2>
                        <ul className='flex flex-col gap-5'>
                            {['Lorem ipsum dolor sit amet, consectetur adipiscingj.', 'Lorem ipsum dolor sit amet, consectetur adipiscingj.', 'Lorem ipsum dolor sit amet, consectetur adipiscingj.', 'Lorem ipsum dolor sit amet, consectetur adipiscingj.'].map((item, index) => (
                                <li key={index} className='flex items-center gap-3 cursor-pointer'>
                                    <img
                                        src={(index % 2 === 0 ? checkedbox : blackCheckbox)}
                                        alt="Checkbox"
                                        className="w-5 h-5"
                                        onClick={() => handleCheckboxChange(index)}
                                    />
                                    <p
                                        onClick={() => handlePTagClick(item)}
                                        className={`text-sm font-medium leading-[16px] ${index % 2 === 0 ? 'text-text-color-3' : 'text-error cursor-default'} flex-1`}
                                    >
                                        {item}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='w-full md:w-[65%] shadow-boxshadowtwo rounded-[20px] p-6 bg-white h-fit'>
                        <h2 className='text-xl md:text-2xl font-semibold text-text-color-1 mb-4 tracking-[1%]'>Lorem ipsum dolor sit amet consectetur</h2>

                        {/* dummy text  */}
                        <ul className='flex flex-col gap-5'>
                            <p className='text-base md:text-lg font-normal leading-[33px] text-text-color-3 tracking-[1%]'>
                                Lorem ipsum dolor sit amet consectetur. Fermentum facilisi feugiat risus at quis adipiscing. Nam aliquam sit amet molestie sed elementum rhoncus vehicula. Eget amet in id diam nam in dictum. Risus <p className='inline-block text-error cursor-pointer relative'>ornare aliquet</p> id iaculis volutpat donec. Nam aliquam sit amet molestie sed elementum rhoncus vehicula. Eget amet in id diam nam in dictum. Risus ornare aliquet id iaculis volutpat donec. Lorem ipsum dolor sit amet consectetur. Fermentum facilisi feugiat risus at quis adipiscing. <p className='inline-block text-error cursor-pointer relative'>Nam aliquam sit amet molestie</p> sed elementum rhoncus vehicula. Eget amet in id diam nam in dictum. Risus ornare aliquet id iaculis volutpat donec. Nam aliquam sit amet molestie sed elementum rhoncus vehicula. Eget amet in id diam nam in dictum. Risus ornare aliquet id iaculis volutpat donec.
                                <br /> <br />
                                Lorem ipsum dolor sit amet consectetur. Fermentum facilisi feugiat risus at quis adipiscing. Nam aliquam sit amet molestie sed elementum rhoncus vehicula. Eget amet in id diam nam in dictum. Risus ornare aliquet id iaculis volutpat donec. Nam aliquam sit amet molestie sed elementum rhoncus vehicula. Eget amet in id diam nam in dictum. Risus ornare aliquet id iaculis volutpat donec. Lorem ipsum dolor sit amet consectetur. Fermentum facilisi feugiat risus at quis adipiscing. Nam aliquam sit amet molestie sed elementum rhoncus vehicula. Eget amet in id diam nam in dictum. Risus ornare aliquet id iaculis volutpat donec. Nam aliquam sit amet molestie sed elementum <p className='inline-block text-error cursor-pointer relative'>Nam aliquam sit amet molestie</p>. Eget amet in id diam nam in dictum. Risus ornare aliquet id iaculis volutpat donec.
                                <br />
                                Lorem ipsum dolor sit amet consectetur. Fermentum facilisi feugiat risus at quis adipiscing.

                                {/* Comments Tooltip  */}
                                {/* <div className='w-fit h-fit'>
                                    <div className='w-full h-full relative py-[8px] px-3 rounded-md bg-[#FFEAEA] '>
                                        <p className='text-[8px] leading-[12px] tracking-[1%] text-text-color-3 mb-1'>Correct with</p>
                                        <p className='text-xs leading-[16px] font-medium tracking-[1%] text-text-color-1'>“ornare aliquet”</p>

                                        <div className='w-3 h-3 bg-[#FFEAEA] -rotate-45 absolute -bottom-1 left-0 right-0 mx-auto'></div>
                                    </div>
                                </div> */}
                            </p>

                        </ul>

                    </div>
                </div>
            </section>

            {popupContent && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
                    <div className='bg-white p-6 boxscrollbar rounded-lg shadow-lg max-w-[520px] w-full'>
                        <iframe
                            src="https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf"
                            type="application/pdf"
                            className="w-full h-[70vh] boxscrollbar"
                            frameBorder="0"
                        >
                        </iframe>
                        <button onClick={closePopup} className='mt-4 py-2 px-4 bg-blue-normal text-white rounded'>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </Table>
    );
};

export default DocumentSummary;
