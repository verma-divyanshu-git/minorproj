import "./Profile.css";
import "./EditProfile.css";
import image from "./image.jpg";

function Profile() {
  return (
    <div className="container">
      <div className="main-body">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body card-body-prof leftcard">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src={image}
                    alt="Admin"
                    className="rounded-circle"
                    width={150}
                  />
                  <div className="mt-3">
                    <h4>Doctor Name</h4>
                    <p className="text-secondary mb-1">Specialization</p>
                    <p className="text-muted font-size-sm">Hospital Name</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body card-body-prof">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Full Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">Doctor Name</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Doctor ID</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">1234</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Phone</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">1234567890</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Specialization</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">abcd</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Qualificaton</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">MBBS</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-12">
                    <button
                      className="btn btn-info "
                      data-toggle="modal"
                      data-target="#exampleModalCenter1"
                    >
                      Edit
                    </button>
                  </div>
                </div>

                <div
                  class="modal fade"
                  id="exampleModalCenter1"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalCenterTitle"
                  aria-hidden="true"
                >
                  <div
                    class="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">
                          Edit Details
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <form>
                          <div className="row">
                            <div className="col-sm-4 ">
                              <label class="form-label">Name</label>
                            </div>
                            <div className="col-sm-8">
                              <input
                                type="name"
                                class="form-control"
                                placeholder="name"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-4 ">
                              <label class="form-label">Phone</label>
                            </div>
                            <div className="col-sm-8 ">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="phone"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-4">
                              <label class="form-label">Specialization</label>
                            </div>
                            <div className="col-sm-8">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Specialization"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-4 ">
                              <label class="form-label">Qualification</label>
                            </div>
                            <div className="col-sm-8 ">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Qualification "
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body card-body-prof patcard">
          <div className=" row phead">
            <div className="col-sm-10">
              <h3>Patients:</h3>
            </div>
            <div className="col-sm-2">
              <button
                className="btn btn-info "
                data-toggle="modal"
                data-target="#exampleModalCenter2"
              >
                Add Patient
              </button>
              <div
                class="modal fade"
                id="exampleModalCenter2"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">
                        Add Patient
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div className="row">
                          <div className="col-sm-4 ">
                            <label class="form-label">Patient Name</label>
                          </div>
                          <div className="col-sm-8">
                            <input
                              type="name"
                              class="form-control"
                              placeholder=" name"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-4 ">
                            <label class="form-label">Patient ID</label>
                          </div>
                          <div className="col-sm-8 ">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="patient ID "
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    Add Patient
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form>
                    <div className="row">
                      <div className="col-sm-4 ">
                        <label class="form-label">Patient Name</label>
                      </div>
                      <div className="col-sm-8">
                        <input
                          type="name"
                          class="form-control"
                          placeholder=" name"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 ">
                        <label class="form-label">Patient ID</label>
                      </div>
                      <div className="col-sm-8 ">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="patient ID "
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4">
                        <label class="form-label">Specialization</label>
                      </div>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          class="form-control"
                          placeholder=" Specialization"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 ">
                        <label class="form-label">Qualification</label>
                      </div>
                      <div className="col-sm-8 ">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Qualification "
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <h5 className="pathd">
                <i>Patient Name</i>
              </h5>
            </div>
            <div className="col-sm-9">
              <h5 className="pathd">
                {" "}
                <i>Patient ID</i>
              </h5>
            </div>
          </div>
          <div className="patients">
            <div className="row">
              <div className="col-sm-3">Pateint 1</div>
              <div className="col-sm-3">Pateint1 id</div>
              <div className="col-sm-3">
                <a href="/upload" className="linkclr">
                  <u>Upload EEG</u>
                </a>
              </div>
              <div className="col-sm-2">
                <a href="/report" className="linkclr">
                  <u>View report</u>
                </a>
              </div>
              <div className="col-sm-1">
                <button class="btnn">
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">Pateint 2</div>
              <div className="col-sm-3 ">Pateint2 id</div>
              <div className="col-sm-3">
                <a href="/upload" className="linkclr">
                  <u>Upload EEG</u>
                </a>
              </div>
              <div className="col-sm-2">
                <a href="/report" className="linkclr">
                  <u>View report</u>
                </a>
              </div>
              <div className="col-sm-1">
                <button class="btnn">
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
