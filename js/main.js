$(document).ready(function () {
    // redirect
    if (getParameterByName("ref")) {
        location = "http://facebook.com/IonicaBizauPage";
        return;
    }

    $(".loading-overlay").fadeOut();
});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
