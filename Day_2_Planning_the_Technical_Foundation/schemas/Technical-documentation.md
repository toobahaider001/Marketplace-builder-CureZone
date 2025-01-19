System Architecture Overview:

Product Browse:
. The products data can be stored in a sanity cms. In product component we can fetch data from sanity cms, which can display in our browser.
<img src="/display.png" width="800" />

Add To Cart:
When user place an order it deliver to /product component through api and then store in our sanity CMS.
<img src="/order-.png" width="800"/>

checkout:
After placing an order when user browse of their added products it can be deliver to /checkout component through an api  and then request went to shipment library for making label via ShipEngine.
<img src="/order-checkout.png" width="800"/>

label:
ShipEngine will make  label of placed order  and shows details of placed orders.
<img src="/order-label.png" width="800"/>

Tracking the order:
when a user click on (Track your Order) the ShipEngine will make an api call and then the tracking details will display in our browser.
<img src="/tracking.png" width="800"/>
