const About = () => {
  return (
    <section id="about" class="about section">
      <div class="container">
        <div class="row position-relative">
          <div
            class="col-lg-7 about-img"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img src="/img/about.jpg" />
          </div>

          <div class="col-lg-7" data-aos="fade-up" data-aos-delay="100">
            <h2 class="inner-title">The Triad Muslim Women of Alliance</h2>
            <div class="our-story">
              <h4>Est 2024</h4>
              <h3>Our Story</h3>
              <p>
                The Triad Muslim Women of Alliance (TMWA) was established on
                December 29, 2024, by a group of local Muslimahs desiring to
                create a healthy and meaningful bond with other Muslimahs within
                the community for the sake of Allah (swt). TMWA is not
                affiliated with a masjid. TMWA welcomes any Muslimah who is in
                support of our mission and goals.
              </p>
              {/* <ul>
                <li>
                  <i class="bi bi-check-circle"></i>{" "}
                  <span>Ullamco laboris nisi ut aliquip ex ea commo</span>
                </li>
                <li>
                  <i class="bi bi-check-circle"></i>{" "}
                  <span>Duis aute irure dolor in reprehenderit in</span>
                </li>
                <li>
                  <i class="bi bi-check-circle"></i>{" "}
                  <span>Ullamco laboris nisi ut aliquip ex ea</span>
                </li>
              </ul> */}
              {/* <p>
                Vitae autem velit excepturi fugit. Animi ad non. Eligendi et non
                nesciunt suscipit repellendus porro in quo eveniet. Molestias in
                maxime doloremque.
              </p> */}

              {/* <div class="watch-video d-flex align-items-center position-relative">
                <i class="bi bi-play-circle"></i>
                <a
                  href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                  class="glightbox stretched-link"
                >
                  Watch Video
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
