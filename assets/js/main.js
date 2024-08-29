// array der indeholder alle list descriptions
let myData = []
let curentlist = 0


makeDummyData()
makemenu()

let myIcon = document.getElementById('icon')
let myDropDown = document.getElementById('dropdownContent')
let make = document.getElementById('make')
let Delete = document.getElementById('Delete')

myIcon.addEventListener('click', (event) => {


    myDropDown.classList.toggle('hidden')

})

function callback(myInfo) {
    console.log(myInfo);
    myDropDown.classList.toggle('hidden')
    showList(myInfo)
}

function makeDummyData() {

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
    curentlist = myData.length - 1
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
function removeItem(itemIndex) {
    let myList = myData[curentlist]

    console.log(myList.listItems);

    myList.listItems.splice(itemIndex, 1)

}
function removeList(curentlist) {
    myData.splice(curentlist, 1)
    curentlist = myData.length - 1
    showList()
    makemenu()
}
// show item list and functions
function showList(myListIndex) {
    curentlist = myListIndex

    let myList = myData[myListIndex]
    if (myList) {

        let listElement = document.getElementById('container')
        listElement.style.backgroundColor = "var(--container-list)"
        listElement.style.margin = "0 1rem"
        listElement.style.borderRadius = "2rem"
        let titelelement = document.getElementById('listTitle')
        listElement.innerHTML = ''
        titelelement.innerHTML = `<h2>${myList.name}</h2>`

        let myHtml = ''

        myList.listItems.forEach((element, index) => {
            myHtml += `<div><img onclick="deleteitemcallback(${index})" src="assets/img/Done_ring_round.svg" alt="">
            <h3>${element.name}</h3></div>`
        });
        myHtml += '<div  onclick="makenewitemView()">+</div>'

        listElement.innerHTML += myHtml
    } else {
        let listElement = document.getElementById('container')
        let titelelement = document.getElementById('listTitle')

        listElement.innerHTML = ''
        titelelement.innerHTML = ''
    }


}

function makemenu() {

    let listElement = document.getElementById('dropdownContent')
    listElement.innerHTML = ''

    let myHtml = '<ul>'

    myData.forEach((element, index) => {
        myHtml += `<li onclick="itemCallBack(${index})">${element.name}</li>`
    });
    myHtml += '</ul>'

    listElement.innerHTML += myHtml

}

function itemCallBack(index) {
    console.log(index)
    showList(index)

}

// show make new item and functions
function makenewitemView() {

    let formElement = document.getElementById('container')
    formElement.style.backgroundColor = "var(--secondary)"
    formElement.style.margin = "0"
    formElement.style.borderRadius = "0"
    formElement.innerHTML = ''


    let myHtml = ''

    myHtml += '<input type="text" placeholder="name of item" id="inputItem">'
    myHtml += '<div class="containerbuttons">'
    myHtml += '<button onclick="OKbuttoncallback()"> ok </button>'
    myHtml += '<button onclick="cancelcallback()"> cancel </button>'
    myHtml += '</div>'
    formElement.innerHTML += myHtml

}
function OKbuttoncallback() {
    myname = inputItem.value
    makeItem(curentlist, myname)
    showList(curentlist)
}
function cancelcallback() {
    showList(curentlist)
}

// show make new list and functions
make.addEventListener('click', (event) => {

    makenewListView()

})

function makenewListView() {

    let formElement = document.getElementById('container')
    formElement.style.backgroundColor = "var(--secondary)"
    formElement.style.margin = "0"
    formElement.style.borderRadius = "0"
    formElement.innerHTML = ''


    let myHtml = ''

    myHtml += '<input type="text" placeholder="name of item" id="inputItem">'
    myHtml += '<div class="containerbuttons">'
    myHtml += '<button onclick="okcallback()"> ok </button>'
    myHtml += '<button onclick="Cancelcallback()"> cancel </button>'
    myHtml += '</div>'
    formElement.innerHTML += myHtml

}
function okcallback() {
    myname = inputItem.value
    makeList(myname)
    showList(curentlist)
    makemenu()
}
function Cancelcallback() {
    showList(curentlist)
}
// delete event list
Delete.addEventListener('click', (event) => {
    console.log('delete');

    removeList()

})
// delete item
function deleteitemcallback(index) {
    removeItem(index)
    showList(curentlist)
}