from django.shortcuts import render
from users.serializers import RegisterUserSerializer
from rest_framework.views import APIView
from rest_framework import status 
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
# Create your views here.

class RegisterUserView(APIView):
    permission_classes = [AllowAny]
    # here we create a new user
    def post(self,request):
        print(request.data)
        reg_serializer = RegisterUserSerializer(data=request.data)
        if reg_serializer.is_valid():
            new_user = reg_serializer.save()
            if new_user:
                return Response(status = status.HTTP_201_CREATED ,data={'msg':'user created successfully!'})
        return Response(status=status.HTTP_406_NOT_ACCEPTABLE,data=reg_serializer.errors)
        