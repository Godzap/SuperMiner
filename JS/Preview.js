// =====================
//        LOADING
// =====================

var timeLimit = 5000;
window.addEventListener("load", function() {
    try {
        var parts = window.location.pathname.split('/').filter(Boolean);
        var repoBase = parts.length ? '/' + parts[0] + '/' : '/';
        window.location.replace(repoBase + 'HTML/Index.html');
    } catch (e) {
        window.location.href = 'HTML/Index.html';
    }
});

var errorTimer = setTimeout(function() {
	document.getElementById("loading").style.display = "none";
	document.getElementById("error-message").style.display = "block";
}, timeLimit);
