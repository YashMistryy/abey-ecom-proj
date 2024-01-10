# here we create each serializer for user related stuff like login or registration

from rest_framework import serializers
from users.models import CustomUser


class RegisterUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('email','password')
        extra_kwargs = {'password':{'write_only':True}}
    def create_user(self,validated_data):
        password = validated_data.pop('password',None)
        email = validated_data.get('email')
        existing_user = CustomUser.objects.filter(email=email).first()
        if existing_user:
            raise serializers.ValidationError({'email': 'User with this email already exists.'})
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
        