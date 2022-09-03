   
                  
   const loadCategory = async() =>{
    const url =`https://openapi.programming-hero.com/api/news/categories`
    const res =await fetch(url);
    const data =await res.json();
    displayCategoris(data.data.news_category);
}
 const displayCategoris = newsTypes =>{
    // console.log(newsTypes);
    const categorycontainer = document.getElementById('category-container');
    newsTypes.forEach (newsType=>
     {
        const newsdiv =document.createElement('div');
        newsdiv.innerHTML =`
        <button class=" btn btn-primary m-2" id="newsDtails" onClick="displaynewses('${newsType.category_id}')"> ${newsType.category_name} </button>`;
        categorycontainer.appendChild(newsdiv);
    })
}
 loadCategory(); 


//  const loadnesDetails =async()=>{
//     const Url2 = `https://openapi.programming-hero.com/api/news/category/01`;
//      const res =await fetch(Url2);
//      const data2 = await res.json();
//      displaynewses(data2.data); 
//  }

 const displaynewses =async newses =>{
    const Url2 = `https://openapi.programming-hero.com/api/news/category/${newses}`;
     const res =await fetch(Url2);
     const data2 = await res.json();
     loadNewses(data2.data);
 }
  const loadNewses = (newses) =>{
    
      console.log(newses);
      newses.forEach ( _newse=>{
        console.log(_newse)
        const newsContainer = document.getElementById('news-container');
        const newsDiv = document.createElement('div');
            newsDiv.classList.add('row');
            newsDiv.innerHTML =`<div class=" my-2 col-md-4">
            <img src="${_newse.thumbnail_url}" class="img-fluid rounded-start px-2" alt="...">
          </div>
          <div class="  col-md-8">
            <div class="card-body">
              <h5 class="card-title">${_newse.author.name}</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>`;
          newsContainer.appendChild(newsDiv);
         
      });

  }

    

//     displaynewses();
//  loadnesDetails();


    
    


                           

 