import asyncio
import websockets
import json
import gnupg
import logging
import mysql.connector as mariadb
from datetime import datetime

BDD = "devops-project_database_1"
HOST = "devops-project_connector_1"
SERVER_PORT = 3000
USER = "root"
PASSWORD = "test"
DB = "devops"
SSL_CA = "/usr/src/devops-project-prod/ca.pem"
SSL_KEY = "/usr/src/devops-project-prod/client-key.pem"
SSL_CERT = "/usr/src/devops-project-prod/client-cert.pem"

mariadb_connection = mariadb.connect(host = BDD ,user = USER,password = PASSWORD, database= DB, ssl_ca=SSL_CA, ssl_key=SSL_KEY, ssl_cert=SSL_CERT)
cursor = mariadb_connection.cursor()
print(f"✅ Connection established with the database : {DB}")

logging.basicConfig(filename='example.log',level=logging.DEBUG)

async def response(websockets, path):
    gpg = gnupg.GPG(gnupghome="/root/.gnupg")
    data = await websockets.recv()

    file_name = "json_file.json.gpg"
    file = open(file_name, "wb")
    file.write(data)
    file.close()

    output_file = "decrypted_data.txt"

    with open(file_name, 'rb') as f:
        recipient_passphrase = "P@ssw0rd"
        status = gpg.decrypt_file(
            file=f,
            always_trust=True, 
            passphrase=recipient_passphrase,
            output=output_file,
        )
    print(f'ok : {status.ok}')
    print(f'status : {status.status}')
    print(f'stderr : {status.stderr}')

    logger = logging.getLogger()
    logger.debug(f'ok : {status.ok}')
    logger.debug(f'status : {status.status}')
    logger.debug(f'stderr : {status.stderr}')

    if status.ok:
        with open (output_file, "r") as decoded_file:
            raw_data = decoded_file.read()

        decoded_data = json.loads(raw_data)
        await websockets.send("Data received ✅")

        for row in decoded_data:
            sql_insert_statement = """
            INSERT INTO data (unit_num, automaton_num, automaton_type, tank_temp, outside_temp, milk_weight, final_product_weight, ph, potassium, sodium_chlorure_concentration, salmonella_lvl, e_coli_lvl, listeria_lvl, created_at, inserted_at)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            """
            
            row_to_insert = (row["unit_num"], row["automaton_num"], row["automaton_type"], row["tank_temp"], row["outside_temp"], row["milk_weigth"], row["final_product_weight"], row["ph"], row["potassium"], row["sodium_chlorure_concentration"], row["salmonella_level"], row["e_coli_level"], row["listeria_level"], row["created_at"], datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
            cursor.execute(sql_insert_statement, row_to_insert)
            mariadb_connection.commit()

        print(f"✅ {len(decoded_data)} row(s) inserted into data table")

start_server = websockets.serve(response, HOST, SERVER_PORT)
print(f"✅ Server started on port : {SERVER_PORT}")
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
