from django.contrib import admin
from .models import Producto, Inventario

class ProductoAdmin(admin.ModelAdmin):
    # Asegúrate de que `nombre` no esté en `readonly_fields`
    readonly_fields = []  # Lista vacía, lo que permite editar todos los campos
    list_display = ('nombre', 'descripcion', 'precio', 'stock')
    search_fields = ('nombre',)  # Permite buscar por nombre

admin.site.register(Producto, ProductoAdmin)
admin.site.register(Inventario)
