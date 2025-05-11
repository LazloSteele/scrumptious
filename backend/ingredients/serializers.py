from rest_framework import serializers
from .models import Ingredient, Affinity


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ["id", "name"]


class AffinitySerializer(serializers.ModelSerializer):
    ingredient1 = IngredientSerializer()
    ingredient2 = IngredientSerializer()

    class Meta:
        model = Affinity
        fields = ["id", "ingredient1", "ingredient2"]
