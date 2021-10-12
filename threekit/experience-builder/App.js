import React from 'react';
import 'antd/dist/antd.css';
import Experience from './Experience';
import ExperienceBuilderComponent from './ExperienceBuilder';

export const ExperienceBuilder = () => {
  if (window.location.pathname === '/experience') return <Experience />;
  return <ExperienceBuilderComponent />;
};

export default ExperienceBuilder;
