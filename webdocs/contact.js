// waits for the button to be clicked on Contact form
document.getElementById('submitMessage').addEventListener('submit', submitMessage);

// this transitions the UI, processes the form input then submits to SendGrid via Azure Function
function submitMessage(e) {
    e.preventDefault();
    document.getElementById('container').classList.add('running'); // run dark overlay
    document.getElementById('AzureFunctionHeartbeat').style.visibility = "visible"; // make svg visible
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    fetch(' YOUR_AZURE_FUNCTION_URL_GOES_HERE  ', { // fix this line!!
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        })
        .then((res) => processResponse(res))
}

// this clears the on-submit dark gray overlay and heartbeat and then processes Azure Function response
function processResponse(response) {
    document.getElementById('container').classList.remove('running'); // remove gray form overlay
    document.getElementById('AzureFunctionHeartbeat').style.visibility = "hidden"; // remove svg
    if (response.status === 200) { // HTTP 200 is "OK"
        output =
            `
        <div class="alert alert-success" role="alert">
          Thanks, ${document.getElementById('name').value}! We'll be in touch soon!
        </div>        
        `;
    } else { // anything else is "not OK"
        output =
            `
        <div class="alert alert-danger" role="alert">
          Oh no! Something went wrong :(
        </div>        
        `;
    }
    document.getElementById('output').innerHTML = output; // write to empty output div on page
    document.getElementById('submitMessage').style.visibility = "hidden"; // hide form for clean UI
}