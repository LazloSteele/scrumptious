from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import home, IngredientViewSet, AffinityViewSet

router = DefaultRouter()
router.register(r'ingredients', IngredientViewSet)
router.register(r'affinities', AffinityViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
