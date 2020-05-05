export const carrouselContainerView = (database) => {
    const carrouselContainerViewHTML =  `<div class="carrousel-container" >
                                            <div class="img-carrousel" data-barba="container" data-barba-namespace="home" id="${database.img}-carrousel"> </div>
                                            <div class="mini-footer">
                                            <div class="article-container">
                                                <div class="footer-img" id="img1"></div>
                                                <div>
                                                    <h3>SNEAKERS</h3>
                                                    <p>Your Chance to Cop the Travis Scott x Nicke SB Punk</p>
                                                </div>
                                            </div>
                                            <div class="article-container">
                                                <div class="footer-img" id="img2"></div>
                                                <div>
                                                    <h3>FASHION</h3>
                                                    <p>Virgil Abloh Debuts New Off.White x Air Jordan 4</p>
                                                </div>
                                            </div>
                                            <div class="article-container">
                                                <div class="footer-img" id="img3"></div>
                                                <div>
                                                    <h3>MUSIC</h3>
                                                    <p>Pharrel's $17 Million Beverly Hills Mansion</p>
                                                </div>
                                            </div>
                                            </div>
                                        </div>`
    return carrouselContainerViewHTML
}