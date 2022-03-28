import { PassEvent } from "@prisma/client";
import { json, LoaderFunction, useCatch, useLoaderData } from "remix";
import Event from "~/components/Event";
import { getById } from "~/services/eventService.server";

export const loader: LoaderFunction = async ({
  params
}) => {
  if (params.id === undefined) {
    throw new Response(
      'No id provided as parameter', 
      { status: 400 }
    );
  }

  const eventId: number = +params.id;
  if (Number.isNaN(eventId)) {
    throw new Response(
      'Invalid ID',
      { status: 400 }
    );
  }

  const event = await getById(eventId)

  if (!event) {
    throw new Response(
      'Event not found', 
      { status: 404 }
    );
  }

  return json(event);
}

export default function SingleEvent() {
  const data = useLoaderData<PassEvent>();

  return <Event event={data} link={false} />;
}

export function CatchBoundary() {
  const error = useCatch();

  switch (error.status) {
    case 404:
      return <p>There's no such event!</p>;
    
    default:
      return <p>{error.status} {error.data}</p>;
  }
}