var settingMenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");


function settingMenuToggle(){
    settingMenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-thems");

    // for the dark thems======================

    if(localStorage.getItem("thems") == "light"){
        localStorage.setItem("thems", "dark");
    }else{
        localStorage.setItem("thems", "light");
    }
}


if(localStorage.getItem("thems") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-thems");

}else if(localStorage.getItem("thems") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-thems");
}else{
    localStorage.setItem("thems", "light");
}
