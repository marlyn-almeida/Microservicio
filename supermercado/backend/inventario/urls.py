from django.urls import path
from .views import ProductoListView  # Asegúrate de que ProductoListView sea una vista basada en clase

urlpatterns = [
    path('productos/', ProductoListView.as_view(), name='producto-list'),
]
