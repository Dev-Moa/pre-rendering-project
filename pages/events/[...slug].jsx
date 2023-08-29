import { getFeaturedEvents } from '@/api-utils'
import { getFilteredEvents } from '@/data'
import { useRouter } from 'next/router'
import React from 'react'

function FilteredEvent() {

    const router = useRouter()

    const filteredData = router.query.slug

    if (!filteredData) {
        return <p>loading</p>
    }
    // extract values
    const filteredYear = filteredData[0]
    const filteredMonth = filteredData[1]

    const numYear = +filteredYear
    const numMonth = +filteredMonth

    if (
        isNaN(numYear) || isNaN(numMonth) || numMonth < 1 || numMonth > 12
    ) {
        return <p>Invalid Filter please adjust your filter</p>
    }

    // getFilteredEvents

    const FilteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    })

    if (!FilteredEvents || FilteredEvent.length === 0) {
        return <p>No events found for the chosen filter </p>
    }
    return <div>FilteredEvent</div>
}

export default FilteredEvent