import React from 'react';
import resumePdf from '../assets/resume.pdf';

const Resume: React.FC = () => {

    console.log('PDF path:', resumePdf);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src={resumePdf}
        title="Resume"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default Resume;
