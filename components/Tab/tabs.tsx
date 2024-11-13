import React from 'react';

import { AvatarIcon } from '@features/fulfillments/ui/fullfillmentList/fullfillmentListStyles';
import { Tab, Tabs } from '@mui/material';
import { TileAndValue } from '@utils/types';

interface TabsType extends React.ComponentProps<'div'> {
  value: any;
  id: string;
  ariaLabel?: string;
  variant: 'scrollable' | 'standard' | 'fullWidth';
  tabsList: TileAndValue[];
  tabStyles?: React.CSSProperties;
  tabsStyles?: React.CSSProperties;
  handleChange: ((event: React.SyntheticEvent<Element, Event>, value: any) => void) | undefined;
  showIndicator?: boolean;
}

function a11yProps(index: number, id: string) {
  return {
    id: `${id}-tab-${index}`,
    'aria-controls': `${id}-tabpanel-${index}`,
  };
}
function CustomTabs(props: TabsType) {
  const { tabsList, value, variant, tabsStyles, tabStyles, id, ariaLabel, handleChange, showIndicator = true } = props;

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label={ariaLabel}
        variant={variant}
        scrollButtons="auto"
        TabIndicatorProps={{ style: { display: showIndicator ? 'block' : 'none' } }}
        sx={{
          ...tabsStyles,
          backgroundColor: '#fff',
        }}>
        {tabsList?.map((item: { title: string; value: string; [x: string]: string | undefined }, index: number) => (
          <Tab
            label={item.title}
            icon={
              item?.icon ? <AvatarIcon alt="user icon" src={item?.icon} sx={{ width: '21px', height: '21px' }} /> : ''
            }
            {...a11yProps(index, id)}
            key={index}
            sx={{ ...tabStyles }}
          />
        ))}
      </Tabs>
    </>
  );
}

export default CustomTabs;
