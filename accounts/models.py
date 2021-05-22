from django.db import models

# Create your models here.


class Feedback(models.Model):
    name = models.CharField(max_length=25)
    email = models.EmailField()
    subject = models.CharField(max_length=50)
    message = models.TextField()
