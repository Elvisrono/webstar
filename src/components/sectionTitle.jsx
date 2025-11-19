import React from 'react';
const SectionTitle = ({title, mb, textAlign}) => {
    const margin = mb || 'mb-0';
    return (
        <div className={`w-full flex items-center  ${
            textAlign === 'center' ? `justify-${textAlign}` : 'justify-center'
        }`}>
            <h3 className={`text-3xl text-[#272343] font-extrabold font-inter capitalize ${margin}`}>{title}</h3>
        </div>
    );
};

export default SectionTitle;