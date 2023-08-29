from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to your frontend's origin for security in production
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

# for section 3


@app.get("/")
async def funcTest1():
    return "Hello, this is fastAPI data"


@app.get("/getAboutData")
async def funcTest2():
    return "Hello, this is about us data"


@app.get("/getHomeData")
async def funcTest3():
    return "Hello, this is home data"


@app.get("/jsonData")
async def funcTest():
    jsonResult = {
        "name": "Your name",
        "Uni-year": 2,
        "isStudent": True,
        "hobbies": ["reading", "swimming"]
    }
    return jsonResult


@app.get("/student/{student_id}")
async def getStudentId(student_id: int):
    return {"student_id": student_id}


@app.post("/items/", response_model=Item)
def create_item(item: Item):
    return item
