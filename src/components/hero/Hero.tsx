const Hero = () => {
  return (
    // Hero Section
    <section id="hero" class="hero section dark-background">
      <div
        id="hero-carousel"
        data-bs-interval="5000"
        class="container carousel carousel-fade"
        data-bs-ride="carousel"
      >
        {/* <!-- Slide 1 --> */}
        {/* <div class="carousel-item active">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">
              Our <span>Mission</span>
            </h2>
            <p class="animate__animated animate__fadeInUp">
              To empower Muslim women through education, mentorship and social
              engagement, fostering a strong sense of community and sisterhood
              while contributing to the greater good.
            </p>
            <a
              href="#about"
              class="btn-get-started animate__animated animate__fadeInUp scrollto"
            >
              Read More
            </a>
          </div>
        </div> */}

        {/* <!-- Slide 2 --> */}
        <div class="carousel-item active">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">
              Reminders of Sisterhood in Islam
            </h2>
            <p class="animate__animated animate__fadeInUp">
              She loves them as sisters for the sake of Allah - "The believers
              are but a single brotherhood..." [Quran 49:10]
            </p>
            <a
              href="#about"
              class="btn-get-started animate__animated animate__fadeInUp scrollto"
            >
              Read More
            </a>
          </div>
        </div>

        {/* <!-- Slide 3 --> */}
        <div class="carousel-item">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">
              Reminders of Sisterhood in Islam
            </h2>
            <p class="animate__animated animate__fadeInUp">
              She meets them with a smiling face - "...those who restrain all
              anger and pardon (all) men - for Allah loves those who do good."
              [Quran 3:134]
            </p>
            <a
              href="#about"
              class="btn-get-started animate__animated animate__fadeInUp scrollto"
            >
              Read More
            </a>
          </div>
        </div>

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
