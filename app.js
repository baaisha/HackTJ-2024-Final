const tabs = document.querySelector('.tab');
const tabViews = document.querySelector('.tabview');

function openUnit(name){
    if(name == 'unit1'){
        tabViews[0].setAttribute("", "");
        tabViews[1].setAttribute("hidden", "");
        tabViews[2].setAttribute("hidden", "");
        tabViews[3].setAttribute("hidden", "");
        tabViews[4].setAttribute("hidden", "");
        tabViews[5].setAttribute("hidden", "");
    } else if (name == 'unit2'){
        tabViews[1].setAttribute("", "");
        tabViews[0].setAttribute("hidden", "");
        tabViews[2].setAttribute("hidden", "");
        tabViews[3].setAttribute("hidden", "");
        tabViews[4].setAttribute("hidden", "");
        tabViews[5].setAttribute("hidden", "");
    } else if (name == 'unit3'){
        tabViews[2].setAttribute("", "");
        tabViews[0].setAttribute("hidden", "");
        tabViews[1].setAttribute("hidden", "");
        tabViews[3].setAttribute("hidden", "");
        tabViews[4].setAttribute("hidden", "");
        tabViews[5].setAttribute("hidden", "");
    } else if (name == 'unit4'){
        tabViews[3].setAttribute("", "");
        tabViews[0].setAttribute("hidden", "");
        tabViews[1].setAttribute("hidden", "");
        tabViews[2].setAttribute("hidden", "");
        tabViews[4].setAttribute("hidden", "");
        tabViews[5].setAttribute("hidden", "");
    } else if (name == 'unit5'){
        tabViews[4].setAttribute("", "");
        tabViews[0].setAttribute("hidden", "");
        tabViews[1].setAttribute("hidden", "");
        tabViews[2].setAttribute("hidden", "");
        tabViews[3].setAttribute("hidden", "");
        tabViews[5].setAttribute("hidden", "");
    } else if (name == 'cummulative'){
        tabViews[5].setAttribute("", "");
        tabViews[0].setAttribute("hidden", "");
        tabViews[1].setAttribute("hidden", "");
        tabViews[2].setAttribute("hidden", "");
        tabViews[3].setAttribute("hidden", "");
        tabViews[4].setAttribute("hidden", "");
    }
}