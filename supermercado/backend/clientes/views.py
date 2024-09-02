# clientes/views.py

from rest_framework import generics
from .models import Cliente
from .serializers import ClienteSerializer

class ClienteListView(generics.ListCreateAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
