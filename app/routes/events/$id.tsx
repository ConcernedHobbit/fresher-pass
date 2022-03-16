import { PassEvent, PrismaClient } from "@prisma/client";
import { json, LoaderFunction, useCatch, useLoaderData, useParams } from "remix";
import Event from "~/components/Event";

export const loader: LoaderFunction = async ({
  params
}) => {
  const db = new PrismaClient();

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
    )
  }

  const event = await db.passEvent.findUnique({
    where: { id: eventId }
  })

  if (!event) {
    throw new Response(
      'Event not found', 
      { status: 404 }
    );
  }

  db.$disconnect();

  return json(event);
}

export default function SingleEvent() {
  const data = useLoaderData<PassEvent>();

  return (
    <div>
      <Event event={data} />
    </div>
  )
}

export function CatchBoundary() {
  const error = useCatch();

  switch (error.status) {
    case 404:
      return (
        <div>There's no such event!</div>
      );
    
    default:
      return (
        <div>{error.status} {error.data}</div>
      )
  }
}