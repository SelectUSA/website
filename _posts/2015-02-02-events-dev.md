---
permalink: "events-dev.html"
layout: sidebar
title: Events
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

* * *

## 2015 SelectUSA Investment Summit 
<span class="imgright">[![President Obama Speaks at 2013 SelectUSA Summit](images/obama_at_summit-300x225.jpg "President Obama Speaks at 2013 SelectUSA Summit")](http://www.selectusasummit.com/) </span>

<span>Mark your calendar for the second&nbsp;</span>**SelectUSA Investment Summit**<span>&nbsp;on March 23-24, 2015,&nbsp;in the Washington, DC area. We’re bringing together&nbsp;</span>**investors**<span>&nbsp;from all over the world, as well as&nbsp;</span>**economic development organizations&nbsp;**<span>from every corner of the United States, high-level government officials, and others working to facilitate investment in the United States. As one of 2,500 participants, you’ll get access to&nbsp;</span>**unique networking opportunities**<span>, online matchmaking, insight from&nbsp;</span>**global CEOs and senior U.S. leaders**<span>, and discussions on the latest issues affecting investments. We hope to see you there!</span>

Please visit our **[2015 Summit website](http://www.selectusasummit.com)** to learn more about the event, registration, and exhibition/sponsorship opportunities.

* * *

##Infrastructure 101 Webinar Series

<span class="imgright">[![Infrastructure 101 Webinar](images/selectusa_infrastructure_101_webinar_2014-11-24_page_01_0-300x225.jpg "Infrastructure 101 Webinar")](/infrastructure-101-webinar-series)</span>

This three-part webinar series is designed to equip U.S. economic development organizations (EDOs) with the practical knowledge they need prior to the&nbsp;**[SelectUSA Investment Summit](http://www.selectusasummit.com/)**&nbsp;on March 23-24, 2015, where infrastructure investment will be one of the highlighted topics.

*   [Infrastructure 101 Webinar with the Department of Treasury](/infrastructure-101-webinar-series#Inf101)&nbsp;(November 24, 2014)
*   [Infrastructure 102 Webinar with the Department of Transportation](/infrastructure-101-webinar-series#Inf102)&nbsp;(December 15, 2014)
*   [Infrastructure 103 Webinar with the Department of Agriculture](/infrastructure-101-webinar-series#Inf103)&nbsp;(January 28, 2015)

You can access presentations and resources from these webinars on our **[Infrastructure 101 Webinar Series](/infrastructure-101-webinar-series)** page.

