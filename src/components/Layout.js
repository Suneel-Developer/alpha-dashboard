import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Layout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    return (
        <div className="flex">
            {/* <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} /> */}
            <div className="flex-1 flex flex-col relative ml-0 lg:ml-[296px]">
                {/* <Topbar toggleSidebar={toggleSidebar} /> */}
                <main className="flex-1 px-3 md:px-6 pb-6 pt-2">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
