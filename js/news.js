   
                  
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
        <button class="  btn btn-primary m-2" id="newsDtails" onClick="displaynewses('${newsType.category_id}')"> ${newsType.category_name} </button>`;
        categorycontainer.appendChild(newsdiv);
    })
}
 loadCategory(); 


 const displaynewses =async newses =>{
    const Url2 = `https://openapi.programming-hero.com/api/news/category/${newses}`;
     const res =await fetch(Url2);
     const data2 = await res.json();
     loadNewses(data2.data);

 }
  const loadNewses = (newses) =>{
    
      console.log(newses);
      const modalBody =document.getElementById('modal-Body');
      const modalTitle =document.getElementById('staticBackdropLabel');
    //   newsContainer.innerHTML=``;
      newses.forEach ( _newse=>{
        console.log(_newse)
        const newsContainer = document.getElementById('news-container');
        
        const newsDiv = document.createElement('div');
            newsDiv.classList.add('row');
            newsDiv.innerHTML =`<div class=" my-2 col-md-4">
            <img src="${_newse.thumbnail_url}" class="img-fluid rounded-end  w-100"  alt="...">
          </div>
          <div class="  col-md-8">
            <div class="card-body">
              <h5 class="card-title">${_newse.title}}</h5>
              <h6 class="card-text"></h6>
              <p class="card-text">${_newse.details.slice(0,300 )}......</p>
              <p class="card-text"><small class="text-muted"></small></p>

              <div class="d-flex">
 <div ">
  <img class=" width rounded-pill"  src="${_newse.author.img}"  alt="">
 </div>
  
  <div class =" align-items-center">
     <h5>${_newse.author.name}</h5>
     <p>${_newse.author.published_date} </p>
  </div>
  <div>
    <p class= "px-5 ">viwers ${_newse.total_view}</p>
    

    
</div>
<p class= "px-3 "> Rating ${_newse.rating.number}</p>
<div><button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick="displaynewses('${_newse.details}')" >More..</button></div>

</div>
            </div>
          </div>`;

          modalBody.innerText=_newse.details;
          modalTitle.innerText=_newse.title;
          newsContainer.appendChild(newsDiv);
         
      });

  }

    


                           

 