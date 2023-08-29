import EventList from "@/components/EventList"
import { getFeaturedEvents } from "@/api-utils"
export default function Home(props) {
  const featuredEvents = props.featuredEvents
  return (
    < >
      <EventList events={featuredEvents} />
    </>
  )
}


export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents()
  return {
    props: {
      featuredEvents: featuredEvents
    },
    revalidate: 10
  }
}