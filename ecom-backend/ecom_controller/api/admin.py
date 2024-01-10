from django.contrib import admin
from .models import Product
# Register your models here.

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price')  # Customize the fields displayed in the list view
    search_fields = ('name',) 
