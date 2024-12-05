import React, { useState, useEffect } from 'react';
import Table from '../components/Table';
import SavedChangesPopup from '../components/SavedChangesPopup';
import ComplianceRequirementsPopup from '../components/ComplianceRequirementsPopup';
import ReactQuill, { Quill } from 'react-quill';
import { IoArrowBackOutline } from "react-icons/io5";
import 'react-quill/dist/quill.snow.css';
import { Link } from 'react-router-dom';
import './Editor.css'; // Assuming this is your custom CSS file
const originalContent = `
    <h2>Lorem ipsum dolor sit amet consectetur</h2>
    <p>Lorem ipsum dolor sit amet consectetur. Fermentum facilisi feugiat risus at quis adipiscing. Nam aliquam sit amet molestie sed elementum rhoncus vehicula. Eget amet in id diam nam in dictum.</p>
    <ul>
        <li>Nam aliquam sit amet molestie sed elementum rhoncus vehicula.</li>
        <li>Eget amet in id diam nam in dictum.</li>
        <li>Risus ornare aliquet id iaculis volutpat donec.</li>
    </ul>
    <p>Nam aliquam sit amet molestie sed elementum rhoncus vehicula. Eget amet in id diam nam in dictum. Risus ornare aliquet id iaculis volutpat donec.</p>
`;

