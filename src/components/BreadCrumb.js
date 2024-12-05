import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Breadcrumb = ({ paths }) => {
  return (
    <div className='mb-7 flex items-center gap-1'>
      {paths.map((path, index) => (
        <React.Fragment key={index}>
          {index > 0 && <MdOutlineKeyboardArrowRight />}
          {path.link ? (
            <Link to={path.link} className='text-[10px] md:text-xs text-heading-text'>
              {path.label}
            </Link>
          ) : (
            <p className='text-[10px] md:text-xs text-heading-text font-medium'>
              {path.label}
            </p>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
