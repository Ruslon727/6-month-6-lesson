import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Overview from "../../pages/Dashboard/Overview";
import { AgentMore, BitcoinEthereum, Cards, Payments, Statistics, Transactions, Users } from "../../pages/Dashboard";
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import AgentAdd from "../../pages/Dashboard/AgentAdd";
import Loading from '../../assets/images/loading.png'


const Agents = lazy(() => new Promise((resolve) => {
    return setTimeout(() => resolve(import('../../pages/Dashboard/Agents')), 2000)
}))

function DashboardRoutes() {
    return (
        <div>
            <Header />
            <div className="flex justify-between">
                <Navbar />
                <div className="w-[80%] relative h-[100vh] ">
                    <Routes>
                        <Route path='/' element={<Overview />} />
                        <Route path='/users' element={<Users />} />
                        <Route path='/agents' element={
                            <Suspense fallback={
                                <img className="absolute left-0 right-0 mx-auto mt-10" src={Loading} alt="Loading..." width={400}/>
                            }><Agents /></Suspense>
                        } />
                        <Route path='/agents/:id' element={<AgentMore />} />
                        <Route path='/agents/add' element={<AgentAdd />} />
                        <Route path='/agents/:id/update' element={<AgentAdd />} />
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