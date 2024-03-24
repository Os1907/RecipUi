

   



export const getData = async ()=>{
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    const finalData = await data.json()
     return finalData
 }
  
 export const mealDetails = async (id)=>{
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const finalData = await data.json()
     return finalData
 }


 export const searchMeal = async (name)=>{
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    const finalData = await data.json()
     return finalData
 }


 export const categoriesApi = async ()=>{
    const data = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    const finalData = await data.json()
     return finalData
 }

 export const categoriesFilter = async (name)=>{
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
    const finalData = await data.json()
     return finalData
 }



 export const areaApi = async ()=>{
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    const finalData = await data.json()
     return finalData
 }



 export const areaCountry = async (name)=>{
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`)
    const finalData = await data.json()
     return finalData
 }


 export const ingredient = async ()=>{
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    const finalData = await data.json()
     return finalData
 }


 export const IngredientFilter = async (name)=>{
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`)
    const finalData = await data.json()
     return finalData
 }




