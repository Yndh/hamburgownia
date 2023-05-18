import Category from "./category";
import Meal from "./meal";

import CheezBurg from '../assets/cheezburger.png'
import BaconBurg from '../assets/baconburg.png'
import WingedBurg from '../assets/wingedburg.png'
import CheddarBurg from '../assets/cheddarburg.png'
import JalapenoBurg from '../assets/jalapenoburg.png'
import GrillBurg from '../assets/grillburg.png'
import CheezTaw from '../assets/cheeztaw.png'
import WingTaw from '../assets/wingtaw.png'
import BaconTaw from '../assets/bacontaw.png'
import GrillTaw from '../assets/grilltaw.png'
import NuggetsTaw from '../assets/nuggetstaw.png'
import OnionRingsTaw from '../assets/onionringstaw.png'
import Fries from '../assets/fries.png'
import Nuggets from '../assets/nuggets.png'
import Drink from '../assets/drink.png'
import Tea from '../assets/herbata.png'
import BlackCoffe from '../assets/kawaczarna.png'
import LatteCoffe from '../assets/latte.png'
import CappuccinoCoffe from '../assets/cappuccino.png'
import SweetSourSauce from '../assets/sweetsour.png'
import GarlicSauce from '../assets/garlic.png'
import BbqSauce from '../assets/bbq.png'
import OnionRings from '../assets/onionrings.png'

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
    1,
    "Cheddar Burg",
    "Soczysta wołowina, rozpuszczający się w ustach ser cheddar i chrupiąca sałata w delikatnej bułce",
    15.99,
    CheddarBurg
  ),
  new Meal(
    5,
    1,
    "Jalapeno Burg",
    "Pikantna wołowina, ser cheddar, ostra papryczka Jalapeno i soczysta sałata w delikatnej bułce",
    13.99,
    JalapenoBurg
  ),

  new Meal(
    6,
    2,
    "Cheez Taw",
    "połączenie klasycznych frytek z CheezBurgiem i orzeźwiającym napojem - nie możesz przegapić tej wyjątkowej okazji smakowania!",
    19.99,
    CheezTaw
  ),

  new Meal(
    7,
    2,
    "Wing Taw",
    "połączenie klasycznych frytek z Soczystego WingedBurga i orzeźwiającym napojem - Zaspokoji twój głod w okazyjnej cenie",
    22.99,
    WingTaw
  ),

  new Meal(
    8,
    2,
    "Bacon Taw",
    "połączenie klasycznych frytek z BaconBurgiem i orzeźwiającym napojem - Zestaw zaspokoi twoje pragnienie i apetyt w jednym posiłku",
    26.99,
    BaconTaw
  ),
  new Meal(
    9,
    4,
    "Fryt Ki",
    "Złociste frytki idealnie chrupiące na zewnątrz, miękkie w środku - Idealnym dopełnieniem Twojego posiłku",
    6.99,
    Fries
  ),
  new Meal(
    10,
    4,
    "Nugg Etsy",
    "Kawałki soczystego kurczaka w chrupiącej panierce - idealne na szybki przekąskę lub jako dodatek do burgerów i frytek.",
    7.99,
    Nuggets
  ),
  new Meal(
    11,
    3,
    "Dolew Ka",
    "Sam zdecyduj co zamierzasz wypic! Pepsi, Mirinda, 7Up lub Lipton w nielimitowanej ilości zaspokoji twoje pragnienie",
    8.99,
    Drink
  ),
  new Meal(
    12,
    3,
    "Her Ba",
    "Świeżo zaparzona herbata cytrynowa - idealnie uzupełni smak naszych burgerów i frytek",
    4.99,
    Tea
  ),
  new Meal(
    13,
    3,
    "Kawa Czarna",
    "Nasza kawa czarna jest zrobiona z najlepszej jakości ziaren - gorąca i pobudzająca, idealna na początek dnia lub jako dodatek do burgerów i frytek",
    8.99,
    BlackCoffe
  ),
  new Meal(
    14,
    3,
    "Kawa Latte",
    "Pyszna i kremowa kawa z mlekiem - idealna na chłodniejsze dni lub jako dodatek do naszych burgerów i frytek",
    9.99,
    LatteCoffe
  ),
  new Meal(
    15,
    3,
    "Kawa Cappuccino",
    "Pikantna i aromatyczna kawa z mlekiem i mleczną pianką - idealna na popołudniowe spotkania lub jako dodatek do burgerów i frytek",
    9.99,
    CappuccinoCoffe
  ),
  new Meal(
    16,
    4,
    "Krążki Cebulowe",
    "Nasze chrupiące i złociste krążki cebulowe to idealna przekąska na każdą okazję - zamów teraz i spróbuj tego pysznego smakołyku",
    8.99,
    OnionRings
  ),
  new Meal(
    17,
    4,
    "Słodko Kwaśny",
    "Sos słodko-kwaśny to idealne dopełnienie smaku naszych dań - spróbuj go z naszymi burgerami, frytkami lub nuggetsami",
    1.5,
    SweetSourSauce
  ),
  new Meal(
    18,
    4,
    "Sos Czosnkowy",
    "Intensywny smak czosnku w naszym sosie będzie idealnym dodatkiem do naszych przekąsek - nie przegap okazji spróbowania",
    1.5,
    GarlicSauce
  ),
  new Meal(
    19,
    4,
    "Sos BBQ",
    "Pikantny sos barbecue to idealny dodatek do naszych przekąsek - zamów teraz i poczuj smak amerykańskiej kuchni",
    1.5,
    BbqSauce
  ),
  new Meal(
    20,
    1,
    "Grill Burg",
    "Chrupiąca bułka, soczysta wołowina grillowana na ogniu, chrupiący bekon, ser oraz sos BBQ",
    15.99,
    GrillBurg
  ),
  new Meal(
    21,
    2,
    "Grill Taw",
    "Odkryj idealne połączenie smaków Grill Burga, chrupiących frytek oraz Twoim ulubionym napojem - wspaniały sposób na zaspokojenie głodu w okazyjnej cenie",
    25.99,
    GrillTaw
  ),
  new Meal(
    22,
    2,
    "Nuggets Taw",
    "Pyszne nuggetsy z soczystego mięsa kurczaka, chrupiące frytki i orzeźwiający napój - wszystko w jednym opakowaniu aby zwalczyć Twój głód",
    14.99,
    NuggetsTaw
  ),
  new Meal(
    23,
    2,
    "Rigns Taw",
    "Chrupiące krążki cebulowe, chrupiące frytki i orzeźwiający napój - to wszystko czeka na Ciebie Rings Tawie",
    15.99,
    OnionRingsTaw
  ),
];