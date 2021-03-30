# same as SmartTransportSystem > urls.py 
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('searchnearby/', views.searchnearby, name='searchnearby')
]
