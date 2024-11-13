import React, { useState } from 'react';

// import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
// import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
// import MenuIcon from '@mui/icons-material/Menu';
import { Collapse, Drawer, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Link from 'next/link';
import dasboardIcon from '../../../public/icons/dashboardicon.png';

// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Url } from 'next/dist/shared/lib/router/router';
import { useRouter } from 'next/router';

import data from '../../JSON/storeassistance.json';
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
    setDropDownOpen(-1);
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
      <Drawer onMouseEnter={handleDrawerOpen} onMouseLeave={handleDrawerClose} variant="permanent" open={open}
        sx={{
          '& .MuiDrawer-paper': {
            top: '54px', backgroundColor: '#3E4257',
            width: open ? '240px' : '72px', transition: 'width 0.2s ease-in-out, background-color 0.2s ease-in-out'
            , justifyContent: 'centre'
          }
        }}>

        <DrawerHeader $isOpen={open}>
          {open ? <Box sx={{ color: 'white', width: '100%', display: 'flex', justifyContent: 'centre', paddingTop: '2rem' }} >
            <Link href={'/oms/dashboard'}><Typography sx={{ paddingLeft: '40%' }} variant="h6">Dashboard</Typography> </Link>
          </Box> : ''}
        </DrawerHeader>
        {/* <Divider /> */}

        <Box>
          <List sx={{ paddingTop: '2rem' }}>
            {data?.storeAssistanceData?.map((item: any, index) => (
              <ListItem
                key={item?.title}
                disablePadding
                sx={{
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}>
                <ListItemButton
                  sx={{
                    color: 'white',
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
                      item?.path && handleRouteNavigation(item?.url);
                    }}>
                    {!open && <ListItemIcon
                      sx={{
                        color: 'white',
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}>
                      <img src={item.logo} alt='logo' />
                    </ListItemIcon>}
                    {open && <ListItemIcon
                      sx={{
                        color: 'white',
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}>


                      {dropDownOpen == index ? (
                        <ExpandMore onClick={() => handleDropdown(-1)} />
                      ) : (
                        < ChevronRightIcon onClick={() => handleDropdown(index)} />
                      )}


                    </ListItemIcon>}
                    {open && (
                      <>
                        <ListItemText onClick={() => {
                          item?.url && handleRouteNavigation(item?.url);
                        }} primary={item?.title} sx={{ opacity: open ? 1 : 0 }} />

                      </>
                    )}
                  </Box>
                  {/* </Link> */}
                </ListItemButton>
                {dropDownOpen == index && item?.subitems?.length !== 0 && (
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding >
                      <ListItemButton sx={{ pl: 4 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'centre'}}>
                          {item?.subitems?.map((items: any, index: number) => (
                            <ListItem key={index} sx={{
                              padding: '10px 0px', width: '100%', '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                              },
                            }} >
                              {items?.logo && (
                                <ListItemIcon
                                  sx={{
                                    color: 'white',
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                  }}
                                >
                                  {items?.logo}
                                </ListItemIcon>
                              )}
                              <ListItemText
                                sx={{
                                  textAlign: 'center',
                                  padding: 0,
                                }}
                                primary={items?.title}
                                onClick={() => {

                                  if (items?.url) {
                                    handleRouteNavigation(items?.url);
                                  }
                                }}
                              />
                            </ListItem>
                          ))}
                        </Box>
                      </ListItemButton>
                    </List>
                  </Collapse>
                )}

              </ListItem>
            ))}
          </List>
        </Box>

        <Box sx={{ height: '20%', direction: 'flex', flexDirection: 'colum', justifyContent: 'end', position: 'absolute', bottom: '50px' }}>
          <List >
            <ListItem disablePadding
              sx={{

                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }} >
              <ListItemButton sx={{
                color: 'white',
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,

              }}>
                <ListItemIcon sx={{

                  color: 'white',
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }} ><PowerSettingsNewIcon /></ListItemIcon>
                {open && <ListItemText primary='Logout' sx={{ opacity: open ? 1 : 0, color: 'white' }} />}
              </ListItemButton>
            </ListItem>
          </List>
        </Box>


      </Drawer>

      <Fade $isOpen={open} />
    </Box>
  );
}
// import * as React from 'react';

// import { theme } from '@lib/theme';
// // import { Typography } from '@mui/material';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import { useRouter } from 'next/router';

// import data from '../../JSON/storeassistance.json';

// // interface Props {
// //   window?: () => Window;
// // }

// const drawerWidth = 250;
// export default function DrawerAppBar() {
//   const router = useRouter();
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const [selectedIndex, setSelectedIndex] = React.useState(-1);

//   const handleDrawerToggle = (dataIndex: number) => {
//     setSelectedIndex(dataIndex);
//     setMobileOpen(prevState => !prevState);
//   };

//   const handleClick = (url: string) => {
//     router?.push(url);
//   };

//   const drawer = (
//     <Box onClick={() => handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: '#3E4257' }}>
//       <List sx={{ position: 'relative' }}>
//         {data?.storeAssistanceData?.map((mainItem: any, index: number) => (
//           <>
//             <ListItem key={index} disablePadding>
//               <ListItemButton
//                 sx={{ display: 'flex', flexDirection: 'column' }}
//                 onClick={() => handleClick(mainItem?.url)}>
//                 <ListItemText sx={{ color: '#fff' }} primary={mainItem?.title} />
//                 <List
//                   className="List-item"
//                   style={{
//                     position: 'relative',
//                     color: '#fff',
//                   }}>
//                   {mainItem?.subitems?.map((subItem: any) => (
//                     <ListItem
//                       style={{ display: `${selectedIndex == index ? 'block' : 'none'}` }}
//                       key={index}
//                       disablePadding
//                       onClick={() => handleClick(subItem?.url)}>
//                       <ListItemButton sx={{ textAlign: 'center' }}>
//                         <ListItemText>{subItem?.title}</ListItemText>
//                       </ListItemButton>
//                     </ListItem>
//                   ))}
//                 </List>
//               </ListItemButton>
//             </ListItem>
//           </>
//         ))}
//       </List>
//     </Box>
//   );
//   // const container = window !== undefined ? () => window().document.body : undefined;
//   return (
//     <Box sx={{ backgroundColor: theme?.palette?.common?.navbar_bg }}>
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           height: '100vh',
//           gap: '20px',
//           alignItems: 'center',
//           paddingTop: '20px',
//           textAlign: 'center',
//         }}>
//         {data?.storeAssistanceData?.map((storeData: any, dataIndex: number) => {
//           return (
//             <>
//               <Box onMouseOver={() => handleDrawerToggle(dataIndex)}>
//                 <Box component={'img'} src={storeData.logo} key={dataIndex}></Box>
//                 {/* <Typography sx={{ color: '#fff' }}>{storeData?.title}</Typography>; */}
//               </Box>
//             </>
//           );
//         })}
//       </Box>
//       <nav>
//         <Drawer
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#3E4257' },
//           }}>
//           {drawer}
//         </Drawer>
//       </nav>
//       <Box sx={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
//         <img src={'/icons/power_off.svg'} alt="img" />
//       </Box>
//     </Box>
//   );
// }
