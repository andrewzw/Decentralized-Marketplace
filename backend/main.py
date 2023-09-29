from fastapi import FastAPI, Depends, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import mysql.connector
from web3 import Web3
import os
from solcx import compile_standard, install_solc
import json
from typing import List
import logging

logging.basicConfig(level=logging.INFO)
#configure login class:
class LoginRequest(BaseModel):
    username:str
    password:str

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

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def funcTest1():
    return "Hello, this is fastAPI data"

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
    
@app.get("/getGoalImages")
def get_goalImages():
    try:
        # Establish a database connection
        connection = mysql.connector.connect(**db_config)

        # Create a cursor to execute SQL queries
        cursor = connection.cursor()

        # Define the SQL query to retrieve data (e.g., all students)
        query = "SELECT * FROM goalImages"

        # Execute the SQL query
        cursor.execute(query)

        # Fetch all the rows
        result = cursor.fetchall()

        # Convert the result to a list of dictionaries
        goalImages = [dict(zip(cursor.column_names, row)) for row in result]

        # Close the cursor and the database connection
        cursor.close()
        connection.close()

        return goalImages
    except mysql.connector.Error as err:
        return {"error": f"Error: {err}"}
    
@app.get("/getMemberImages")
def get_memberImages():
    try:
        # Establish a database connection
        connection = mysql.connector.connect(**db_config)

        # Create a cursor to execute SQL queries
        cursor = connection.cursor()

        # Define the SQL query to retrieve data (e.g., all students)
        query = "SELECT * FROM memberImages"

        # Execute the SQL query
        cursor.execute(query)

        # Fetch all the rows
        result = cursor.fetchall()

        # Convert the result to a list of dictionaries
        memberImages = [dict(zip(cursor.column_names, row)) for row in result]

        # Close the cursor and the database connection
        cursor.close()
        connection.close()

        return memberImages
    except mysql.connector.Error as err:
        return {"error": f"Error: {err}"}
    
@app.get("/getMainQuestion")
def get_MainQuestion():
    try:
        # Establish a database connection
        connection = mysql.connector.connect(**db_config)

        # Create a cursor to execute SQL queries
        cursor = connection.cursor()

        # Define the SQL query to retrieve data (e.g., all students)
        query = "SELECT main_question FROM mainQuestion"

        # Execute the SQL query
        cursor.execute(query)

        # Fetch all the rows
        result = cursor.fetchall()

        # Convert the result to a list of dictionaries
        mainQuestion = [dict(zip(cursor.column_names, row)) for row in result]

        # Close the cursor and the database connection
        cursor.close()
        connection.close()

        return mainQuestion
    except mysql.connector.Error as err:
        return {"error": f"Error: {err}"}
      
@app.get("/getSubQuestion")
def get_SubQuestion():
    try:
        # Establish a database connection
        connection = mysql.connector.connect(**db_config)

        # Create a cursor to execute SQL queries
        cursor = connection.cursor()

        # Define the SQL query to retrieve data (e.g., all students)
        query = "SELECT mainQuestion.main_id, subQuestion.* FROM mainQuestion INNER JOIN subQuestion ON mainQuestion.main_id = subQuestion.main_id"

        # Execute the SQL query
        cursor.execute(query)

        # Fetch all the rows
        result = cursor.fetchall()

        # Convert the result to a list of dictionaries
        subQuestion = [dict(zip(cursor.column_names, row)) for row in result]

        # Close the cursor and the database connection
        cursor.close()
        connection.close()

        return subQuestion
    except mysql.connector.Error as err:
        return {"error": f"Error: {err}"}

@app.get("/getUser")
def get_userBalance():
    try:
        # Establish a database connection
        connection = mysql.connector.connect(**db_config)

        # Create a cursor to execute SQL queries
        cursor = connection.cursor()

        # Define the SQL query to retrieve data (e.g., all students)
        query = "SELECT * FROM users WHERE user_id = 1"

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

