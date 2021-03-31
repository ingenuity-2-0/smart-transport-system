# same as SmartTransportSystem > urls.py 
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('searchnearby_address/', views.searchnearby_address, name='searchnearby_address'),
    path('searchnearby_latlng/', views.searchnearby_latlng, name='searchnearby_latlng'),
    path('finddirection/', views.finddirection, name='finddirection'),
    path('findspecificbus/', views.findspecificbus, name='findspecificbus'),
    path('allbuses/', views.allbuses, name='allbuses'),
]
