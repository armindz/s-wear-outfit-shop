let Article = function(id, name, type, size, gender, price, quantity, text, color, isOnSale) {


    this.id = id;
    this.name = name;
    this.type = type;
    this.size = size;
    this.gender = gender;
    this.price = price;
    this.quantity = quantity;
    this.text = text;
    this.color = color;
    this.isOnSale = isOnSale;

    this.get_id = function() {
        return this.id;
    };

    this.get_name = function() {
        return this.name;
    };

    this.get_type = function() {
        return this.type;
    };

    this.get_size = function() {
        return this.size;
    };

    this.get_gender = function() {
        return this.gender;
    };

    this.get_price = function() {
        return this.price;

    };

    this.get_quantity = function() {
        return this.quantity;
    };

    this.get_text = function() {
        return this.text;
    };

    this.get_color = function() {
        return this.color;
    };

    this.isOnSale = function() {
        return this.isOnSale;
    }


};
const FEMALE_GENDER = "FEMALE";
const MALE_GENDER = "MALE";
let listOfArticles = [];
createArticle(0, "POLO MAJICA", "MAJICA", "L", "MALE", 2, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur nesciunt iure nam. Quas cupiditate quos error quam, inventore consequatur debitis cum amet molestias in, odit et rerum corrupti quidem suscipit?", "RED", 0);
createArticle(1, "KRATKI RUKAV MAJICA", "MAJICA", "L", "FEMALE", 2, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur nesciunt iure nam. Quas cupiditate quos error quam, inventore consequatur debitis cum amet molestias in, odit et rerum corrupti quidem suscipit?", "GREY", 1);
createArticle(2, "KOSULJA", "KOSULJA", "XL", "MALE", 5, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur nesciunt iure nam. Quas cupiditate quos error quam, inventore consequatur debitis cum amet molestias in, odit et rerum corrupti quidem suscipit?", "GREEN", 1);
createArticle(3, "HALJINA", "HALJINA", "M", "FEMALE", 3, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur nesciunt iure nam. Quas cupiditate quos error quam, inventore consequatur debitis cum amet molestias in, odit et rerum corrupti quidem suscipit?", "YELLOW", 1);
createArticle(4, "KOSULJA", "KOSULJA", "XL", "MALE", 5, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur nesciunt iure nam. Quas cupiditate quos error quam, inventore consequatur debitis cum amet molestias in, odit et rerum corrupti quidem suscipit?", "GREEN", 1);
createArticle(5, "JAKNA", "JAKNA", "XL", "MALE", 5, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur nesciunt iure nam. Quas cupiditate quos error quam, inventore consequatur debitis cum amet molestias in, odit et rerum corrupti quidem suscipit?", "GREEN", 0);
createArticle(6, "KOSULJA1", "KOSULJA", "M", "MALE", 5, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur nesciunt iure nam. Quas cupiditate quos error quam, inventore consequatur debitis cum amet molestias in, odit et rerum corrupti quidem suscipit?", "GREEN", 1);
createArticle(7, "KOSULJA2", "KOSULJA", "XL", "MALE", 5, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur nesciunt iure nam. Quas cupiditate quos error quam, inventore consequatur debitis cum amet molestias in, odit et rerum corrupti quidem suscipit?", "GREEN", 0);
createArticle(8, "KOSULJA3", "KOSULJA", "L", "MALE", 5, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur nesciunt iure nam. Quas cupiditate quos error quam, inventore consequatur debitis cum amet molestias in, odit et rerum corrupti quidem suscipit?", "GREEN", 0);


console.log(listOfArticles);



function createArticle(id, name, type, gender, price, quantity, text, color) {

    let article = new Article(id, name, type, gender, price, quantity, text, color);
    listOfArticles.push(article);
}


function getListOfArticles() {
    return listOfArticles;
}

function insertArticlesIntoSale() {

    const CARDS_PER_ROW = 4;
    const ROWS = genderList.length / CARDS_PER_ROW;
    // variables below are declared outside to avoid interrupting values at new loop
    let i = 0;
    let j = 0;


    for (j; j < ROWS; j++) {

        // prepare card printing by creating new zigzag row
        let div = document.createElement("DIV");
        div.setAttribute("class", "container");
        document.getElementById("women-container").appendChild(div);
        let ul = document.createElement("UL");
        ul.setAttribute("class", "zigzag-row");
        div.appendChild(ul);

        for (i; i < genderList.length; i++) {


            if (i % CARDS_PER_ROW != 0) { // insert card into existing row if "i" is not equal to card per row

                // insert card into row
                ul.innerHTML += "<li>" +
                    "<img src='img/res/men1.jpg'>" +
                    "<p id='cardHeader'>" + genderList[i].get_name() + "</p>" +
                    "<p id='cardPrice'>" + genderList[i].get_price() + "€</p>" +
                    "</li>";
            } else { // create new row if "i" is equal to card per row

                // prepare card printing by creating new zigzag row
                let newDiv = document.createElement("DIV");
                newDiv.setAttribute("class", "container");
                document.getElementById("women-container").appendChild(newDiv);
                let newUl = document.createElement("UL");
                newUl.setAttribute("class", "zigzag-row");
                newDiv.appendChild(newUl);

                // insert card into row
                newUl.innerHTML += "<li>" +
                    "<img src='img/res/men1.jpg'>" +
                    "<p id='cardHeader'>" + genderList[i].get_name() + "</p>" +
                    "<p id='cardPrice'>" + genderList[i].get_price() + "€</p>" +
                    "</li>";

                // declare new ul and div as default one to be executed on next iteration
                ul = newUl;
                div = newDiv;
            }
        }
    }

}

}

function insertArticlesIntoWomen() {

    let genderList = getArticlesListByGender(FEMALE_GENDER);
    const CARDS_PER_ROW = 4;
    const ROWS = genderList.length / CARDS_PER_ROW;
    // variables below are declared outside to avoid interrupting values at new loop
    let i = 0;
    let j = 0;


    for (j; j < ROWS; j++) {

        // prepare card printing by creating new zigzag row
        let div = document.createElement("DIV");
        div.setAttribute("class", "container");
        document.getElementById("women-container").appendChild(div);
        let ul = document.createElement("UL");
        ul.setAttribute("class", "zigzag-row");
        div.appendChild(ul);

        for (i; i < genderList.length; i++) {


            if (i % CARDS_PER_ROW != 0) { // insert card into existing row if "i" is not equal to card per row

                // insert card into row
                ul.innerHTML += "<li>" +
                    "<img src='img/res/men1.jpg'>" +
                    "<p id='cardHeader'>" + genderList[i].get_name() + "</p>" +
                    "<p id='cardPrice'>" + genderList[i].get_price() + "€</p>" +
                    "</li>";
            } else { // create new row if "i" is equal to card per row

                // prepare card printing by creating new zigzag row
                let newDiv = document.createElement("DIV");
                newDiv.setAttribute("class", "container");
                document.getElementById("women-container").appendChild(newDiv);
                let newUl = document.createElement("UL");
                newUl.setAttribute("class", "zigzag-row");
                newDiv.appendChild(newUl);

                // insert card into row
                newUl.innerHTML += "<li>" +
                    "<img src='img/res/men1.jpg'>" +
                    "<p id='cardHeader'>" + genderList[i].get_name() + "</p>" +
                    "<p id='cardPrice'>" + genderList[i].get_price() + "€</p>" +
                    "</li>";

                // declare new ul and div as default one to be executed on next iteration
                ul = newUl;
                div = newDiv;
            }
        }
    }

}



function insertArticlesIntoMen() {


    let genderList = getArticlesListByGender(MALE_GENDER);
    const CARDS_PER_ROW = 4;
    const ROWS = genderList.length / CARDS_PER_ROW;
    // variables below are declared outside to avoid interrupting values at new loop
    let i = 0;
    let j = 0;


    for (j; j < ROWS; j++) {

        // prepare card printing by creating new zigzag row
        let div = document.createElement("DIV");
        div.setAttribute("class", "container");
        document.getElementById("men-container").appendChild(div);
        let ul = document.createElement("UL");
        ul.setAttribute("class", "zigzag-row");
        div.appendChild(ul);

        for (i; i < genderList.length; i++) {


            if (i % CARDS_PER_ROW != 0) { // insert card into existing row if "i" is not equal to card per row

                // insert card into row
                ul.innerHTML += "<li>" +
                    "<img src='img/res/men1.jpg'>" +
                    "<p id='cardHeader'>" + genderList[i].get_name() + "</p>" +
                    "<p id='cardPrice'>" + genderList[i].get_price() + "€</p>" +
                    "</li>";
            } else { // create new row if "i" is equal to card per row

                // prepare card printing by creating new zigzag row
                let newDiv = document.createElement("DIV");
                newDiv.setAttribute("class", "container");
                document.getElementById("men-container").appendChild(newDiv);
                let newUl = document.createElement("UL");
                newUl.setAttribute("class", "zigzag-row");
                newDiv.appendChild(newUl);

                // insert card into row
                newUl.innerHTML += "<li>" +
                    "<img src='img/res/men1.jpg'>" +
                    "<p id='cardHeader'>" + genderList[i].get_name() + "</p>" +
                    "<p id='cardPrice'>" + genderList[i].get_price() + "€</p>" +
                    "</li>";

                // declare new ul and div as default one to be executed on next iteration
                ul = newUl;
                div = newDiv;
            }
        }
    }

}

function getArticlesListByGender(gender) {

    let genderList = [];
    // iterate over list of articles in order to collect only specific gender
    for (let i = 0; i < listOfArticles.length; i++) {
        if (listOfArticles[i].get_gender() === gender) {
            genderList.push(listOfArticles[i]);
        }
    }
    return genderList;
}

function showInformationSection() {

    document.getElementById("info-section").style.display = "flex";
    document.getElementById("payment-section").style.display = "none";
    document.getElementById("confirm-section").style.display = "none";

    document.getElementById("section-info-btn").style.color = "#333";
    document.getElementById("section-payment-btn").style.color = "rgb(180, 179, 179)";
    document.getElementById("section-confirm-btn").style.color = "rgb(180, 179, 179)";
}

function showPaymentSection() {
    document.getElementById("payment-section").style.display = "initial";
    document.getElementById("info-section").style.display = "none";
    document.getElementById("confirm-section").style.display = "none";
    document.getElementById("section-payment-btn").style.color = "#333";
    document.getElementById("section-confirm-btn").style.color = "rgb(180, 179, 179)";
    document.getElementById("section-info-btn").style.color = "rgb(180, 179, 179)";
}

function showConfirmSection() {
    document.getElementById("confirm-section").style.display = "flex";
    document.getElementById("info-section").style.display = "none";
    document.getElementById("payment-section").style.display = "none";

    document.getElementById("section-confirm-btn").style.color = "#333";
    document.getElementById("section-payment-btn").style.color = "rgb(180, 179, 179)";
    document.getElementById("section-info-btn").style.color = "rgb(180, 179, 179)";

}

function showOrderConfirmationMsg() {
    document.getElementById("order-confirmation-message").style.display = "initial";
    document.getElementById("confirm-section").style.display = "none";
    document.getElementById("info-section").style.display = "none";
    document.getElementById("payment-section").style.display = "none";

    document.getElementById("section-confirm-btn").style.color = "#333";
    document.getElementById("section-payment-btn").style.color = "rgb(180, 179, 179)";
    document.getElementById("section-info-btn").style.color = "rgb(180, 179, 179)";

}