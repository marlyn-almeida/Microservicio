from rest_framework import serializers
from .models import Venta, DetalleVenta


class DetalleVentaSerializer(serializers.ModelSerializer):
    producto = serializers.CharField(source='producto.nombre')  # Obtén el nombre del producto
    precio_total = serializers.ReadOnlyField()  # Calcula el precio total basado en la lógica

    class Meta:
        model = DetalleVenta
        fields = ['producto', 'cantidad', 'precio_total']


class VentaSerializer(serializers.ModelSerializer):
    cliente = serializers.CharField(source='cliente.nombre')  # Obtén el nombre del cliente
    detalles = DetalleVentaSerializer(many=True, read_only=True)

    class Meta:
        model = Venta
        fields = ['id', 'cliente', 'fecha', 'detalles']


