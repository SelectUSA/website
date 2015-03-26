---
permalink: "event-calendar.html"
layout: default
title: Event Calendar
published: true
---

<html>
<head>
<meta charset='utf-8' />

<link rel="stylesheet" href="{{ site.baseurl }}/fullcalendar/jquery-ui.min.css">
<link rel="stylesheet" href="{{ site.baseurl }}/fullcalendar/fullcalendar.css">
<link rel="stylesheet" href="{{ site.baseurl }}/fullcalendar/bootstrap.css">
<link rel="stylesheet" href="{{ site.baseurl }}/fullcalendar/bootstrap-theme.css">
<script src="{{ site.baseurl }}/fullcalendar/moment.js"></script>
<style type="text/css"></style>
<script src="{{ site.baseurl }}/fullcalendar/jquery.min.js"></script>
<script src="{{ site.baseurl }}/fullcalendar/fullcalendar.min.js"></script>
<!-- script src="{{ site.baseurl }}/fullcalendar/bootstrap.min.js"></script -->
<!-- script src="{{ site.baseurl }}/fullcalendar/gcal.js"></script  -->

<script>


	$(document).ready(function () {
    $('#cal').fullCalendar({
        events: [{% assign sorted_pages = (site.categories.events) %}{% for post in sorted_pages %}
    {
      title: '{{ post.title }}',
        start:'{{ post.calendar-start }}T13:47:24',
        end: '{{ post.calendar-end }}T13:47:24',
        description: '{{ post.date-display-start }} - {{ post.date-display-end }}',
        url: '{{ post.url }}',
        allday: 'true',
     }{% unless forloop.last %},{% endunless %}
    {% endfor %}
],
        header: {
            left: '',
            center: 'prev title next',
            right: ''
        },
        eventClick: function (event, jsEvent, view) {
            $('#modalTitle').html(event.title);
            $('#modalBody').html(event.description);
            $('#eventUrl').attr('href', event.url);
            $('#fullCalModal').modal();
            return false;
        }
    });
});

</script>

</head>
<body>
<div id="cal"></div>
<div id="fullCalModal" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span>  <span class="sr-only">close</span>

                </button>
                 <h4 id="modalTitle" class="modal-title"></h4>

            </div>
            <div id="modalBody" class="modal-body"></div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button class="btn btn-primary"><a id="eventUrl" class="eventURL" target="_blank">Event Page</a>

                </button>
            </div>
        </div>
    </div>
</div>

</body>
</html>
