import React, { useState } from 'react';
import { Wrapper, TabsWrapper, Tab, TabContent } from './tabs.styles';

const TabPane = ({ children }) => children;

export const Tabs = ({ children }) => {
  const [selected, setSelected] = useState(0);

  const handleSelect = (idx) => setSelected(idx === selected ? undefined : idx);

  if (!children) return null;

  return (
    <Wrapper>
      <TabsWrapper>
        {React.Children.map(children, (child, idx) => {
          if (child.type !== TabPane) return null;
          return (
            <Tab selected={selected === idx} onClick={() => handleSelect(idx)}>
              {child.props.label}
            </Tab>
          );
        })}
      </TabsWrapper>
      <TabContent>
        {React.Children.map(children, (child, idx) => {
          if (child.type !== TabPane) return null;
          if (selected !== idx) return null;
          return React.cloneElement(child, {
            selected: selected === idx,
            handleClick: () => handleSelect(idx),
          });
        })}
      </TabContent>
    </Wrapper>
  );
};

Tabs.TabPane = TabPane;

export default Tabs;
