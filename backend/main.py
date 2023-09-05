from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import mysql.connector

app = FastAPI()

# MySQL database connection configuration
db_config = {
"host": "localhost",
"user": "root",
"password": "password",
"database": "trial"
} 

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

featuredItems = [
    {"name": "Featured 1", "description": "Description", "image": "/src/Assets/market/tech/tech1.jpg", "cat": "Tech", "price": "0.1", "seller": "Andrew"},
    {"name": "Featured 2", "description": "Description", "image": "/src/Assets/market/art/art1.png", "cat": "Art", "price": "0.1", "seller": "Andrew"},
    {"name": "Featured 3", "description": "Description", "image": "/src/Assets/market/fashion/fashion1.png", "cat": "Fashion", "price": "0.1", "seller": "Andrew"},
    {"name": "Featured 4", "description": "Description", "image": "/src/Assets/market/tech/tech2.jpg", "cat": "Tech", "price": "0.1", "seller": "Andrew"},
]



@app.get("/featuredItems/")
async def get_featuredItems():
    return featuredItems

class Item(BaseModel):
    name: str
    description: str = None
    price: float
    tax: float = None

@app.get("/jsonData")
async def funcTest():
    jsonResult = {
        "name": "Your name",
        "Uni-year": 2,
        "isStudent": True,
        "hobbies": ["reading", "swimming"]
    }

    return jsonResult


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
