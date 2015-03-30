import numpy

def diff(features1, features2):
    pixelMap1 = numpy.asarray(features1)
    pixelMap2 = numpy.asarray(features2)
    return numpy.linalg.norm(pixelMap1-pixelMap2)

def highOrSober(soberFeatures, highFeatures, queryFeatures):
    if(diff(soberFeatures, queryFeatures) < diff(highFeatures, queryFeatures)):
        return "sober"
    else:
        return "high"

