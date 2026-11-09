const Event = ({
  date,
  title,
  event,
  subEvent,
  url,
  email,
  action,
  instructions
}: {
  date: string;
  title: string;
  event: string;
  subEvent?: string;
  url?: string;
  email?: string;
  action?: 'register'| 'buy';
  instructions?: string;
}) => {
  return (
    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
      <div class="service-item position-relative">
        <div class="icon">
          <strong class="text-white">{date}</strong>
        </div>
        <h3>{title}</h3>
        <p>{event}</p>
        {subEvent && <p>{subEvent}</p>}
        {instructions && <p>{instructions}</p>}
        {url && (
          <a
            href={url}
            target="_blank"
            class="d-inline-block mt-4 event-button"
          >
            {action === 'register' ? 'Register here' :'Buy Ticket'}
          </a>
        )}
        {email && (
          <a
            href={`mailto:${email}`}
            target="_blank"
            class="d-inline-block mt-4 event-button"
          >
            {email}
          </a>
        )}
      </div>
    </div>
  );
};

export default Event;
