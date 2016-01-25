# Create your models here.
# -*- coding: utf-8 -*-
from django.db import models
from django.contrib.auth.models import User

from django.db import models
from django.db.models import signals

class WeiboUser(models.Model):
	name=models.CharField(max_length=128)
	contentNumber=models.IntegerField(default=0)
	class Meta(object):
		db_table = 'weibo_user'

class WeiboContent(models.Model):
	owner = models.ForeignKey(WeiboUser)
	content=models.TextField(default='')
	class Meta(object):
		db_table = 'weibo_content'
