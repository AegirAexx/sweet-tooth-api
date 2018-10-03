# Sweet Tooth API
Who wants candy? **Sweet Tooth** is a new candy company which is ready to take on the big guns. Even **M&Ms** are starting to feel their presence. Because of their fast success, they need a simple **NodeJS** service to provide informatin to couple of clients of theirs. They have contracted your headquarters and the boss assigned you to the job. Are you up for it?!?

## Project description
Sweet Tooth wants their clients to be able to fetch information about their candy as well as offers on certain candies. They also want their clients to be able to create new candies, as well as participate in a game called **Hit the Piñata**. The game Hit the Piñata works as follows: *“Each piñata has a certain amount of hits it can withstand, if the user hits the piñata one more than the amount it can withstand the piñata breaks and gives candy. When the piñata is broken it cannot be hit anymore.”*.

Below are the endpoints the web service should provide to the clients:

+ **(10%)** [ /api/candies ] - Gets all candies within the application.
+ **(10%)** [ /api/candies ] - Creates a new candy (**NO MODEL VALIDATION**) and should return the newly created model along with a proper status code.
+ **(10%)** [ /api/candies/{id} ] - Gets a candy with a certain id.
+ **(10%)** [ /api/offers ] - Gets all offers within the application and the output should include the nested candies within the offer object as seen in the *Model Structure* section.
+ **(10%)** [ /api/pinatas ] - Gets all pinatas within the application - should contain all properties excluding **_surprise_**.
+ **(10%)** [ /api/pinatas/{id} ] - Gets a pinata with a certain id.
+ **(20%)** [ /api/pinatas ] - Create a new pinata (**NO MODEL VALIDATION**) and should return the newly created model along with a proper status code.
+ **(30%)** [ /api/pinatas/{id}/hit ] - Hits a certain pinata until its hit limit has been reached. If the hit was a success it should return a status code of **_204 (No Content)_**, unless it was the final blow than it should return a status code of **_200 (OK)_** along with the surprise property from the pinata as a string. If the hit limit has been reached the endpoint should return a status code **_423 (Locked)_**.

## Requirements
The solution should be implemented using **Express** in **NodeJS** with **JavaScript** as the programming language. It is probably a good idea to break up the code into separate files, but that is not necessary and all code can reside within **index.js**.

## Data
The data is called **data.json** and can be downloaded from [**Canvas**](https://canvas.ru.is/). This file can be either imported or copy / pasted in to your web service implementation.

## Model structure
The model structure seen below is how it should be served to the client. This structure does not necessarily look like it does within **data.json**.

#### CANDY

```JSON
{
    "id": 1,
    "name": "Snowkers",
    "description": "Similar to Snickers but white as the snow."
}
```

#### OFFER

```JSON
{
    "id": 1,
    "name": "Two unique",
    "candies": [
        {
            "id": 1,
            "name": "Snowkers",
            "description": "Similar to Snickers but white as the snow."
        },
        {
            "id": 2,
            "name": "Venus",
            "description": "Who wants Mars, when you can get Venus!"
        }
    ]
}
```

#### PINATA

```JSON
{
    "id": 1,
    "name": "Wheaty",
    "maximumHits": 5,
    "currentHits": 0
}
```

## Submission
A single compressed file **(\*.zip, \*.rar)** containing all your code should be submitted to **Canvas**. Don’t forget to delete the **node_modules/** folder! Also don’t forget to comment the names of each group member (*excluding the one who submitted*).