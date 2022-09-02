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
        <a href=""><p class ="  m-0" id="newsDtails"onclick="loadNewsdetails()"> ${newsType.category_name} <p></a>`;
        categorycontainer.appendChild(newsdiv);
    }
 }


 const loadNewsdetails =async() =>{
    const url2=`https://openapi.programming-hero.com/api/news/category/01`
    const res =await fetch(url2);
    const data2 =await res.json();
    console.log(data2.data);
 }
loadCategory();
loadNewsdetails();
 
                            