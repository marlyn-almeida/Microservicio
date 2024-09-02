from django.db import models

class Cliente(models.Model):
    nombre = models.CharField(max_length=255)
    apellido = models.CharField(max_length=255)
    telefono = models.CharField(max_length=20)
    direccion = models.CharField(max_length=255)
    # id_tipo = models.ForeignKey(TipoID, on_delete=models.CASCADE)  # Elimina esta línea

    def __str__(self):
        return f"{self.nombre} {self.apellido}"
