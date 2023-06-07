import React, { useState } from 'react';
import {
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';

export default function Tab() {
  const [iconsActive, setIconsActive] = useState('tab1');

  const handleIconsClick = (value) => {
    if (value === iconsActive) {
      return;
    }

    setIconsActive(value);
  };

  return (
    <>
      <MDBTabs className='mb-3' >
        <MDBTabsItem  >
          <MDBTabsLink onClick={() => handleIconsClick('tab1')} active={iconsActive === 'tab1'}>
            <MDBIcon  fas icon='chart-pie' className='me-2' /> Products
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleIconsClick('tab2')} active={iconsActive === 'tab2'}>
            <MDBIcon fas icon='chart-line' className='me-2' /> Promotions
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleIconsClick('tab3')} active={iconsActive === 'tab3'}>
            <MDBIcon fas icon='cogs' className='me-2' /> Settings
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={iconsActive === 'tab1'}>Tab 1 content</MDBTabsPane>
        <MDBTabsPane show={iconsActive === 'tab2'}>Tab 2 content</MDBTabsPane>
        <MDBTabsPane show={iconsActive === 'tab3'}>Tab 3 content</MDBTabsPane>
      </MDBTabsContent>
    </>
  );
}