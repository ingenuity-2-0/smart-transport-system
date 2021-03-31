import requests
from urllib.parse import urlencode
import json

api_key = "Your API KEY"


def search_nearby_places(lat, lng):
    places_endpoint = "https://maps.googleapis.com/maps/api/place/nearbysearch/json"
    params = {
        "key": api_key,
        "location": f"{lat},{lng}",
        "radius": 500,
        "keyword": "Bus stop"
    }
    params_encoded = urlencode(params)
    places_url = f"{places_endpoint}?{params_encoded}"

    r2 = requests.get(places_url)
    # with open('test_filenear.json', 'w') as file:
    #     json.dump(r2.json(), file)
    nearby_places_list = []
    for i in range(len(r2.json()['results'])):
        address = r2.json()['results'][i]['name'] + ', ' + r2.json()['results'][i]['vicinity'] + ', Bangladesh'
        nearby_places_list.append(address)
    # print(nearby_places_list)
    l = list(dict.fromkeys(nearby_places_list))
    # print(len(l))
    return l


# search_nearby_places(23.7570343, 90.3879885)
