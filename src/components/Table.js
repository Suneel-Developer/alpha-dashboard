import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Table = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    return (
        <div className='flex flex-col xxlg:flex-row'>
            {/* Sidebar */}
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            <main className={`flex-1 xxlg:ml-[296px]`}>
                <Topbar toggleSidebar={toggleSidebar}  />
                {children}
            </main>
        </div>
    );
}

export default Table;
