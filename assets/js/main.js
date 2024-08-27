// array der indeholder alle list descriptions
let myData = []


     makeDummyData()

let myIcon = document.getElementById('icon')
let myDropDown = document.getElementById('dropdownContent')



myIcon.addEventListener('click', (event) => {


    myDropDown.classList.toggle('hidden')

})

function callback(myInfo) {
    console.log(myInfo);
    myDropDown.classList.toggle('hidden')
    showList(myInfo)
}

function makeDummyData(){

   let myTodoList = {
    name: 'liste 1',//key value pair
    listItems: []
}

let myListItem = {
    name: 'stå op',
    status: true
}
myTodoList.listItems.push(myListItem) // adder item to itemlist

myData.push(myTodoList) 
console.log(myData);

}


// modtager et navn,string og skaber et ny liste dataobjekt og gemmer det i myData-------------------------
function makeList(myName) {
    let myList = {
        name: myName,//key value pair
        listItems: []
    }

    myData.push(myList)
    console.table(myData)
}

// --------------------------------------------------------
// modtager et navn og opretter list item i første to do list
function makeItem(index, myName) {

    let myListItem = {
        name: myName,
        status: true
    }
    myData[index].listItems.push(myListItem)
}
// modtager et index for listen, og et index for item, og fjerner dette item fra listen.
function removeItem(listIndex, itemIndex) {
    let myList = myData[listIndex]

    console.log(myList.listItems);

    myList.listItems.splice(itemIndex, 1)

}
function showList(myListIndex) {

    let myList = myData[myListIndex]

    let listElement = document.getElementById('container')
    

    listElement.innerHTML = `<h2>${myList.name}</h2>`

    let myHtml = ''

    myList.listItems.forEach((element, index) => {
        myHtml += `<div><h3 onclick="itemCallBack(${index})">${element.name}</h3></div>`
    });

    listElement.innerHTML += myHtml

}