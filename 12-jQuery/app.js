"use strict";

// Cibler un élément HTML
// --

// En vanilla JS
const _vanilla = document.getElementById('vanilla');
console.log(_vanilla);

// En jQuery
const _jQuery = $('#jQuery');
console.log(_jQuery);




// Créer un élément HTML
// --

// En vanilla JS
let myVanillaDiv = document.createElement('DIV');

// En jQuery
let myJQueryDiv = $('<div>');




// Injecter du contenu dans un élément HTML
// --

// En vanilla JS
myVanillaDiv.innerHTML = "Ceci est une chaine pour Vanilla JS";

// En jQuery
myJQueryDiv.html("Ceci est une chaine pour jQuery");




// Modifier le CSS d'un élément HTML
// --

// En vanilla JS
myVanillaDiv.style.backgroundColor = "#FF0000";
myVanillaDiv.style.color = "#FFFFFF";
myVanillaDiv.style.padding = "10px";

// En jQuery
// myJQueryDiv.css("background-color", "#FF0000");
// myJQueryDiv.css("color", "#FFFFFF");
// myJQueryDiv.css("padding", "10px");

// myJQueryDiv
//     .css("background-color", "#FF0000")
//     .css("color", "#FFFFFF")
//     .css("padding", "10px")
// ;

myJQueryDiv.css({
    backgroundColor: "#FF0000",
    color: "#FFFFFF",
    padding: "10px"
});



// Injecter un élément dans le DOM
// --

// En vanilla JS
_vanilla.append(myVanillaDiv);

// En jQuery
_jQuery.append(myJQueryDiv);



// Les evenements
// --

// En vanilla JS
const btn_vanilla = document.getElementById('vanilla-click');

btn_vanilla.addEventListener('click', event => {
    console.log("Je suis un évenement déclenché en Vanilla JS");
});

// En jQuery
const btn_jquery = $('#jquery-click');

btn_jquery.on('click', event => {
    console.log("Je suis un évenement déclenché en jQuery");
});



// Récupérer les propriétés d'un éléments
// Ajouter une valeur sur un attribut
// --

// En vanilla JS
const btn_vanilla_prop = document.getElementById('vanilla-properties');

btn_vanilla_prop.addEventListener('click', event => {

    // Recupération (GET)
    // --

    // ID de #vanilla
    console.log( _vanilla.id );

    // Liste des classes de #vanilla
    console.log( _vanilla.classList );

    // Récup la hauteur en pixel de #vanilla
    console.log( _vanilla.clientHeight );
    // Ne sais pas recup le padding facilement

    // Ajouter une valeur (SET)
    // --
    
    // Ajouter une class
    _vanilla.classList.add("my-new-vanilla-class");

    // Modifier la hauteur de #vanilla
    _vanilla.style.height = "120px";


});

// En jQuery
const btn_jquery_prop = $('#jquery-properties');

btn_jquery_prop.on('click', event => {

    // Recupération (GET)
    // --

    // ID de #jQuery
    console.log( _jQuery.attr('id') );

    // Liste des classes de #vanilla
    console.log( _jQuery.attr('class') );

    // Récup la hauteur en pixel de #vanilla
    console.log( _jQuery.height() );
    console.log( _jQuery.css('padding') );

    // console.log( myJQueryDiv.attr('style', "background-color: green") );

    // Ajouter une valeur (SET)
    // --

    // Ajouter une class
    _jQuery.addClass("my-new-jquery-class");

    _jQuery.height("120px");
    // _jQuery.css("height", "120px");

});



// Syntaxe de jQuery
// --

// methode getter / setter

// GET / Recupèrer une valeur : _jQuery.height();
// SET / Affecter une valeur  : _jQuery.height("120px");





// -----------------------------------------------------------------------------
// ANIMATION
// -----------------------------------------------------------------------------


// Lorsque le "document" est chargé, on execute une fonction
$(document).ready(function() {
    
    // Recupération de tous les éléments aynat la classe ".anim-item"
    // $animItems est un tableau
    let $animItems = $('.anim-item');

    // On boucle sur le tableau $animItems
    $animItems.each((index, item) => {
        
        // Pour chaque noeux HTML ayant la classe .anim-item "$(item)"
        // On recherche le noeux HTML précédent (le frére, pas le parent)
        // Lorsque je clic sur le frére...
        $(item).prev().click(event => {

            // On execute une animation slideDown/slideUp sur $(item)
            $(item).slideToggle();

        });

    });
});
	




// -----------------------------------------------------------------------------
// AJAX
// -----------------------------------------------------------------------------


    // URL cible de la requete
    // const url = "https://swapi.dev/api/people/1/";
    const url = "data.html";

    // Boutton de deéclenchement de l'appel AJAX
    const btn_swapi = $('#swapi');

    // Noeux HTML cible de l'affichage de la donné
    let $data = $('#data');

    btn_swapi.click(function(){

        // Requete Asynchrone
        $.ajax(url, {
            method: "GET",
            success: response => {

                $data.html( response );
                // console.log( response.name );
            }
        });

    });
