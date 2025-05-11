from django.urls import path
from .views import *

urlpatterns = [
    # Define your URL patterns here
    # Example:
    # path('ingredients/', IngredientListView.as_view(), name='ingredient-list'),
    path('',home, name='home'),
]