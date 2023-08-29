import React, { useRef, useState } from 'react'
import { Button } from '@/components/ui/button';
import EventList from '@/components/EventList';

function EventSearch(props) {

    const yearRef = useRef()
    const monthRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()

        //extract values
        const enteredYear = yearRef.current.value
        const enteredMonth = monthRef.current.value

        //create object


        props.OnSearch(enteredYear, enteredMonth)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='space-x-10'>
                {/* year */}
                <label htmlFor="year">year</label>
                <select ref={yearRef} id="year" className='border-2 rounded  px-4 py-2' >
                    <option >year</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>


                {/* month */}
                <label htmlFor="month"></label>
                <select ref={monthRef} id="month" className='border-2 px-4 py-2'>
                    <option >month</option>
                    <option value="1">January</option>
                    <option value="2">Febraury</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                </select>
                <Button>Submit</Button>
            </form>

        </div>
    )
}

export default EventSearch