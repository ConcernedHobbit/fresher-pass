import Event from "~/components/Event";

export default function Index() {
  const events: FresherEvent[] = [
    { id: 'test', title: 'Test Event' },
    { id: 'other', title: 'Another test event!' }
  ]

  return (
    <div>
      <h1>Fresher Pass</h1>
      <h2>Events</h2>
      {events.map(event => <Event key={event.id} event={event} />)}
    </div>
  );
}
