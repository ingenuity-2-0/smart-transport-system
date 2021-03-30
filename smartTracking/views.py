from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def searchnearby(request):
    location = request.POST['userLocation']
    print(location)
    return render(request, 'smartTracking/searchnearby.html')


def finddirection(request):
    return render(request, 'smartTracking/finddirection.html')


def findspecificbus(request):
    return render(request, 'smartTracking/findspecificbus.html')


def allbuses(request):
    return render(request, 'smartTracking/allbuses.html')


# urls of smarttracking apps
# {% url 'searchnearby'%}
# {% url 'finddirection'%}
# {% url 'findspecificbus'%}
# {% url 'allbuses'%}
