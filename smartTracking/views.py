from django.shortcuts import render
from django.http import HttpResponse
from backendCode.geocoding import reverse_geocoding, geocoding_from_address
from backendCode.nearbyplaces import search_nearby_places
# Create your views here.


def searchnearby_address(request):
    location = request.POST['userlocationaddress']
    # print(location)

    data = geocoding_from_address(location)
    nearby_list = search_nearby_places(data['lat'], data['lng'])
    data.update({'nearlist': nearby_list})
    return render(request, 'smartTracking/searchnearby.html', data)


def searchnearby_latlng(request):
    location = str(request.POST['userLocation'])
    lat, lng = location.split(sep=',', maxsplit=1)
    formatted_address = reverse_geocoding(location)
    nearby_list = search_nearby_places(lat=lat, lng=lng)
    data = {
        'formatted_address': formatted_address,
        'nearlist': nearby_list
    }
    # print(location)
    return render(request, 'smartTracking/searchnearby.html', data)


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
