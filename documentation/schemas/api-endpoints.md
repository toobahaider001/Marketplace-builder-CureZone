1. Product Endpoint
Endpoint Name: /products
Method: GET
Description:  Retrieves a list of reviews submitted for a specific medicine, including ratings and comments from users
Responses Example:
{
    id: Product id
    name: Product name
    price: Product price
    stock: Quantity available
    image: Image URL
    sideEffects: Product side effects
}
2. Order Endpoint
Endpoint Name:/order
Method:POST
Description: Add a product to cart and store it to sanity.
Responses Example:
{
    name: Product name
    price: Product price
    stock: Quantity available
    image: Image URL
    sideEffects: Product side effects 
}
3. Checkout 
Endpoint Name: /checkout
Method: POST
Description : process shipment details to create a label via ShipEngine.
Responses Example:
{
    LabelId: Label Id,
    DeliverFrom: {
        name: Owner Name,
        email: Owner Email,
        phoneNumber: Owner Phone Number
    },
    Deliver To: {
        name: Your Name,
        email: Your Email,
        phoneNumber: Your Phone Number
    },
    shippmentId: Id
    Quantity: Product Quantity
    deliver date: Deliver Date

}

4. Tracking Details:
Endpoint Name:/track-orders
Method: GET
Description:to track the placed order via Ship Engine.
Responses Example:
{
    Id: Product Id
}
