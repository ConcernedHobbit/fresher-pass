import { ActionFunction, json, LoaderFunction } from "remix";
import { createEvent, getEvents } from "~/services/eventService.server";

export const loader: LoaderFunction = async () => {
  const events = await getEvents()
  return json(events)
}

export const action: ActionFunction = async ({
  request
}) => {
  try {
    const payload = await request.json()
    
    const title = payload.title
    if (!title || typeof title !== "string" || title.length < 3) {
      return json({
        message: "'title' missing or invalid"
      }, 400)
    }

    const event = await createEvent(title)
    return json(event)
  } catch (error) {
    return json({
      message: "Malformed JSON query"
    }, 400)
  }
}