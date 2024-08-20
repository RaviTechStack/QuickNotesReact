from django.db import models
from django.contrib.auth.models import User
import uuid
from autoslug import AutoSlugField

# Create your models here.
class notes_category(models.Model):
    category= [
        ("BUSINESS", "business"),
        ("PERSONAL", "personal"),
        ("IMPORTANT", "important"),
        ("GENRAL", "GENRAL")
    ]
    category_name = models.CharField(choices=category, max_length=40, default="GENRAL")

    def __str__(self):
        return self.category_name
 
class notes(models.Model):
    notes_title = models.CharField(max_length=100, null=False)
    notes_content = models.CharField(max_length=1000, null=False, )
    notes_slug = AutoSlugField(populate_from = "notes_title", unique=True)
    category = models.ForeignKey(notes_category, on_delete=models.CASCADE)
    created_at = models.DateField(auto_now_add=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.notes_title}"
   
    