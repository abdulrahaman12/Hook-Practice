import React from 'react'
import PersonalInfo from './PersonalInfo'
import Address from './Address'
import SubmitForm from './SubmitForm'
import PaymentInfo from './PaymentInfo'
import Prevnext from './Prevnext'
import { BrowserRouter, Routes, Route } from "react-router-dom"


const Forms = () => {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route>
                        <Route path='/' element={<PersonalInfo />} />
                        <Route path='/address' element={<Address />} />
                        <Route path='/payment-info' element={<PaymentInfo />} />
                    </Route>
                </Routes>
                <Prevnext />
            </BrowserRouter>
        </div >
    )
}

export default Forms