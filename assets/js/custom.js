//Getting the menu
var menu = document.getElementById('menu');

//getting the 2 menu buttons (desktop - mobile)
menuBtns = document.getElementsByClassName('menu-btn');

//getting the 2 close buttons (desktop - mobile)
closeBtns = document.getElementsByClassName('close-btn');

//Assigning scroll var
var previousScrollY = 0;

// For each button we assign the click listener
for(var i = 0; i < menuBtns.length; i++) {
    menuBtns[i].addEventListener('click', function(e){

        //Getting scroll from top
        previousScrollY = (window.pageYOffset || document.documentElement.scrollTop || document.documentElement.clientTop)

        //Freezing scroll on page
        document.body.classList.add('freeze')

        document.body.style.marginTop = -previousScrollY + 'px'

        //adding the open class
        menu.classList.add("open");

    })
}

// For each button we assign the click listener
for(var s = 0; s < closeBtns.length; s++) {
    closeBtns[s].addEventListener('click', function(e){
        //scroll on page
        document.body.classList.remove('freeze')

        document.body.style.marginTop = 0

        window.scrollTo({
            top: previousScrollY,
            behavior: 'instant',
        });


        //Removing the open class
        menu.classList.remove("open");
    })
}