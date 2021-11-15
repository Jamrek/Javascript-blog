'use strict';

// var hw = require("taskrunner");

function titleClickHandler(event) {
    event.preventDefault();
    const clickedElement = this;
    const activeArticles = document.querySelectorAll("article");

    for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
    }

    // for (let articleSelector of articleSelector) {
    //     articleSelector.classList.remove('active');
    // }
    clickedElement.classList.add("active");
    console.log('Link was clicked!');
    console.log(event);
    const articleSelector = clickedElement.getAttribute("href")
    console.log(articleSelector);
    const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle);
    targetArticle.classList.add("active");
    console.log(targetArticle);



    /* remove class 'active' from all article links  */

    /* add class 'active' to the clicked link */

    /* remove class 'active' from all articles */

    /* get 'href' attribute from the clicked link */

    /* find the correct article using the selector (value of 'href' attribute) */

    /* add class 'active' to the correct article */


    //     ctiveLink to pojedynczy link, spośród wyszukanych linków z klasą active,
    // .classList to "biblioteka", zawierająca informacje i funkcje dotyczące klas tego elementu,
    // .remove to jedna z tych funkcji, służącej do usunięcia klasy,
    // ( ) – te nawiasy, umieszczone bezpośrednio po nazwie funkcji, mówią nam, że wykonujemy funkcję,
    // 'active' to klasa, którą chcemy usunąć

    // Przydatne funkcje classList, których można użyć analogicznie do remove:
    // add - dodawanie klasy
    // toggle - przełączanie klasy, jeśli element nie ma klasy to ją doda, a jeżeli ma klase to ją usunie
    // contains - sprawdzenie, czy element posiada daną klase
}

const links = document.querySelectorAll('.titles a');

for (let link of links) {
    link.addEventListener('click', titleClickHandler);
}
// var hw = require("taskrunner");