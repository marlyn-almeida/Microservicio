# clientes/urls.py
from django.urls import path
from .views import ClienteListView  # Asegúrate de que ClienteListView sea una clase basada en vista

urlpatterns = [
    path('', ClienteListView.as_view(), name='cliente-list'),
]


