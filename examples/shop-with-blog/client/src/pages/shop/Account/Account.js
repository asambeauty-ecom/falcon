import React from 'react';
import { PropTypes } from 'prop-types';
import { Link as RouterLink, Switch, Route } from 'react-router-dom';
import { T } from '@deity/falcon-i18n';
import { Box, Link, Menu, MenuItem } from '@deity/falcon-ui';
import { toGridTemplate, SignOutLogic, NotFound } from '@deity/falcon-ecommerce-uikit';
import AccountDashboard from './Dashboard';
import PersonalInformation from './PersonalInformation';
import ChangePassword from './ChangePassword';
import AddressBook from './AddressBook/AddressBook';
import AddAddress from './AddressBook/AddAddress';
import EditAddress from './AddressBook/EditAddress';
import Orders from './Orders/Orders';
import Order from './Orders/Order';

const AccountArea = {
  menu: 'menu',
  content: 'totals'
};

const accountLayout = {
  accountLayout: {
    display: 'grid',
    gridGap: {
      xs: 'sm',
      md: 'md'
    },
    my: 'lg',
    // prettier-ignore
    gridTemplate: {
      xs: toGridTemplate([
        ['1fr'],
        [AccountArea.menu],
        [AccountArea.content]
      ]),
      md: toGridTemplate([
        ['1fr', '4fr'],
        [AccountArea.menu, AccountArea.content]
      ])
    }
  }
};

const MenuLink = ({ to, children, ...rest }) => (
  <MenuItem {...rest} css={{ ':hover': { background: 'transparent', opacity: 0.6 } }}>
    <Link as={RouterLink} to={to} p="xs" flex={1} color="black">
      {children}
    </Link>
  </MenuItem>
);
MenuLink.propTypes = {
  to: PropTypes.string.isRequired
};

const Account = () => (
  <Box defaultTheme={accountLayout}>
    <Box
      gridArea={AccountArea.menu}
      display="flex"
      flexDirection="column"
      alignItems="stretch"
      bg="secondaryLight"
      my="md"
      css={{ margin: { md: 0 } }}
    >
      <Menu px="sm" py="xs" bg="transparent">
        <MenuLink to="/account">
          <T id="account.dashboardLink" />
        </MenuLink>
        <MenuLink to="/account/orders">
          <T id="account.ordersLink" />
        </MenuLink>
        <MenuLink to="/account/address-book">
          <T id="account.addressBookLink" />
        </MenuLink>
        <MenuLink to="/account/personal-information">
          <T id="account.personalInformationLink" />
        </MenuLink>
        <MenuItem css={{ ':hover': { background: 'transparent' } }}>
          <SignOutLogic>
            {({ signOut }) => (
              <Link p="xs" flex={1} color="black" onClick={() => signOut()} css={{ ':hover': { opacity: 0.6 } }}>
                <T id="signOut.link" />
              </Link>
            )}
          </SignOutLogic>
        </MenuItem>
      </Menu>
    </Box>
    <Box gridArea={AccountArea.content} min-height="100%">
      <Switch>
        <Route exact path="/account" component={AccountDashboard} />
        <Route exact path="/account/orders" component={Orders} />
        <Route exact path="/account/orders/:id" component={Order} />
        <Route exact path="/account/personal-information" component={PersonalInformation} />
        <Route exact path="/account/change-password" component={ChangePassword} />
        <Route exact path="/account/address-book" component={AddressBook} />
        <Route exact path="/account/address-book/add" component={AddAddress} />
        <Route exact path="/account/address-book/edit/:id" component={EditAddress} />
        <Route component={NotFound} />
      </Switch>
    </Box>
  </Box>
);

export default Account;
