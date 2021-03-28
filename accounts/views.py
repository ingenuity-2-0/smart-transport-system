from django.shortcuts import render, redirect
from django.contrib.auth.models import User, auth
from django.contrib import messages
import re
from django.http import HttpResponseRedirect


# Create your views here.


def account(request):
    return render(request, 'accounts/loginform.html')  # render login form


def login(request):
    user_name = request.POST['loginemail']
    password = request.POST['loginPassword']
    # ------------------------------
    values = {
        'user_name': user_name,
    }
    # ------------------------------
    regex = '^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$'  # mail format
    if re.search(regex, user_name):  # imported re | checking the mail format
        user = auth.authenticate(email=user_name, password=password)  # taking mail as user_name
    else:
        user = auth.authenticate(username=user_name, password=password)
    if user is not None:  # user created
        auth.login(request, user)  # loged in
        return redirect('/')  # to home
    else:
        message = {
            'from': 'login',
            'error': 'Invalid Credentials',
            'value': values
        }
        return render(request, 'accounts/loginform.html', message)
    # return render(request, './accounts/login.html', {'data': 'login is successful'})


def register(request):  # getting new user info
    user_name = request.POST['userid']
    full_name = str(request.POST['fullname'])
    email = request.POST['emailAddress']
    password = request.POST['password']
    # -----------------------------------
    values = {
        'user_name': user_name,
        'full_name': full_name,
        'email': email,
    }
    # -----------------------------------
    # detect the number of words in fullname
    length_of_fullname = len(full_name.split())
    if length_of_fullname == 1:
        first_name = full_name
        last_name = ''
    else:
        first_name, last_name = full_name.rsplit(maxsplit=1)  # splitting name as reverse order

    if User.objects.filter(username=user_name).exists():  # checking user name from database
        message = {
            'from': 'signup',
            'error': 'User name is already taken',
            'values': values  # to stay in form
        }
        return render(request, 'accounts/loginform.html', message)  # return with message

    elif User.objects.filter(email=email).exists():  # checking email from database
        message = {
            'from': 'signup',
            'error': 'Email is already taken',
            'values': values  # to stay in form
        }
        return render(request, 'accounts/loginform.html', message)  # return with message

    else:
        user = User.objects.create_user(username=user_name, password=password, email=email, first_name=first_name,
                                        last_name=last_name)
        user.save()
        # After registration auto login the user and redirect to home page
        user = auth.authenticate(username=user_name, password=password)
        auth.login(request, user)
        return redirect('/')  # to home
    # return render(request, 'accounts/login.html', {'data': 'registration is successful'})


def logout(request):
    auth.logout(request)
    return redirect('/')  # to home
