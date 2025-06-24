import React from 'react'

const Banner = () => {
  return (
   <>
   <div className="banner-main">
        <div className="container">
            <div className="banner">
                <div className="banner-parentes">
                    <div className="text-banner">
                        <h1>Modern Interior Design Studio</h1>
                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
                            velit imperdiet dolor tempor tristique</p>
                        <div className="btn">
                            <a href="#" class="shop">Shop now</a>
                            <a href="#" class="explore">Explore</a>
                        </div>
                    </div>
                    <div className="img-banner">
                        <img src="https://themewagon.github.io/furni/images/couch.png" alt=""/>
                    </div>

                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Banner