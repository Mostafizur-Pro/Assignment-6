// console.log('hi mostafizur')
const loadNews = async() =>{
    const url = 'https://openapi.programming-hero.com/api/news/category/01'
    const res = await fetch(url)
    const data = await res.json()
    displayNews(data.data)

}

const displayNews = newses => {
    console.log(newses)
    const newsContainer = document.getElementById('news-container')
    newses.forEach(news => {
        // console.log(news)
        const cardDiv = document.createElement('div')
        // cardDiv.classList.add('row.g-0')
        // console.log(cardDiv)
        cardDiv.innerHTML = `
        <div class="card mb-3" style="max-width: ;">
            <div class="row g-0">
                <div class="col-md-4 my-0 mx-0">
                    <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${news.title}</h5>
                        <p class="card-text">${news.thumbnail_url}</p>

                       
                    </div>
                    <div class="card-body">
                        <div class="container text-center">
                            <div class="row ">
                                <div class="col">
                                Column
                                </div>
                                <div class="col">
                                view
                                </div>
                                <div class="col">
                                star
                                </div>
                            </div>
                        </div>
                     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                        
            </div> 
        </div>
       

        `;
        newsContainer.appendChild(cardDiv)
        
    });

}
loadNews()