import { PassEvent } from "@prisma/client";

export default function Event({ event }: { event: PassEvent }): JSX.Element {
  return (
    <div>
      <p>{event.title} #<em>{event.id}</em></p>
    </div>
  )
}