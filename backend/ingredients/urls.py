from django.urls import path
from .views import *

urlpatterns = [
    # Define your URL patterns here
    # Example:
    # path('ingredients/', IngredientListView.as_view(), name='ingredient-list'),
    path("", home, name="home"),
    path("ingredients/", IngredientList.as_view(), name="ingredient-list"),
    path("ingredients/<int:pk>/", IngredientDetail.as_view(), name="ingredient-detail"),
    path("affinities/", AffinityList.as_view(), name="affinity-list"),
    path("affinities/<int:pk>/", AffinityDetail.as_view(), name="affinity-detail"),
]
