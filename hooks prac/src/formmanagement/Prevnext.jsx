import React, { useState, useReducer } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

const Prevnext = () => {
    const navigate = useNavigate();

    // Define the order of routes
    const routes = ['/', '/address', '/payment-info'];

    const initialState = {
        trackcomponent: 0
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "Previous":
                return { trackcomponent: state.trackcomponent - 1 };
            case "Next":
                return { trackcomponent: state.trackcomponent + 1 };
            default:
                return state;
        }

    }

    const [state, dispatch] = useReducer(reducer, initialState);


    const handlePrev = () => {
        if (state.trackcomponent > 0)
            dispatch({ type: "Previous" })
        navigate(routes[state.trackcomponent - 1]);
    }

    const handleNext = () => {
        if (state.trackcomponent < routes.length - 1) {
            dispatch({ type: "Next" })
            navigate(routes[state.trackcomponent + 1]);
        }

    }

    return (
        <nav>
            <div className='container d-flex justify-content-between'>
                <button
                    className='btn btn-warning'
                    onClick={handlePrev}
                >
                    Prev
                </button>

                <button
                    className='btn btn-primary'
                    onClick={handleNext}>
                    Next
                </button>
                <Outlet />
            </div>
        </nav>
    )
}

export default Prevnext;
