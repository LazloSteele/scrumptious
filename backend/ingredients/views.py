from django.shortcuts import render
from django.http import HttpResponse
from .models import Ingredient, Affinity
from .serializers import IngredientSerializer, AffinityWriteSerializer, AffinityReadSerializer
from rest_framework import viewsets


# Create your views here.
def home(request):
    return HttpResponse("Hello, world. You're at the ingredients home page.")


class IngredientViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows ingredients to be viewed or edited.
    """

    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer


class AffinityViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows affinities to be viewed or edited.
    """

    queryset = Affinity.objects.all()

    def get_serializer_class(self):
        if self.action in ["create", "update", "partial_update"]:
            return AffinityWriteSerializer
    
        return AffinityReadSerializer
