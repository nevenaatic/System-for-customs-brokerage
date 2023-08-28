import React, { useState } from 'react';
import '../../css/policy/Tabs.css'
import { PolicyAdministration } from './PolicyAdministration';
import { AnalysisRules } from './AnalysisRules';
export const Tabs = ({country}) => {

    const [activeTab, setActiveTab] = useState('nav-policy');

    const changeTab = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div>
            <nav className='nav-tabs border-none tabs'>
                <div className="container-fluid tabs" >
                    <div className="nav nav-tabs tabs" id='nav-tab' role='tablist'>
                        <a className={`nav-link ${activeTab === 'nav-policy' ? 'active' : ''}`} id='nav-policy-tab' onClick={() => changeTab('nav-policy')} data-toggle="tab"  role="tab" aria-controls='nav-policy' aria-selected='true'> POLICY ADMINISTRATION</a>
                        <a className={`nav-link ${activeTab === 'nav-analices' ? 'active' : ''}`} onClick={() => changeTab('nav-analices')} role="tab" aria-controls='nav-analices' aria-selected='false' > ANALYSIS RULES </a>
                    </div>
                </div>
            </nav>
            <div className="tab-content">
                {activeTab === 'nav-policy' && (
                    <div className="tab-pane active">
                        <PolicyAdministration country={country}/>
                    </div>
                )}
                {activeTab === 'nav-analices' && (
                    <div className="tab-pane active">
                       <AnalysisRules country={country}/>
                    </div>
                )}
            </div>

        </div>




    )
}