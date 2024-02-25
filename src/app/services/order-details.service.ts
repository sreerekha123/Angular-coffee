import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails 
  
  foodDetails = [
    {
      id:1,
      foodName:"Latte",
      foodDetails:"A latte or caffè latte is a milk coffee that is a made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top. ",
      foodPrice:100,
      foodImg:"https://i.ytimg.com/vi/FVENtXoc1zs/maxresdefault.jpg"
    },
    {
      id:2,
      foodName:"Filter Coffee",
      foodDetails:"Filter coffee brewing involves pouring hot water over coffee grounds. Gravity then pulls the water through the grounds, facilitating extraction, and dispenses it into a mug or carafe placed below. ",
      foodPrice:150,
      foodImg:"https://www.vegrecipesofindia.com/wp-content/uploads/2016/09/filter-coffee-recipe-1.jpg"
    },
    {
      id:3,
      foodName:"Espresso",
      foodDetails:"Espresso is a coffee-brewing method in which a small amount of nearly boiling water is forced under pressure through finely ground coffee beans",
      foodPrice:149,
      foodImg:"https://www.adityabirlacapital.com/healthinsurance/active-together/wp-content/uploads/2019/12/How-Are-Espressos-Good-For-Health_blog_lower_1-1200x1200.png"
    },
    {
      id:4,
      foodName:"cappuccinoo",
      foodDetails:"A cappuccino is an espresso-based coffee drink that is traditionally prepared with steamed milk foam. ",
      foodPrice:140,
      foodImg:"https://assets.beanbox.com/blog_images/8hCpSfagSbiQE1v56ClA.jpeg"
    },
    {
      id:5,
      foodName:"Butter Coffee",
      foodDetails:"Butter coffee is a do-it-yourself (DIY) version of Bulletproof coffee that doesn’t require special coffee beans or MCT oil. In fact",
      foodPrice:105,
      foodImg:"https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/butter-coffee-1296x728-feature.jpg?w=1155&h=1528"
    },
    {
      id:6,
      foodName:"Moccha",
      foodDetails:"Although a mocha is often interpreted differently across the world, the basis is that a shot of espresso is combined with chocolate powder or syrup",
      foodPrice:219,
      foodImg:"https://instafitness.in/wp-content/uploads/2021/03/Almond-Milk-Coffee-600x300.png"
    }
  ]


  

}