const express = require('express');
const app = express();

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to our home page');
});

// Get all products
app.get('/products', (req, res) => {
    const products = [
        { id: 1, label: 'Product1' },
        { id: 2, label: 'Product2' },
        { id: 3, label: 'Product3' }
    ];

    res.json(products);
});

// Get a single product by ID
app.get('/products/:productId', (req, res) => {
    console.log('req.params', req.params);

    const productId = parseInt(req.params.productId);

    const products = [
        { id: 1, label: 'Product1' },
        { id: 2, label: 'Product2' },
        { id: 3, label: 'Product3' }
    ];

    const singleProduct = products.find(
        product => product.id === productId
    );

    if (!singleProduct) {
        return res
            .status(404)
            .send('Product not found! Please try a different id');
    }

    res.json(singleProduct);
});

// Server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is now running at port ${port}`);
});
