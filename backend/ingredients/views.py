from django.shortcuts import render
from django.http import HttpResponse
from .models import Ingredient, Affinity
from .serializers import (
    IngredientSerializer,
    AffinityWriteSerializer,
    AffinityReadSerializer,
)
from rest_framework import viewsets
from rest_framework.filters import SearchFilter


# Create your views here.
def home(request):
    return HttpResponse("Hello, world. You're at the ingredients home page.")


class IngredientViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows ingredients to be viewed or edited.
    """

    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer
    filter_backends = [SearchFilter]
    search_fields = ["name"]

    def get_queryset(self):
        queryset = super().get_queryset()
        affinity_param = self.request.query_params.get("affinityTo")

        if affinity_param:
            try:
                ids = [int(i) for i in affinity_param.split(",") if i.strip().isdigit()]
                if ids:
                    # Example logic: return ingredients that share tags or categories with selected ones
                    # You should replace this with your actual affinity logic
                    queryset = queryset.filter(related_ingredients__id__in=ids).distinct()
            except ValueError:
                pass  # Fall back to unfiltered if there's an error

        return queryset


class AffinityViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows affinities to be viewed or edited.
    """

    queryset = Affinity.objects.all()

    def get_serializer_class(self):
        if self.action in ["create", "update", "partial_update"]:
            return AffinityWriteSerializer

        return AffinityReadSerializer
