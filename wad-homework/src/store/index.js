import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: 
      [
        {
          id: 1,
          username: "User1",
          content: "Tartu 2022",
          created_at: "2022-10-22T10:00:00Z",
          imageUrl: "/res/images/tartu2024.jpg",
          like_count: 0
        },
        {
          id: 2,
          username: "User1",
          content: "As the sun dips behind the mountains, the sky transforms into a masterpiece of orange and pink hues, casting a warm glow over the tranquil lake. The reflection of trees in the still water adds to the peaceful ambiance of the evening. This serene scene reminds us of nature’s ability to create moments of calm amidst the chaos of life. A perfect moment to pause and appreciate the beauty around us.",
          created_at: "2024-10-02T12:00:00Z",
          imageUrl: "/res/images/postimage1.webp",
          like_count: 0
        },
        {
          id: 3,
          username: "User1",
          content: "This freshly baked pizza, topped with melted cheese, spicy pepperoni, and fragrant basil, is the ultimate comfort food. The golden-brown crust is crispy on the outside and soft on the inside, offering the perfect foundation for the savory toppings. Each bite bursts with the flavors of ripe tomatoes, gooey cheese, and a hint of spice from the pepperoni. Whether shared with family or enjoyed alone, this pizza makes any meal special",
          created_at: "2024-10-02T13:00:00Z",
          imageUrl: "/res/images/postimage2.webp",
          like_count: 0
        },
        {
          id: 4,
          username: "User1",
          content: "As technology continues to evolve, so do the tools we use every day. This sleek laptop, with its glowing keyboard and futuristic interface, symbolizes the leaps we've made in computing. From advanced data analysis to AI-driven software, the possibilities are endless. Productivity has never been so efficient, with cutting-edge innovations making complex tasks more manageable. It’s an exciting time for tech enthusiasts and professionals alike.",
          created_at: "2024-10-02T14:00:00Z",
          imageUrl: "/res/images/postimage3.webp",
          like_count: 0
        },
        {
          id: 5,
          username: "User1",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          created_at: "2022-10-22T15:00:00Z",
          imageUrl: null,
          like_count: 0
        },
        {
          id: 6,
          username: "FunnyGuy",
          content: "Why don’t scientists trust atoms? Because they make up everything!",
          created_at: "2023-10-23T09:00:00Z",
          imageUrl: null,
          like_count: 0
        },
        {
          id: 7,
          username: "LaughOutLoud",
          content: "I told my computer I needed a break, and now it won’t stop sending me beach wallpapers!",
          created_at: "2023-10-23T10:00:00Z",
          imageUrl: "/res/images/beach_wallpaper.jpg",
          like_count: 0
        },
        {
          id: 8,
          username: "JokeMaster",
          content: "Why did the scarecrow win an award? Because he was outstanding in his field!",
          created_at: "2023-10-23T11:00:00Z",
          imageUrl: null,
          like_count: 0
        },
        {
          id: 9,
          username: "PunnyBunny",
          content: "I’m on a whiskey diet. I’ve lost three days already!",
          created_at: "2023-10-23T12:00:00Z",
          imageUrl: null,
          like_count: 0
        },
        {
          id: 10,
          username: "CatLover",
          content: "When nothing goes right, go left!",
          created_at: "2023-10-23T13:00:00Z",
          imageUrl: "/res/images/funny_sign.jpg",
          like_count: 0
        },
        {
          id: 11,
          username: "WittyCommenter",
          content: "I used to play piano by ear, but now I use my hands!",
          created_at: "2023-10-23T14:00:00Z",
          imageUrl: null,
          like_count: 0
        },
        {
          id: 12,
          username: "GiggleFactory",
          content: "Don’t worry if plan A doesn’t work out, there are 25 more letters in the alphabet!",
          created_at: "2023-10-23T15:00:00Z",
          imageUrl: null,
          like_count: 0
        },
        {
          id: 13,
          username: "PetExpert",
          content: "If at first you don’t succeed, then skydiving definitely isn’t for you.",
          created_at: "2023-10-23T16:00:00Z",
          imageUrl: "/res/images/skydive_fail.jpg",
          like_count: 0
        },
        {
          id: 14,
          username: "SnackAddict",
          content: "I would avoid the sushi if I were you. It’s a little fishy.",
          created_at: "2023-10-23T17:00:00Z",
          imageUrl: "/res/images/funny_sushi.jpg",
          like_count: 0
        },
        {
          id: 15,
          username: "QuirkyKid",
          content: "I told my wife she was drawing her eyebrows too high. She looks surprised!",
          created_at: "2023-10-23T18:00:00Z",
          imageUrl: null,
          like_count: 0
        },
        {
          id: 16,
          username: "SarcasticSally",
          content: "I’m on a seafood diet. I see food, and I eat it!",
          created_at: "2023-10-23T19:00:00Z",
          imageUrl: null,
          like_count: 0
        },
        {
          id: 17,
          username: "DadJokes101",
          content: "What did the grape do when it got stepped on? Nothing, it just let out a little wine!",
          created_at: "2023-10-23T20:00:00Z",
          imageUrl: null,
          like_count: 0
        },
        {
          id: 18,
          username: "CookingDisaster",
          content: "I burn a lot of calories. I leave the oven on all the time!",
          created_at: "2023-10-23T21:00:00Z",
          imageUrl: "/res/images/funny_oven.jpg",
          like_count: 0
        },
        {
          id: 19,
          username: "SleepyHead",
          content: "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears!",
          created_at: "2023-10-23T22:00:00Z",
          imageUrl: null,
          like_count: 0
        },
        {
          id: 20,
          username: "TravelJoker",
          content: "I asked the librarian if the library had any books on paranoia. She whispered, 'They're right behind you.'",
          created_at: "2023-10-23T23:00:00Z",
          imageUrl: null,
          like_count: 0
        }
      ]
    },
    getters: {
      getPostById: (state) => (id) => {
        return state.posts.find(post => post.id === id);
      }
    },
    mutations: {
      INCREMENT_LIKE(state, postId) {
        const post = state.posts.find(p => p.id === postId);
        if(post){
        post.like_count += 1;
        } else { console.log("no post ", postId)}
      },
      REMOVE_LIKES(state) {
        state.posts.forEach(post => {
          post.like_count = 0;
        });
      }
    },
    actions: {
      addLike({commit}, postId) {
        commit('INCREMENT_LIKE', postId);
      },
      removeLikes({commit}) {
        commit('REMOVE_LIKES');
      }
    },
    modules: {
    }
  })
