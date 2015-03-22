def diff(image1, image2):
    img1 = Image.open(image1)
    img2 = Image.open(image2)
    pixelMap1 = numpy.asarray(img1)
    pixelMap2 = numpy.asarray(img2)
    return numpy.linalg.norm(pixelMap1-pixelMap2)

def highOrSober(soberImage, highImage, queryImage):
    if(diff(soberImage, queryImage) < diff(highImage, queryImage)):
        return "sober"
    else:
        return "high"

import numpy
import Image
