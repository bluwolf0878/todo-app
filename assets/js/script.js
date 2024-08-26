
document.getElementById("mtl").addEventListener ("click", ()=>{


    let todoname = document.getElementById("todoname").value

   makeList(todoname)



});

document.getElementById("mti").addEventListener ("click", ()=>{

    let todoitem = document.getElementById("todoitem").value
    makeItem(0,todoitem)

    console.table(myData)


})

let myData = [] // array der indeholder alle list descriptions

// generate data write data
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
//------------------------------------------
function showList(myListIndex) {

    let myList = myData[myListIndex]

    let listElement = document.getElementById('listElement')

    listElement.innerHTML = `<h2>${myList.name}</h2>`




    let myHtml = ''

    myList.listItems.forEach((element, index) => {
        myHtml += `<div><h3 onclick="itemCallBack(${index})">${element.name}</h3></div>`
    });


    listElement.innerHTML += myHtml


}

function itemCallBack(index) {
    console.log(index);
    removeItem(0, index)
    showList(0)
}
//----------------------------------------------------------------------
function makeDummyData() {
    makeList("liste 1")
    makeList("liste 2")

    makeItem(0, 'opgave 1')
    makeItem(0, 'opgave 2')
    makeItem(0, 'opgave 3')
    makeItem(0, 'opgave 4')

    makeItem(1, 'opgave 1')
    makeItem(1, 'opgave 2')
    makeItem(1, 'opgave 3')
    makeItem(1, 'opgave 4')

}