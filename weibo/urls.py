from django.conf.urls import patterns, include, url

from django.contrib import admin
from indexweibo import views as admin_view
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'weibo.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', admin_view.index),
    url(r'^init$', admin_view.initdate),
    url(r'^postdata/$', admin_view.postdata),
)
