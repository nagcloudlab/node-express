


db.products.insertMany([
    {
        _id: 1,
        name: 'Laptop',
        price: 198000,
        description: 'New Mac pro',
        image: 'assets/Laptop.png',
        make_date: Date.now()
    },
    {
        _id: 2,
        name: 'Mobile',
        price: 49000,
        description: 'New  pro',
        image: 'assets/Mobile.png',
        make_date: Date.now()
    }
]);


db.reviews.insertMany([
    {
        name: 'Shubham',
        review: 'Good Product',
        rating: 5,
        date: Date.now(),
        product_id: 2
    },
    {
        name: 'Rahul',
        review: 'Good Product',
        rating: 4,
        date: Date.now(),
        product_id: 2
    },
    {
        name: 'Rohit',
        review: 'Good Product',
        rating: 5,
        date: Date.now(),
        product_id: 1
    }
]
)