from django.db import models


# Create your models here.
class Ingredient(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.name}"

class Affinity(models.Model):
    ingredient1 = models.ForeignKey(Ingredient, related_name='ingredient1', on_delete=models.CASCADE)
    ingredient2 = models.ForeignKey(Ingredient, related_name='ingredient2', on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.ingredient1} goes well with {self.ingredient2}"