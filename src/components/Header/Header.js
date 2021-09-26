import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="d-flex justify-content-between py-3">
                <div className="w-25 d-flex justify-content-center">
                    <img width="200" src="http://www.farazydental.com/images/1629297136.png" className="" alt="" />
                </div>
                <div className="w-25 d-flex align-items-center">
                    <div>
                        <h6>DOCTOR SERIAL    01934-999555</h6>
                        <h6>MANAGER  01945-999555</h6>
                        <h6>HELPLINE 01958-304088</h6>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg sticky-top navbar-light" style={{ "background-color": "e3f2fd" }}>
                <div className="container ">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="/">Make an Appointment</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="/">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="/">Secialist</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="/">Dental Tips</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="/">News & Event</a>
                            </li>
                        </ul>
                        <div className="d-flex justify-content-between" style={{ "width": "150px" }}>
                            <a className="fs-3" href="/"><i className="fab fa-facebook "></i></a>
                            <a className="fs-3" href="/"><i class="fab fa-twitter"></i></a>
                            <a className="fs-3" href="/"><i class="fab fa-google-plus"></i></a>
                            <a className="fs-3" href="/"><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </nav>
            <hr />
            <div className="text-center shadow-sm fs-1 pb-3 text-dark">
                Total Budget: <b>$ 100 Million</b>
            </div>
        </div>
    );
};

export default Header;