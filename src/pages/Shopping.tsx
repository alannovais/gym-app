import { Text, View } from "native-base";
import ItemsListedComponent from "../components/ItemsListedComponent";

export default function Shopping() {
  const itemsToSales = [
    {
      name: "T-shirt",
      type: "clothes",
      price: 30,
      // image: require("../assets/images/tshirt.png"),
      description: "T-shirt dry",
      quantityBySize: [
        {
          size: "XS",
          quantity: 1,
        },
      ],
    },
    {
      name: "Avaliable Physical",
      type: "Service",
      price: 10,
      // image: require("../assets/images/tshirt.png"),
      description:
        "Avaliable Physical will check your currently conditin to make practice exercises",
      quantityBySize: null,
    },
    {
      name: "Avaliable Nutrition",
      type: "Service",
      price: 10,
      // image: require("../assets/images/tshirt.png"),
      description:
        "Avaliable Nutrition will give to you straight ahead path to earn your dreams",
      quantityBySize: null,
    },
    {
      name: "Avaliable Physical + Workout plan",
      type: "Service",
      price: 25,
      // image: require("../assets/images/tshirt.png"),
      description:
        "Avaliable Nutrition will give to you straight ahead path to earn your dreams",
      quantityBySize: null,
    },
  ];
  return (
    <>
      <View>
        <View style={{ marginBottom: 85 }}>
          {itemsToSales.map((item, index) => (
            <ItemsListedComponent item={item} index={index}/>
          ))}
        </View>
      </View>
    </>
  );
}
