from rest_framework import serializers
from .models import notes, notes_category
from django.contrib.auth.models import User


class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username"]

class categorySeriliser(serializers.ModelSerializer):
    class Meta:
        model = notes_category
        fields = ["category_name"]

class notesSerializer(serializers.ModelSerializer):
    category_id = serializers.PrimaryKeyRelatedField(queryset = notes_category.objects.all(), source="category")
    created_by_id = serializers.PrimaryKeyRelatedField(queryset = User.objects.all(), source="created_by")
    category = categorySeriliser(read_only = True)
    
    class Meta:
        model = notes
        # exclude = ["category", "created_by"]
        fields = "__all__"
        read_only_fields = ["id", "created_at",  "notes_slug", "category", "created_by"]