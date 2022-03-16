import { PassEvent } from "@prisma/client";
import { json, LoaderFunction, useLoaderData } from "remix";
import Event from "~/components/Event";
import { db } from "~/util/db.server";

export const loader: LoaderFunction = async () => {
  const events = await db.passEvent.findMany({
    take: 10 
  });

  return json(events);
}

export default function Events() {
  const data = useLoaderData<Array<PassEvent>>();

  return (
    <div>
      {data.map(event => <Event key={event.id} event={event} />)}
    </div>
  )
}