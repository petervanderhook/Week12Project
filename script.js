/* This file is where all your work should go for Assignment 2.  Please remove this comment. */

const contactList = [  
    { 
        name: "Oliver Queen", 
        phone: "778-555-1234", 
        address: "101 Main St, Star City, USA",    
        email: "greenarrow@watchtower.com",  
    },   
    {    
        name: "Jessica Cruz",    
        phone: "123-555-5555",    
        address: "Portland Oregon",    
        email: "greenlantern@watchtower.com",  
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



function createSingleIndex(contact) {
    const contactList = [ {
        name: contact.name,
        phone: contact.phone,
        address: contact.address,
        email: contact.email
    } ]
    return contactList
}

function renderIndex(contact_array) {
    let contact = document.querySelector('.main')
    let html = '';
    for(let i = 0; i < contact_array.length; i++ ) {
        html += ('beforeend', `<a href="page3.html"><div class="contact"><p>${contact_array[i].name}</p></div></a>`);
    }
    contact.insertAdjacentHTML('beforeend', html)
}

function renderCreate() {
    let contactedit = document.querySelector('.main')
    contactedit.insertAdjacentHTML('beforeend', `<div class="contactedit">
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
                <input type="text" id="contactaddress" name="contactaddress" placeholder="Contact Address">
                <button class="extrafield" id="extraaddressfield" name="extraaddressfield">+</button>
            </div>
            
            <div class="inputcontainer">
                <input type="email" id="contactemail" name="contactemail" placeholder="Contact Email">
                <button class="extrafield" id="extraemailfield" name="extraemailfield">+</button>
            </div>

            <div class="buttons">
                <button type="submit" class="button save" id="savecontact" name="savecontact">Save Contact</button>
                <button type="reset" class="button cancel" id="cancel" name="cancel">Cancel</button>
            </div>
        </form>
    </div>
</div>`)
}

function renderView(contact) {
    let contactinfo = document.querySelector('.main');
    contactinfo.insertAdjacentHTML('beforeend', `<div class="contactinfo">
    <div class="contactname">
        ${contact.name}
        <img src="./img/profile.jpg" class="profilepic" alt="Profile picture">
    </div>
    <div class="contactemail">email: ${contact.email}</div>
    <div class="contactphone">cell: ${contact.phone}</div>
    <div class="contactaddress">address: ${contact.address}</div>
    <div class="buttons">
        <button class="button edit" value="Edit">Edit</button>
        <button class="button close" value="Close">Close</button>
    </div>
</div>`)

}




/*function renderIndex(contact_array) {
    for (i = 0; i++; i < length(contact_array) ) {
        let contactcard = document.createElement("div")
        contactcard.classList.add('contactinfo')
        let contactname = contactcard.createElement("div")
        let contactemail = contactcard.createElement("div")
        let contactphone = contactcard.createElement("div")
        let contactname = contactcard.createElement("div")
        contactname.classList.add("contactname")
        contactname.appendChild(contact_array[i].name)
        contactemail.classList.add("contactemail")
        contactname.appendChild(contact_array[i].email)
        contactphone.classList.add("contactphone")
        contactname.appendChild(contact_array[i].phone)
        contactaddress.classList.add("contactaddress")
        contactname.appendChild(contact_array[i].address)
    }
}*/