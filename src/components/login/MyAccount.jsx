import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AboutMe from '../views/AboutMe';
//import ChangePassword from '../login/ChangePassword';
import MyOrders from '../orders/MyOrders';

const MyAccount = () => {
    return (
        <main>
            <div className="container-md">
                {/* Heading */}
                <div className="table-responsive">
                    <table className="table ">
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <div className="my-row" style={{ textAlign: "justify" }} lang="es">
                                        <Tabs>
                                            <TabList>
                                                <Tab>Mi Cuenta.</Tab>
                                                <Tab>Mis Pedidos.</Tab>
                                                {/*<Tab>Ajustes.</Tab>*/}
                                            </TabList>

                                            <TabPanel>
                                                <AboutMe />
                                            </TabPanel>
                                            <TabPanel>
                                                <MyOrders />
                                            </TabPanel>
                                            {/*<TabPanel>
                                                <ChangePassword />
                                            </TabPanel>*/}
                                        </Tabs>
                                    </div>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
};

export default MyAccount;