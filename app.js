const tabs = document.querySelector('.tab');
const tabViews = document.querySelector('.tabview');

function openUnit(name){
    if(name == 'unit1'){
        tabViews[1].setAttribute("hidden", "");
        tabViews[2].setAttribute("hidden", "");
        tabViews[3].setAttribute("hidden", "");
        tabViews[4].setAttribute("hidden", "");
        tabViews[5].setAttribute("hidden", "");
    } else if (name == 'unit2'){
        tabViews[0].setAttribute("hidden", "");
        tabViews[2].setAttribute("hidden", "");
        tabViews[3].setAttribute("hidden", "");
        tabViews[4].setAttribute("hidden", "");
        tabViews[5].setAttribute("hidden", "");
    } else if (name == 'unit3'){
        tabViews[0].setAttribute("hidden", "");
        tabViews[1].setAttribute("hidden", "");
        tabViews[3].setAttribute("hidden", "");
        tabViews[4].setAttribute("hidden", "");
        tabViews[5].setAttribute("hidden", "");
    } else if (name == 'unit4'){
        tabViews[0].setAttribute("hidden", "");
        tabViews[1].setAttribute("hidden", "");
        tabViews[2].setAttribute("hidden", "");
        tabViews[4].setAttribute("hidden", "");
        tabViews[5].setAttribute("hidden", "");
    } else if (name == 'unit5'){
        tabViews[0].setAttribute("hidden", "");
        tabViews[1].setAttribute("hidden", "");
        tabViews[2].setAttribute("hidden", "");
        tabViews[3].setAttribute("hidden", "");
        tabViews[5].setAttribute("hidden", "");
    } else if (name == 'cummulative'){
        tabViews[0].setAttribute("hidden", "");
        tabViews[1].setAttribute("hidden", "");
        tabViews[2].setAttribute("hidden", "");
        tabViews[3].setAttribute("hidden", "");
        tabViews[4].setAttribute("hidden", "");
    }
}