from django.shortcuts import render

# Create your views here.
def pokemon(request):
    return render (request, 'index.html')