from django.db import models

# Create your models here.


class Route(models.Model):
    route_id = models.AutoField(primary_key=True)
    routes = models.TextField()


class BusInformation(models.Model):
    bus_id = models.AutoField(primary_key=True)
    bus_name = models.CharField(max_length=255)
    bus_type = models.CharField(max_length=15)
    route_id = models.ForeignKey('Route', on_delete=models.CASCADE)


class Map(models.Model):
    map_id = models.AutoField(primary_key=True)
    bus_id = models.ForeignKey('BusInformation', on_delete=models.CASCADE)
    way_points = models.TextField()

