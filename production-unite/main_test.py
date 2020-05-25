import sys, os.path, re
import argparse
import unittest
import main

class testMain(unittest.TestCase):

    def test_generateType(self):
        automaton = 1
        result = main.generateType(automaton)

        self.assertTrue('str', type(result))
        self.assertEqual('0001', result)


    def test_generateRandomData(self):
        values = {
            "min": 20,
            "max": 50,
            "step": 1
        }
        result = main.generateRandomData(values["min"], values["max"], values["step"])

        self.assertTrue('int', type(result))
        self.assertLessEqual(values["min"], result)
        self.assertGreaterEqual(values["max"], result)


    def test_generateRandomDataFloat(self):
        values = {
            "min": 1.0,
            "max": 5.5
        }
        result = main.generateRandomDataFloat(values["min"], values["max"])

        self.assertTrue('float', type(result))
        self.assertLessEqual(values["min"], result)
        self.assertGreaterEqual(values["max"], result)


if __name__ == '__main__':
    unittest.main()
