import React from 'react'

const Testmonial = () => {
  return (
    <>
      <div className="Testmonial-main">
        <div className="container">
            <div className="testmonial">
             
                <div id="carouselExampleDark" class="carousel carousel-dark slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <div className="text-testmonial">
                                <h1>Testimonials</h1>
                                <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus
                                    malesuada.
                                    Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                                    egestas. Integer convallis volutpat dui quis scelerisque.</p>

                            </div>
                            <div className="text-box">
                                <img src="https://themewagon.github.io/furni/images/person-1.png" alt=""/>
                                <h3>Maria Jones</h3>
                                <p>CEO, Co-Founder, XYZ Inc.</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <div className="text-testmonial">
                                <h1>Testimonials</h1>
                                <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus
                                    malesuada.
                                    Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                                    egestas. Integer convallis volutpat dui quis scelerisque.</p>

                            </div>
                            <div className="text-box">
                                <img src="https://themewagon.github.io/furni/images/person-1.png" alt=""/>
                                <h3>Maria Jones</h3>
                                <p>CEO, Co-Founder, XYZ Inc.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="text-testmonial">
                                <h1>Testimonials</h1>
                                <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus
                                    malesuada.
                                    Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                                    egestas. Integer convallis volutpat dui quis scelerisque.</p>

                            </div>
                            <div className="text-box">
                                <img src="https://themewagon.github.io/furni/images/person-1.png" alt=""/>
                                <h3>Maria Jones</h3>
                                <p>CEO, Co-Founder, XYZ Inc.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Testmonial