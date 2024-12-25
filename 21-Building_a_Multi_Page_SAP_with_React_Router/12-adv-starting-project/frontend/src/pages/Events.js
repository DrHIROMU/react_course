import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  const events = data.events;

  return <EventsList events={events} />;
}

export async function loader() {
  const response = await fetch("http://localhost:8080/eventsqqq");

  if (!response.ok) {
    throw { message: "Could not fetch events." };
  } else {
    // const resData = await response.json();
    // return resData.events;
    return response;
  }
}

export default EventsPage;