@app.get("/deployContract")
async def funcTest1():
    #Configure Ganache
    w3 = Web3(Web3.HTTPProvider("HTTP://127.0.0.1:7545"))
    #Default is 1337 for Ganache
    chain_id = 1337
    #Found in account REQUIRED
    my_address = "0x2b53E3D811Db52F45e568e41B3E96c16Fb461Fb8"
    private_key = "0x6cfb3810b880e4412560c9974593d00dc22c5c7715e810d697650c681b0f310f"

    with open("./SmartContract.sol", "r") as file:
        smart_contract_file = file.read()
        
    install_solc("0.6.0")
    compiled_sol = compile_standard(
        {
            "language": "Solidity",
            "sources": {"SmartContract.sol": {"content": smart_contract_file}},
            "settings": {
                "outputSelection": {
                    "*": {"*": ["abi", "metadata", "evm.bytecode", "evm.sourceMap"]}
                }
            },
        },
        solc_version="0.6.0",
    )

    with open("compiled_code.json", "w") as file:
        json.dump(compiled_sol, file)

    # get bytecode
    bytecode = compiled_sol["contracts"]["SmartContract.sol"]["SmartContract"]["evm"]["bytecode"]["object"]

    # get abi
    abi = compiled_sol["contracts"]["SmartContract.sol"]["SmartContract"]["abi"]

    # Deploy the contract
    SmartContract = w3.eth.contract(abi=abi, bytecode=bytecode)
    nonce = w3.eth.get_transaction_count(my_address)
    transaction = SmartContract.constructor().build_transaction(
        {
            "chainId": chain_id,
            "gasPrice": w3.eth.gas_price,
            "from": my_address,
            "nonce": nonce,
        }
    )
    transaction.pop('to')

    signed_txn = w3.eth.account.sign_transaction(transaction, private_key=private_key)
    tx_hash = w3.eth.send_raw_transaction(signed_txn.rawTransaction)
    tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)
    deployed_contract_address = tx_receipt.contractAddress
    return {"Smart Contract deployed": deployed_contract_address}

@app.get("/getItemDetails/{item_id}")
async def get_item_details(item_id: int):
    w3 = Web3(Web3.HTTPProvider("HTTP://127.0.0.1:7545"))

    # Assuming you have the ABI and contract address stored
    with open("compiled_code.json", "r") as file:
        compiled_sol = json.load(file)
    abi = compiled_sol["contracts"]["SmartContract.sol"]["SmartContract"]["abi"]

    # Replace with your contract address REQUIRED
    contract_address = deployed_contract_address  
    smart_contract = w3.eth.contract(address=contract_address, abi=abi)

    # Call the smart contract to get item details
    try:
        item = smart_contract.functions.items(item_id).call()
        item_details = {
            "name": item[0],
            "description": item[1],
            "image": item[2],
            "category": item[3],
            "price" : item[4],
            "seller": item[5]
        }
        return item_details
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.post("/buyItem")
async def buy_item(token_id: int, price: float):
    #Debug
    print("Token ID:", token_id)
    print("Price:", price)
    #Configure Ganache
    w3 = Web3(Web3.HTTPProvider("HTTP://127.0.0.1:7545"))
    #Default is 1337 for Ganache
    chain_id = 1337
    #Found in account REQUIRED
    my_address = "0x03db7fE88Bf4a8bc3Ba191883D26F8344D7B3bdB"
    private_key = "0xc90671f46e9ee7dfeb8c1985be2d568cce861b1a49946b6e90b1573278cdfe89"


    # Assuming you have the ABI and contract address stored
    with open("compiled_code.json", "r") as file:
        compiled_sol = json.load(file)
    abi = compiled_sol["contracts"]["SmartContract.sol"]["SmartContract"]["abi"]
    # Replace with your contract address REQUIRED
    contract_address = "0x6eeb357ABF9F99e402207715DbBC65BF6880F9E3"  

    smart_contract = w3.eth.contract(address=contract_address, abi=abi)

    # Build and send the transaction to buy an item
    nonce = w3.eth.get_transaction_count(my_address)
    amount_in_wei = w3.toWei(price, 'ether')

    transaction = smart_contract.functions.buyItem(token_id).build_transaction(
        {
            "chainId": chain_id,
            "gasPrice": w3.eth.gas_price,
            "from": my_address,
            "nonce": nonce,
            "value": amount_in_wei
        }
    )

    signed_txn = w3.eth.account.sign_transaction(transaction, private_key=private_key)
    tx_hash = w3.eth.send_raw_transaction(signed_txn.rawTransaction)
    tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)

    return {"status": "Item purchased", "transaction_receipt": tx_receipt}

@app.post("/login")
async def login(request:LoginRequest):
    logging.info(f"Received login request for username: {request.username}")
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()
        query = "SELECT * FROM users WHERE username = %s AND pass = %s"
        cursor.execute(query,(request.username,request.password))
        result = cursor.fetchone()
        cursor.close()
        connection.close()

        if result:
            user_id = result[0]
            return{"status":"success","message":"User verified","user_id":user_id}
        else:
            raise HTTPException(status_code=404, detail="Invalid credentials")
    except mysql.connector.Error as err:
        return {"error": f"Error:{err}"}

@app.get("/getItemsForUser/{user_id}")
async def get_items_for_user(user_id: int):
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()

        query = """
        SELECT listedItems.* FROM listedItems 
        INNER JOIN bought ON listedItems.item_id = bought.item_id
        WHERE bought.user_id = %s
        """

        cursor.execute(query, (user_id,))
        result = cursor.fetchall()
        #convert result to list of dict
        items = [dict(zip(cursor.column_names, row)) for row in result]

        cursor.close()
        connection.close()

        if not items:
            raise HTTPException(status_code=404, detail="No items found for this user")

        return items
    except mysql.connector.Error as err:
        return {"error": f"Error:{err}"}
