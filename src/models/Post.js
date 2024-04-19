import { Account } from "./Account.js"




export class Post {
  constructor(data) {
    this.id = data.id,

      this.body = data.body,
      this.imgUrl = data.imgUrl,

      this.creator = new Account(data.creator),
      this.creatorId = data.creatorId,
      this.likes = data.likes,
      this.likeIds = data.likeIds,

      this.createdAt = new Date(data.createdAt),
      this.updatedAt = new Date(data.updatedAt)
  }
}



/**
 {
    "_id": "65e61435027465a94009ff56",
    "body": "Yes",
    "imgUrl": "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGR0Zmp0Y2k2cWdzanpiemwzYmFpM3ZycGdtNGhnaXhud3djMGh4ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/D7z8JfNANqahW/giphy.gif",
    "creatorId": "65cbfb73b554c64939b75c31",
    "likeIds": [
        "65cbfb73b554c64939b75c31",
        "65cf89a6731f2d86392a1dde",
        "65e5ff93199f5eb824ba667e",
        "65ce885a1bb481bd94d759c5",
        "65ce879bbc5c7494dacbde08"
    ],
    "createdAt": "2024-03-04T18:34:29.777Z",
    "updatedAt": "2024-03-06T19:14:38.948Z",
    "__v": 27,
    "creator": {
        "_id": "65cbfb73b554c64939b75c31",
        "subs": [
            "auth0|65cbfb7252c91b9419fb1450"
        ],
        "email": "jchav5601@gmail.com",
        "name": "Joaquin",
        "picture": "https://i.pinimg.com/originals/a3/d5/5a/a3d55a828d612f49efee4e23f3b14110.jpg",
        "bio": "Just student at codeworks doing cool code stuff",
        "coverImg": "https://codeworks.blob.core.windows.net/public/assets/ads/SquareAdTaskMaster.png",
        "github": "https://github.com",
        "linkedin": "https://linkedin.com",
        "resume": "https://github.com",
        "class": "Winter 24",
        "graduated": true,
        "createdAt": "2024-02-13T23:30:02.002Z",
        "updatedAt": "2024-03-04T18:01:56.646Z",
        "__v": 0,
        "id": "65cbfb73b554c64939b75c31"
    },
    "likes": [
        {
            "_id": "65cbfb73b554c64939b75c31",
            "name": "Joaquin",
            "picture": "https://i.pinimg.com/originals/a3/d5/5a/a3d55a828d612f49efee4e23f3b14110.jpg",
            "id": "65cbfb73b554c64939b75c31"
        },
        {
            "_id": "65cf89a6731f2d86392a1dde",
            "name": "Zac The Horse",
            "picture": "https://plus.unsplash.com/premium_photo-1674332000287-3108550f4a73?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvcnNlfGVufDB8fDB8fHww",
            "id": "65cf89a6731f2d86392a1dde"
        },
        {
            "_id": "65e5ff93199f5eb824ba667e",
            "name": "Gamer",
            "picture": "https://s.gravatar.com/avatar/b30f96031ed1c440af27027e39ac9c35?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fas.png",
            "id": "65e5ff93199f5eb824ba667e"
        },
        {
            "_id": "65ce885a1bb481bd94d759c5",
            "name": "Meggs-n-Bacon",
            "picture": "https://www.mjvibe.com/wp-content/uploads/2020/10/powerline.jpg",
            "id": "65ce885a1bb481bd94d759c5"
        },
        {
            "_id": "65ce879bbc5c7494dacbde08",
            "name": "Briden D",
            "picture": "https://images.unsplash.com/flagged/photo-1565241651368-35437ca5563f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBzdWl0fGVufDB8fDB8fHww",
            "id": "65ce879bbc5c7494dacbde08"
        }
    ],
    "id": "65e61435027465a94009ff56"
}
 */