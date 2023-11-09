console.log('Hello World');

// This request has been blocked; the content must be served over HTTPS.
// fetch("http://starlinkrouter/").then((response) => {
//     console.log(response);
//     document.getElementById("response").innerHTML = response;
// });

function param(name) {
    return (location.search.split(name + '=')[1] || '').split('&')[0];
}

function set_output(value) {
    document.getElementById("output").innerHTML = value;
}

window.onload = function() {
    const client_id = param("client_id");
    if (!client_id) {
        set_output("<i>Missing client_id</i>");
        window.location.href = "http://starlinkrouter/";
    } else {
        set_output(client_id);
    }
}