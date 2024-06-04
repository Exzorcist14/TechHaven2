function addToCart(button) {
    const cartItemsElement = document.getElementById('cart-items');
    const productName = button.closest('.product').querySelector('.productName').textContent;
    const productCost = button.closest('.product').querySelector('.productCost').textContent;
    const existingCartItem = findCartItemByName(productName);

    if (existingCartItem) {
        increaseQuantity(existingCartItem);
    } else {
        const cartItemElement = document.createElement('li');
        cartItemElement.classList.add('cart-item');

        const nameField = document.createElement('h2');
        nameField.classList.add('productName');
        nameField.innerHTML = `${productName}`;

        const productImage = document.createElement('img');
        productImage.src = `/resources/images/catalog/${productName}.png`;
        productImage.width = 150;
        productImage.height = 150;

        const quantityControls = document.createElement('div');
        quantityControls.classList.add('quantity-controls');

        const decreaseButton = document.createElement('button');
        decreaseButton.classList.add('minus');
        decreaseButton.innerHTML = '<img src="resources/images/cart/minus.png" width="25px" height="25px">';
        decreaseButton.onclick = function() { decreaseQuantity(cartItemElement); };

        const quantitySpan = document.createElement('span');
        quantitySpan.textContent = '1';

        const increaseButton = document.createElement('button');
        increaseButton.classList.add('plus');
        increaseButton.innerHTML = '<img src="resources/images/cart/plus.png" width="25px" height="25px">';
        increaseButton.onclick = function() { increaseQuantity(cartItemElement); };

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.innerHTML = '<img src="resources/images/cart/delete.png" width="30px" height="30px">';
        deleteButton.onclick = function() { deleteItem(cartItemElement); };

        quantityControls.appendChild(decreaseButton);
        quantityControls.appendChild(quantitySpan);
        quantityControls.appendChild(increaseButton);

        cartItemElement.appendChild(nameField);
        cartItemElement.appendChild(productImage);
        cartItemElement.appendChild(quantityControls);
        cartItemElement.appendChild(deleteButton);

        cartItemsElement.appendChild(cartItemElement);
    }

    saveCartToCookies();
}

function findCartItemByName(productName) {
    const cartItemsElements = document.querySelectorAll('.cart-item');

    for (const cartItemElement of cartItemsElements) {
        const name = cartItemElement.innerHTML.trim();
        console.log(name);
        console.log(productName);

        if (name.includes(productName)) {
            return cartItemElement;
        }
    }

    return null;
}

function increaseQuantity(cartItemElement) {
    const quantitySpan = cartItemElement.querySelector('.quantity-controls span');
    let quantity = parseInt(quantitySpan.textContent);

    quantity++;
    quantitySpan.textContent = quantity;
    saveCartToCookies();
}

function decreaseQuantity(cartItemElement) {
    const quantitySpan = cartItemElement.querySelector('.quantity-controls span');
    let quantity = parseInt(quantitySpan.textContent);

    if (quantity > 1) {
        quantity--;
        quantitySpan.textContent = quantity;
    } else {
        cartItemElement.remove();
    }

    saveCartToCookies();
}

function deleteItem(cartItemElement) {
    const quantitySpan = cartItemElement.querySelector('.quantity-controls span');
    let quantity = parseInt(quantitySpan.textContent);

    while (quantity > 1) {
        quantity--;
    }

    cartItemElement.remove();

    saveCartToCookies();
}

function saveCartToCookies() {
    const cartItems = [];
    const cartItemsElements = document.querySelectorAll('.cart-item');
    cartItemsElements.forEach(item => {
        const productName = item.firstChild.innerHTML;
        const quantity = parseInt(item.querySelector('.quantity-controls span').textContent);
        if (quantity > 0) {
            cartItems.push({ productName, quantity });
        }
    });
    
    document.cookie = `cartItems=${JSON.stringify(cartItems)}; expires=${new Date(Date.now() + 86400000).toUTCString()}; path=/`;
}

function loadCartFromCookies() {
    const cookies = document.cookie.split(';');

    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');

        if (name === 'cartItems') {
            const cartItems = JSON.parse(value);
            const cartItemsElement = document.getElementById('cart-items');
            cartItems.forEach(item => {
                const cartItemElement = document.createElement('li');
                cartItemElement.classList.add('cart-item');

                const nameField = document.createElement('h2');
                nameField.classList.add('productName');
                nameField.innerHTML = `${item.productName}`;

                const productImage = document.createElement('img');;
                productImage.src = `/resources/images/catalog/${item.productName}.png`;
                productImage.width = 150;
                productImage.height = 150;

                const quantityControls = document.createElement('div');
                quantityControls.classList.add('quantity-controls');

                const decreaseButton = document.createElement('button');
                decreaseButton.classList.add('minus');
                decreaseButton.innerHTML = '<img src="resources/images/cart/minus.png" width="25px" height="25px">';
                decreaseButton.onclick = function() { decreaseQuantity(cartItemElement); };

                const quantitySpan = document.createElement('span');
                quantitySpan.textContent = item.quantity;

                const increaseButton = document.createElement('button');
                increaseButton.classList.add('plus');
                increaseButton.innerHTML = '<img src="resources/images/cart/plus.png" width="25px" height="25px">';
                increaseButton.onclick = function() { increaseQuantity(cartItemElement); };

                const deleteButton = document.createElement('button');
                deleteButton.classList.add('delete');
                deleteButton.innerHTML = '<img src="resources/images/cart/delete.png" width="30px" height="30px">';
                deleteButton.onclick = function() { deleteItem(cartItemElement); };

                quantityControls.appendChild(decreaseButton);
                quantityControls.appendChild(quantitySpan);
                quantityControls.appendChild(increaseButton);

                cartItemElement.appendChild(nameField);
                cartItemElement.appendChild(productImage);
                cartItemElement.appendChild(quantityControls);
                cartItemElement.appendChild(deleteButton);

                cartItemsElement.appendChild(cartItemElement);
            });
        }
    }
}

function sendRequest() {
    var cookies = document.cookie;

    if (cookies.length > 10) {
        window.location.href = '/getcookies?cookies=' + encodeURIComponent(cookies)
    }
}

window.onload = function() {
    loadCartFromCookies();
}