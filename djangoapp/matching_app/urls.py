from django.conf.urls import patterns, url

from matching_app import views

urlpatterns = patterns('',
    url(r'^$', views.index, name='index'),
    url(r'^match/$', views.match, name='match'),                    
    url(r'^results/$', views.match, name='results'),                                          
)
