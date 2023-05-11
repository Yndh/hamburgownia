import Category from "./category";
import Meal from "./meal";

import CheezBurg from '../assets/cheezburger.png'
import BaconBurg from '../assets/baconburg.png'
import WingedBurg from '../assets/wingedburg.png'
import CheezTaw from '../assets/cheeztaw.png'
import WingTaw from '../assets/wingtaw.png'
import BaconTaw from '../assets/bacontaw.png'

export const CATEGORIES = [
    new Category(1, 'Burger'),
    new Category(2, 'Bundle'),
    new Category(3, 'Drinks'),
    new Category(4, 'Other')
]

export const MEALS = [
  new Meal(
    1,
    1,
    "Cheez Burg",
    "Soczysta wołowina, rozpuszczający się w ustach ser i świeże warzywa w chrupiącej bułce",
    9.99,
    CheezBurg
  ),

  new Meal(
    2,
    1,
    "Bacon Burg",
    "Pikantny smak chrupiącej bekonowej wędliny na soczystej wołowinie",
    15.99,
    BaconBurg
  ),

  new Meal(
    3,
    1,
    "Winged Burg",
    "Zdrowa i soczysta pierś z kurczaka, chrupiąca sałata i świeże Ogórki w pysznej bułce burgerowej",
    11.99,
    WingedBurg
  ),

  new Meal(
    4,
    2,
    "Cheez Taw",
    "połączenie klasycznych frytek z CheezBurgiem i orzeźwiającym napojem - nie możesz przegapić tej wyjątkowej okazji smakowania!",
    19.99,
    CheezTaw
  ),

  new Meal(
    5,
    2,
    "Wing Taw",
    "połączenie klasycznych frytek z Soczystego WingedBurga i orzeźwiającym napojem - Zaspokoji twój głod w okazyjnej cenie",
    22.99,
    WingTaw
  ),

  new Meal(
    6,
    2,
    "Bacon Taw",
    "połączenie klasycznych frytek z BaconBurgiem i orzeźwiającym napojem - Zestaw zaspokoi twoje pragnienie i apetyt w jednym posiłku",
    26.99,
    BaconTaw
  )
];