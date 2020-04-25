import asyncio
import websockets
import json
import mysql.connector as mariadb

HOST = "localhost"
SERVER_PORT = 4000
USER = "root"
PASSWORD = "root"
DB = "devops"

mariadb_connection = mariadb.connect(host = HOST, user = USER, password = PASSWORD, database = DB)
cursor = mariadb_connection.cursor()
print(f"Connection established with the database : {DB}")

async def response(websockets, path):
    data = await websockets.recv()
    decoded_data = json.loads(data.decode())
    await websockets.send("Data received ✅")

    for row in decoded_data:
        sql_insert_statement = """
        INSERT INTO data (unit_num, automaton_num, automaton_type, tank_temp, outside_temp, milk_weight, final_product_weight, ph, potassium, sodium_chlorure_concentration, salmonella_lvl, e_coli_lvl, listeria_lvl)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        """
        
        row_to_insert = (row["unit_num"], row["automaton_num"], row["automaton_type"], row["tank_temp"], row["outside_temp"], row["milk_weigth"], row["final_product_weight"], row["ph"], row["potassium"], row["sodium_chlorure_concentration"], row["salmonella_level"], row["e_coli_level"], row["listeria_level"])
        cursor.execute(sql_insert_statement, row_to_insert)
        mariadb_connection.commit()

    print(f"{len(decoded_data)} row(s) inserted into data table ✅")

start_server = websockets.serve(response, HOST, SERVER_PORT)
print(f"Server started on port : {SERVER_PORT}")
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()