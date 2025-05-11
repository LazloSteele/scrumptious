from rest_framework import serializers
from .models import Ingredient, Affinity


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ["id", "name"]


class AffinityWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Affinity
        fields = ["id", "ingredient1", "ingredient2"]

    def validate(self, data):
        if data["ingredient1"] == data["ingredient2"]:
            raise serializers.ValidationError(
                "An ingredient cannot be related to itself."
            )
        return data


class AffinityReadSerializer(serializers.ModelSerializer):
    ingredient1 = IngredientSerializer(read_only=True)
    ingredient2 = IngredientSerializer(read_only=True)

    class Meta:
        model = Affinity
        fields = ["id", "ingredient1", "ingredient2"]
