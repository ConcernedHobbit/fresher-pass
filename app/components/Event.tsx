import { PassEvent } from "@prisma/client";
import { Link } from "remix";

export default function Event(
  { event, link = true }: 
  { event: PassEvent, link?: boolean }
): JSX.Element {
  return (
    <div>
      <p>
        { link 
          ? <Link to={`/events/${event.id}`}>{event.title}</Link> 
          : event.title
        }
      </p>
      {event.place && <em>{event.place}</em>}
      {event.description && <p>{event.description}</p>}
    </div>
  )
}