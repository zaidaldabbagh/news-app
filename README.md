# News Middleware API

## Intro

This .Net activity is a way for you to show us your C# skills -
we’re just as interested in how you think through a problem and approach
designing a solution as we are in the API you build.

Please give this page a read through as soon as possible, and ask any
questions you might have via email.

### Before we come back together

Spend **up to an hour** working on the brief. We do not expect this entire
task to be completed during this time. Whatever you get done in this
time is OK with us.

### When we come back together

We will spend time reviewing what you have completed. We will be discussing
your technical choices and progress. After that, you will be pairing with
another of our .Net developers to extend the work you have already
completed.

## Brief

The site we are building today is the first part of a fictional news aggregation
website. This API will sit between the news sources and the frontend of the website.

- Do not worry about the front end. This is an API task.
- Create an endpoint to retrieve the latest news stories
- Create an endpoint to search news stories using a keyword
- Create an endpoint to return a single news story

For today we will focus on a single news source, the Guardian's content API:
https://open-platform.theguardian.com/ but the final solution will be an
aggregator.

_We may or may not build all of this and that's totally fine._

### Specifics

- The API should be built in C#
- Endpoints that return more than one story should return
    - The title
    - A link to the article on the appropriate source news site
    - The publication date
    - Optionally, it can also return
        - An image
        - A summary text
- Endpoints that return a single story should return
    - The title
    - A link to the article on the appropriate source news site
    - The publication date
    - The content of the article in basic HTML
    - Optionally, it can also return
        - An image

### Completing the work

- Fork this repo on Github: https://github.com/PortableStudios/news-app/tree/frameworks/DotNet
- Send us a link to your branch before we get back together
- Remember that the project goal is to deliver an API that a frontend developer
  can call to aggregate news sources

Use whatever methodology, libraries or frameworks will help you get the job
done. We might have a conversation about the choices you make, so it’s great
if you have a solid reason for them.

## What we’re looking for

- We are looking for a working API along with any other artifacts you'd typically provide when
  building a system like this.
- We are looking for an understanding of how your work has met the goal outlined in this file.
- We are looking for a good idea of the decisions you have made while building this. Why
  you did it *this way* and not *that way* and what that means. What are
  you locking yourself into and what are you deferring to later. What is
  going to matter for ongoing performance, scalability, extensibility,
  robustness.

## What we’re not looking for

- We are not looking for a frontend: This is a purely backend challenge.
- We are not looking for a fully complete middleware: Please only spend an hour prior to our meeting.
- We are not looking for any sort of user management: This is an anonymous service.

## Extension

In case you're wondering ... if we have time, here's a few things we might do
to extend the API in our pairing session:

- Finish part of the initial build
- Add pagination to the results
- Add an additional news source

_Again, you are not expected to complete extension tasks on your own time.
Just keep this in mind as background, to maybe help guide decisions you
might make._