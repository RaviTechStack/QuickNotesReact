from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .models import notes
from . serializers import notesSerializer
from rest_framework.pagination import PageNumberPagination

class NotesPagination(PageNumberPagination):
    page_size = 6  
    page_size_query_param = 'page_size'
    max_page_size = 100

class NotesViewSet(ModelViewSet):
    queryset = notes.objects.all()
    serializer_class = notesSerializer
    pagination_class = NotesPagination

   