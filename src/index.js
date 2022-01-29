// write your code here


const ramenURL = 'http://localhost:3000/ramens'
document.addEventListener('DOMContentLoaded',init)

function init(){

    console.log('hi')
    fetchRamen()
    document.getElementById('new-ramen').addEventListener('submit',handleSubmit)


}



function fetchRamen(){
    fetch(ramenURL)
    .then(res => res.json())
    .then(arry => arry.forEach(ramen => displayRamen(ramen)))


}

function displayRamen(ramen){
    let ramenImg = document.createElement('img')
    ramenImg.src = ramen.image
    ramenImg.id = ramen.id
    document.getElementById('ramen-menu').appendChild(ramenImg)
    ramenImg.addEventListener('click',()=>handleClick(ramen))

}

function handleClick(ramen){
    let detailRamen = document.getElementById('ramen-detail')
    detailRamen.querySelector('img').src = ramen.image
    detailRamen.querySelector('h2').innerHTML = ramen.name
    detailRamen.querySelector('h3').innerHTML = ramen.restaurant
    detailRamen.querySelector('h2').innerHTML = ramen.name
    detailRamen.querySelector('h2').innerHTML = ramen.name
    document.getElementById('rating-display').innerHTML = ramen.rating
    document.getElementById('comment-display').innerHTML = ramen.comment
}



function handleSubmit(e){
    e.preventDefault()

    // let name = document.getElementById('new-name').value
    // let resturant = document.getElementById('new-resturant').value
    // let image = document.getElementById('new-image').value
    // let rating = document.getElementById('new-rating').value
    // let comment =document.getElementById('new-comment').value

    let ramenObj = {
        'name':document.getElementById('new-name').value,
        'restaurant':document.getElementById('new-restaurant').value,
        'image':document.getElementById('new-image').value,
        'rating':document.getElementById('new-rating').value,
        'comment':document.getElementById('new-comment').value
    }

    console.log(ramenObj)
    fetch(ramenURL,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(ramenObj)
    })
    .then(res => res.json())
    .then(ramen => displayRamen(ramen))


    e.target.reset()
}
