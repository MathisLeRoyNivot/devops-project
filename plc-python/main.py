import os
import json
import random
import numpy
from datetime import datetime

UNIT_NUM = 1
AUTOMATON_QTY = 10
generated_data = list()

class UnitProduction:
    def __init__(self, unit_num, plc_num, plc_type, tank_temp, outside_temp, milk_weight, final_product_weight, ph, potassium, sodium_chlorure_concentration, salmonella_lvl, e_coli_lvl, listeria_lvl):
        self._unit_num = unit_num
        self._plc_num = plc_num
        self._plc_type = plc_type
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

    # plc_num Getter & Setter
    @property
    def plcNum(self):
        return self._plc_num

    @plcNum.setter
    def setPlcNum(self, value):
        self._plc_num = value

    # plc_type Getter & Setter
    @property
    def plcType(self):
        return self._plc_type

    @plcType.setter
    def setplctype(self, value):
        self._plc_type = value

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
    return ""


def generateRandomData(min, max, step):
    return random.randrange(min, max, step)


def generateRandomDataFloat(min, max, step):
    return round(random.choice(numpy.arange(min, max, step)), 2)

def main():

    for automaton in range(1, AUTOMATON_QTY + 1):
        plc_type = generateType(automaton)
        tank_temp = generateRandomDataFloat(2.5, 4, 0.1)
        outside_temp = generateRandomDataFloat(8, 14, 0.1)
        milk_weigth = generateRandomData(3512, 4607, 1)
        final_product_weight = generateRandomData(3512, 4607, 1) # Need to be fixed
        ph = generateRandomDataFloat(6.8, 7.2, 0.1)
        potassium = generateRandomData(35, 47, 1)
        sodium_chlorure_concentration = generateRandomDataFloat(1, 1.7, 0.1)
        salmonella_level = generateRandomData(17, 31, 1)
        e_coli_level = generateRandomData(35, 49, 1)
        listeria_level = generateRandomData(28, 54, 1)

        data = UnitProduction(UNIT_NUM, automaton, plc_type, tank_temp, outside_temp, milk_weigth, final_product_weight, ph, potassium, sodium_chlorure_concentration, salmonella_level, e_coli_level, listeria_level)
        
        formated_data = dict()
        formated_data["unit_num"] = data.unitNum
        formated_data["plc_num"] = data.plcNum
        formated_data["plc_type"] = data.plcType
        formated_data["tank_temp"] = data.tankTemp
        formated_data["outside_temp"] = data.outsideTemp
        formated_data["milk_weigth"] = data.milkWeight
        formated_data["final_product_weight"] = data.finalProductWeight
        formated_data["ph"] = data.pH
        formated_data["potassium"] = data.potassium
        formated_data["sodium_chlorure_concentration"] = data.sodiumChlorureConcentration
        formated_data["salmonella_level"] = data.salmonellaLevel
        formated_data["e_coli_level"] = data.eColiLevel
        formated_data["listeria_level"] = data.listeriaLevel
        generated_data.append(formated_data)

    unix_date = datetime.utcnow().timestamp()
    json_file_name = "{}_{}_{}.json".format("test", UNIT_NUM, unix_date)

    with open(json_file_name, "w") as json_file:
        json.dump(generated_data, json_file, ensure_ascii=False, indent=4)

    print("File exported with name : " + json_file_name)

if __name__ == "__main__":
    main()