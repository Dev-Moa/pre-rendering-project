import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from './ui/button'
import Link from 'next/link'

function EventList({ events }) {

    return (
        < >
            {events.map((event) => (
                <Card key={event.id} className="my-3  md:flex md:flex-row ">
                    <CardHeader>
                        <img className='rounded w-[25rem]' src={event.image} />
                    </CardHeader>
                    <CardContent className="md:space-y-5 space-y-3">
                        <CardTitle className="md:my-5 my-3"> {event.title} </CardTitle>
                        <CardDescription> {event.description} </CardDescription>
                        <CardDescription>Location : {event.location} </CardDescription>
                        <CardDescription>Date : {event.location} </CardDescription>
                        {event.isFeatured ? <CardDescription>{event.isFeatured} </CardDescription> : null}
                        <Button > <Link href={`events/${event.id}`}>Explore Event</Link> </Button>
                    </CardContent>
                </Card>
            ))}
        </>
    )
}

export default EventList