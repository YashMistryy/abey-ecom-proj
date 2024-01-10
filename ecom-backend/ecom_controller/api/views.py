from django.shortcuts import render
from django.http import *
# Create your views here.


def say_hello(request):
    print("data for POST request : ",request.POST)
    print('data for GET request :',request.GET)
    
    return HttpResponse("hello from server")