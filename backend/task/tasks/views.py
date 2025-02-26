from rest_framework import viewsets
from drf_spectacular.utils import extend_schema, extend_schema_view
from .serializer import TaskSerializer
from .models import Task

@extend_schema_view(
    list=extend_schema(summary="Obtener lista de tareas", description="Devuelve todas las tareas almacenadas"),
    retrieve=extend_schema(summary="Obtener una tarea específica", description="Devuelve una tarea en base a su ID"),
    create=extend_schema(summary="Crear nueva tarea", description="Crea una nueva tarea con los datos proporcionados"),
    update=extend_schema(summary="Actualizar tarea", description="Actualiza una tarea existente"),
    partial_update=extend_schema(summary="Actualizar parcialmente una tarea", description="Modifica algunos campos de una tarea"),
    destroy=extend_schema(summary="Eliminar tarea", description="Elimina una tarea de la base de datos")
)
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
