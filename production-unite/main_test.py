import sys, os.path, re
import argparse
import unittest
import main

class testMain(unittest.TestCase):

    def test_generateTypeSuccess(self):
        result = main.generateType(1)
        self.assertTrue('str', type(result))
        self.assertEqual('0001', result)


    def test_generateTypeFailure(self):
        result = main.generateType(10)
        self.assertFalse('str', type(result))
        self.assertNotEqual('0001', result)


    def test_generateRandomDataSuccess(self):
        result = main.generateRandomData(1, 10, 1)
        self.assertTrue('int', type(result))


    def test_generateRandomDataFailure(self):
        result = main.generateRandomData(1, 10, 1)
        self.assertFalse('int', type(result))


    def test_generateRandomDataFloatSucess(self):
        result = main.generateRandomDataFloat(1.0, 5.5)
        self.assertTrue('float', type(result))

    
    def test_generateRandomDataFloatFailure(self):
        result = main.generateRandomDataFloat(1.0, 5.5)
        self.assertTrue('float', type(result))
        self.assertTrue('float', type(result))


if __name__ == '__main__':
    unittest.main()
