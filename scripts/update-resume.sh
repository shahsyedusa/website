#!/bin/sh

wget -O resume.pdf https://github.com/shahdeys/resume/raw/master/resume.pdf && docker cp resume.pdf shah-website:/usr/share/nginx/html/resume.pdf
