
const frm = document.getElementById('frm')
frm.onsubmit = e => {
    e.preventDefault();

    const frmDt = new FormData(frm);
    const reqJson = JSON.stringify(Object.fromEntries(frmDt))

    console.log(`Called`);

    (async () => {
        const rawResponse = await fetch('https://6jgtex0i81.execute-api.us-east-1.amazonaws.com/default/createEnquiry', {
            method: 'POST',
            headers: {
//                 'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ mobile: '1234555', ip: '127.0.0.1', name: 'abc', course: 'android', email: 'acc@ss.com' })
        });

        const resJson = await rawResponse.json()
        console.log(resJson)

    })();
}
