import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import AccountDetail from './AccountDetail/AccountDetail';
import ChangePassword from './ChangePassword/ChangePassword';
import DetailsOrders from './DetailsOrders/detail-orders';


function MainAccount(props) {
    return (
        <div className="page-account">
            <div className="container">
                <div id="main-content" className="main-content">
                    <div id="primary" className="content-area">
                        <div id="content" className="site-content">
                            <article className="page type-page status-publish hentry">
                                <div className="entry-content">
                                    <Tabs className="row">
                                        <div className="col-left col-md-4 w-1/3">
                                            <TabList>
                                                <Tab>Dashboard</Tab>
                                                <Tab>Orders</Tab>
                                                <Tab>Change password</Tab>
                                                <Tab>Account details</Tab>
                                                <li >
                                                    <Link to="/">Logout</Link>
                                                </li>
                                            </TabList>
                                        </div>
                                        <div className="col-md-8 w-2/3 pl-[20px]">
                                            <TabPanel>
                                                <p className="content-dashboard">
                                                    Hello
                                                    <strong>
                                                        {" "}
                                                        name
                                                    </strong>
                                                    (not
                                                    <strong>
                                                        {" "}
                                                        name
                                                    </strong>
                                                    ?
                                                    <Link to="/">
                                                        Log out
                                                    </Link>
                                                    )
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                                    elit. Voluptatibus asperiores accusamus, sit
                                                    repudiandae ea, odit amet perspiciatis reprehenderit
                                                    debitis id officiis suscipit cupiditate officia
                                                    quibusdam, magni quo! Vero, blanditiis itaque.
                                                </p>
                                            </TabPanel>
                                            <TabPanel>
                                                <DetailsOrders />
                                            </TabPanel>
                                            <TabPanel>
                                                <ChangePassword />
                                            </TabPanel>
                                            <TabPanel>
                                                <AccountDetail />
                                            </TabPanel>
                                        </div>
                                    </Tabs>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainAccount;