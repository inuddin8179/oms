import React from 'react';

interface TabPanelProps extends React.ComponentProps<'div'> {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
  id: string;
}
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, id, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${id}-tabpanel-${index}`}
      aria-labelledby={`${id ?? 'panel'}-tab-${index}`}
      {...other}>
      {value === index && children}
    </div>
  );
}

export default CustomTabPanel;
