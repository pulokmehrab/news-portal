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
    toggleSpinner(true);
    
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
      console.log(newses.length);
      
      const newsText = document.getElementById('news-count');
      if(newses.length===0){
        newsText.innerText=`no`
      }
      else{
        newsText.innerText = `${newses.length}`;
      }
     
      const newsContainer = document.getElementById('news-container');
     
        newsContainer.innerHTML = "";
        // toggleSpinner(true);
    //   newsContainer.innerHTML=``;
      newses.forEach ( _newse=>{
        // console.log(_newse)
        const newsContainer = document.getElementById('news-container');
        
        const newsDiv = document.createElement('div');
        
            newsDiv.classList.add('row');
            newsDiv.innerHTML =`<div class=" my-2 col-md-4">
            <img src="${_newse.thumbnail_url}" class="img-fluid rounded-end  w-100"  alt="...">
          </div>
          <div class="  col-md-8">
            <div class="card-body">
              <h5 class="card-title">${_newse.title}</h5>
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
    <p class= "px-5 " id="">viwers ${_newse.total_view}</p>
    
    
</div>
<p class= "px-3 " > Rating ${_newse.rating.number}</p>
<button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick="displayDetails('${_newse._id}')" >More..</button>
</div>
            </div>
          </div>`;
          toggleSpinner(true);
          
          newsContainer.appendChild(newsDiv);
          
          toggleSpinner(true);
      });
      x

  }

 const displayDetails =async(newsId)=>{
    const url3 =`https://openapi.programming-hero.com/api/news/${newsId}`
    const  res =await fetch(url3);
    const data3 =await res.json()
    modalNews(data3.data[0]);
 }
 const modalNews =(newses)=>{
    console.log(newses);

    const modalBody =document.getElementById('modal-Body');
      const modalTitle =document.getElementById('staticBackdropLabel');
      const authorname =document.getElementById('author-name');
      const viwers =document.getElementById('viwers');
      modalBody.innerText= newses.details;
      modalTitle.innerText= newses.title;
      if(authorname.innerText  &&  newses.total_view == null ){
        authorname.innerText= `NO AUTHOR NAME FOUND`
        viwers.innerText= `0 viwers`
      }
      else{
        authorname.innerText= newses.author.name;
        viwers.innerText= newses.total_view;
      }
      
 }
 const toggleSpinner = isLoading =>{
  const loadersection =document.getElementById('loader');
  if(isLoading){
    loadersection.classList.remove('d-none')
  }
  else{
    loadersection.classList.add('d-none')
  }
 }