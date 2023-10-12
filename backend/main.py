# MySQL database connection configuration
# If you get an error, change your password encryption on mysql to legacy mode
# ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'

# STEP 1: Connect the MySQL in the terminal:
# mysql -u <username> -p
# or
# /usr/local/mysql/bin/mysql -u root -p (for Mac)

# use script
# sudo mysql -u root -p < safespace_script.sql
# /usr/local/mysql/bin/mysql -u root -p < safespace_script.sql  (for Mac)

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
# configure login class:


class LoginRequest(BaseModel):
    username: str
    password: str


class Item(BaseModel):
    item_id: int
    price: float
    name: str
    quantity: int


class UpdateBalanceRequest(BaseModel):
    user_id: int
    new_balance: float


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
        {"value": "All", "label": "All"},
        {"value": "Tech", "label": "Tech"},
        {"value": "Art", "label": "Art"},
        {"value": "Fashion", "label": "Fashion"}
    ]
    return jsonResult


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
        query = "SELECT * FROM users"

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


# Smart Contract ---------------------------------------------------------------
deployed_contract_address = None
chain_id = 1337
w3 = Web3(Web3.HTTPProvider("HTTP://127.0.0.1:7545"))
my_address = "0xb15430666ccac2C843478e84C032f488CA13b0e9"
private_key = "0xe7cb5de471e6508f90355a39ec0ac58220da22c7be25d1fd79eeff34fbc16cb2"


@app.get("/deployContract")
async def funcTest1():
    # Configure Ganache
    global w3
    global chain_id
    global my_address
    global private_key
    global deployed_contract_address

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

    # Store bytecode and abi in json file
    with open("compiled_code.json", "w") as file:
        json.dump(compiled_sol, file)

    # get bytecode
    bytecode = compiled_sol["contracts"]["SmartContract.sol"]["SmartContract"]["evm"]["bytecode"]["object"]

    # get abi
    abi = compiled_sol["contracts"]["SmartContract.sol"]["SmartContract"]["abi"]

    try:
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

        signed_txn = w3.eth.account.sign_transaction(
            transaction, private_key=private_key)
        tx_hash = w3.eth.send_raw_transaction(signed_txn.rawTransaction)
        tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)
        deployed_contract_address = tx_receipt.contractAddress

        logging.info(
            f"Smart Contract deployed at address: {deployed_contract_address}")
        return {"Smart Contract deployed": deployed_contract_address}
    except Exception as e:
        logging.error(f"Blockchain operation failed: {e}")
        raise HTTPException(
            status_code=500, detail="Smart Contract deployment failed: Blockchain operation error")


