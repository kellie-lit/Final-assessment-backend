const fortuneButton = document.getElementById("fortuneButton");
const goalCategory = document.getElementById("goal-category");
const display = document.getElementById("display-section");

//CATEGORY
const categoryBtn = document.getElementById("goal-submit");

//SUBSCRIBE
const subscribeBtn = document.getElementById("getSubmit");
const displayList = document.getElementById("display-list");

const baseURL = "http://localhost:4000/api/"

const getFortunes = () => {

    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const getAdviceByHandler = () => {
    display.innerHTML = ``
    axios.get(`${baseURL}goal-advice?category=${goalCategory.value}`)
        .then(res => {
            console.log(res.data)
            const showAdvice = document.createElement(`h3`)
            showAdvice.textContent = res.data.advice
            display.appendChild(showAdvice)

        })
        .catch(err => console.log(err))
}


//ADD EMAIL TO SUBSCRIBE BUTTON

const userInput = document.getElementsByName('name')[0]

const getSubmit = (e) => {
    e.preventDefault()
    let body = {
        subscribeBtn: userInput.value
    }
    axios.post(`${baseURL}action-page`, body)
        .then(res => {
            console.log(res.data)
            const subscriptionItem = document.createElement(`p`)
            subscriptionItem.textContent = res.data
            displayList.appendChild(subscriptionItem)
            userInput.value = ''
        })
        .catch(err => console.log(err));
    alert('Thank you for successfully subscribing')
};
const deleteSubscription = (e) => {
    axios.delete(`${baseURL}action-page`, body)
        .then(res => {
            console.log(res.data)
            const unsubscribeItem = document.createElementById(`unsubscribe`)
            unsubscribeItem.textContent = res.data
            displayList2.appendChild(unsubscribeItem)
            userInput.value = ''
        })
        .catch(err => console.log(err));
    alert(`We are sad to see you go but stay successful =^)`)
};

fortuneButton.addEventListener('click', getFortunes);

categoryBtn.addEventListener("click", getAdviceByHandler);

const getSubmitBtn = document.getElementById('getSubmit')

getSubmitBtn.addEventListener('click', getSubmit);

const unsubscribe = document.getElementById(`unsubscribe`)
unsubscribe.addEventListener('click', unsubscribe);

//const displayList2 = document.getElementById("display-list2")
/*getSubmitBtn.delete = function(req, res) {
    var deleteSubscription = userInput["name" + req.params.id];
    delete userInput["name" + req.params.id];
    console.log("--->After deletion, customer list:\n" + JSON.stringify(userInput, null, 4) );
    res.end( "Deleted subscription: \n" + JSON.stringify(deleteSubscription, null, 4));
};*/

/*const express = require("express");

const fortuneButton = document.getElementById("fortuneButton");
//alert (fortuneButton);

const goalCategory = document.getElementById("goal-category");
const display = document.getElementById("display-section");

//CATEGORY
const categoryBtn = document.getElementById("goal-category");

//SUBSCRIBE
const subscribeBtn = document.getElementById("getSubmit");
const displayList = document.getElementById("display-list");

const baseURL = "http://localhost:4000/api/"

const getFortunes = () => {

    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const deleteBtnFunc = (evt) => {
    console.log(evt.target.id)
    axios.delete(`${baseURL}api/action-page/${evt.target.id}`)
        .then(res => displayList(res.data))
        .catch(err => console.log(err))
}

const getAdviceByHandler = () => {
    display.innerHTML = ``
    axios.get(`${baseURL}goal-advice?category=${goalCategory.value}`)
        .then(res => {
            console.log(res.data)
            const showAdvice = document.createElement(`h3`)
            showAdvice.textContent = res.data.advice
            display.appendChild(showAdvice)

        })
        .catch(err => console.log(err))
}


//ADD EMAIL TO SUBSCRIBE BUTTON
const userInput = document.getElementsByName(`name`)[0]


const getSubmit = (e) => {
    e.preventDefault()
    let body = {
        subscribeBtn: userInput.value
    }
    axios.post(`${baseURL}action-page`, body)
        .then(res => {
            console.log(res.data)
            //displayList(res.data)
            userInput.value = ''
        })
        .catch(err => console.log(err))
};


// inputs
const paramsInput = document.getElementById('params-input');
const queryInput = document.getElementById('query-input');

// response section
const responseSection = document.getElementsByClassName('response-area')[0];

// Submit handler
getSubmit.addEventListener('click', () => {
    axios
        .get('http://localhost:4000/api/action-page')
        .then(res => addToView(res.data))
});


// response
function addToView(dataArr) {
    responseSection.innerHTML = null;

    if (dataArr.length === 0) {
        const p = document.createElement('p');
        const t = document.createTextNode("Response came back with no results!");
        p.appendChild(t);

        responseSection.appendChild(p)
    } else {
        dataArr.forEach(item => {
            const p = document.createElement('p');
            const t = document.createTextNode(item)
            p.appendChild(t);

            responseSection.appendChild(p)
        })
    }
};

fortuneButton.addEventListener('click', getFortunes);

categoryBtn.addEventListener("click", getAdviceByHandler);

const getSubmitBtn = document.getElementById(`getSubmit`)
getSubmitBtn.addEventListener('click', getSubmit);*/