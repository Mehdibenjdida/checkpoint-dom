var tab = document.getElementsByClassName("fa-heart")

for(i=0;i<tab.length;i++){
    tab[i].addEventListener("click",change)
}

function change(e){
    (e.target.style.color=="red")?e.target.style.color="black":e.target.style.color="red"
}

function show()
{
    if (document.getElementById("cart").style.display=="block")
    document.getElementById("cart").style.display="none" 
    else
    document.getElementById("cart").style.display="block"
}
  
var addItemId = 0;
function addToCart(item) {
    addItemId += 1;
    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id',addItemId);
    var img = document.createElement('img');
    img.setAttribute('src',item.children[1].currentSrc);
    var cartItems = document.getElementById('CART');
    cartItems.append(selectedItem);
    selectedItem.append(img);
    var poid =document.createElement('div');
    poid.classList.add('poidmouton');
    
    poid.setAttribute('id',addItemId);
    cartItems.append(poid);
    var p = document.createElement('p');
    var text = document.createTextNode("30 Kg Sheep Gharbi");
    p.appendChild(text);
       poid.appendChild(p);
       var buttondelate = document.createElement('div');
       var button =document.createElement('button');
       button.innerText = "Delate ";
       button.setAttribute('onclick','del('+addItemId+')');
       buttondelate.appendChild(button);
       selectedItem.append(buttondelate)
       selectedItem.append(poid)
       cartItems.append(selectedItem);
      
}
function del(item){
    
    document.getElementById(item).remove();
}