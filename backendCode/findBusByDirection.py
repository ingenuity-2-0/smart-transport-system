import os

import googlemaps
from decouple import config

# api_key = os.environ.get("API_KEY")  # Get API Key From Your Device "System Environment Variable"
api_key = config('KEY2')


def find_distance(route):
    total_distance = 0.00
    gmaps = googlemaps.Client(api_key)
    for i in range(len(route)):
        route[i] = route[i] + ' Bus Stop, Dhaka'
    for i in range(len(route) - 1):
        ori = route[i]
        des = route[i + 1]
        distance_raw = gmaps.distance_matrix(ori, des, region='BD')
        distance_in_string = distance_raw['rows'][0]['elements'][0]['distance']['text']
        if distance_in_string[-1] == 'm' and distance_in_string[-2] == ' ':
            distance = distance_in_string[:-2]
            des = float(distance)
            des /= 1000

        else:
            distance = distance_in_string[:-3]
            des = float(distance)
        total_distance = total_distance + des
        # print('From: ' + distance_raw['origin_addresses'][0])
        # print('To: ' + distance_raw['destination_addresses'][0])
        # print(distance_in_string)
        # distance = float(distance_in_string[:-3])
        # print(distance)
        # print(type(distance))
        # print('----------------')
    # print(total_distance)
    return total_distance

# r = ['Paltan', 'Press Club', 'High Court', 'Motsho Bhaban', 'Shahbag', 'Bangla Motor', 'Kawran Bazar', 'Farmgate']
#
# find_distance(r)
