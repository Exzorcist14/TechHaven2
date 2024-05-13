var categories = document.querySelectorAll('.productsContainer');

    categories.forEach(function(category) {
        category.style.display = 'none';
    });

    var selectedCategory = document.getElementById('gpu-container');
    selectedCategory.style.display = 'block';

    var products = document.querySelectorAll('.products');
        products.forEach(function(product) {
            product.style.display = 'none';
    });

    var selectedProducts = selectedCategory.querySelector('.products');
    selectedProducts.style.display = 'block';

function showCategory(categoryId) {
    var categories = document.querySelectorAll('.productsContainer');

    categories.forEach(function(category) {
        category.style.display = 'none';
    });

    var selectedCategory = document.getElementById(categoryId);
    selectedCategory.style.display = 'block';

    var products = document.querySelectorAll('.products');
        products.forEach(function(product) {
            product.style.display = 'none';
    });

    var selectedProducts = selectedCategory.querySelector('.products');
    selectedProducts.style.display = 'block';
}