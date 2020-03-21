// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(result => {
    console.log(result)

    const topicsElement = document.querySelector('.topics')
    result.data.topics.forEach(item =>
        topicsElement.appendChild(tabCreator(item))
    )
    
    
    
    }
)
.catch(err =>
    console.log(err)
)



const tabCreator = (arrayResult) =>{
    const divTab = document.createElement('div')
    divTab.classList.add('tab')
    divTab.textContent = arrayResult


    return divTab
}