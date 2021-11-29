/* This file is where all your work should go for Assignment 2.  Please remove this comment. */

const contactList = [  
    { 
        name: "Jabba Hutt", 
        phone: "778-555-1234", 
        address: "101 Main St, Star City, USA",    
        email: "smellyemail@stinky.com",  
    },   
    {    
        name: "Tupak Shakur",    
        phone: "123-555-5555",    
        address: "Pompeii Italy",    
        email: "tpratchett@discworld.com",  
    }
]

function cleanUpIndex() {
    const main = document.querySelector('.main')
    main.remove()
    const body = document.querySelector('body')
    body.insertAdjacentHTML('beforeend', '<div class="main"></div>')
}

function cleanUpCreate() {
    const main = document.querySelector('.main')
    main.remove()
    const body = document.querySelector('body')
    body.insertAdjacentHTML('beforeend', '<div class="main"></div>')
}

function cleanUpView() {
    const main = document.querySelector('.main')
    main.remove()
    const body = document.querySelector('body')
    body.insertAdjacentHTML('beforeend', '<div class="main"></div>')
}

let contactCardButton = document.querySelectorAll('.contact')
function createSingleIndex(name) {
    for(let i = 0; i < contactList.length; i++) {
        if (contactList[i].name == name) {
            renderView(contactList[i])
        }
    }
}
 
function renderIndex(contact_array) {
    let contact = document.querySelector('.main')
    let html = '';
    for(let i = 0; i < contact_array.length; i++ ) {
        html += ('beforeend', `<div class="contact"><a href="page2.html">${contact_array[i].name}</a>
        </div>`);
    }
    contact.insertAdjacentHTML('beforeend', html)
}

function renderCreate() {
    let contactedit = document.querySelector('.main')
    contactedit.insertAdjacentHTML('beforeend', 
    `<div class="contactedit">
        <div class="contactimg">
            <img src="./img/profile.jpg" class ="profilepic" alt="Profile picture">
        </div>
        <div class="form">
            <form>
                <div class="inputcontainer">
                    <input type="text" id="contactname" name="contactname" placeholder="Contact Name">
                    <button class="extrafield" id="extranamefield" name="extranamefield">+</button>
                </div>

                <div class="inputcontainer">
                    <input type="tel" id="contactphone" name="contactphone" placeholder="Contact Phone">
                    <button class="extrafield" id="extraphonefield" name="extraphonefield">+</button>
                </div>

                <div class="inputcontainer">
                    <input type="text" id="contactaddress" name="contactaddress" placeholder="Contact   Address">
                    <button class="extrafield" id="extraaddressfield" name="extraaddressfield">+</button>
                </div>
            
                <div class="inputcontainer">
                    <input type="email" id="contactemail" name="contactemail" placeholder="Contact Email">
                    <button class="extrafield" id="extraemailfield" name="extraemailfield">+</button>
                </div>

                <div class="buttons">
                    <button type="submit" class="button save" id="savecontact" name="savecontact">Save  Contact</button>
                    <button type="reset" class="button cancel" id="cancel" name="cancel">Cancel</button>
                </div>
            </form>
        </div>
    </div>`)
    let form = document.querySelector('.form')
    form.addEventListener('click', function(evt) {
        evt.preventDefault()
        evt.stopImmediatePropagation()
    })
    createSaveButton()
    createCancelButton()
}



function renderView(contactname) {
    for (let i = 0; i < contactList.length; i++) {
        if (contactList[i].name == contactname) {
            console.log(`rendering ${contactList[i].name}`)
            let contactinfo = document.querySelector('.main'); 
            contactinfo.insertAdjacentHTML('beforeend', `<div class="contactinfo">
            <div class="contactname">
                ${contactList[i].name}
                <img src="./img/profile.jpg" class="profilepic" alt="Profile picture">
            </div>
            <div class="contactemail">email: ${contactList[i].email}</div>
            <div class="contactphone">cell: ${contactList[i].phone}</div>
            <div class="contactaddress">address: ${contactList[i].address}</div>
            <div class="buttons">
                <button class="button edit" value="Edit">Edit</button>
                <button class="button close" value="Close">Close</button>
            </div>
            </div>`)
        }
    }
    viewButtonsEvent()
}


var navContactButton = document.querySelector('#contactshome.nav-home')
navContactButton.addEventListener('click', function(evt) {
    evt.preventDefault()
    evt.stopImmediatePropagation()
    cleanUpIndex()
    renderIndex(contactList)
    contactButtonsEvent()

})


var createButton = document.querySelector('#newcontact.nav')
createButton.addEventListener('click', function(evt) {
    evt.preventDefault()
    evt.stopImmediatePropagation()
    cleanUpIndex()
    renderCreate()
})

renderIndex(contactList)
contactButtonsEvent()
function contactButtonsEvent() {
    var contactButtons = document.querySelectorAll('a[href="page2.html"]')
    for (let i = 0; i < contactButtons.length; i++ ){ 
        contactButtons[i].addEventListener('click', function(evt){
            evt.preventDefault()
            evt.stopImmediatePropagation()
            let contactname = evt.target.innerHTML
            console.log(contactname)
            cleanUpIndex()
            renderView(contactname)
            
        })
    }
}
function createSaveButton() {
    var saveButton = document.querySelector('#savecontact.button.save')
    saveButton.addEventListener('click', function(evt) {
        evt.preventDefault()
        evt.stopImmediatePropagation()
        var newcontact = new Object()
        newcontact.name = document.getElementById('contactname').value
        newcontact.phone = document.getElementById('contactphone').value
        newcontact.address = document.getElementById('contactaddress').value
        newcontact.email = document.getElementById('contactemail').value
        contactList.push(newcontact)
        cleanUpIndex()
        renderIndex(contactList)
    })
}

function createCancelButton() {
    var cancelButton = document.querySelector('#cancel.button.cancel')
    cancelButton.addEventListener('click', function(evt) {
        evt.preventDefault()
        evt.stopImmediatePropagation()
        cleanUpIndex()
        renderIndex(contactList)
    })
}

function viewButtonsEvent() {
    var closeViewButton = document.querySelector('.button.close')
    closeViewButton.addEventListener('click', function(evt) {
        evt.preventDefault()
        evt.stopImmediatePropagation()
        cleanUpIndex()
        renderIndex(contactList)
        contactButtonsEvent()
    }) 

    var editViewButton = document.querySelector('.button.edit')
    editViewButton.addEventListener('click', function(evt) {
        evt.preventDefault()
        evt.stopImmediatePropagation()
        cleanUpIndex()
        renderIndex(contactList)
        contactButtonsEvent()
    }) 
}