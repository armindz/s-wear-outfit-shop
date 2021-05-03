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

    this.get_isOnSale = function() {
        return this.isOnSale;
    };
    this.setOnSale = function() {

        this.isOnSale = true;
    };

    this.setNotOnSale = function() {
        this.isOnSale = false;
    };
};

const FEMALE_GENDER = "FEMALE";
const MALE_GENDER = "MALE";
let listOfArticles = [];
let cartArticles = [];
createArticle(0, "POLO MAJICA", "MAJICA", "L", "MALE", 2, 1, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ", "RED", true);
createArticle(1, "KRATKI RUKAV MAJICA", "MAJICA", "L", "FEMALE", 2, 1, "Lorem ipsum dolor, sit amet conseentore consequatur m suscipit?", "GREY", true);
createArticle(2, "KOSULJA", "KOSULJA", "XL", "MALE", 5, 1, "Lorem ipsum dolor, sit amet consectetur adipisicing elit.debiti suscipit?", "GREEN", false);
createArticle(3, "HALJINA", "HALJINA", "M", "FEMALE", 3, 1, "Lorem ipsum dolor, sit amet consectetur adipisidem suscipit?", "YELLOW", true);
createArticle(4, "KOSULJA", "KOSULJA", "XL", "MALE", 5, 2, "Lorem ipsum dolor, sit amet consectetur adipisicingm suscipit?", "GREEN", true);
createArticle(5, "JAKNA", "JAKNA", "XL", "MALE", 5, 3, "Lorem ipsum dolor, sit amet", "GREEN", false);
createArticle(6, "KOSULJA1", "KOSULJA", "M", "MALE", 5, 3, "Lorem ipsum dolor, sit amet consectetur adipisicing", "GREEN", true);
createArticle(7, "KOSULJA2", "KOSULJA", "XL", "MALE", 5, 3, "Lorem ipsum dolor, sit amet consectetur ", "GREEN", true);
createArticle(8, "KOSULJA3", "KOSULJA", "L", "MALE", 5, 2, "Lorem ipsum dolor, sit amet consectetur", "GREEN", true);


console.log(listOfArticles);



function createArticle(id, name, type, size, gender, price, quantity, text, color, isOnSale) {

    let article = new Article(id, name, type, size, gender, price, quantity, text, color, isOnSale);

    listOfArticles.push(article);
}


function getListOfArticles() {
    return listOfArticles;
}

function insertArticlesIntoSale() {

    let articlesOnSaleList = getArticlesListOnSale();
    const CARDS_PER_ROW = 4;
    const ROWS = articlesOnSaleList.length / CARDS_PER_ROW;
    // variables below are declared outside to avoid interrupting values at new loop
    let i = 0;
    let j = 0;


    for (j; j < ROWS; j++) {

        // prepare card printing by creating new zigzag row
        let div = document.createElement("DIV");
        div.setAttribute("class", "container");
        document.getElementById("sale-container").appendChild(div);
        let ul = document.createElement("UL");
        ul.setAttribute("class", "zigzag-row");
        div.appendChild(ul);

        for (i; i < articlesOnSaleList.length; i++) {


            if (i % CARDS_PER_ROW != 0) { // insert card into existing row if "i" is not equal to card per row

                // insert card into row
                ul.innerHTML += "<li id=" + articlesOnSaleList[i].get_id() + ">" +
                    "<img onclick='viewArticle(" + articlesOnSaleList[i].get_id() + ")' src='img/res/men1.jpg'>" +
                    "<p id='cardHeader'>" + articlesOnSaleList[i].get_name() + "</p>" +
                    "<p id='cardPrice'>" + articlesOnSaleList[i].get_price() + "€</p>" +
                    "</li>";
            } else { // create new row if "i" is equal to card per row

                // prepare card printing by creating new zigzag row
                let newDiv = document.createElement("DIV");
                newDiv.setAttribute("class", "container");
                document.getElementById("sale-container").appendChild(newDiv);
                let newUl = document.createElement("UL");
                newUl.setAttribute("class", "zigzag-row");
                newDiv.appendChild(newUl);

                // insert card into row
                newUl.innerHTML += "<li id=" + articlesOnSaleList[i].get_id() + ">" +
                    "<img onclick='viewArticle(" + articlesOnSaleList[i].get_id() + ")' src='img/res/men1.jpg'>" +
                    "<p id='cardHeader'>" + articlesOnSaleList[i].get_name() + "</p>" +
                    "<p id='cardPrice'>" + articlesOnSaleList[i].get_price() + "€</p>" +
                    "</li>";

                // declare new ul and div as default one to be executed on next iteration
                ul = newUl;
                div = newDiv;
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
                    "<img id='article-card' name=" +
                    genderList[i].get_id() +
                    " onclick='viewArticle(" + genderList[i].get_id() + ")'src='img/res/men1.jpg'>" +
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
                    "<img id='article-card' name=" +
                    genderList[i].get_id() +
                    " onclick='viewArticle(" + genderList[i].get_id() + ")'src='img/res/men1.jpg'>" +
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
                    "<img onclick='viewArticle(" + genderList[i].get_id() + ")'src='img/res/men1.jpg'>" +
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
                    "<img onclick='viewArticle(" + genderList[i].get_id() + ")'src='img/res/men1.jpg'>" +
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

function getArticlesListOnSale() {
    let onSaleArticles = [];
    // iterate over list of articles in order to collect only specific gender
    for (let i = 0; i < listOfArticles.length; i++) {

        if (listOfArticles[i].get_isOnSale()) {
            onSaleArticles.push(listOfArticles[i]);
        }
    }
    return onSaleArticles;
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

function getArticleById(id) {
    for (let i = 0; i < listOfArticles.length; i++) {
        if (listOfArticles[i].get_id() === id) {
            return listOfArticles[i];
        }
    }

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

function viewArticle(id) {
    let article = getArticleById(id);
    localStorage.setItem("article-id", id);

    //   document.getElementById("article-title").innerText = "BLA BLA";
    window.location.href = "./article.html";


}

function handleCartList(articleId) {

    if (cartArticles.length != 0) {
        for (let i = 0; i < cartArticles.length; i++) {

            if (cartArticles[i].get_id() == articleId) {

                removeFromCart(articleId);
                document.getElementById("article-submit-btn").innerHTML = '<img src="img/icon/cart1.png "><span>Add to cart</span>';

            } else {
                addToCart(articleId);
                document.getElementById("article-submit-btn").innerHTML = "REMOVE";
                console.log(cartArticles[i].get_id());
            }
        }

    } else {
        addToCart(articleId);
        document.getElementById("article-submit-btn").innerHTML = "REMOVE";
    }
}

function addToCart(articleId) {
    let article = getArticleById(articleId);
    cartArticles.push(article);
}

function removeFromCart(articleId) {

    for (let i = 0; i < cartArticles.length; i++) {
        if (cartArticles[i].get_id() == articleId) {
            cartArticles.splice(i, 1);
        }
    }
}

function articlePreview(articleId) {

    let article = getArticleById(parseInt(articleId));
    let infoContainer = document.getElementById("info-container");

    // article title
    let title = document.createElement("H2");
    title.setAttribute("id", "article-title");
    title.innerHTML = article.get_name();
    infoContainer.appendChild(title);

    // article price
    let price = document.createElement("H3");
    price.setAttribute("id", "article-price");
    price.innerHTML = article.get_price() + "€";
    infoContainer.appendChild(price);

    // article details
    let details = document.createElement("p");
    details.setAttribute("id", "article-details");
    details.innerHTML = article.get_text();
    infoContainer.appendChild(details);

    // article cart form
    let cartForm = document.createElement("FORM");
    cartForm.setAttribute("class", "article-cart-form");
    cartForm.setAttribute("id", "cart-form");
    infoContainer.appendChild(cartForm);



    // quantity label
    let quantityLabel = document.createElement("label");
    quantityLabel.setAttribute("id", "article-amount-label");
    quantityLabel.innerHTML = "Quantity";
    document.getElementById("cart-form").appendChild(quantityLabel);

    // article quantity in cart form
    let quantity = document.createElement("select");
    quantity.setAttribute("id", "article-amount");
    for (let i = 1; i < article.get_quantity() + 1; i++) {
        quantity.innerHTML += "<option value='" + i + "'>" + i + "</option>";
    }

    document.getElementById("cart-form").appendChild(quantity);

    // article add to cart button in cart form
    let submit = document.createElement("BUTTON");
    submit.setAttribute("id", "article-submit-btn");
    submit.setAttribute("type", "button");
    submit.setAttribute("onclick", "handleCartList(" + article.get_id() + ")")
    submit.innerHTML = '<img src="img/icon/cart1.png "><span>Add to cart</span>';
    document.getElementById("cart-form").appendChild(submit);

    // div containing id info
    let id_info = document.createElement("DIV");
    id_info.setAttribute("class", "article-id-info");
    id_info.setAttribute("id", "id-info");
    infoContainer.appendChild(id_info);

    // label for id
    let idLabel = document.createElement("label");
    idLabel.innerHTML = "ID:";
    document.getElementById("id-info").appendChild(idLabel);

    // article id
    let id = document.createElement("P");
    id.setAttribute("id", "article-id");
    id.innerHTML = article.get_id();
    document.getElementById("id-info").appendChild(id);

}