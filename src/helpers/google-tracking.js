export const sendTracking = ({ event, email, phone_number, event_source = "it", form_action }) => {
  if (typeof window !== 'undefined') {
    window?.dataLayer?.push({
      event,
      email,
      phone_number,
      event_source,
      form_action
    })
  }
}

export const TAG_EVENTS = {
  REQUEST_QUOTE: "request-a-quote",
  PERSON_TOUR: "personalize-this-tour",
  VISA: "visa",
}
