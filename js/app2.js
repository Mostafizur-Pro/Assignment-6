const loadNews = async(category) =>{
    const url = 'https://openapi.programming-hero.com/api/news/category/01'
    
    const res = await fetch(url)
    const data = await res.json()
    displayNews(data.data)

}

const displayNews = newses => {
    
    
    const items = document.getElementById('news-count')
    items.innerHTML = `
    <h3>${newses.length? newses.length : 'No'} items found for category Entertainment  </h3>
    `


    const newsContainer = document.getElementById('news-container')
    newsContainer.textContent = ''
    // newses.forEach(news => {
        
        console.log(newses)

        
        // newArray.push(news.total_view)


        const cardDiv = document.createElement('div')
        // cardDiv.classList.add('row.g-0')
        // console.log(cardDiv)
        cardDiv.innerHTML = `
       <div class="card text-bg-dark">
  <img src="..." class="card-img" alt="...">
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div>
</div>
       

        `;
        newsContainer.appendChild(cardDiv)
        
    // });

}



loadNews()

