import { ActionFunction, json } from "remix";
import { createEvent } from "~/services/eventService.server";

// Reused UI loader
import { loader as eventsLoader } from "~/routes/events/index"
export const loader = eventsLoader

export const action: ActionFunction = async ({
  request
}) => {
  try {
    const payload = await request.json()
    
    const title = payload.title
    if (!title || typeof title !== "string" || title.length < 3) {
      return json({
        message: "title missing or invalid"
      }, 400)
    }

    const description = payload.description
    if (description && typeof description !== "string") {
      return json({
        message: "description must be a string"
      }, 400)
    }

    const place = payload.place
    if (place && typeof place !== "string") {
      return json({
        message: "place must be a string"
      }, 400)
    }

    // TODO: Start time, end time
    // Will probably be folded in when refactoring

    const event = await createEvent({
      title, description, place
    })

    return json(event)
  } catch (error) {
    return json({
      message: "Malformed JSON query"
    }, 400)
  }
}