const EditDocument = () => {
    const [showSavedChanges, setShowSavedChanges] = useState(false);
    const [showComplianceRequirements, setShowComplianceRequirements] = useState(false);
    const [editorValue, setEditorValue] = useState(originalContent);
    const [showOriginalText, setShowOriginalText] = useState(false);
    const [wordCount, setWordCount] = useState(0);

    // Autosave every 5 seconds
    useEffect(() => {
        const autosaveInterval = setInterval(() => {
            // Simulate saving the content
            console.log("Autosaving content...");
        }, 5000);

        return () => clearInterval(autosaveInterval);
    }, []);

    useEffect(() => {
        setWordCount(editorValue.trim().split(/\s+/).length);
    }, [editorValue]);

    const handleSaveChanges = () => {
        setShowSavedChanges(true);
    };

    const handleCloseSavedChanges = () => {
        setShowSavedChanges(false);
    };

    const handleShowComplianceRequirements = () => {
        setShowSavedChanges(false);
        setShowComplianceRequirements(true);
    };

    const handleCloseComplianceRequirements = () => {
        setShowComplianceRequirements(false);
    };

    const handleChange = (value) => {
        setEditorValue(value);
    };
    const font = Quill.import('attributors/style/font');
    font.whitelist = ['times-new-roman', 'Roboto', 'Monospace'];
    Quill.register(font, true);
    const modules = {
        toolbar: [
            [{ 'font': ['times-new-roman','Roboto','Monospace']}],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['link', 'image', 'video'],
            ['clean'],
            ['undo', 'redo']
        ]
    };

    const formats = [
        'font', 'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
        'list', 'bullet', 'check', 'indent',
        'script', 'super', 'sub',
        'direction', 'size', 'color', 'background',
        'align', 'link', 'image', 'video'
    ];


    return (
        <Table showFilterSearchBox={false}>
            <section className='p-4'>
                <div className='flex items-center justify-between flex-wrap gap-4 mb-7'>
                    <div className='flex items-center gap-3'>
                        <Link to="/document-summary"><IoArrowBackOutline className='text-3xl' /></Link>
                        <h2 className='text-2xl font-bold text-[#2D3643]'>CPR Document</h2>
                    </div>

                    <button
                        onClick={handleSaveChanges}
                        className='text-center py-[10px] px-2 md:px-4 bg-blue-normal rounded-lg text-white text-sm font-semibold'>
                        Save Changes
                    </button>
                </div>

                {/* Toggle Button */}
                <div className='mb-4'>
                    <button
                        onClick={() => setShowOriginalText(!showOriginalText)}
                        className='py-2 px-2 text-sm text-text-color-3'>
                        {showOriginalText ? 'Hide original text 《' : 'Show original text 》'}
                    </button>
                </div>

                {/* Conditional rendering based on toggle */}
                <div className={`grid ${showOriginalText ? 'md:grid-cols-2' : 'w-full'} gap-5`}>

                    {/* Original text */}
                    <div className={`shadow-boxshadowtwo rounded-[20px] custom-font p-5 bg-white h-fit ${showOriginalText === false ? 'hidden' : ''}`}>
                        <h2 className='text-xl md:text-2xl font-semibold text-text-color-1 mb-4 tracking-[1%]'>Lorem ipsum dolor sit amet consectetur</h2>
                        <ul className='flex flex-col gap-5'>
                            <p className='text-base md:text-lg font-normal leading-[33px] text-text-color-3 tracking-[1%]'>
                                Lorem ipsum dolor sit amet consectetur. Fermentum facilisi feugiat risus at quis adipiscing. Nam aliquam sit amet molestie sed elementum rhoncus vehicula. Eget amet in id diam nam in dictum. Risus ornare aliquet id iaculis volutpat donec. Nam aliquam sit amet molestie sed elementum rhoncus vehicula. Eget amet in id diam nam in dictum. Risus ornare aliquet id iaculis volutpat donec. Lorem ipsum dolor sit amet consectetur. Fermentum facilisi feugiat risus at quis adipiscing. Nam aliquam sit amet molestie sed elementum rhoncus vehicula. Eget amet in id diam nam in dictum. Risus ornare aliquet id iaculis volutpat donec. Nam aliquam sit amet molestie sed elementum rhoncus vehicula. Eget amet in id diam nam in dictum. Risus ornare aliquet id iaculis volutpat donec.
                            </p>
                            <p className='text-base md:text-lg font-normal leading-[33px] text-text-color-3 tracking-[1%]'>
                                Lorem ipsum dolor sit amet consectetur. Fermentum facilisi feugiat risus at quis adipiscing. Nam aliquam sit amet molestie sed elementum rhoncus vehicula. Eget amet in id diam nam in dictum. Risus ornare aliquet id iaculis volutpat donec. Nam aliquam sit amet molestie sed elementum rhoncus vehicula. Eget amet in id diam nam in dictum. Risus ornare aliquet id iaculis volutpat donec. Lorem ipsum dolor sit amet consectetur. Fermentum facilisi feugiat risus at quis adipiscing. Nam aliquam sit amet molestie sed elementum rhoncus vehicula. Eget amet in id diam nam in dictum. Risus ornare aliquet id iaculis volutpat donec. Nam aliquam sit amet molestie sed elementum rhoncus vehicula. Eget amet in id diam nam in dictum. Risus ornare aliquet id iaculis volutpat donec.
                            </p>
                            <p className='text-base md:text-lg font-normal leading-[33px] text-text-color-3 tracking-[1%]'>
                                Lorem ipsum dolor sit amet consectetur. Fermentum facilisi feugiat risus at quis adipiscing.
                            </p>
                        </ul>
                    </div>

                    {/* Text Editor */}
                    <div className={`shadow-boxshadowtwo rounded-[20px] overflow-hidden bg-white ${showOriginalText ? 'h-full' : 'w-full h-[70vh]'}`}>
                        <ReactQuill
                            value={editorValue}
                            onChange={handleChange}
                            theme="snow"
                            modules={modules}
                            formats={formats}
                            placeholder="Write something..."
                            className="editor text-[50px] leading-3"
                        />
                    </div>
                </div>
            </section>

            {showSavedChanges && (
                <SavedChangesPopup
                    onClose={handleCloseSavedChanges}
                    onComplianceRequirements={handleShowComplianceRequirements}
                />
            )}

            {showComplianceRequirements && (
                <ComplianceRequirementsPopup
                    onClose={handleCloseComplianceRequirements}
                />
            )}
        </Table>
    );
};

export default EditDocument;
