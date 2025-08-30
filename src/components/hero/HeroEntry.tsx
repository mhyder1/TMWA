const HeroEntry = ({
  title,
  entry,
  active,
}: {
  title: string;
  entry: string;
  active?: boolean;
}) => {
  return (
    <div class={`carousel-item ${active ? "active" : ""}`}>
      <div class="carousel-container">
        <h2 class="animate__animated animate__fadeInDown">{title}</h2>
        <p class="animate__animated animate__fadeInUp">{entry}</p>
        <a
          href="#about"
          class="btn-get-started animate__animated animate__fadeInUp scrollto"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default HeroEntry;
