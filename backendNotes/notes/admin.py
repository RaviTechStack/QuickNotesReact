from django.contrib import admin
from .models import notes_category, notes
# Register your models here.
admin.site.register((notes, notes_category))