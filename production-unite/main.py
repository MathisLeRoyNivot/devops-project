import asyncio
import os
import json
import random
<<<<<<< HEAD:production-unite/main.py
=======
import websockets
>>>>>>> 522cf094123022da9329fbbba036980b4a57ddca:plc-python/main.py
from datetime import datetime
from sys import argv

UNIT_NUM = int(argv[1])
AUTOMATON_QTY = int(argv[2])
SERVER_PORT = 4000
generated_data = list()

class UnitProduction:
    def __init__(self, unit_num, automaton_num, automaton_type, tank_temp, outside_temp, milk_weight, final_product_weight, ph, potassium, sodium_chlorure_concentration, salmonella_lvl, e_coli_lvl, listeria_lvl):
        self._unit_num = unit_num
        self._automaton_num = automaton_num
        self._automaton_type = automaton_type
        self._tank_temp = tank_temp
        self._outside_temp = outside_temp
        self._milk_weight = milk_weight
        self._final_product_weight = final_product_weight
        self._ph = ph
        self._potassium = potassium
        self._sodium_chlorure_concentration = sodium_chlorure_concentration
        self._salmonella_level = salmonella_lvl
        self._e_coli_level = e_coli_lvl
        self._listeria_level = listeria_lvl

    # unit_num Getter & Setter
    @property
    def unitNum(self):
        return self._unit_num

    @unitNum.setter
    def setUnitNum(self, value):
        self._unit_num = value

    # automaton_num Getter & Setter
    @property
    def automatonNum(self):
        return self._automaton_num

    @automatonNum.setter
    def setAutomatonNum(self, value):
        self._automaton_num = value

    # automaton_type Getter & Setter
    @property
    def automatonType(self):
        return self._automaton_type

    @automatonType.setter
    def setAutomatontype(self, value):
        self._automaton_type = value

    # tank_temp Getter & Setter
    @property
    def tankTemp(self):
        return self._tank_temp

    @tankTemp.setter
    def setTankTemp(self, value):
        self._tank_temp = value

    # outside_temp Getter & Setter
    @property
    def outsideTemp(self):
        return self._outside_temp

    @outsideTemp.setter
    def setOutsideTemp(self, value):
        self._outside_temp = value

    # milk_weight Getter & Setter
    @property
    def milkWeight(self):
        return self._milk_weight

    @milkWeight.setter
    def setMilkWeight(self, value):
        self._milk_weight = value

    # final_product_weight Getter & Setter
    @property
    def finalProductWeight(self):
        return self._final_product_weight

    @finalProductWeight.setter
    def setFinalProductWeight(self, value):
        self._final_product_weight = value

    # ph Getter & Setter
    @property
    def pH(self):
        return self._ph

    @pH.setter
    def setpH(self, value):
        self._ph = value

    # potassium Getter & Setter
    @property
    def potassium(self):
        return self._potassium

    @potassium.setter
    def setPotassium(self, value):
        self._potassium = value

    # sodium_chlorure_concentration Getter & Setter
    @property
    def sodiumChlorureConcentration(self):
        return self._sodium_chlorure_concentration

    @sodiumChlorureConcentration.setter
    def setSodiumChlorureConcentration(self, value):
        self._sodium_chlorure_concentration = value
        
    # salmonella_level Getter & Setter
    @property
    def salmonellaLevel(self):
        return self._salmonella_level

    @salmonellaLevel.setter
    def setSalmonellaLevel(self, value):
        self._salmonella_level = value

    # e_coli_level Getter & Setter
    @property
    def eColiLevel(self):
        return self._e_coli_level

    @eColiLevel.setter
    def setEColiLevel(self, value):
        self._e_coli_level = value

    # listeria_level Getter & Setter
    @property
    def listeriaLevel(self):
        return self._listeria_level

    @listeriaLevel.setter
    def setListeriaLevel(self, value):
        self._listeria_level = value        


def generateType(automaton):
    type = automaton.to_bytes(2, "big").hex()
    return type


def generateRandomData(min, max, step):
    return random.randrange(min, max, step)


def generateRandomDataFloat(min, max):
    return round(random.uniform(min, max), 1)
<<<<<<< HEAD:production-unite/main.py
=======


async def message(msg):
    async with websockets.connect(f"ws://localhost:{SERVER_PORT}") as socket:
        await socket.send(msg)
        print(await socket.recv())

>>>>>>> 522cf094123022da9329fbbba036980b4a57ddca:plc-python/main.py

def main():

    for automaton in range(1, AUTOMATON_QTY + 1):
<<<<<<< HEAD:production-unite/main.py
        plc_type = generateType(automaton)
=======
        automaton_type = generateType(automaton)
>>>>>>> 522cf094123022da9329fbbba036980b4a57ddca:plc-python/main.py
        tank_temp = generateRandomDataFloat(2.5, 4)
        outside_temp = generateRandomDataFloat(8, 14)
        milk_weigth = generateRandomData(3512, 4607, 1)
        final_product_weight = generateRandomData(3512, 4607, 1) # Need to be fixed
        ph = generateRandomDataFloat(6.8, 7.2)
        potassium = generateRandomData(35, 47, 1)
        sodium_chlorure_concentration = generateRandomDataFloat(1, 1.7)
        salmonella_level = generateRandomData(17, 31, 1)
        e_coli_level = generateRandomData(35, 49, 1)
        listeria_level = generateRandomData(28, 54, 1)

        unit = UnitProduction(UNIT_NUM, automaton, automaton_type, tank_temp, outside_temp, milk_weigth, final_product_weight, ph, potassium, sodium_chlorure_concentration, salmonella_level, e_coli_level, listeria_level)
        
        formated_data = dict()
        formated_data["unit_num"] = unit.unitNum
        formated_data["automaton_num"] = unit.automatonNum
        formated_data["automaton_type"] = unit.automatonType
        formated_data["tank_temp"] = unit.tankTemp
        formated_data["outside_temp"] = unit.outsideTemp
        formated_data["milk_weigth"] = unit.milkWeight
        formated_data["final_product_weight"] = unit.finalProductWeight
        formated_data["ph"] = unit.pH
        formated_data["potassium"] = unit.potassium
        formated_data["sodium_chlorure_concentration"] = unit.sodiumChlorureConcentration
        formated_data["salmonella_level"] = unit.salmonellaLevel
        formated_data["e_coli_level"] = unit.eColiLevel
        formated_data["listeria_level"] = unit.listeriaLevel
        formated_data["created_at"] = datetime.today().strftime('%Y-%m-%d %H:%M:%S')
        generated_data.append(formated_data)

    # Get unix date
    unix_date = datetime.utcnow().strftime("%s")
    # Generate json file name depending on automaton parameters
    json_file_name = "{}_{}_{}.json".format("paramunite", UNIT_NUM, unix_date)

    with open(json_file_name, "w") as json_file:
        json.dump(generated_data, json_file, ensure_ascii=False, indent=4)

    print("File exported with name : " + json_file_name)

    # Encode generated data before sending it 
    data_to_send = json.dumps(generated_data).encode()
    # Send encoded generated data throught socket
    asyncio.get_event_loop().run_until_complete(message(data_to_send))



if __name__ == "__main__":
    main()