import { theme } from '@lib/theme';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Box } from '@mui/material';
import { styled } from '@mui/material';
import { Accordion, AccordionSummary } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { CSSObject, Theme } from '@mui/material/styles';
import { transientProps } from '@utils/transientProps';

export const drawerWidth = 'auto';
export const HeaderBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 24px',
  backgroundColor: theme.palette.common.header_bg,
  maxHeight: '82.7px',
  color: '#FFF',
  // position: 'fixed',
  zIndex: '100',
  width: '100%',
}));

export const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

export const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('mobile')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-root': {
    transition: 'transform 990ms cubic-bezier(0, 0, 0.2, 1) 0ms',
  },
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ' .MuiDrawer-paper': {
    marginTop: '55px',
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  },

  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),

  boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
}));

export const DrawerHeader = styled(
  Box,
  transientProps
)<{ $isOpen: boolean }>(({ theme, $isOpen }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 2.5),
  justifyContent: $isOpen ? 'initial' : 'center',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export const Fade = styled(
  Box,
  transientProps
)<{ $isOpen: boolean }>(({ $isOpen }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha value for transparency
  zIndex: 10,
  flexGrow: 1,
  display: $isOpen ? 'block' : 'none',
}));

export const CustomAccordionSummary = styled((props: any) => (
  <AccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: 'white' }} />} {...props} />
))(({ theme }) => ({
  backgroundColor: '#000',
  border: 'none',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

export const CustomAccordion = styled((props: any) => <Accordion disableGutters elevation={0} square {...props} />)(
  () => ({
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&::before': {
      display: 'none',
    },
  })
);
