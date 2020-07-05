import React from 'react'

function Team() {
    return (
        <div>
            <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">MANAGING TEAM</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto fa fa-user p-5 fa-5x rounded-circle img-fluid" src="assets/img/team/1.jpg" alt="" />
                            <h4>PERSON 1</h4>
                            <p className="text-muted">FINANCE</p>
                            <a className="btn btn-light btn-social mx-2" href="#!"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-light btn-social mx-2" href="#!"><i className="fa fa-facebook-f"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto fa fa-user p-5 fa-5x rounded-circle" src="assets/img/team/2.jpg" alt="" />
                            <h4>PERSON 2</h4>
                            <p className="text-muted">SECURITY</p>
                            <a className="btn btn-light btn-social mx-2" href="#!"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-light btn-social mx-2" href="#!"><i className="fa fa-facebook-f"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto fa fa-user p-5 fa-5x rounded-circle" src="assets/img/team/3.jpg" alt="" />
                            <h4>PERSON 3</h4>
                            <p className="text-muted">MAINTAINANCE</p>
                            <a className="btn btn-light btn-social mx-2" href="#!"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-light btn-social mx-2" href="#!"><i className="fa fa-facebook-f"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Team
