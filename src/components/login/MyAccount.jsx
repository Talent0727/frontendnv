import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AboutMe from '../views/AboutMe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MyOrders from '../orders/MyOrders';

const MyAccount = () => {
    return (
        <>
            <div class="b-example-divider" style={{ marginTop: '100px' }}></div>
            {/*== Start Page Header ==*/}
            <div id="page-header-wrapper">
                <div className="container">
                    <div className="row">
                        {/* Page Title Area Start */}
                        <div className="col-6">
                            <div className="page-title-wrap">
                                <h1>
                                    <FontAwesomeIcon icon="fa-solid fa-gear" /> Ajustes. :*
                                </h1>
                            </div>
                        </div>
                        {/* Page Title Area End */}
                        {/* Page Breadcrumb Start */}
                        <div className="col-6 m-auto">
                            <nav className="page-breadcrumb-wrap">
                                <ul className="nav justify-content-end">
                                    <li>
                                        <a href="/" rel="noopener noreferrer">
                                            INICIO.
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="current" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon="fa-solid fa-gear" /> Ajustes. :*
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        {/* Page Breadcrumb End */}
                    </div>
                </div>
            </div>
            {/*== End Page Header ==*/}
            <div id="cart-page-wrapper" className="page-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Cart Table Area */}
                            <div className="cart-table table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th className="pro-thumbnail">
                                                <FontAwesomeIcon icon="fa-solid fa-gear" /> Ajustes. :*
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="pro-thumbnail">
                                                <div className="my-row" style={{ textAlign: "justify" }} lang="es">
                                                    <Tabs>
                                                        <TabList>
                                                            <Tab style={{ fontWeight: "bold", fontSize: "15px" }}>MI PERFIL.</Tab>
                                                            <Tab style={{ fontWeight: "bold", fontSize: "15px" }}>MIS PEDIDOS.</Tab>
                                                        </TabList>

                                                        <TabPanel>
                                                            <AboutMe />
                                                        </TabPanel>
                                                        <TabPanel>
                                                            <MyOrders />
                                                        </TabPanel>
                                                    </Tabs>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* Cart Update Option */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyAccount;