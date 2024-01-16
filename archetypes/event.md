---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
publishDate: "{{ .Date }}" #Published Date
date: "{{ .Date }}" #Event Date
type: "event"
image: "images/events/_placeholder.png"
author: "Praba"
description: "[REPLACE THIS]"
location: "[REPLACE THIS]"
event_gallery: false
gallery_folder: "images/events/{{ .Name }}" #Create the folder manually & upload images (Allowed extensions: JPG, JPEG & PNG)
draft: true


---

### About Event
