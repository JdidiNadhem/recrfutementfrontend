import React, { useState } from 'react';
import Header from './header'

import Sidebar from './SideBar';
import MainContent from './MainContent';

const CompanyProfile = () => {

    const [selectedOption, setSelectedOption] = useState('posts');

    return (
        <div className='pt-5'>
            <Header />
            <div className="flex mt-10 mx-10">
                <Sidebar onSelect={setSelectedOption} />
                <MainContent selectedOption={selectedOption} />
            </div>
        </div>
    )
}

export default CompanyProfile
