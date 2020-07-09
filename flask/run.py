# -*- coding: utf-8 -*-
import os.path

from flask import Flask
from flask import render_template

template_folder = os.path.abspath('./../react/build')
static_folder = os.path.abspath('./../react/build')
app = Flask(__name__, static_folder=static_folder, template_folder=template_folder, static_url_path='/')

@app.route('/')
@app.route('/contact')
@app.route('/rules')
@app.route('/sources')
@app.route('/sponsors')
@app.route('/releases')
def route():
    return render_template('/index.html')