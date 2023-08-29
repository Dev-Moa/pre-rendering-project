import { getEventById, getAllEvents } from "@/api-utils";

function SingleEvent(props) {
    const event = props.event;
    console.log(getEventById(2));
    return (
        <div>
            <h1>{event.title}</h1>
            <img src={event.image} alt="" />
        </div>
    );
}


export async function getStaticProps(context) {
    const eventId = context.params.id
    const event = await getEventById(eventId)

    if (!event) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            event: event
        }
    }
}


export async function getStaticPaths() {
    const events = await getAllEvents()
    const eventIds = events.map((event) => event.id)
    const pathsWithParams = eventIds.map((id) => ({
        params: {
            id: id.toString()
        }
    }))
    return {
        paths: pathsWithParams,
        fallback: "blocking"
    }
}


export default SingleEvent;