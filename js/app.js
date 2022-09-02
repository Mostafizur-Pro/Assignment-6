// console.log('hi mostafizur')
const loadNews = async() =>{
    const url = 'https://openapi.programming-hero.com/api/news/category/01'
    
    const res = await fetch(url)
    const data = await res.json()
    displayNews(data.data)

}

const displayNews = newses => {
    console.log(newses)
    const items = document.getElementById('news-count')
    items.innerHTML = `
    <h3>${newses.length? newses.length : 'No'} items found for category Entertainment  </h3>
    `


    const newsContainer = document.getElementById('news-container')
    newses.forEach(news => {
        // console.log(news._id)
        const cardDiv = document.createElement('div')
        // cardDiv.classList.add('row.g-0')
        // console.log(cardDiv)
        cardDiv.innerHTML = `
        <div class="card mb-3" >
            <div class="row  g-0 ">
                <div class="col-md-4 my-0 mx-0">
                    <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-7">
                    <div class="card-body">
                        <h5 class="card-title">${news.title}</h5>
                        <p class="card-text">${news.details.slice(0,100)}</p>

                       
                    </div>
                    <div class="card-body ">
                        <div class="container text-center ">
                            <div class="row align-items-center">
                                <div class="col-md-6">
                                    
                                    <div class="card border-0 mb-3 ">
                                    <div class="row g-0 align-items-center ">
                                        <div class="col-md-4 ">
                                        <img src="${news.author.img}" class="img-fluid rounded-circle align-middle w-50 " >
                                        </div>
                                        <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title text-start fs-5">${news.author.name}</h5>
                                            
                                            <p class="card-text text-start fs-6">${news.author.published_date}</p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>

                                
                                </div class="col-md-3">
                                
                                <div class="col"> <i class="fa-solid fa-eye"></i>
                                    ${news.total_view}
                                </div>

                                <div class="col-md-3">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star-half-stroke"></i>
                                </div>
                            </div>
                        </div>
                     
                    </div>
                </div>
                <div class="col-md-1 align-items-center justify-content-center ">
                 <!-- Button trigger modal -->
                    <button onclick="loadNewsDetails('${news._id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsDetail">
                        Click
                    </button>
                    
                </div>
                        
            </div> 
        </div>
       

        `;
        newsContainer.appendChild(cardDiv)
        
    });

}

// modal
const loadNewsDetails = async id =>{
    // console.log(id)
    const url =`https://openapi.programming-hero.com/api/news/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayNewsDetails(data.data[0]);
}

const displayNewsDetails = news =>{
    // console.log(news)
    const newsDetailsModal = document.getElementById('newsDetailLabel')
    newsDetailsModal.innerText = news.title.slice(0, 20)
    const newsModalBody = document.getElementById('news-modal-body')
    newsModalBody.innerText = ''
    const newsModalDiv = document.createElement('div')
    newsModalDiv.innerHTML = `
    <p> Details:  ${news.details.slice(20,100)}</p>
    <div class="row align-items-center">
                                                               
        <div class="col-md-6"> View :
        ${news.total_view ? news.total_view : 'no data available'}
        </div>

        <div class="col-md-6"><strong> Name : </strong>
        ${news.author.name ? news.author.name : 'no data available'}                   
        </div>
    </div>
    
    `;
    newsModalBody.appendChild(newsModalDiv)

}
// loadNewsDetails()

loadNews()