export default function Event({ event }: { event: FresherEvent }): JSX.Element {
  return (
    <div>
      <p>{event.title} <em>{event.id}</em></p>
    </div>
  )
}