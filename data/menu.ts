export type PizzaCategory = 'wszystkie' | 'klasyczne' | 'wegetarianskie' | 'ostre' | 'specjalne'

export interface Pizza {
  id: string
  name: string
  ingredients: string
  price32: number
  price45: number
  category: PizzaCategory[]
  isPopular?: boolean
}

export const pizzas: Pizza[] = [
  { id: 'margherita', name: 'Margherita', ingredients: 'sos pomidorowy, mozzarella, bazylia', price32: 22, price45: 35, category: ['klasyczne', 'wegetarianskie'] },
  { id: 'capricciosa', name: 'Capricciosa', ingredients: 'sos pomidorowy, mozzarella, szynka, pieczarki', price32: 28, price45: 42, category: ['klasyczne'], isPopular: true },
  { id: 'salami', name: 'Salami', ingredients: 'sos pomidorowy, mozzarella, salami', price32: 27, price45: 41, category: ['klasyczne'] },
  { id: 'hawaii', name: 'Hawaii', ingredients: 'sos pomidorowy, mozzarella, szynka, ananas', price32: 28, price45: 42, category: ['klasyczne'] },
  { id: 'prosciutto', name: 'Prosciutto', ingredients: 'sos pomidorowy, mozzarella, prosciutto crudo, rukola', price32: 32, price45: 47, category: ['klasyczne'], isPopular: true },
  { id: 'quattro-formaggi', name: 'Quattro Formaggi', ingredients: 'mozzarella, gorgonzola, parmezan, ricotta', price32: 30, price45: 45, category: ['klasyczne', 'wegetarianskie'] },
  { id: 'pepperoni', name: 'Pepperoni', ingredients: 'sos pomidorowy, mozzarella, pepperoni', price32: 28, price45: 42, category: ['klasyczne', 'ostre'] },
  { id: 'funghi', name: 'Funghi', ingredients: 'sos pomidorowy, mozzarella, pieczarki, czosnek, tymianek', price32: 26, price45: 39, category: ['klasyczne', 'wegetarianskie'] },
  { id: 'spinaci', name: 'Spinaci', ingredients: 'sos pomidorowy, mozzarella, szpinak, czosnek', price32: 26, price45: 39, category: ['wegetarianskie'] },
  { id: 'bianca-pesto', name: 'Bianca Pesto', ingredients: 'pesto bazyliowe, mozzarella, pomidory cherry, rukola', price32: 29, price45: 43, category: ['wegetarianskie'] },
  { id: 'gorgonzola-gruszka', name: 'Gorgonzola & Gruszka', ingredients: 'gorgonzola, mozzarella, gruszka, orzechy, miód', price32: 31, price45: 46, category: ['wegetarianskie', 'specjalne'], isPopular: true },
  { id: 'caprese', name: 'Caprese', ingredients: 'sos pomidorowy, mozzarella buffalo, świeże pomidory, bazylia', price32: 32, price45: 47, category: ['wegetarianskie'] },
  { id: 'diavola', name: 'Diavola', ingredients: 'sos pomidorowy, mozzarella, salame piccante, chili', price32: 29, price45: 43, category: ['ostre', 'klasyczne'] },
  { id: 'inferno', name: 'Inferno', ingredients: 'sos pikantny, mozzarella, chorizo, jalapeño, tabasco', price32: 30, price45: 45, category: ['ostre'], isPopular: true },
  { id: 'vulcano', name: 'Vulcano', ingredients: 'sos pomidorowy, mozzarella, wędzona papryka, nduja, peperoncino', price32: 31, price45: 46, category: ['ostre'] },
  { id: 'mexicana', name: 'Mexicana', ingredients: 'sos pomidorowy, mozzarella, chili con carne, fasola, kukurydza', price32: 30, price45: 44, category: ['ostre'] },
  { id: 'hot-chicken', name: 'Hot Chicken', ingredients: 'sos sriracha, mozzarella, kurczak, jalapeño, cebula', price32: 30, price45: 44, category: ['ostre'] },
  { id: 'boss', name: 'Pizza Boss', ingredients: 'sos pomidorowy, mozzarella, salami, szynka, pieczarki, papryka, kukurydza', price32: 34, price45: 49, category: ['specjalne'], isPopular: true },
  { id: 'mortadella-pist', name: 'Mortadella & Pistacje', ingredients: 'fior di latte, mortadella, pistacje, stracciatella', price32: 35, price45: 51, category: ['specjalne'] },
  { id: 'truffle-cream', name: 'Truffle Cream', ingredients: 'krem truflowy, mozzarella, pieczarki portobello, parmezan', price32: 37, price45: 54, category: ['specjalne'] },
  { id: 'bbq-pulled', name: 'BBQ Pulled Pork', ingredients: 'sos BBQ, mozzarella, pulled pork, cebula prymaryjna', price32: 34, price45: 50, category: ['specjalne'] },
  { id: 'salmon-capers', name: 'Salmon & Capers', ingredients: 'biały sos, mozzarella, wędzony łosoś, kapary, cebula', price32: 36, price45: 52, category: ['specjalne'] },
  { id: 'burrata', name: 'Burrata', ingredients: 'sos pomidorowy, burrata, pomidory cherry, bazylia, oliwa', price32: 38, price45: 55, category: ['specjalne'] },
  { id: 'nduja-honey', name: 'Nduja & Miód', ingredients: 'sos pomidorowy, mozzarella, nduja, miód, orzeszki', price32: 33, price45: 48, category: ['specjalne', 'ostre'] },
  { id: 'fig-prosciutto', name: 'Figi & Prosciutto', ingredients: 'dżem figowy, mozzarella, prosciutto crudo, rukola, balsamico', price32: 36, price45: 53, category: ['specjalne'] },
  { id: 'gyros', name: 'Gyros', ingredients: 'sos czosnkowy, mozzarella, gyros, cebula, papryka, tzatziki', price32: 32, price45: 47, category: ['specjalne'] },
  { id: 'carbonara', name: 'Carbonara', ingredients: 'kremowy sos, mozzarella, boczek, jajko, parmezan, czarny pieprz', price32: 31, price45: 46, category: ['specjalne'] },
  { id: 'smoked-duck', name: 'Kaczka Wędzona', ingredients: 'krem z dyni, mozzarella, wędzona kaczka, żurawina, tymianek', price32: 37, price45: 54, category: ['specjalne'] },
  { id: 'pesto-chicken', name: 'Pesto Chicken', ingredients: 'pesto bazyliowe, mozzarella, grillowany kurczak, pomidory suszone', price32: 31, price45: 46, category: ['specjalne'] },
  { id: 'bresaola', name: 'Bresaola', ingredients: 'oliwa, mozzarella, bresaola, rukola, parmezan, cytryna', price32: 34, price45: 50, category: ['specjalne'] },
  { id: 'polska', name: 'Pizza Polska', ingredients: 'sos pomidorowy, mozzarella, kiełbasa, kapusta, cebula', price32: 28, price45: 41, category: ['specjalne', 'klasyczne'] },
  { id: 'cztery-pory', name: 'Cztery Pory Roku', ingredients: 'sos pomidorowy, mozzarella, szynka, pieczarki, karczochy, oliwki', price32: 30, price45: 44, category: ['specjalne'] },
  { id: 'anchovy', name: 'Marinara z Anchois', ingredients: 'sos pomidorowy, czosnek, oregano, anchois, oliwki, kapary', price32: 29, price45: 43, category: ['specjalne'] },
  { id: 'tuna-special', name: 'Tuńczyk Special', ingredients: 'sos pomidorowy, mozzarella, tuńczyk, kapary, red onion, rukola', price32: 30, price45: 44, category: ['specjalne'] },
  { id: 'blue-cheese', name: 'Blue Cheese Steak', ingredients: 'sos bbq, mozzarella, stek wołowy, ser blue cheese, karmelizowana cebula', price32: 38, price45: 56, category: ['specjalne'] },
  { id: 'z-jajkiem', name: 'Z Jajkiem', ingredients: 'sos pomidorowy, mozzarella, boczek, jajko sadzone, szczypiorek', price32: 28, price45: 42, category: ['specjalne'] },
  { id: 'sezonowa', name: 'Sezonowa', ingredients: 'Składniki zmieniają się z sezonem. Zapytaj obsługę.', price32: 32, price45: 47, category: ['specjalne'] },
  { id: 'ortolana', name: 'Ortolana', ingredients: 'sos pomidorowy, mozzarella, cukinia, papryka, oliwki', price32: 27, price45: 40, category: ['klasyczne', 'wegetarianskie'] },
  { id: 'patata', name: 'Patata', ingredients: 'biały sos, mozzarella, ziemniaki, rozmaryn, czosnek', price32: 27, price45: 40, category: ['wegetarianskie'] },
  { id: 'tonno', name: 'Tonno', ingredients: 'sos pomidorowy, mozzarella, tuńczyk, cebula', price32: 29, price45: 43, category: ['klasyczne'] },
]

export const categoryLabels: Record<PizzaCategory, string> = {
  wszystkie: 'Wszystkie',
  klasyczne: 'Klasyczne',
  wegetarianskie: 'Wegetariańskie',
  ostre: 'Ostre',
  specjalne: 'Specjalne',
}
