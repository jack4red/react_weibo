# -*- coding: utf-8 -*-
from __future__ import division

import os
import sys
import json

from django.http import HttpResponseRedirect, HttpResponse, HttpRequest, Http404
from django.template import Context, RequestContext

from django.shortcuts import render_to_response, render
from django.contrib.auth.models import User
from django.contrib import auth
from core.jsonresponse import create_response

from models import *

def index(request):
	c = RequestContext(request, {
		
	})

	return render_to_response('weibo.html', c)

def initdate(request):
	allContent=WeiboContent.objects.all()
	Date=[]
	for content in allContent:
		weiboDate={}
		content_name=WeiboUser.objects.get(id=content.owner_id).name
		weiboDate['content']=content.content
		weiboDate['name']=content_name
		Date.append(weiboDate)

	response = create_response(200)
	response.data=json.dumps(Date)
	return response.get_response()

def postdata(request):
	content=request.POST.get('data')
	print content,'111'
	WeiboContent.objects.create(owner_id=1,content=content)
	response = create_response(200)
	return response.get_response()