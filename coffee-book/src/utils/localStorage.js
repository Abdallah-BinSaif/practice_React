// get from local storage
const getFavorite = () => {
    const all = localStorage.getItem("favorites");

    if(all){
        return JSON.parse(all);
    }else{
        return []
    }
}


// add to local storage

const addFavorite = (coffee) =>{
const favorites = getFavorite()
    const isExist = favorites.find(item => item.id === coffee.id)
    if(isExist){
        alert("already exist")
    }else{
        favorites.push(coffee)
    }
    localStorage.setItem("favorites", JSON.stringify(favorites))
}



// remove from local storage

const deleteFavorite = (id) => {
    const favorites = getFavorite();
    const remainingFavorites = favorites.filter(item => item.id !== id)
    localStorage.setItem("favorites", JSON.stringify(remainingFavorites))
}

export {addFavorite, getFavorite, deleteFavorite}