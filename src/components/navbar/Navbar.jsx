import React from 'react';
import { Navbar, Alignment, Button, Classes, Icon, InputGroup } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

const Nav = () => {
  return (
    <div>
      <Navbar className={Classes.DARK} style={{ backgroundColor: '#093f74' }}>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading style={{ fontSize: '24px' }}>
            <span style={{ color: '#6495ED' }}>ezy</span>
            <span style={{ color: '#7FFFD4' }}>bill</span>
          </Navbar.Heading>
          <Navbar.Divider />
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <Button className={Classes.MINIMAL}>
            <Icon icon={IconNames.TAG} style={{ color: 'green' }} />
          </Button>
          <Button className={Classes.MINIMAL}>
            <Icon icon={IconNames.KEY} style={{ color: 'orange' }} />
          </Button>
          <Button className={Classes.MINIMAL}>
            <Icon icon={IconNames.PERSON} style={{ color: '#6495ED' }} />
          </Button>
          <Button className={Classes.MINIMAL}>
            <Icon icon={IconNames.OFFICE} style={{ color: 'white' }} />
          </Button>
          <Button className={Classes.MINIMAL}>
            <Icon icon={IconNames.LOG_OUT} style={{ color: 'white' }} />
          </Button>
          <Button className={Classes.MINIMAL}>
            <Icon icon={IconNames.NOTIFICATIONS} style={{ color: 'white' }} />
          </Button>
          <Button className={Classes.MINIMAL}>
            <Icon icon={IconNames.COG} style={{ color: 'white' }} />
          </Button>
          <div className="bp4-input-group">
            <span className="bp4-icon bp4-icon-search"></span>
            <InputGroup className="bp4-input" type="search" placeholder="Search input" dir="auto" />
          </div>
        </Navbar.Group>
      </Navbar>
    </div>
  );
};

export default Nav;

