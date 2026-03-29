import Event from "./Event";
import { events } from "./eventData";
import dayjs from "dayjs";

const today = dayjs().startOf("day");

const parseEventDate = (date: string) => {
  const rawDate = date.split(/[–-]/)[0].trim();
  const year = dayjs().year();
  return dayjs(`${rawDate} ${year}`, ["MMM D YYYY", "MMMM D YYYY", "MMM DD YYYY", "MMMM DD YYYY"]);
};

const Events = () => {
  const upcomingEvents = events.filter(({ date }) => {
    const eventDate = parseEventDate(date);
    return eventDate.isValid() && !eventDate.isBefore(today, "day");
  });

  return (
    <section id="events" class="services section">
      {/* <!-- Section Title --> */}
      <div class="container section-title" data-aos="fade-up">
        <h2>Events</h2>
        {/* <p>Join us at our upcoming events</p> */}
        <h3>2026 TMWA Events</h3>
      </div>
      {/* <!-- End Section Title --> */}
      <div class="container">
        <div class="row gy-4">
          {upcomingEvents.map(({ date, title, event, subEvent, url, email }) => (
            <Event
              date={date}
              title={title}
              event={event}
              subEvent={subEvent}
              url={url}
              email={email}
            />
          ))}
        </div>
        <div class="mt-4 d-flex justify-content-center w-100">
          <p>All events are a private & safe space for Muslimahs to socialize and get to know one another. All events are in Greensboro, NC and is open to all Muslimahs.</p>
        </div>
      </div>
    </section>
  );
};

export default Events;
