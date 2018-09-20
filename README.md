# MyRetail RESTful Service

This application retrieves product information via both an API call as well as from information stored in a database.

## Create DB with MongoDB
Insert the following code into your MongoDB client to initialize the database

use myretail

db.createCollection('products')
db.products.insert({"_id": "17252133", "name": "Steven Gerrard : My Liverpool Story (Paperback)", "price": 19.99, "currency": "USD"})
db.products.insert({"_id": "16555733", "name": "Rick And Morty:Complete First Season (Blu-ray)", "price": 29.99, "currency": "USD"})
db.products.insert({"_id": "12992572", "name": "Doritos Spicy Sweet Chili Chips - 9.5oz", "price": 2.99, "currency": "USD"})
db.products.insert({"_id": "13300045", "name": "Ticonderoga&#174; #2 Wooden Pencils, 2.2mm, 12ct", "price": 1.99, "currency": "USD"})
db.products.insert({"_id": "11571599", "name": "Star Trek II: The Wrath of Khan (dvd_video)", "price": 35.99, "currency": "USD"})
db.products.insert({"_id": "16584265", "name": "Iron maiden - Piece of mind (Vinyl)", "price": 6.66, "currency": "USD"})