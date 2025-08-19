const Event = ({
  date,
  title,
  event,
}: {
  date: string;
  title: string;
  event: string;
}) => {
  return (
    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
      <div class="service-item position-relative">
        <div class="icon">
          <strong class="text-white">{date}</strong>
        </div>
        {/* <a href="service-details.html" class="stretched-link"> */}
        <h3>{title}</h3>
        {/* </a> */}
        <p>{event}</p>
      </div>
    </div>
  );
};

export default Event;
