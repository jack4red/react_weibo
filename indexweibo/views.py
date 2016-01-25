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
	weiboDate={}
	for content in allContent:
		content_name=WeiboUser.objects.get(id=content.owner_id).name
		content_content=content.content
		weiboDate[content_name]=content_content

	response = create_response(200)
	response.data=json.dumps(weiboDate)
	return response.get_response()