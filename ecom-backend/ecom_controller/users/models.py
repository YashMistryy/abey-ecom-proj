from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager, PermissionsMixin
from django.utils.translation import gettext as _
from django.utils import timezone
# Custom User for our project wiht its custom manager

class CustomUserManager(BaseUserManager):
    def create_superuser(self,email,user_name,first_name,password,**other_fields):
        other_fields.setdefault('is_staff',True)
        other_fields.setdefault('is_active',True)
        other_fields.setdefault('is_superuser',True)
        
        if other_fields.get('is_staff') is not True:
            raise ValueError("Superuser must be assigned to is_staff = True")   
        if other_fields.get('is_superuser') is not True:
            raise ValueError("Superuser must be assigned to is_superuser = True")        
        return self.create_user(email,user_name,first_name,password,**other_fields)
        
    def create_user(self,email,user_name,first_name,password,**other_fields):
        if not email:
            raise ValueError(_("You must provide a valid email!"))
        email = self.normalize_email(email)
        user = self.model(email=email,user_name=user_name,first_name=first_name,**other_fields)
        user.set_password(password)
        user.save()
        return user

class CustomUser(AbstractBaseUser,PermissionsMixin):
    email = models.EmailField(_("email address"), unique=True)
    user_name = models.CharField(_("user name - unique"), max_length=50 , unique=True)
    first_name = models.CharField(_("first name of user"), max_length=50)
    last_name = models.CharField(_("last name of user"), max_length=50)
    start_date = models.DateTimeField(default=timezone.now)
    about_info = models.TextField(_("info about user"),max_length=500)
    is_staff = models.BooleanField(_("is user a staff , having admin permissions"),default=False)
    is_active = models.BooleanField(_("is user active"),default=False)
    objects = CustomUserManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_name','first_name']
    
    def __str__(self):
        return self.user_name
    

