import React from 'react';
import ManagePosts from './ManagePosts';
import ManageCompanyInfo from './ManageCompanyInfo';

const MainContent = ({ selectedOption }) => {
  return (
    <main className="w-3/4 p-4">
      {selectedOption === 'posts' && <ManagePosts />}
      {selectedOption === 'info' && <ManageCompanyInfo />}
    </main>
  );
};

export default MainContent;
