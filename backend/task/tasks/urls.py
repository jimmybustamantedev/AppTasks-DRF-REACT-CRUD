from django.urls import path
from rest_framework import routers
from .views import TaskView
from django.urls import include
from rest_framework.schemas import get_schema_view
from django.urls import path
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView, SpectacularRedocView


# API versioning
router = routers.DefaultRouter()
router.register(r'tasks', TaskView, 'tasks')

urlpatterns = [
    path('api/v1/', include(router.urls)), # Se genera automatico GET, POST, PUT, DELETE
    
    path('docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),  # URL más corta
    path('schema/', SpectacularAPIView.as_view(), name='schema'),  # Esquema OpenAPI JSON (para herramientas externas)
]

