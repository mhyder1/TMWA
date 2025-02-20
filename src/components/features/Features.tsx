const Features = () => {
  return (
    <section id="features-2" class="features section features-2">
      {/* <!-- Section Title --> */}
      <div class="container section-title" data-aos="fade-up">
        <h2>Features</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      {/* <!-- End Section Title --> */}

      <div class="container">
        <div class="row gy-4 justify-content-between">
          <div
            class="features-image col-lg-4 d-flex align-items-center"
            data-aos="fade-up"
          >
            <img src="/img/features.png" class="img-fluid" alt="" />
          </div>
          <div class="col-lg-7 d-flex flex-column justify-content-center">
            <div
              class="features-item d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i class="bi bi-archive flex-shrink-0"></i>
              <div>
                <h4>Est labore ad</h4>
                <p>
                  Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                  laboris nisi ut aliquip
                </p>
              </div>
            </div>
            {/* <!-- End Features Item--> */}

            <div
              class="features-item d-flex mt-5"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i class="bi bi-basket flex-shrink-0"></i>
              <div>
                <h4>Harum esse qui</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt
                </p>
              </div>
            </div>
            {/* <!-- End Features Item--> */}

            <div
              class="features-item d-flex mt-5"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i class="bi bi-broadcast flex-shrink-0"></i>
              <div>
                <h4>Aut occaecati</h4>
                <p>
                  Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                  maiores omnis facere
                </p>
              </div>
            </div>
            {/* <!-- End Features Item--> */}

            <div
              class="features-item d-flex mt-5 "
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <i class="bi bi-camera-reels flex-shrink-0"></i>
              <div>
                <h4>Beatae veritatis</h4>
                <p>
                  Expedita veritatis consequuntur nihil tempore laudantium vitae
                  denat pacta
                </p>
              </div>
            </div>
            {/* <!-- End Features Item--> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
