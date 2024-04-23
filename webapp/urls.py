from django.urls import path
from . import views

urlpatterns = [
    path('',views.home_view ,name = "home"),
    path('skills ',views.skill_view ,name = "skills"),
    path('about ',views.about_view ,name = "about"),
    path('cantact ',views.cantact_view ,name = "cantact"),
    path('certifications ',views.certifications_view ,name = "certifications"),
    path('education ',views.education_view ,name = "education"),
    path("projects",views.projects_view , name ="projects"),
    path("experience",views.experience_view , name ="experience"),
    path("drowsiness",views.drowsiness_view , name ="drowsiness"),
    path("ecommerce",views.ecommerce_view , name ="ecommerce")




    # Add other URL patterns as needed
]
