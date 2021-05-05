



const like = document.querySelector('.fa-heart').addEventListener('click', addLike)


async function addLike(){

    const likes = Number(this.parentNode.innerText)
    const hiddentId = document.querySelector(".hidden").innerText
    
    try {
        
        const response =  await fetch(`/post/addLike/${hiddentId}`,{
            method:'put',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                
                'like': likes
            })
            

        })
        const data = await response.json()
        console.log(data)
        location.reload()

    } catch (error) {
        console.log(error)   
    }
}




const deleteBtn = document.querySelectorAll('.del')


Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deletePost)
})



async function deletePost(){
    const postId = this.parentNode.dataset.id
    try{
        const response = await fetch('posts/deletePost', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'postIdFromJSFile': postId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const postId = this.parentNode.dataset.id
    try{
        const response = await fetch('posts/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'postIdFromJSFile': postId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const postId = this.parentNode.dataset.id
    try{
        const response = await fetch('posts/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'postIdFromJSFile': postId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}