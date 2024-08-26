// write cool JS hwere!!


let myIcon = document.getElementById('icon')
let myDropDown = document.getElementById('dropdownContent')



myIcon.addEventListener('click', (event) => {


    myDropDown.classList.toggle('hidden')

})

function callback(myInfo) {
    console.log(myInfo);
    myDropDown.classList.toggle('hidden')

}