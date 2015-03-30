import unittest
import matching

class HighOrSoberTestCase(unittest.TestCase):

    def setUp(self):
        self.soberFeatures = []
        self.highFeatures = []
        self.queryFeatures = []
        
    def test_highOrSober(self):
        a = matching.highOrSober(self.soberFeatures, self.highFeatures, self.queryFeatures)
        if(matching.diff(self.soberFeatures, self.queryFeatures) < matching.diff(self.highFeatures, self.queryFeatures)):
            b = "sober"
        else:
            b = "high"
        self.assertEqual(a, b, "You got fucked")

if __name__ == '__main__':
    unittest.main()
