from django.shortcuts import render

def home_view(request):
    return render(request,"home.html")
def skill_view(request):
    return render(request,"skills.html")

def about_view(request):
    return render(request,"about.html")

def cantact_view(request):
    return render(request,"cantact.html")

def certifications_view(request):
    return render(request,"certifications.html")

def education_view(request):
    return render(request,"education.html")

def projects_view(request):
    return render(request,"projects.html")

def experience_view(request):
    return render(request,"experience.html")

def drowsiness_view(request):
    return render(request,"drowsiness.html")

def ecommerce_view(request):
    return render(request,"ecommerce.html")