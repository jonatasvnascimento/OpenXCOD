import React, { useState } from 'react';
import './css/ConvertForm.css'

import ConvertBox from '../components/ConvertBox'
import ConvertBase from '../components/ConvertBase'
import ConvertUnit from '../components/ConvertUnit'



import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

const TextConvert = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className="container mb-5 mt-3">
            <Nav tabs>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '1' })} onClick={() => { toggle('1'); }}>Conversor de Texto</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '2' })} onClick={() => { toggle('2'); }}>Conversor de Base</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '3' })} onClick={() => { toggle('3'); }}>Conversor de Unidade</NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <ConvertBox />
                </TabPane>
                <TabPane tabId="2">
                    <ConvertBase />
                </TabPane>
                <TabPane tabId="3">
                    <ConvertUnit />
                </TabPane>

            </TabContent>
        </div>
    );
}

export default TextConvert;