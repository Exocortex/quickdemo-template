import React from 'react';
import styled from 'styled-components';

import icons from './index';

const IconsGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & > div {
    border-radius: 2px;
    border: 1px solid lightgrey;
    margin-right: 5px;
    margin-bottom: 5px;
    padding: 10px 0;

    min-height: 60px;
    min-width: 90px;
    width: 90px;

    & > div {
      text-align: center;
    }

    & > div:nth-child(1) {
      margin-bottom: 12px;
      /* font-size: 20px; */
    }

    & > div:nth-child(2) {
      text-transform: capitalize;
    }
  }
`;

export default {
  title: 'V2 - Icons/Default',
  parameters: {
    componentSubtitle: 'Icons as React Components.',
  },
};

const Template = () => {
  return (
    <IconsGrid>
      {Object.values(icons).map((Icon, i) => (
        <div>
          <div>
            <Icon key={i} />
          </div>
          <div>{Icon.iconName}</div>
        </div>
      ))}
    </IconsGrid>
  );
};

export const Default = Template.bind({});
