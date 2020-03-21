// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(result =>{
    console.log('articles' ,result)
    const articleContainer = document.querySelector('.cards-container')

    

    result.data.articles.javascript.forEach(item =>{
        articleContainer.appendChild(cardCreator(item))
    })
    result.data.articles.bootstrap.forEach(item =>{
        articleContainer.appendChild(cardCreator(item))
    })
    result.data.articles.technology.forEach(item =>{
        articleContainer.appendChild(cardCreator(item))
    })
    result.data.articles.jquery.forEach(item =>{
        articleContainer.appendChild(cardCreator(item))
    })
    result.data.articles.node.forEach(item =>{
        articleContainer.appendChild(cardCreator(item))
    })
   
    
    
})
.catch(err =>{
    console.log(err)
})




const cardCreator = (array) =>{
    const divCard = document.createElement('div')
    divCard.classList.add('card')

        const divHeadline = document.createElement('div')
        divHeadline.classList.add('headline')
        divHeadline.textContent = array.headline

        const divAuthor = document.createElement('div')
        divAuthor.classList.add('author')

        divCard.append(divHeadline, divAuthor)

            const divImgContainer = document.createElement('div')
            divImgContainer.classList.add('img-container')
            divAuthor.appendChild(divImgContainer)

                const image = document.createElement('img')
                image.src = array.authorPhoto

                divImgContainer.appendChild(image)

            const spanAuthor = document.createElement('span') 
            spanAuthor.textContent = array.authorName 
            divAuthor.appendChild(spanAuthor)  


    return divCard
}