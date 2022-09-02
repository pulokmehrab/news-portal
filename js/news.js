                            // console.log("pulok")
                  
   const loadCategory = async() =>{
    const url =`https://openapi.programming-hero.com/api/news/categories`
    const res =await fetch(url);
    const data =await res.json();
    displayCategoris(data.data.news_category);
}
 const displayCategoris = newsTypes =>{
    console.log(newsTypes);
    const categorycontainer = document.getElementById('category-container');
    for(const newsType of newsTypes){
        const newsdiv =document.createElement('div');
        newsdiv.innerHTML =`
        <h5> ${newsType.category_name}</h5>`;
        categorycontainer.appendChild(newsdiv);
    }
 }
loadCategory();
 
                            