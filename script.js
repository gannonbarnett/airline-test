// This request gets blocked because the content must be served over HTTPS.
// fetch("http://starlinkrouter/").then((response) => {
//     console.log(response);
//     document.getElementById("response").innerHTML = response;
// });

function param(name) {
    return (location.search.split(name + '=')[1] || '').split('&')[0];
}

window.onload = function() {
    const client_id = param("client_id");
    const client_ip = param("client_ip");
    const client_mac = param("client_mac");
    if (!client_id || !client_ip || !client_mac) {
        window.location.href = "http://192.168.1.1/airline";
    } else {
        document.getElementById("output").innerHTML = `IP: ${client_ip} MAC: ${client_mac} ID: ${client_id}`;
    }
}