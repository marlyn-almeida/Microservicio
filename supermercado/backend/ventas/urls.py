from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import VentaViewSet, DetalleVentaViewSet

# Crear el router y registrar los viewsets
router = DefaultRouter()
router.register(r'ventas', VentaViewSet, basename='venta')
router.register(r'detalles', DetalleVentaViewSet, basename='detalle-venta')

urlpatterns = [
    path('', include(router.urls)),
]
