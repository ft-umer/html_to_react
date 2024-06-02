const RentSpace = () => {
    return (
        <main>
        <section>
            <div className="row mx-0">
                <div className="col-md-6 col-sm-12 mb-md-0 mb-4 px-0 d-md-block d-none">
                    <img src={`${process.env.PUBLIC_URL}/rent-space.png`} alt="Rent Out" className="img-fluid" />
                </div>
                <div className="col-md-6 col-12">
                    <form action="" method="post" className="px-5 py-5">
             
                        <div className="mb-3">
                            <label className="fw-semibold">Your post code</label>
                            <input type="text" name="post_code" required className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="fw-semibold">Address</label>
                            <input type="text" name="address" required className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="fw-semibold">Country</label>
                            <input type="text" name="country" required className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="fw-semibold">Google Map Link</label>
                            <input type="text" name="gmap" required className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="fw-semibold">Space Type</label>
                            <div className="form-check py-1">
                                <input className="form-check-input p-2 me-3" type="radio" value="Driveway" required
                                    name="type" id="opt1" />
                                <label className="form-check-label" htmlFor="opt1"> Driveway </label>
                            </div>
                            <div className="form-check py-1">
                                <input className="form-check-input p-2 me-3" type="radio" value="Car Park" name="type"
                                    id="opt2" />
                                <label className="form-check-label" htmlFor="opt2"> Car Park </label>
                            </div>
                            <div className="form-check py-1">
                                <input className="form-check-input p-2 me-3" type="radio" value="On Street" name="type"
                                    id="opt3" />
                                <label className="form-check-label" htmlFor="opt3"> On Street </label>
                            </div>
                            <div className="form-check py-1">
                                <input className="form-check-input p-2 me-3" type="radio" value="Garage" name="type"
                                    id="opt4" />
                                <label className="form-check-label" htmlFor="opt4"> Garage </label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="fw-semibold">Space Description</label>
                            <textarea rows={4} name="description" className="form-control" required></textarea>
                        </div>
                        <div className="mb-3">
                            <label className="fw-semibold">Space Availability</label>
                            <div className="card my-2">
                                <div className="card-body">
                                    <div className="form-check form-switch p-0 d-flex flex-row justify-content-between">
                                        <label className="form-check-label" htmlFor="full_time">Always available <small
                                                className="text-muted">(24/7)</small></label>
                                        <input className="form-check-input" name="full_time" value="1" checked
                                            type="checkbox" id="full_time" />
                                    </div>
                                </div>
                            </div>
                            <div className="card my-2">
                                <div className="card-header"> Monday </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-6">
                                            <label>Start</label>
                                            <select className="form-control form-control-sm" name="mon_start">
                                                <option value="" selected disabled>Select start time</option>
                                                <option value="00:00:00">00:00</option>
                                                <option value="01:00:00">01:00</option>
                                                <option value="02:00:00">02:00</option>
                                                <option value="03:00:00">03:00</option>
                                                <option value="04:00:00">04:00</option>
                                                <option value="05:00:00">05:00</option>
                                                <option value="06:00:00">06:00</option>
                                                <option value="07:00:00">07:00</option>
                                                <option value="08:00:00">08:00</option>
                                                <option value="09:00:00">09:00</option>
                                                <option value="10:00:00">10:00</option>
                                                <option value="11:00:00">11:00</option>
                                                <option value="12:00:00">12:00</option>
                                                <option value="13:00:00">13:00</option>
                                                <option value="14:00:00">14:00</option>
                                                <option value="15:00:00">15:00</option>
                                                <option value="16:00:00">16:00</option>
                                                <option value="17:00:00">17:00</option>
                                                <option value="18:00:00">18:00</option>
                                                <option value="19:00:00">19:00</option>
                                                <option value="20:00:00">20:00</option>
                                                <option value="21:00:00">21:00</option>
                                                <option value="22:00:00">22:00</option>
                                                <option value="23:00:00">23:00</option>
                                            </select>
                                        </div>
                                        <div className="col-6">
                                            <label>End</label>
                                            <select className="form-control form-control-sm" name="mon_end">
                                                <option value="" selected disabled>Select end time</option>
                                                <option value="00:00:00">00:00</option>
                                                <option value="01:00:00">01:00</option>
                                                <option value="02:00:00">02:00</option>
                                                <option value="03:00:00">03:00</option>
                                                <option value="04:00:00">04:00</option>
                                                <option value="05:00:00">05:00</option>
                                                <option value="06:00:00">06:00</option>
                                                <option value="07:00:00">07:00</option>
                                                <option value="08:00:00">08:00</option>
                                                <option value="09:00:00">09:00</option>
                                                <option value="10:00:00">10:00</option>
                                                <option value="11:00:00">11:00</option>
                                                <option value="12:00:00">12:00</option>
                                                <option value="13:00:00">13:00</option>
                                                <option value="14:00:00">14:00</option>
                                                <option value="15:00:00">15:00</option>
                                                <option value="16:00:00">16:00</option>
                                                <option value="17:00:00">17:00</option>
                                                <option value="18:00:00">18:00</option>
                                                <option value="19:00:00">19:00</option>
                                                <option value="20:00:00">20:00</option>
                                                <option value="21:00:00">21:00</option>
                                                <option value="22:00:00">22:00</option>
                                                <option value="23:00:00">23:00</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card my-2">
                                <div className="card-header"> Tuesday </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-6">
                                            <label>Start</label>
                                            <select className="form-control form-control-sm" name="tue_start">
                                                <option value="" selected disabled>Select start time</option>
                                                <option value="00:00:00">00:00</option>
                                                <option value="01:00:00">01:00</option>
                                                <option value="02:00:00">02:00</option>
                                                <option value="03:00:00">03:00</option>
                                                <option value="04:00:00">04:00</option>
                                                <option value="05:00:00">05:00</option>
                                                <option value="06:00:00">06:00</option>
                                                <option value="07:00:00">07:00</option>
                                                <option value="08:00:00">08:00</option>
                                                <option value="09:00:00">09:00</option>
                                                <option value="10:00:00">10:00</option>
                                                <option value="11:00:00">11:00</option>
                                                <option value="12:00:00">12:00</option>
                                                <option value="13:00:00">13:00</option>
                                                <option value="14:00:00">14:00</option>
                                                <option value="15:00:00">15:00</option>
                                                <option value="16:00:00">16:00</option>
                                                <option value="17:00:00">17:00</option>
                                                <option value="18:00:00">18:00</option>
                                                <option value="19:00:00">19:00</option>
                                                <option value="20:00:00">20:00</option>
                                                <option value="21:00:00">21:00</option>
                                                <option value="22:00:00">22:00</option>
                                                <option value="23:00:00">23:00</option>
                                            </select>
                                        </div>
                                        <div className="col-6">
                                            <label>End</label>
                                            <select className="form-control form-control-sm" name="tue_end">
                                                <option value="" selected disabled>Select end time</option>
                                                <option value="00:00:00">00:00</option>
                                                <option value="01:00:00">01:00</option>
                                                <option value="02:00:00">02:00</option>
                                                <option value="03:00:00">03:00</option>
                                                <option value="04:00:00">04:00</option>
                                                <option value="05:00:00">05:00</option>
                                                <option value="06:00:00">06:00</option>
                                                <option value="07:00:00">07:00</option>
                                                <option value="08:00:00">08:00</option>
                                                <option value="09:00:00">09:00</option>
                                                <option value="10:00:00">10:00</option>
                                                <option value="11:00:00">11:00</option>
                                                <option value="12:00:00">12:00</option>
                                                <option value="13:00:00">13:00</option>
                                                <option value="14:00:00">14:00</option>
                                                <option value="15:00:00">15:00</option>
                                                <option value="16:00:00">16:00</option>
                                                <option value="17:00:00">17:00</option>
                                                <option value="18:00:00">18:00</option>
                                                <option value="19:00:00">19:00</option>
                                                <option value="20:00:00">20:00</option>
                                                <option value="21:00:00">21:00</option>
                                                <option value="22:00:00">22:00</option>
                                                <option value="23:00:00">23:00</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card my-2">
                                <div className="card-header"> Wednesday </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-6">
                                            <label>Start</label>
                                            <select className="form-control form-control-sm" name="wed_start">
                                                <option value="" selected disabled>Select start time</option>
                                                <option value="00:00:00">00:00</option>
                                                <option value="01:00:00">01:00</option>
                                                <option value="02:00:00">02:00</option>
                                                <option value="03:00:00">03:00</option>
                                                <option value="04:00:00">04:00</option>
                                                <option value="05:00:00">05:00</option>
                                                <option value="06:00:00">06:00</option>
                                                <option value="07:00:00">07:00</option>
                                                <option value="08:00:00">08:00</option>
                                                <option value="09:00:00">09:00</option>
                                                <option value="10:00:00">10:00</option>
                                                <option value="11:00:00">11:00</option>
                                                <option value="12:00:00">12:00</option>
                                                <option value="13:00:00">13:00</option>
                                                <option value="14:00:00">14:00</option>
                                                <option value="15:00:00">15:00</option>
                                                <option value="16:00:00">16:00</option>
                                                <option value="17:00:00">17:00</option>
                                                <option value="18:00:00">18:00</option>
                                                <option value="19:00:00">19:00</option>
                                                <option value="20:00:00">20:00</option>
                                                <option value="21:00:00">21:00</option>
                                                <option value="22:00:00">22:00</option>
                                                <option value="23:00:00">23:00</option>
                                            </select>
                                        </div>
                                        <div className="col-6">
                                            <label>End</label>
                                            <select className="form-control form-control-sm" name="wed_end">
                                                <option value="" selected disabled>Select end time</option>
                                                <option value="00:00:00">00:00</option>
                                                <option value="01:00:00">01:00</option>
                                                <option value="02:00:00">02:00</option>
                                                <option value="03:00:00">03:00</option>
                                                <option value="04:00:00">04:00</option>
                                                <option value="05:00:00">05:00</option>
                                                <option value="06:00:00">06:00</option>
                                                <option value="07:00:00">07:00</option>
                                                <option value="08:00:00">08:00</option>
                                                <option value="09:00:00">09:00</option>
                                                <option value="10:00:00">10:00</option>
                                                <option value="11:00:00">11:00</option>
                                                <option value="12:00:00">12:00</option>
                                                <option value="13:00:00">13:00</option>
                                                <option value="14:00:00">14:00</option>
                                                <option value="15:00:00">15:00</option>
                                                <option value="16:00:00">16:00</option>
                                                <option value="17:00:00">17:00</option>
                                                <option value="18:00:00">18:00</option>
                                                <option value="19:00:00">19:00</option>
                                                <option value="20:00:00">20:00</option>
                                                <option value="21:00:00">21:00</option>
                                                <option value="22:00:00">22:00</option>
                                                <option value="23:00:00">23:00</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card my-2">
                                <div className="card-header"> Thursday </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-6">
                                            <label>Start</label>
                                            <select className="form-control form-control-sm" name="thu_start">
                                                <option value="" selected disabled>Select start time</option>
                                                <option value="00:00:00">00:00</option>
                                                <option value="01:00:00">01:00</option>
                                                <option value="02:00:00">02:00</option>
                                                <option value="03:00:00">03:00</option>
                                                <option value="04:00:00">04:00</option>
                                                <option value="05:00:00">05:00</option>
                                                <option value="06:00:00">06:00</option>
                                                <option value="07:00:00">07:00</option>
                                                <option value="08:00:00">08:00</option>
                                                <option value="09:00:00">09:00</option>
                                                <option value="10:00:00">10:00</option>
                                                <option value="11:00:00">11:00</option>
                                                <option value="12:00:00">12:00</option>
                                                <option value="13:00:00">13:00</option>
                                                <option value="14:00:00">14:00</option>
                                                <option value="15:00:00">15:00</option>
                                                <option value="16:00:00">16:00</option>
                                                <option value="17:00:00">17:00</option>
                                                <option value="18:00:00">18:00</option>
                                                <option value="19:00:00">19:00</option>
                                                <option value="20:00:00">20:00</option>
                                                <option value="21:00:00">21:00</option>
                                                <option value="22:00:00">22:00</option>
                                                <option value="23:00:00">23:00</option>
                                            </select>
                                        </div>
                                        <div className="col-6">
                                            <label>End</label>
                                            <select className="form-control form-control-sm" name="thu_end">
                                                <option value="" selected disabled>Select end time</option>
                                                <option value="00:00:00">00:00</option>
                                                <option value="01:00:00">01:00</option>
                                                <option value="02:00:00">02:00</option>
                                                <option value="03:00:00">03:00</option>
                                                <option value="04:00:00">04:00</option>
                                                <option value="05:00:00">05:00</option>
                                                <option value="06:00:00">06:00</option>
                                                <option value="07:00:00">07:00</option>
                                                <option value="08:00:00">08:00</option>
                                                <option value="09:00:00">09:00</option>
                                                <option value="10:00:00">10:00</option>
                                                <option value="11:00:00">11:00</option>
                                                <option value="12:00:00">12:00</option>
                                                <option value="13:00:00">13:00</option>
                                                <option value="14:00:00">14:00</option>
                                                <option value="15:00:00">15:00</option>
                                                <option value="16:00:00">16:00</option>
                                                <option value="17:00:00">17:00</option>
                                                <option value="18:00:00">18:00</option>
                                                <option value="19:00:00">19:00</option>
                                                <option value="20:00:00">20:00</option>
                                                <option value="21:00:00">21:00</option>
                                                <option value="22:00:00">22:00</option>
                                                <option value="23:00:00">23:00</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card my-2">
                                <div className="card-header"> Friday </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-6">
                                            <label>Start</label>
                                            <select className="form-control form-control-sm" name="fri_start">
                                                <option value="" selected disabled>Select start time</option>
                                                <option value="00:00:00">00:00</option>
                                                <option value="01:00:00">01:00</option>
                                                <option value="02:00:00">02:00</option>
                                                <option value="03:00:00">03:00</option>
                                                <option value="04:00:00">04:00</option>
                                                <option value="05:00:00">05:00</option>
                                                <option value="06:00:00">06:00</option>
                                                <option value="07:00:00">07:00</option>
                                                <option value="08:00:00">08:00</option>
                                                <option value="09:00:00">09:00</option>
                                                <option value="10:00:00">10:00</option>
                                                <option value="11:00:00">11:00</option>
                                                <option value="12:00:00">12:00</option>
                                                <option value="13:00:00">13:00</option>
                                                <option value="14:00:00">14:00</option>
                                                <option value="15:00:00">15:00</option>
                                                <option value="16:00:00">16:00</option>
                                                <option value="17:00:00">17:00</option>
                                                <option value="18:00:00">18:00</option>
                                                <option value="19:00:00">19:00</option>
                                                <option value="20:00:00">20:00</option>
                                                <option value="21:00:00">21:00</option>
                                                <option value="22:00:00">22:00</option>
                                                <option value="23:00:00">23:00</option>
                                            </select>
                                        </div>
                                        <div className="col-6">
                                            <label>End</label>
                                            <select className="form-control form-control-sm" name="fri_end">
                                                <option value="" selected disabled>Select end time</option>
                                                <option value="00:00:00">00:00</option>
                                                <option value="01:00:00">01:00</option>
                                                <option value="02:00:00">02:00</option>
                                                <option value="03:00:00">03:00</option>
                                                <option value="04:00:00">04:00</option>
                                                <option value="05:00:00">05:00</option>
                                                <option value="06:00:00">06:00</option>
                                                <option value="07:00:00">07:00</option>
                                                <option value="08:00:00">08:00</option>
                                                <option value="09:00:00">09:00</option>
                                                <option value="10:00:00">10:00</option>
                                                <option value="11:00:00">11:00</option>
                                                <option value="12:00:00">12:00</option>
                                                <option value="13:00:00">13:00</option>
                                                <option value="14:00:00">14:00</option>
                                                <option value="15:00:00">15:00</option>
                                                <option value="16:00:00">16:00</option>
                                                <option value="17:00:00">17:00</option>
                                                <option value="18:00:00">18:00</option>
                                                <option value="19:00:00">19:00</option>
                                                <option value="20:00:00">20:00</option>
                                                <option value="21:00:00">21:00</option>
                                                <option value="22:00:00">22:00</option>
                                                <option value="23:00:00">23:00</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card my-2">
                                <div className="card-header"> Saturday </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-6">
                                            <label>Start</label>
                                            <select className="form-control form-control-sm" name="sat_start">
                                                <option value="" selected disabled>Select start time</option>
                                                <option value="00:00:00">00:00</option>
                                                <option value="01:00:00">01:00</option>
                                                <option value="02:00:00">02:00</option>
                                                <option value="03:00:00">03:00</option>
                                                <option value="04:00:00">04:00</option>
                                                <option value="05:00:00">05:00</option>
                                                <option value="06:00:00">06:00</option>
                                                <option value="07:00:00">07:00</option>
                                                <option value="08:00:00">08:00</option>
                                                <option value="09:00:00">09:00</option>
                                                <option value="10:00:00">10:00</option>
                                                <option value="11:00:00">11:00</option>
                                                <option value="12:00:00">12:00</option>
                                                <option value="13:00:00">13:00</option>
                                                <option value="14:00:00">14:00</option>
                                                <option value="15:00:00">15:00</option>
                                                <option value="16:00:00">16:00</option>
                                                <option value="17:00:00">17:00</option>
                                                <option value="18:00:00">18:00</option>
                                                <option value="19:00:00">19:00</option>
                                                <option value="20:00:00">20:00</option>
                                                <option value="21:00:00">21:00</option>
                                                <option value="22:00:00">22:00</option>
                                                <option value="23:00:00">23:00</option>
                                            </select>
                                        </div>
                                        <div className="col-6">
                                            <label>End</label>
                                            <select className="form-control form-control-sm" name="sat_end">
                                                <option value="" selected disabled>Select end time</option>
                                                <option value="00:00:00">00:00</option>
                                                <option value="01:00:00">01:00</option>
                                                <option value="02:00:00">02:00</option>
                                                <option value="03:00:00">03:00</option>
                                                <option value="04:00:00">04:00</option>
                                                <option value="05:00:00">05:00</option>
                                                <option value="06:00:00">06:00</option>
                                                <option value="07:00:00">07:00</option>
                                                <option value="08:00:00">08:00</option>
                                                <option value="09:00:00">09:00</option>
                                                <option value="10:00:00">10:00</option>
                                                <option value="11:00:00">11:00</option>
                                                <option value="12:00:00">12:00</option>
                                                <option value="13:00:00">13:00</option>
                                                <option value="14:00:00">14:00</option>
                                                <option value="15:00:00">15:00</option>
                                                <option value="16:00:00">16:00</option>
                                                <option value="17:00:00">17:00</option>
                                                <option value="18:00:00">18:00</option>
                                                <option value="19:00:00">19:00</option>
                                                <option value="20:00:00">20:00</option>
                                                <option value="21:00:00">21:00</option>
                                                <option value="22:00:00">22:00</option>
                                                <option value="23:00:00">23:00</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card my-2">
                                <div className="card-header"> Sunday </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-6">
                                            <label>Start</label>
                                            <select className="form-control form-control-sm" name="sun_start">
                                                <option value="" selected disabled>Select start time</option>
                                                <option value="00:00:00">00:00</option>
                                                <option value="01:00:00">01:00</option>
                                                <option value="02:00:00">02:00</option>
                                                <option value="03:00:00">03:00</option>
                                                <option value="04:00:00">04:00</option>
                                                <option value="05:00:00">05:00</option>
                                                <option value="06:00:00">06:00</option>
                                                <option value="07:00:00">07:00</option>
                                                <option value="08:00:00">08:00</option>
                                                <option value="09:00:00">09:00</option>
                                                <option value="10:00:00">10:00</option>
                                                <option value="11:00:00">11:00</option>
                                                <option value="12:00:00">12:00</option>
                                                <option value="13:00:00">13:00</option>
                                                <option value="14:00:00">14:00</option>
                                                <option value="15:00:00">15:00</option>
                                                <option value="16:00:00">16:00</option>
                                                <option value="17:00:00">17:00</option>
                                                <option value="18:00:00">18:00</option>
                                                <option value="19:00:00">19:00</option>
                                                <option value="20:00:00">20:00</option>
                                                <option value="21:00:00">21:00</option>
                                                <option value="22:00:00">22:00</option>
                                                <option value="23:00:00">23:00</option>
                                            </select>
                                        </div>
                                        <div className="col-6">
                                            <label>End</label>
                                            <select className="form-control form-control-sm" name="sun_end">
                                                <option value="" selected disabled>Select end time</option>
                                                <option value="00:00:00">00:00</option>
                                                <option value="01:00:00">01:00</option>
                                                <option value="02:00:00">02:00</option>
                                                <option value="03:00:00">03:00</option>
                                                <option value="04:00:00">04:00</option>
                                                <option value="05:00:00">05:00</option>
                                                <option value="06:00:00">06:00</option>
                                                <option value="07:00:00">07:00</option>
                                                <option value="08:00:00">08:00</option>
                                                <option value="09:00:00">09:00</option>
                                                <option value="10:00:00">10:00</option>
                                                <option value="11:00:00">11:00</option>
                                                <option value="12:00:00">12:00</option>
                                                <option value="13:00:00">13:00</option>
                                                <option value="14:00:00">14:00</option>
                                                <option value="15:00:00">15:00</option>
                                                <option value="16:00:00">16:00</option>
                                                <option value="17:00:00">17:00</option>
                                                <option value="18:00:00">18:00</option>
                                                <option value="19:00:00">19:00</option>
                                                <option value="20:00:00">20:00</option>
                                                <option value="21:00:00">21:00</option>
                                                <option value="22:00:00">22:00</option>
                                                <option value="23:00:00">23:00</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="fw-semibold">Rate per hour</label>
                            <input type="text" pattern="[0-9]*\.?[0-9]+" placeholder="eg: 10.0" required name="rate"
                                className="form-control" />
                        </div>
                        <div className="mt-3">
                            <button className="btn btn-dark w-100" name="submit"> Save </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </main>
    )
}

export default RentSpace