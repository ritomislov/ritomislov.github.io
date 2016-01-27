function loadData() {
    
    var formData = '<center><form><input type ="text" placeholder="Name"><br><input type ="text" placeholder="Title"><br><input type ="text" placeholder="Message"><br><input type ="email" placeholder="Email"><br><input type ="phone" placeholder="Phone"><br><input type="button" value="Submit"></form></center>';
    
    //  Summary
    var elem = document.getElementById('summaryLoading');
    elem.parentNode.removeChild(elem);
    document.getElementById('summary').innerHTML = '';
    
    //  Feedback
    var elem = document.getElementById('feedbackLoading');
    elem.parentNode.removeChild(elem);
    document.getElementById('feedback').innerHTML = formData;
}
function toggleMenu() {
    console.log('Hi');
}
window.onload = loadData;