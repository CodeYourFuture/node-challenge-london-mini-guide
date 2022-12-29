# Node Challenge - London Mini-Guide

In this challenge you are going to build a full stack application (server & client) that shows the number of hospitals, doctors, pharmacies and colleges in some London's boroughs.

## Server

You can find the Server Challenge [here](./SERVER.md)

## Client

You can find the Client Challenge [here](./CLIENT.md)

## Time to Complete

Between 4 and 15 hours

## Live Version

You can find the website running live here:

https://london-mini-guide-challenge.netlify.app/

You don't need to know where the server is actually hosted.

![project screenshot](https://i.imgur.com/Or1tNpV.png)

## Data Source

The data is provided to you in a folder `./data` which contains 3 files: `Harrow.json`, `Heathrow.json` and `Stratford.json`.

Each file in this format:

```js
{
    "pharmacies" : [
        {
            "name" :
            "address":
            "website":
            "phone" :
        }
    ],

    "colleges" : [
        {
            "name" :
            "address":
            "website":
            "phone" :
        }
    ],

    "doctors" : [
        {
            "name" :
            "address":
            "website":
            "phone" :
        }
    ],

    "hospitals" : [
        {
            "name" :
            "address":
            "website":
            "phone" :
        }
    ]
}
```

Data source: https://www.yell.com/

Data has been collected using a technique called `web scraping`.

If you are curious about this check [this repository](https://github.com/ahmad-ali14/web-scraping---get-all-businesses-data-in-any-city) or [this Youtube video](https://github.com/ahmad-ali14/web-scraping---get-all-businesses-data-in-any-city). This is completely optional.

# Server

You should implement your server logic using `node` and `express`

## Server Level 100

Make a new express server and deploy it to `repl.it` or `heroku`.

On the route `/` respond with the routes you are planing to implement, example:

```js
{
    "/pharmcies": "retruns an array of pharmacies in a specific area"
    ...
}
```

## Server Level 200

Make your server working for only one city, example: `Stratford`

In this level you should have 4 routes:

|    route    |                result                 |
| :---------: | :-----------------------------------: |
| /pharmacies | returns pharmacies list for stratford |
|  /colleges  |  returns colleges list for stratford  |
|  /doctors   |  returns doctors list for stratford   |
| /hospitals  | returns hospitals list for stratford  |

## Server Level 300

Now make your city dynamic. You should be able to return data based on any city that is passed to the server.

Routes will change: something

|       route       |              result               |
| :---------------: | :-------------------------------: |
| /:city/pharmacies | returns pharmacies list for :city |
|  /:city/colleges  |  returns colleges list for :city  |
|  /:city/doctors   |  returns doctors list for :city   |
| /:city /hospitals | returns hospitals list for :city  |

## Server Level 500

Make all of that in one single route as:

|      route       |              result              |
| :--------------: | :------------------------------: |
| /:city/:category | returns :category list for :city |

## Server Level 999

You have the full control over this level

Some suggestions:

- Add new cities.
- Add routes to add entries to our data.
- Make sure that you are saving the entered values to the `json` file.