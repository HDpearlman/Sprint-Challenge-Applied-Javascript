// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const divHeader = document.createElement('div')
    divHeader.classList.add('header')

        const spanDate = document.createElement('span')
        spanDate.classList.add('date')
        spanDate.textContent = 'SMARCH 28, 2019'

        const header1 = document.createElement('h1')
        header1.textContent = 'Lambda Times'

        const spanTemp = document.createElement('span')
        spanTemp.classList.add('temp')
        spanTemp.textContent = '98°'

    divHeader.append(spanDate, header1, spanTemp)




    return divHeader
}


const headerContainer = document.querySelector('.header-container')
headerContainer.appendChild(Header())