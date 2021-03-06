## Managed ecommerce

this app allows users to create their own store and start selling their products online

## Technologies

### Frontend

- Reactjs/TS
- Sass
- Antdesign
- Redux
- Nextjs

### Backend

- Nodejs/TS
- MongoDB
- AWS tools

### Business Logic / Features  
- Managed ecommerce platform that allows anyone to create their own stores and start selling products online ( like shopify )
- This app contains two user levels which are customer and vendor, since we have two customer levels when authenticating visitor will be asked to whether they need to signup as a customer or signup as a vendor.

####  Vendor Level Features
- Vendor Account
	- Ability to change user verified attributes
		- require to verify sensitive information like phone & email

- Store 
	- Ability to create stores
	- Edit store details
	- Deactivate or activate the store
	
- Products
	- Ability to upload/edit/delete products
	- Ability to see their previous customers

- Orders
	-	Ability to see orders
	-	change order statuses

- Analytics
	- sales / revenue (with custom date range)
	- current out of stock products
	- current orders
	- sales line chart with date sorting

#### Customer Level Features
- Customer Account
	- Ability to change user verified attributes
		- require to verify sensitive information like phone & email

- Orders
	- ability to view previous made orders


## TODO

- [x] - list down features
- [x] - Store UI design
    - [x] - go through the antdesign and be familiar with components
    - [x] - learn how to adujust styles in antdesign
    - [x] - choose a logo and color theme
    - [x] - design dashbaord page
    - [ ] - create UI views for user level selection page

- [x] - Make the design consistant and every page
- [x] - Design Login cards figma UI
- [x] - Make design look better & apply it to all pages

### Front-End
- [x] - Go through react docs and recap everything
- [x] - Start development with Frontend
    - [x] - Configure with AntDesign / Sass
    - [x] - Learn Antdesign layout & Grid
- [ ] - Use useReducer as a state manager 
- [ ] - Learn how expert developers use reactjs

