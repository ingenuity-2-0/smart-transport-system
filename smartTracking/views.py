from django.shortcuts import render
from django.http import HttpResponse
from backendCode.geocoding import reverse_geocoding, geocoding_from_address
from backendCode.nearbyplaces import search_nearby_places
from home_page.models import BusInformation
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
    buses = BusInformation.objects.all()
    buses_list = []
    for bus in buses:
        ssource_destination = str(bus.bus_sourcetodestination)
        start, end = ssource_destination.split(sep='-', maxsplit=1)
        routes = bus.route_id.routes
        routes = routes.split(sep=',')
        design = str(routes[0])
        for r in range(1, len(routes) - 1):
            design = design + '<->' + str(routes[r])
        data = {
            'bus_id': bus.bus_id,
            'bus_name': bus.bus_name,
            'start': start,
            'end': end,
            'routes': design
        }
        buses_list.append(data)
    contex = {
        'contex': buses_list
    }
    # print(routes)
    return render(request, 'smartTracking/allbuses.html', contex)


# urls of smarttracking apps
# {% url 'searchnearby'%}
# {% url 'finddirection'%}
# {% url 'findspecificbus'%}
# {% url 'allbuses'%}
