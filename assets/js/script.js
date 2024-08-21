// write cool JS hwere!!
let myData = [] // array der indeholder alle list descriptions

// generate data write data

let myTodoList = {
    name: 'liste 1',//key value pair
    listItems: []
}
console.log(myTodoList.listItems);

let myListItem = {
    name: 'stå op',
    status: true
}

console.log(myListItem);



myTodoList.listItems.push(myListItem) // adder item to itemlist

console.log(myTodoList);

myData.push(myTodoList)

console.log('my data: ' + myData);



// read data

console.log(myData[0].listItems[0].status);



// modtager et navn string
function makeList(myName) {
    let myList = {
        name: myName,//key value pair
        listItems: []
    }

    myData.push(myList)

    console.table(myData);
}

function makeItem() {

}


makeList('svend')

makeList('erik')