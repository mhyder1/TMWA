import HeroEntry from "./HeroEntry";

const Hero = () => {
  const heroEntries = [
    {
      title: "Reminders of Sisterhood in Islam",
      entry: `She loves them as sisters for the sake of Allah - "The believers
              are but a single brotherhood..." [Quran 49:10]`,
      active: true,
    },
    {
      title: "Reminders of Sisterhood in Islam",
      entry: `She meets them with a smiling face - "...[those] who restrain all
              anger and pardon (all) men - for Allah loves those who do good."
              [Quran 3:134]`,
      active: false,
    },
    {
      title: "Reminders of Sisterhood in Islam",
      entry: `She is Tolerant & Forgiving Towards Her Sisters - "No two people who love one another for the sake of Allah, or for the sake of Islam, will let the first minor offense of either of them come between them." [Bukhari]`,
      active: false,
    },
    {
      title: "Reminders of Sisterhood in Islam",
      entry: `She is Faithful & Kind Towards Them - "Do not think little of any good deed, even if it is just greeting your brother with a cheerful countenance." [Muslim]`,
      active: false,
    },
    {
      title: "Reminders of Sisterhood in Islam",
      entry: `She Does Not Gossip About Them - "...Nor speak ill of each other behind their back. Would any of you like to eat the flesh of his dead brother? Nay, you would abhor it. But fear Allah, for Allah is Oft- Returning, Most Merciful." [Quran 49:12]`,
      active: false,
    },
    {
      title: "Reminders of Sisterhood in Islam",
      entry: `She Prays for Her Sisters in Their Absence - "The quickest prayer to be answered is a man's supplication for his brother in his absence." [Bukhari]`,
      active: false,
    },
  ];
  return (
    // Hero Section
    <section id="hero" class="hero section dark-background">
      <div
        id="hero-carousel"
        data-bs-interval="5000"
        class="container carousel carousel-fade"
        data-bs-ride="carousel"
      >
        {heroEntries.map(({ title, entry, active }) => (
          <HeroEntry title={title} entry={entry} active={active} />
        ))}
        <a
          class="carousel-control-prev"
          href="#hero-carousel"
          role="button"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon bi bi-chevron-left"
            aria-hidden="true"
          ></span>
        </a>

        <a
          class="carousel-control-next"
          href="#hero-carousel"
          role="button"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon bi bi-chevron-right"
            aria-hidden="true"
          ></span>
        </a>
      </div>

      <svg
        class="hero-waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28 "
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          ></path>
        </defs>
        <g class="wave1">
          <use xlinkHref="#wave-path" x="50" y="3"></use>
        </g>
        <g class="wave2">
          <use xlinkHref="#wave-path" x="50" y="0"></use>
        </g>
        <g class="wave3">
          <use xlinkHref="#wave-path" x="50" y="9"></use>
        </g>
      </svg>
    </section>
  );
};

export default Hero;
