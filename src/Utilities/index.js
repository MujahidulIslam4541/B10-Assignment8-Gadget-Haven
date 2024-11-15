import toast from "react-hot-toast";

// get gadget item in LocalStorage
const getLocalStorage=()=>{
    const all=localStorage.getItem('favorite')
    if(all){
        const favorite=JSON.parse(all)
        console.log(favorite)
        return favorite;
    }
    else{
        console.log([])
        return [];
    }
}


// add gadget item in local storage
const addLocalStorage = item => {
    const favorite=getLocalStorage()

    // No duplicate item
    const isExist=favorite.find(data=>data.id===item.id)
    if(isExist)return toast.error('This Gadget Already Existed');


    favorite.push(item)
    localStorage.setItem('favorite',JSON.stringify(favorite))
    toast.success('Successfully added');
}


// remove gadget item in local storage


export { addLocalStorage ,getLocalStorage}