@app.get("/getItemDetails/{item_id}")
async def get_item_details(item_id: int):
    w3 = Web3(Web3.HTTPProvider("HTTP://127.0.0.1:7545"))

    # Assuming you have the ABI and contract address stored
    with open("compiled_code.json", "r") as file:
        compiled_sol = json.load(file)
    abi = compiled_sol["contracts"]["SmartContract.sol"]["SmartContract"]["abi"]

    # Contract address REQUIRED
    global deployed_contract_address
    smart_contract = w3.eth.contract(
        address=deployed_contract_address, abi=abi)

    # Call the smart contract to get item details
    try:
        item = smart_contract.functions.items(item_id).call()
        item_details = {
            "name": item[0],
            "description": item[1],
            "image": item[2],
            "category": item[3],
            "price": item[4],
            "seller": item[5]
        }
        return item_details
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@app.post("/buyItems")
async def buy_item(items: List[Item]):
    item_ids = [item.item_id for item in items]
    quantities = [item.quantity for item in items]
    receipts = []

    # Calculate total cost in Wei
    total_amount_in_wei = sum(
        int(item.price * (10 ** 18) * item.quantity) for item in items)

    # Configure Ganache
    global w3
    global chain_id
    global my_address
    global private_key
    global deployed_contract_address

    # Assuming you have the ABI and contract address stored
    with open("compiled_code.json", "r") as file:
        compiled_sol = json.load(file)
    abi = compiled_sol["contracts"]["SmartContract.sol"]["SmartContract"]["abi"]
    smart_contract = w3.eth.contract(
        address=deployed_contract_address, abi=abi)

    try:
        # Build and send the transaction to buy an item
        nonce = w3.eth.get_transaction_count(my_address)

        # Debugging
        print(f"Sending Amount: {total_amount_in_wei } WEI ")

        store_transaction = smart_contract.functions.buyItems(item_ids, quantities).build_transaction(
            {
                "chainId": chain_id,
                "gasPrice": w3.eth.gas_price,
                "from": my_address,
                "nonce": nonce,
                "value": total_amount_in_wei
            }
        )

        signed_store_txn = w3.eth.account.sign_transaction(
            store_transaction, private_key=private_key)
        send_store_tx_hash = w3.eth.send_raw_transaction(
            signed_store_txn.rawTransaction)
        tx_receipt = w3.eth.wait_for_transaction_receipt(
            send_store_tx_hash)
        tx_receipt_serializable = {
            "transactionHash": tx_receipt['transactionHash'].hex(),
            "transactionIndex": tx_receipt['transactionIndex'],
            "blockNumber": tx_receipt['blockNumber'],
            "blockHash": tx_receipt['blockHash'].hex(),
            "from": tx_receipt['from'],
            "to": tx_receipt['to'],
            "cumulativeGasUsed": tx_receipt['cumulativeGasUsed'],
            "gasUsed": tx_receipt['gasUsed'],
            "status": tx_receipt['status']
        }
        # Log the transaction details
        logging.info(f"Transaction built with nonce: {nonce}")
        logging.info(f"Transaction hash: {send_store_tx_hash.hex()}")
        logging.info(f"Transaction receipt: {tx_receipt_serializable}")

        receipts.append({
            "status": "Item purchased",
            "transaction_receipt": tx_receipt_serializable,
            "transaction_hash": send_store_tx_hash.hex()
        })

    except Exception as e:
        print(f"Full exception details: {e}")
        logging.error(f"Blockchain operation failed: {e}")
        receipts.append({"status": "Failed", "error": str(e)})
    return {"results": receipts}


@app.post("/updateUserBalance")
async def update_user_balance(request: UpdateBalanceRequest):
    user_id = request.user_id
    new_balance = request.new_balance
    print(f"Received user_id: {user_id}, new_balance: {new_balance}")
    try:
        # Establish a database connection
        connection = mysql.connector.connect(**db_config)

        # Create a cursor to execute SQL queries
        cursor = connection.cursor()

        # Define the SQL query to update the user's balance
        query = "UPDATE users SET balance = %s WHERE user_id = %s"

        # Execute the SQL query
        cursor.execute(query, (new_balance, user_id))

        # Commit the changes to the database
        connection.commit()

        # Close the cursor and the database connection
        cursor.close()
        connection.close()

        return {"status": "success", "message": "User balance updated successfully"}

    except mysql.connector.Error as err:
        return {"status": "error", "message": f"Error: {err}"}


@app.post("/login")
async def login(request: LoginRequest):
    logging.info(f"Received login request for username: {request.username}")
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()
        query = "SELECT * FROM users WHERE username = %s AND pass = %s"
        cursor.execute(query, (request.username, request.password))
        result = cursor.fetchone()
        cursor.close()
        connection.close()

        if result:
            user_id = result[0]
            return {"status": "success", "message": "User verified", "user_id": user_id}
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
        # convert result to list of dict
        items = [dict(zip(cursor.column_names, row)) for row in result]

        cursor.close()
        connection.close()

        if not items:
            raise HTTPException(
                status_code=404, detail="No items found for this user")

        return items
    except mysql.connector.Error as err:
        return {"error": f"Error:{err}"}
