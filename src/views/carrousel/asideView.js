export const asideView = (database) => {
    console.log(database)
    const asideViewHTML =  `
                        <aside>
                            <div class="aside-container">
                                <div class="title">
                                    <h2 class="category">Style/News</h2>
                                    <h1>${database.title}</h1>
                                </div>    
                                <div id="author">
                                    <img src="/src/assets/imgs/img1.jpg" alt="">
                                    <div class="author">by ${database.author}</div>
                                </div>
                                <div class="content-article">
                                    <p>${database.p1}</p>
                                    <p>${database.p2}</p>
                                    <div class="social">
                                        <img src="/src/assets/imgs/facebook.svg" alt="">
                                        <img src="/src/assets/imgs/instagram.svg" alt="">
                                        <img src="/src/assets/imgs/twitter.svg" alt="">
                                    </div>
                                </div>
                                <div class="see-article">
                                    <a href="#"> <img src="/src/assets/imgs/plus.svg" alt=""></a>
                                    <p>SEE ARTICLE</p>
                                </div>
                                <div class="next-previous">
                                    <div id="previous"><img src="/src/assets/imgs/prev.svg" alt=""></div>
                                    <div id="next"><img src="/src/assets/imgs/next.svg" alt=""></div>
                                </div>
                            </div>    
                            <div class="carrousel">
                                <img src="/src/assets/imgs/img2.jpg" alt="">
                                <img src="/src/assets/imgs/img3.jpg" alt="">
                                <img src="/src/assets/imgs/img4.jpg" alt="">
                            </div>
                        </aside>`
    return asideViewHTML
}