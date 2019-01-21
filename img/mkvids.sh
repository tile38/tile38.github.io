#!/bin/sh

set -e

# hero desktop video
ffmpeg -y -i hero-desktop-full.mp4 -vf "scale=1776:1000" -movflags +faststart \
    -c:v libx264 -profile:v high -level 4.2 -crf 24 hero-desktop@2x.mp4
ffmpeg -y -i hero-desktop@2x.mp4 -vf "scale=888:500" -movflags +faststart \
    -c:v libx264 -profile:v high -level 4.2 -crf 24 hero-desktop.mp4
ffmpeg -y -i hero-desktop@2x.mp4 -vframes 1 hero-desktop.jpg


# hero mobile video
ffmpeg -y -i hero-mobile-full.mp4 -vf "scale=1776:1000" -movflags +faststart \
    -c:v libx264 -profile:v high -level 4.2 -crf 24 hero-mobile@2x.mp4
ffmpeg -y -i hero-mobile@2x.mp4 -vf "scale=888:500" -movflags +faststart \
    -c:v libx264 -profile:v high -level 4.2 -crf 24 hero-mobile.mp4
ffmpeg -y -i hero-mobile@2x.mp4 -vframes 1 hero-mobile.jpg


# hero geofences
ffmpeg -y -i geofences-full.mp4 -vf "scale=1280:720" -movflags +faststart \
    -c:v libx264 -profile:v high -level 4.2 -crf 24 geofences@2x.mp4
ffmpeg -y -i geofences@2x.mp4 -vf "scale=640:360" -movflags +faststart \
    -c:v libx264 -profile:v high -level 4.2 -crf 24 geofences.mp4
ffmpeg -y -i geofences@2x.mp4 -vframes 1 geofences.jpg


# hero geospatial
ffmpeg -y -i geospatial-full.mp4 -vf "scale=1280:720" -movflags +faststart \
    -c:v libx264 -profile:v high -level 4.2 -crf 24 geospatial@2x.mp4
ffmpeg -y -i geospatial@2x.mp4 -vf "scale=640:360" -movflags +faststart \
    -c:v libx264 -profile:v high -level 4.2 -crf 24 geospatial.mp4
ffmpeg -y -i geospatial@2x.mp4 -vframes 1 geospatial.jpg

