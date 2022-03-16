import { PassEvent } from "@prisma/client";
import { Link } from "remix";

export default function Event(
  { event, link = true }: 
  { event: PassEvent, link?: boolean }
): JSX.Element {
  return (
    <div>
      { link 
        ? <Link to={`/events/${event.id}`}>{event.title}</Link> 
        : <p>{event.title}</p> 
      }
    </div>
  )
}