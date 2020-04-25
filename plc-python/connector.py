import asyncio
import websockets
import json

PORT = 4000

async def response(websockets, path):
    message = await websockets.recv()
    print(f"Message received : {json.loads(message.decode())}")
    await websockets.send("Message received confirmation")


start_server = websockets.serve(response, 'localhost', PORT)
print(f"Server started on port : {PORT}")
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()