from django.db import models
from datetime import datetime

# Create your models here.
class Info(models.Model):
    nome = models.CharField(max_length=255)
    contato_email = models.CharField(max_length=255)
    contato_celular = models.CharField(max_length=255, blank=True)
    empresa = models.CharField(max_length=255, blank=True)
    produto_de_interesse = models.CharField(max_length=255, blank=True)
    motivo = models.CharField(max_length=1555, blank=True)
    data = models.DateTimeField(default=datetime.now())

    def __str__(self):
        return "Email: " + self.contato_email + " | Nome: " + self.nome