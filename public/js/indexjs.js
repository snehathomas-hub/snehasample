function check(){
    var uname = document.getElementById("uname").value;
    var pwd = document.getElementById("pwd").value;

    if (uname == "admin" && pwd == 12345){
        // window.location.href = 'main.html';
        alert("Login successfully");
        // return false;
}
    else{
    // window.location.href = 'index.html';
    alert("Login failed");
    // return false;
    }
}