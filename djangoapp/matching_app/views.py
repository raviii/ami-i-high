from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.template import RequestContext, loader
from django.views.decorators.csrf import csrf_exempt
from django.core.urlresolvers import reverse
import sys
sys.path.insert(0, './core_functions')
import matching

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

@csrf_exempt
def match(request):
    [highFeatures, soberFeatures, queryFeatures] = [request.POST['highFeatures'], request.POST['soberFeatures'], request.POST['queryFeatures']]
    ans = matching.highOrSober(highFeatures, soberFeatures, queryFeatures)
    template = loader.get_template('matching_app/index.html')
    
    context = RequestContext(request, {
        'ans': ans,
        })
    #return HttpResponse(template.render(context))
    
    return render(request, 'matching_app/index.html', {'ans': ans})
    #return HttpResponseRedirect('/matchingapp/results')

def results(request,highFeatures):
    return HttpResponse("hi")
    #return HttpResponse("hello " + highFeatures)
    #return render(request, 'matching_app/index.html', {'highFeatures': highFeatures})
