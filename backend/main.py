from fastapi import FastAPI,HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import mysql.connector

# MySQL database connection configuration
# If you get an error, change your password encryption on mysql to legacy mode
# ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'

#STEP 1: Connect the MySQL in the terminal:
#mysql -u <username> -p
#or
#/usr/local/mysql/bin/mysql -u root -p (for Mac)

#use script
#sudo mysql -u root -p < safespace_script.sql 
#/usr/local/mysql/bin/mysql -u root -p < safespace_script.sql  (for Mac)

app = FastAPI()
db_config = {
"host": "localhost",
"user": "root",
"password": "password",
"database": "SafeSpace"
} 

# Define Pydantic model
class Wallet(BaseModel):
    wallet: str

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/tabsData")
async def funcTest():
    jsonResult = [
        { "value": "All", "label": "All" },
        { "value": "Tech", "label": "Tech" },
        { "value": "Art", "label": "Art" },
        { "value": "Fashion", "label": "Fashion" }
    ]
    return jsonResult


class Item(BaseModel):
    name: str
    description: str = None
    price: float
    tax: float = None

@app.post("/verifyWallet")
async def verify_wallet(wallet: Wallet):
    wallet_str = wallet.wallet
    
    try:
        # Establish a database connection
        connection = mysql.connector.connect(**db_config)
        
        # Create a cursor to execute SQL queries
        cursor = connection.cursor()
        
        # Define the SQL query to check if the wallet exists
        query = "SELECT * FROM users WHERE wallet = %s"
        
        # Execute the SQL query with the wallet parameter
        cursor.execute(query, (wallet_str,))
        
        # Fetch the result. If there is any result, the wallet exists.
        result = cursor.fetchone()
        
        # Close the cursor and the database connection
        cursor.close()
        connection.close()
        
        # If the wallet exists, return a success message or status
        if result:
            return {"status": "success", "message": "Wallet verified"}
        else:
            # If the wallet does not exist, return an error message or status
            raise HTTPException(status_code=404, detail="Wallet not found")
    
    except mysql.connector.Error as err:
        # If a database error occurs, return an error message
        return {"error": f"Error: {err}"}
    
@app.get("/getFeaturedItems")
def get_featuredItems():
    try:
        # Establish a database connection
        connection = mysql.connector.connect(**db_config)

        # Create a cursor to execute SQL queries
        cursor = connection.cursor()

        # Define the SQL query to retrieve data (e.g., all students)
        query = "SELECT * FROM listedItems WHERE featured = 1"

        # Execute the SQL query
        cursor.execute(query)

        # Fetch all the rows
        result = cursor.fetchall()

        # Convert the result to a list of dictionaries
        featuredItems = [dict(zip(cursor.column_names, row)) for row in result]

        # Close the cursor and the database connection
        cursor.close()
        connection.close()

        return featuredItems

    except mysql.connector.Error as err:
        return {"error": f"Error: {err}"}

@app.get("/getListedItems")
def get_listedItems():
    try:
        # Establish a database connection
        connection = mysql.connector.connect(**db_config)

        # Create a cursor to execute SQL queries
        cursor = connection.cursor()

        # Define the SQL query to retrieve data (e.g., all students)
        query = "SELECT * FROM listedItems"

        # Execute the SQL query
        cursor.execute(query)

        # Fetch all the rows
        result = cursor.fetchall()

        # Convert the result to a list of dictionaries
        listedItems = [dict(zip(cursor.column_names, row)) for row in result]

        # Close the cursor and the database connection
        cursor.close()
        connection.close()

        return listedItems

    except mysql.connector.Error as err:
        return {"error": f"Error: {err}"}


@app.get("/getAssetItems")
def get_assetItems():
    try:
        #Establish database connection
        connection = mysql.connector.connect(**db_config)

        # Create a cursor to execute SQL queries
        cursor = connection.cursor()

        # Define the SQL query to retrieve data (e.g., all students)
        query = "SELECT * FROM assetItems"

        # Execute the SQL query
        cursor.execute(query)

        # Fetch all the rows
        result = cursor.fetchall()

        # Convert the result to a list of dictionaries
        assetItems = [dict(zip(cursor.column_names, row)) for row in result]

        # Close the cursor and the database connection
        cursor.close()
        connection.close()

        return assetItems
    
    except mysql.connector.Error as err:
        return {"error": f"Error: {err}"}

@app.get("/students")
def get_students():
    try:
        # Establish a database connection
        connection = mysql.connector.connect(**db_config)

        # Create a cursor to execute SQL queries
        cursor = connection.cursor()

        # Define the SQL query to retrieve data (e.g., all students)
        query = "SELECT * FROM students"

        # Execute the SQL query
        cursor.execute(query)

        # Fetch all the rows
        result = cursor.fetchall()

        # Convert the result to a list of dictionaries
        students = [dict(zip(cursor.column_names, row)) for row in result]

        # Close the cursor and the database connection
        cursor.close()
        connection.close()

        return students

    except mysql.connector.Error as err:
        return {"error": f"Error: {err}"}

@app.get("/")
async def funcTest1():
    return "Hello, this is fastAPI data"


@app.get("/getAboutData")
async def funcTest2():
    return "Hello, this is about us data"


@app.get("/getHomeData")
async def funcTest3():
    return "Hello, this is home data"

@app.post("/items/", response_model=Item)
def create_item(item: Item):
    return item
