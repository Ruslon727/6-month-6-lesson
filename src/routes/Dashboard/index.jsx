import React from "react";
import { Route, Routes } from "react-router-dom";
import Overview from "../../pages/Dashboard/Overview";
import { Agents, BitcoinEthereum, Cards, Payments, Statistics, Transactions, Users } from "../../pages/Dashboard";
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import AgentAdd from "../../pages/Dashboard/AgentAdd";

function DashboardRoutes() {
    return (
        <div>
            <Header />
            <div className="flex justify-between">
                <Navbar />
                <div className="w-[80%] h-[100vh] ">
                    <Routes>
                        <Route path='/' element={<Overview />} />
                        <Route path='/users' element={<Users />} />
                        <Route path='/agents' element={<Agents />} />
                        <Route path='/agents/add' element={<AgentAdd />} />
                        <Route path='/cards' element={<Cards />} />
                        <Route path='/bitcoin-ethereum' element={<BitcoinEthereum />} />
                        <Route path='/payments' element={<Payments />} />
                        <Route path='/transactions' element={<Transactions />} />
                        <Route path='/statistics' element={<Statistics />} />

                    </Routes>
                </div>
            </div>
        </div>
    )
}
export default DashboardRoutes