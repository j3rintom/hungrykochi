import React from "react";
import Card from "./Card";
import "./HeroSection.css";
import First from "../assets/5.jpg";
import Second from "../assets/6.jpg";
import Third from "../assets/7.jpg";
import Fourth from "../assets/8.jpg";
import Fifth from "../assets/9.jpg";
function HeroSection() {
  return (
    <>
      <div className="wrapper">
        <div className="hero-title">
          <h1>Explore the Different Tastes in town .</h1>
        </div>
        <div className="card-collection">
          <Card
            url={First}
            title="Balaleet"
            desc="Balaleet is a traditional sweet and delicious dish popular in the
            Arabic countries of the Persian Gulf. It’s a popular breakfast dish
            in the UAE, and it can be served either hot or cold. It contains
            vermicelli sweetened with sugar, rose water, cardamom, saffron, and
            a thin egg omelet. Served with sautéed onions or potatoes. Balaleet
            is traditionally arab food served during the holidays of Eid along
            with boiled garbanzo beans and black-eyed peas. Cardamom and saffron
            are the main ingredients that add more flavors to the cuisine."
          />
          <Card
            url={Second}
            title="Bruschetta"
            desc="An antipasto dish, bruschetta has grilled bread topped with veggies, rubbed garlic and tomato mix. A country bread sliced and topped with different toppings - the evergreen tomato-basil and an inventive mushroom-garlic. The classic Italian starter!"
          />
          <Card
            url={Third}
            title="Pulpo a la gallega"
            desc="Octopus is a big deal in Spanish cuisine, whether it’s deep-fried and served as tapas or transformed into something a little more sophisticated. One of the more elaborate dishes is the popular pulpo a la gallega, which sees paprika, rock salt, and olive oil combined to bring out the very best flavors from the octopus. This is usually served on sliced potatoes for a light yet warming meal. The dish hails from the north-western region of Galicia, which is definitely something to note for seafood-lovers. After all, the region is well-known around Spain for it’s unique, seafood-heavy cuisine."
          />
          <Card
            url={Fourth}
            title="Sichuan Pork"
            desc="Sichuan Pork, actually, poached spicy slices of pork (水煮肉片 shuǐzhǔ ròupiàn) is a famous Sichuan cuisine dish.

Rather than cooking pork by stir-frying or deep-frying, which consumes lots of oil and can very easily overcook the pork, it is boiled in water with a coating made from egg-white and starch to preserve its freshness and tenderness."
          />
          <Card
            url={Fifth}
            title="Yorkshire pudding"
            desc="Yorkshire pudding is a common English side dish, a baked pudding made from a batter of eggs, flour, and milk or water. It is a versatile food that can be served in numerous ways depending on the choice of ingredients, the size of the pudding, and the accompanying components of the dish."
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
