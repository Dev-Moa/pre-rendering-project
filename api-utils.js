
//all events

export async function getAllEvents() {
    const response = await fetch("https://64ed97871f87218271416e60.mockapi.io/api/v1/events")
    const data = await response.json()
    return data;
}

//featured events

export async function getFeaturedEvents() {
    const data = await getAllEvents()
    return data.filter((event) => event.isFeatured);
}


//getEventById

export async function getEventById(id) {
    const data = await getAllEvents()
    return data.find((event) => event.id === id);
}

//getFiltered
export async function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
    const data = await getAllEvents()
    return data.filter(event => {
        const eventDate = new Date(event.date);
        const eventYear = eventDate.getFullYear();
        const eventMonth = eventDate.getMonth() + 1; // Month is zero-based

        return eventYear === +year && eventMonth === +month;
    });
}