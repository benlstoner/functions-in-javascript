var wrapperEle = document.body.querySelector(".wrapper");

var dragonDamage = 0;
wrapperEle.innerHTML="Dragon Damage: " + dragonDamage;

// The meat and potatoes
function attackClass (attack, damage){
    if(attack==="fire"){
       damage=damage-1;
       dragonDamage=damage+dragonDamage;
       wrapperEle.innerHTML="Dragon Damage: " + dragonDamage;
    }
    if(attack==="ice"){
        damage=damage+1;
        dragonDamage=damage+dragonDamage;
        wrapperEle.innerHTML="Dragon Damage: " + dragonDamage;
    }
    if(attack==="poison"){
        dragonDamage=damage+dragonDamage;
        wrapperEle.innerHTML="Dragon Damage: " + dragonDamage;
    }

    if(dragonDamage >= 10){
        var ele = document.createElement("div");
        ele.innerHTML="You win!";
        wrapperEle.innerHTML="Dragon Damage:" + dragonDamage;
        wrapperEle.appendChild(ele);
    }
}

// Button assignment
document.body.querySelector(".fire").addEventListener("click", function (){
    var attack = "fire";
    var damage = dragonDamage + 3;
    if(dragonDamage >= 10){
        wrapperEle.innerHTML="";
        var ele = document.createElement("div");
        ele.innerHTML="You win!";
    }
    attackClass(attack,damage)
})

document.body.querySelector(".ice").addEventListener("click", function (){
    var attack = "ice";
    var damage = dragonDamage + 1;
    if(dragonDamage >= 10){
        wrapperEle.innerHTML="";
        var ele = document.createElement("div");
        ele.innerHTML="You win!";
    }
    attackClass(attack,damage)
})

document.body.querySelector(".poison").addEventListener("click", function (){
    var attack = "poison";
    var damage = dragonDamage + 4;
    if(dragonDamage >= 10){
        wrapperEle.innerHTML="";
        var ele = document.createElement("div");
        ele.innerHTML="You win!";
    }
    attackClass(attack,damage)
})





