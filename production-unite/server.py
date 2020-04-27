import asyncio
import websockets
import json

print("hello")
async def hello(websocket, path):
    test = await websocket.recv()
    print(test)
    

start_server = websockets.serve(hello, "0.0.0.0", 3000)
print("hello2")
asyncio.get_event_loop().run_until_complete(start_server)