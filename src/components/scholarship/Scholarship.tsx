const Scholarship = () => {
  return (
    <section id="scholarship" class="features section features-2">
      {/* <!-- Section Title --> */}
      <div class="container section-title" data-aos="fade-up">
        <h2>Scholarship</h2>
        <p>
          Apply for the 2026 TMWA Scholarship!
        </p>
      </div>
      {/* <!-- End Section Title --> */}

      <div class="container">
        <div class="row gy-4 justify-content-between">
          <div
            class="features-image col-lg-4 d-flex align-items-center"
            data-aos="fade-up"
          >
            <img src="/img/scholarship.jpg" class="img-fluid" alt="" />
          </div>
          <div class="col-lg-7 d-flex flex-column justify-content-top">
            <div
              class="features-item d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i class="bi bi-mortarboard flex-shrink-0"></i>
              <div>
                <h4><a href="https://form.jotform.com/262326194320148" target="_blank">Apply Now</a></h4>
                <p>
                  The deadline to apply is December 5, 2026
                </p>
              </div>
            </div>
            {/* <!-- End Features Item--> */}

            {/* <!-- End Features Item--> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scholarship;
