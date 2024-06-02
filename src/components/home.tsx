

const MainContent = () => {
  return (
    <main>
      <section className="hero">
        <div className="container px-lg-5">
          <h1 className="text-center text-white mb-5 fw-normal">Find Your Parking Spot</h1>
          <form method="post" action="index.html" className="booking_form bg-light p-4 rounded-3">
            <div className="row align-items-end">
              <div className="col-md-4">
                <label className="fw-semibold">Location:</label>
                <input
                  type="text"
                  name="post_code"
                  required
                  className="form-control form-control-sm"
                  placeholder="Search by postcode"
                />
              </div>
              <div className="col-md-3">
                <label className="fw-semibold">Day:</label>
                <div className="d-flex">
                  <select name="start_day" required className="form-control form-control-sm me-1">
                    <option value=" Select Day" disabled selected>
                      Select Day
                    </option>
                    <option value="Mon">Mon</option>
                    <option value="Tue">Tue</option>
                    <option value="Wed">Wed</option>
                    <option value="Thu">Thu</option>
                    <option value="Fri">Fri</option>
                    <option value="Sat">Sat</option>
                    <option value="Sun">Sun</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <label className="fw-semibold">Time:</label>
                <div className="d-flex">
                  <select name="start_time" required className="form-control form-control-sm ms-1">
                    <option value="" disabled selected>
                      Start time
                    </option>
                    {[...Array(24).keys()].map(hour => (
                      <option key={hour} value={`${hour.toString().padStart(2, '0')}:00:00`}>
                        {hour.toString().padStart(2, '0')}:00
                      </option>
                    ))}
                  </select>
                  <select name="end_time" required className="form-control form-control-sm ms-1">
                    <option value="" disabled selected>
                      End time
                    </option>
                    {[...Array(24).keys()].map(hour => (
                      <option key={hour} value={`${hour.toString().padStart(2, '0')}:00:00`}>
                        {hour.toString().padStart(2, '0')}:00
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-2">
                <button type="submit" className="btn btn-dark w-100 btn-sm" name="search">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section className="py-5 my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5 className="fw-normal">About Us</h5>
              <h2 className="h-title fw-normal">Spare Park</h2>
              <p className="mt-5 mb-3">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore
                Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut
                Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse
                Cillum Dolore Eu Fugiat Nulla Pariatur. Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Culpa
                Qui Officia Deserunt Mollit Anim Id Est Laborum.
              </p>
            </div>
            <div className="col-md-6 ps-md-5">
              <img src={`${process.env.PUBLIC_URL}/mobile-phones-car.png`} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5 className="fw-normal">App Download</h5>
              <h2 className="h-title fw-normal">Download Spare Park App & make your daily commute easy.</h2>
              <p className="mt-5 mb-3">
                <a href="#" className="mb-sm-0 mb-3">
                  <img
                    src={`${process.env.PUBLIC_URL}/google-play.png`}
                    alt="Download-button"
                    height="50"
                  />
                </a>
              </p>
            </div>
            <div className="col-md-6 ps-md-5">
              <img src={`${process.env.PUBLIC_URL}/10707500_44731.png`} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
