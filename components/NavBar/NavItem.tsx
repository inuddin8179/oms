import React from 'react';

import { useRouter } from 'next/router';
import propTypes from 'prop-types';

const NavItem = ({ item }: { item: any }) => {
  const router = useRouter();
  return <>{router.pathname === '/' ? item : ''}</>;
};

export default NavItem;

NavItem.propTypes = {
  item: propTypes.string,
};