- [/] - Admin Components
    - [x] - Admin top navigation
    - [x] - Side Navbar
    - [x] - Use ant design responsive columns and rows
    - [x] - replace existing styles layout styles with columns and rows
    - [x] - make sidenav and topnav sticky (replicate adminpro styles)
    - [x] - reverse engineer 229-multi-level-dropdown source code (https://youtu.be/IF6k0uZuypA)    
    - [x] - make layout mobile responsive upto iphone SE
    - [x] - use sass modules when styling isolated element
    - [x] - create responsive hamburger menu (google it)
    - [x] - overwrite necessary styles
    - [x] - add routers
        - [x] - vendor/dashboard
        - [x] - vendor/orders
        - [x] - vendor/products
        - [ ] - vendor/product/add
        - [ ] - vendor/products/edit/:id
        - [x] - vendor/customers
        - [ ] - vendor/customers/view/:id
        - [ ] - vendor/settings
    - [x] - clean & structure up the components properly before move into other pages
    - [x] - Dashboard homepage
    - [x] - add active menu state
        - [x] - show the active style if current page is match with the path
    (https://demos.wrappixel.com/premium-admin-templates/react/adminpro-react/main/dashboards/analytical)

    - [x] - fix scss style conflicts - https://www.freecodecamp.org/news/how-to-style-react-apps-with-css/
    - [x] - seperate global files from sass modules
    - [x] - Orders page
    - [x] - Products page
        - [x] - Products Upload Modal
        - [ ] - Reactive auto sorting images
    - [ ] - Global alert component
    - [x] - Customers
        - [x] - Customers modal
    - [ ] - Settings
    - [ ] - User Profile
    - [ ] - Authentication modal

## Fix these

[ ] - fix max font size showing ... in front end
[ ] - validate max and min user inputs

### Backend

- [x] - create a simple REST API with mongodb
- [/] - Handle Errors properly
        - example - https://github.com/CodingGarden/inventory-app/blob/master/backend/src/middlewares.js
- [ ] - configure eslint on backend code
- [ ] - Model the data entries
- [ ] - update errorHandler middleware after configuring dotenv

- API endpoints

- [x] - POST - /api/user/signup - user singup
- [x] - POST - /api/user/signin - user singin
- [x] - GET  - /api/user/confirmEmail/:token - verify email address confirmation
- [x] - GET  - /api/user - get user
- [x] - POST - /api/user/token - get new access/id tokens using refresh token
- [ ] - logout route
- [ ] - resend email verification link

- [ ] - create mongoose schema for all entries
    - [x] - Store Entry
    - [ ] - Vendor Entry
    - [ ] - Product Entry
    - [ ] - Order Entry
    - [ ] - Buyer Entry

- When using cognito
    - [x] - create an sample fully functioning custom auth API with cognito
    - [x] - receive accessToken and refreshToken properly
    - [x] - learn to secure custom API endpoints with cognito
    - [ ] - configure federated providers with Google
    - [ ] - implement it to the project

Cognito App client config
    - Refresh toekn expiration - 30 days
    - Access token expiration - 60 mins
    - ID token expiration - 60 mins

- [x] - configure IAM
- [x] - configure cognito

- [x] - user signup
    - [x] - validate user input
    - [x] - save user in cognito user pool

- [x] - user email confirm
    - [x] - configure nodemailer SMTP to send emails
    - [x] - generate confirmation url securly with jwt
    - [x] - create a route to verify emails (jwt decode)
    - [x] - confirm cognito user (adminConfirmSignup)
    - [ ] - update email_verify in confirm process

- [x] - user login with
    - [x] - choose (adminInitiateAuth) and retreive tokens

- [ ] - authorize backend resources with cognito
    - [x] - learn how to protect private endpoints  
    - [x] - learn how to manage access token
    - [x] - create private test endpoint to retreive backend resources
    - [x] - authorize with private endpoints using only access token for now, later implement refresh tokens
    - [ ] - manage expired access token errors
    - [x] - learn to generate refresh tokens and create valid access tokens with it
    - [ ] - make sure to revoke active token calling singout endpoint when using logging out from the app  
        - [ ] - invalidate and blacklist refreshtokens in serverside
    - [ ] - provide greater security to refreshtokens in frontend
        - since we receive the refresh token when signing in check to see if there is a common algorithm process to generate access token
        - see how custom access tokens are generate from refresh tokens
        - test it with endpoints
        - research about refresh token managing
    - [ ] - encrypt refreshtokens (not required) 
        -  research about how to do it
    - [ ] - handle errors and responses properly

- [ ] - refresh the accesstoken with refreshtoken
    - [ ] - save the refreshToken and user attribute in memory
    - [ ] - use aws jwk to verify accessTokens
    - [x] - refresh the new accessToken and send it to user
    - [ ] - logout the user if token is expired (revoke refreshToken)
        - [x] - validate the refreshToken
        - [x] - aws refresh the accessToken and idToken api call (no need to use jwt to generate new tokens)
        - [ ] - veirfy the user with jwk or with sdk getUser method if necessary
        - https://youtu.be/QDR-pX7Ho8k - cognito token verify guide
        - callGlobalSignOut when revoking tokens

    - [x] - follow the refresh token guides and make sure process in not vulnerble or missing any important things
        - [x] - https://youtu.be/QDR-pX7Ho8k
        - [x] - https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/

    - [/] - complete the authentication workflow with frontend
        - [ ] - securely store tokens in frontend
        - [ ] - follow best practices guides
        - [ ] - handle errors & redirects properly

    - [ ] - Organize the backend
        - [ ] - follow the this guide and re-write the routes - https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/
        - [ ] - follow this guide to modulerize the code after most of the backend api work has been completed https://github.dev/async-labs/builderbook/tree/master/builderbook/server
    
- [ ] - resend verification link feature
    - [ ] - add custom rate limits for resending

- [ ] - Follow the this auth flow and choose a secured secret to generate email confirmation links
https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-post-confirmation.html

- [ ] - update branding information to Oauth 2.0 API in google console
    - [ ] - add callback redirect after login
    - app logo
    - app homelink
    - app privacy policy link
    - app terms of service link
    - authorized domains
                                                          
store domain - freebiesell.xyz
 
https://joi.dev/ - for schema validation

data model - https://www.mongodb.com/docs/manual/applications/data-models/
Many to many relationship - http://learnmongodbthehardway.com/schema/schemabasics/
https://www.mongodb.com/nosql-explained/data-modeling


### Features

- Payment
	- required details asked by payment method

- Creating a store
    - required contact infomation
    - when buyer is signing up we will ask him/her to enter the name for their store
    - store name's are unique, no duplicate names

- Dashboard Menus
    - home (analytics)
        - total sales
        - total revenue
        - out of stock products
        - new orders
    - orders
        - list of recurrent orders
        - dispatch button
        - previous dispatch history (optional)
    - products
        - upload new products button (Product Entry)
        - show existing products with CRUD functionality
        - develop a global modal for all type of errors and warinings
    - customers
        - show list of detials of customers (readonly)
            - full name
            - last online time (how long a ago)
            - City & Country
            - Email
        - modal to view customer details


## Database entries

Store Entry
    - ID
    - Store name (unique)
    - Logo
    - Banner
    - Store status - Boolean
    - Store Owner - FK

- Product Entry
    - ID
    - Product Name
    - Price
    - Images
    - Description
    - Stock Availability

- Order Entry
    - ID
    - Total Price
    - Notes
    - Customer ID
    - Product IDs (array)
    - Requested quantity

- Buyer Entry
    - ID
    - First name
    - Last name
    - Profile picture (optional)
    - City
    - Country
    - Address
    - Email
    - Phone (Optional)
    - Online Status / Last Online
    - Total Spent
    - Total Complete Orders
    - Save debit card number (next update feature)

- Vendor Entry
    - ID
    - First Name (Optional)
    - Last Name (Optional)
    - Phone (Optional)
    - Country
    - City
    - store name subdomain
    - Email
    - Password



