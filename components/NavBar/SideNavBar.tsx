import React, { useState } from 'react';

import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import { Collapse, Drawer, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { navLinks } from '@utils/data';
import { superAdmin } from '@utils/SuperAdminNavBar';
import { Url } from 'next/dist/shared/lib/router/router';
import { useRouter } from 'next/router';

import data from '../../JSON/login.json';
import { DrawerHeader, Fade } from './HeaderStyle';

export default function MiniDrawer() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(-1);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDropdown = (index: React.SetStateAction<number>) => {
    setDropDownOpen(index);
  };

  const handleRouteNavigation = (path: Url) => {
    // if (path !== '' || path !== null || path !== undefined) {
    //   router.push(path);
    // }
    router.push(path);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        background: '#efefef',
        position: 'fixed',
        zIndex: 11,
      }}>
      <Drawer variant="permanent" open={open} sx={{ '& .MuiDrawer-paper': { top: '54px' } }}>
        <DrawerHeader $isOpen={open}>
          {open ? <ClearOutlinedIcon onClick={handleDrawerClose} /> : <MenuIcon onClick={handleDrawerOpen} />}
        </DrawerHeader>
        <Divider />
        <List onMouseEnter={handleDrawerOpen} onMouseLeave={handleDrawerClose}>
          {(data?.roleNames?.[0] === 'ADMIN' ? navLinks : superAdmin)?.map((text: any, index) => (
            <ListItem
              key={text?.name}
              disablePadding
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                // onClick={handleClick}
              >
                {/* <Link href={text?.path}> */}

                <Box
                  sx={{ display: 'flex', alignItems: 'center' }}
                  onClick={() => {
                    text?.path && handleRouteNavigation(text?.path);
                  }}>
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}>
                    {text?.icon}
                  </ListItemIcon>
                  {open && (
                    <>
                      <ListItemText primary={text?.name} sx={{ opacity: open ? 1 : 0 }} />
                      {text?.list?.length != 0 && (
                        <>
                          {dropDownOpen == index ? (
                            <ExpandLess onClick={() => handleDropdown(-1)} />
                          ) : (
                            <ExpandMore onClick={() => handleDropdown(index)} />
                          )}
                        </>
                      )}
                    </>
                  )}
                </Box>
                {/* </Link> */}
              </ListItemButton>
              {dropDownOpen == index && text?.list?.length != 0 && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        {text?.list?.map((item: any, index: number) => (
                          <Stack direction={'row'} alignItems={'center'} key={index}>
                            {item?.icon && (
                              <ListItemIcon
                                sx={{
                                  minWidth: 0,
                                  mr: open ? 3 : 'auto',
                                  justifyContent: 'center',
                                }}>
                                {item?.icon}
                              </ListItemIcon>
                            )}
                            {/* <Link href={{ pathname: item?.path }}> */}
                            <ListItemText
                              sx={{ padding: '10px 0px' }}
                              primary={item?.name}
                              onClick={() => {
                                item?.path && handleRouteNavigation(item?.path);
                              }}
                            />
                            {/* </Link> */}
                          </Stack>
                        ))}
                      </Box>
                    </ListItemButton>
                  </List>
                </Collapse>
              )}
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Fade $isOpen={open} />
    </Box>
  );
}
