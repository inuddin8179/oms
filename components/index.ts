import dynamic from 'next/dynamic';

const DataTable = dynamic(() => import('@components/DataTable'));
const AttributesTable = dynamic(() => import('@components/DataTable/attributes-table'));
const FilterHeader = dynamic(() => import('@components/DataTable/FilterHeader'));
const Modal = dynamic(() => import('@components/Modals/index'));
const Loader = dynamic(() => import('@components/Loader/index'));
const CustomTabPanel = dynamic(() => import('@components/Tab/tab-panel'));
const CustomTabs = dynamic(() => import('@components/Tab/tabs'));
const HeaderComponent = dynamic(() => import('@components/NavBar/Header'));
const MiniDrawer = dynamic(() => import('@components/NavBar/SideNavBar'));
const PageComponent = dynamic(() => import('@components/page'));
const DataTableWithTitleHeader = dynamic(() => import('@components/DataTable/datatabel-with-title-header'));
const NavBar = dynamic(() => import('@components/NavBar/index'));
const ExportData = dynamic(() => import('@components/ExportData/index'));
const Profile = dynamic(() => import('@components/Profile/index'));
const MobileTable = dynamic(() => import('@components/MobileDataTable/index'));
const CollapsibleTable = dynamic(() => import('@components/DataTable/CollapsibleData-table'));

export {
  DataTable,
  FilterHeader,
  Modal,
  Loader,
  AttributesTable,
  CustomTabPanel,
  CustomTabs,
  HeaderComponent,
  MiniDrawer,
  PageComponent,
  DataTableWithTitleHeader,
  NavBar,
  ExportData,
  Profile,
  MobileTable,
  CollapsibleTable,
};
