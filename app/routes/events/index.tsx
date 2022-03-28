import { PassEvent } from "@prisma/client";
import { json, LoaderFunction, useLoaderData } from "remix";
import Event from "~/components/Event";
import { getEvents } from "~/services/eventService.server";

export const loader: LoaderFunction = async () => {
  const events = await getEvents();
  return json(events);
}

export default function Events() {
  const data = useLoaderData<Array<PassEvent>>();

  return (
    <>
      {data.map(event => <Event key={event.id} event={event} />)}
    </>
  )
}