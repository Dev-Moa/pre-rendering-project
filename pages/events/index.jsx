import EventList from "@/components/EventList"
import { getAllEvents } from "@/api-utils"
import SearchForm from "@/components/SearchForm"
import { useRouter } from "next/router"

export default function Events(props) {
    const router = useRouter()
    const FilterEvents = (year, month) => {
        const path = `events/${year}/${month}`
        router.push(path)
    }
    return (
        < >
            <SearchForm OnSearch={FilterEvents} />
            <EventList events={props.events} />
        </>
    )
}



export async function getStaticProps() {
    const allevents = await getAllEvents()
    return {
        props: {
            events: allevents
        },
        revalidate: 10

    }
}