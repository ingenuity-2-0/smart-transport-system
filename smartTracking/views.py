from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def searchnearby(request):
    location = request.POST['userLocation']
    print(location)
    return HttpResponse(location)
