menu_list_array = [
    "Veg Margherita Pizza",
    "Cheese Margherita",
    "Large Pizza", 
    "Chicken Pizza", 
    "Juice", 
    "Cake"
                    
];

function getmenu(){
var htmldata;
htmldata = "<ol class = 'menulist'>";
menu_list_array.push(document.getElementById("add_item").value);
menu_list_array.sort();
htmldata=htmldata+'<ol class = "menulist">'
for (var i = 0; i < menu_list_array.length; i++) {
    htmldata = htmldata + '<li>'+ menu_list_array[i] + '</li>'
}
    htmldata=htmldata+'</ol>'
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
menu_list_array.sort();
htmldata=htmldata+'<section class = "cards">'
for (var i = 0; i < menu_list_array.length; i++) {
    htmldata = htmldata + '<div class = "card">'+'<img src = https://i.pinimg.com/474x/b0/b8/16/b0b816ef200aad8d7426f80f10fa765c.jpg>'
    + menu_list_array[i] + '</div>'
}
    htmldata=htmldata+'</section>'
    document.getElementById("display_addedmenu").innerHTML = htmldata;


}

function add_top(){

    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    add_item();
}