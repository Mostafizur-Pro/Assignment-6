
const loadNews = async(category_id) =>{
    try{
        const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
        const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data);
    }
    catch(e){

        console.log('Fetch error: ', error);
    }
    
      
    
    

}

const displayNews = newses => {
    // console.log(newses)
 
    const items = document.getElementById('news-count')

    items.innerHTML = `
    <h3>${newses.length? newses.length : 'No'} items found for category </h3>
    `


    const newsContainer = document.getElementById('news-container')
    newsContainer.textContent = ''
// note start
// const numbers = [];
// console.log(numbers)

// note end
newses.forEach(news => {
    // console.log(news.total_view)
    
    // note start
    
    
    // numbers.push(news.total_view)
    
        // numbers.sort()
        
        // note end


        const cardDiv = document.createElement('div')
    //    numbers.sort((b,a)=> a.total_view - b.total_view))
        // cardDiv.classList.add('hi').innerHTML = 'numbers.sort((b,a)=> a - b))';
        cardDiv.innerHTML = `
        <div class="card mb-4" >
            <div class="row  g-0 ">
                <div class="col-md-4 my-0 mx-0">
                    <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${news.title}</h5>
                        <p class="card-text">${news.details.slice(0,150)}...</p>

                       
                    </div>
                    <div class="card-body ">
                        <div class="container text-center ">
                            <div class="row align-items-center">
                                <div class="col-md-6">
                                    
                                    <div class="card border-0 mb-3 ">
                                    <div class="row g-0 align-items-center ">
                                        <div class="col-sm-4 ">
                                        <img style="height:50px" src="${news.author.img}" class="img-thumbnail  rounded-circle align-middle w- " >
                                        </div>
                                        <div class="col-sm-8">
                                        <div class="card-body">
                                            <h5  class="card-title text-start fs-5">${news.author.name? news.author.name : 'No data Available'}</h5>
                                            
                                            <p class="card-text text-start fs-6">${news.author.published_date ? news.author.published_date : '0'}</p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>

                                
                                </div >
                                
                                <div class="col"> <i class="fa-solid fa-eye"></i>
                                    ${news.total_view? news.total_view : '0'}
                                </div>

                                <div class="col-md-2">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star-half-stroke"></i>
                                </div>
                                <div class="col-md-2 align-items-center justify-content-center ">
                                <!-- Button trigger modal -->
                                   <button onclick="loadNewsDetails('${news._id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsDetail">
                                   <i class="fa-solid fa-right-long"></i>
                                   </button>
                                   
                               </div>
                            </div>
                        </div>
                     
                    </div>
                </div>
              
                        
            </div> 
        </div>
       

        `;
        
        
        newsContainer.appendChild(cardDiv)
        
    });

}

// modal
const loadNewsDetails = async id =>{
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
    
// Stop loader
toggleSpinner(false)
}

loadNews('08')

/*----------------- catagory area------------------- */

const loadCatagory= async()=>{
    const url="https://openapi.programming-hero.com/api/news/categories" 
    const res=await fetch(url)
    const data= await res.json()
    displayCatagory(data.data.news_category)
}

const displayCatagory=catagories=>{
    // console.log(catagories)
    toggleSpinner(true)
    
    const catagoryField=document.getElementById('catagory-field')
    catagoryField.innerHTML=''
    catagories.forEach(catagory=>{
        // console.log(catagory)
        const catagoryDiv=document.createElement('div')
        // catagoryDiv.classList.add('navbar navbar navbar-expand-lg bg-light')
        catagoryDiv.innerHTML=`
        <div class="btn rounded-5  ps-3 pe-3 " onclick="loadNews('${catagory.category_id}')"> ${catagory.category_name}</div>
        
        
        `;
        
        catagoryField.appendChild(catagoryDiv)
        
    })
    
}


// start loader
const toggleSpinner = isLoading =>{
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none')

    }
}

loadCatagory()

