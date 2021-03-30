from django.db import models


# 3 models are created

class Route(models.Model):
    route_id = models.AutoField(primary_key=True)  # auto generated
    routes = models.TextField()  # place name as text


class BusInformation(models.Model):
    bus_id = models.AutoField(primary_key=True)  # auto generated
    bus_name = models.CharField(max_length=255)  # bus name
    bus_sourcetodestination = models.CharField(max_length=80)  # Source to destination
    bus_viaroad = models.TextField()  # for regular expression operation
    bus_type = models.CharField(max_length=15)  # bus type
    route_id = models.ForeignKey('Route', on_delete=models.CASCADE)  # added foreignKey from Route Table


class Map(models.Model):
    map_id = models.AutoField(primary_key=True)  # map id
    bus_id = models.ForeignKey('BusInformation', on_delete=models.CASCADE)  # added foreignKey from BusInformation Table
    way_points = models.TextField()  # waypoint as text
