import React from 'react'
import 'react-web-tabs/dist/react-web-tabs.css'
import { Tabs, Tab, TabList } from 'react-web-tabs';

const VerticalTabs = () => {
    return (
      <Tabs defaultTab="vertical-tab-one" vertical>
        <TabList style={{borderRight:"1px solid #e0e0e0", height:1400}}>
          <Tab tabFor="vertical-tab-one" className="tab1"><i class="small material-icons cyan-text">dashboard</i></Tab>
          <Tab tabFor="vertical-tab-two"><i class="small material-icons">search</i></Tab>
          <Tab tabFor="vertical-tab-three"><i class="small material-icons">store</i></Tab>
        </TabList>
      </Tabs>
    )
}

export default VerticalTabs;