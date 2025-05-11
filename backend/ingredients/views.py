from django.shortcuts import render
from django.http import HttpResponse
from .models import Ingredient, Affinity
from .serializers import IngredientSerializer, AffinitySerializer


# Create your views here.
def home(request):
    return HttpResponse("Hello, world. You're at the ingredients home page.")


class IngredientList(generics.ListCreateAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer


class IngredientDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer


class AffinityList(generics.ListCreateAPIView):
    queryset = Affinity.objects.all()
    serializer_class = AffinitySerializer


class AffinityDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Affinity.objects.all()
    serializer_class = AffinitySerializer
