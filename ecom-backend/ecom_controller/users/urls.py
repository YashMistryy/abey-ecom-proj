from django.urls import path , include
from users.views import RegisterUserView
urlpatterns = [
    path('register/',RegisterUserView.as_view())
]
