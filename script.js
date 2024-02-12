// This request gets blocked because the content must be served over HTTPS.
// fetch("http://starlinkrouter/").then((response) => {
//     console.log(response);
//     document.getElementById("response").innerHTML = response;
// });

function param(name) {
    return (location.search.split(name + '=')[1] || '').split('&')[0];
}

window.onload = function() {
    const landed = param("landed");
    if (!landed) {
        document.getElementById("output").innerHTML = `Not lnaded, redirecting...`;
        window.location.href = "http://starlinkrouter/landed";
    } else {
        document.getElementById("output").innerHTML = `Landed!`;
    }
}