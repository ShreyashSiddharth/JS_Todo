add = document.getElementById('add');
add.addEventListener("click" , ()=>{
    console.log('Updating List...')
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if(localStorage.getItem('itemsJson') == null){
        itemJsonArray = [];
        itemJsonArray.push([tit , desc]);
        localStorage.setItem('itemsJson' , JSON.stringify(itemJsonArray));
    }else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit,desc]);
        localStorage.setItem('itemsJson' , JSON.stringify(itemJsonArray))
    }
})

//Watch from 2:32:59