from django.db import models


# Create your models here.
class Ingredient(models.Model):
    name = models.CharField(max_length=255)
    affinities = models.ManyToManyField(
        "self", through="Affinity", symmetrical=False, related_name="related_ingredients"
    )

    def __str__(self):
        return f"{self.name}"


class Affinity(models.Model):
    ingredient1 = models.ForeignKey(
        Ingredient, related_name="ingredient1", on_delete=models.CASCADE
    )
    ingredient2 = models.ForeignKey(
        Ingredient, related_name="ingredient2", on_delete=models.CASCADE
    )

    class Meta:
        unique_together = ("ingredient1", "ingredient2")

    ## Ensure that the relationship is symmetrical and not self-referential
    def save(self, *args, **kwargs):
        if self.ingredient1 == self.ingredient2:
            raise ValueError("An ingredient cannot be related to itself.")
        
        super().save(*args, **kwargs)

        # Create the reverse relationship if it doesn't exist
        if not Affinity.objects.filter(
            ingredient1=self.ingredient2, ingredient2=self.ingredient1
        ).exists():
            Affinity.objects.create(
                ingredient1=self.ingredient2, ingredient2=self.ingredient1
            )

    def __str__(self):
        return f"{self.ingredient1} goes well with {self.ingredient2}"
