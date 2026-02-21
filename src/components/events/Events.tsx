import Event from "./Event";
import { events } from "./eventData";
const Events = () => {
  return (
    <section id="events" class="services section">
      {/* <!-- Section Title --> */}
      <div class="container section-title" data-aos="fade-up">
        <h2>Events</h2>
        {/* <p>Join us at our upcoming events</p> */}
        <h3>2026 Calendar of Events Coming Soon!</h3>
      </div>
      {/* <!-- End Section Title --> */}
      <div class="container">
        <div class="row gy-4">
          {events.map(({ date, title, event, subEvent, url, email }) => (
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
        <div class="mt-4">
          All events are a private & safe space for Muslimahs to socialize and get to know one another. All events are in Greensboro, NC and is open to all Muslimahs.
        </div>
      </div>
    </section>
  );
};

export default Events;
