import Event from "./Event";
const Events = () => {
  const events = [
    // {
    //   date: "Aug 30",
    //   title: "Aromatherapy & Soap Making",
    //   event: "Come together in the spirit of connection and creativity",
    // },
    {
      date: "Oct 18",
      title: "Connect & Elevate",
      event:
        "Level up mixer with local professional muslimahs & students. Invitation only.",
      url: "",
    },
    {
      date: "Nov 1",
      title:
        "Let's Talk About It: The Invisible Hijab - Working from the Inside Out, part 1",
      event:
        "A short, interactive seminar series diving into important topics that are often left unspoken in our communities",
      url: "https://pci.jotform.com/form/252273410627149",
    },
    {
      date: "Nov 8",
      title: "Game On: Meet & Greet Edition",
      event:
        "Step outside your confort zone and connect with new sisters-good vibes, games, food, and fun in one place!",
      url: "",
    },
    {
      date: "Dec 5",
      title: "Anniversary Dinner at Print Works Bistro",
      event: "Print Works Bistro, 2:30 pm",
      email: "triadmwa@gmail.com",
    },
    {
      date: "Dec 29",
      title: "TMWA One Year Anniversary",
      event: "Members only retreat or celebration | TBD",
      url: "",
    },
  ];
  return (
    <section id="events" class="services section">
      {/* <!-- Section Title --> */}
      <div class="container section-title" data-aos="fade-up">
        <h2>Events</h2>
        <p>Join us at our upcoming events</p>
      </div>
      {/* <!-- End Section Title --> */}

      <div class="container">
        <div class="row gy-4">
          {events.map(({ date, title, event, url, email }) => (
            <Event
              date={date}
              title={title}
              event={event}
              url={url}
              email={email}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
