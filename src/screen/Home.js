import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  RefreshControl,
} from "react-native";
//-----------------------------------------------propias-------------------------
import { fetchCoin, handleInput } from "../store/slices/coin/coinSlice";
// .............................................. react-redux------------------------------
import { useDispatch, useSelector } from "react-redux";
// ------------------------------ icons-----------------------------------------------
import { AntDesign, Entypo } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const coins = useSelector((state) => state.coin);

  const dispatch = useDispatch();
  // funcion para navegar a la pantalla de detalles
  const goDitails = (item) => {
    navigation.navigate("Details", { item });
  };

  useEffect(() => {
    dispatch(fetchCoin());
  }, []);
  return (
    <View>
      <ScrollView
        style={styles.scrollView}
        // refrescar la pagina ------------------------------------
        refreshControl={
          <RefreshControl
            refreshing={coins.isLoading}
            onRefresh={() => dispatch(fetchCoin())}
          />
        }
      >
        <View style={[styles.inputContent, styles.content]}>
          <TextInput
            style={styles.search}
            maxLength={10}
            placeholder="Search"
            placeholderTextColor="#8396c1"
            // //  ---------------------------------- filtrar por nombre y simbolo (abreviatura) las monedas----------------------------------
            onChangeText={(text) => dispatch(handleInput(text))}
          />
        </View>
        {coins.coin.map((item) => (
          <View key={item.id} style={styles.coin}>
            <View style={styles.coinNameArrowContent}>
              <Text>
                {item.price_change_percentage_24h > 0 ? (
                  <Entypo name="arrow-long-up" size={20} color="#10f900" />
                ) : (
                  <Entypo name="arrow-long-down" size={20} color="#ff0000" />
                )}
              </Text>
              {item.name.length > 12 ? (
                <Text style={styles.coinName}>
                  {item.name.substring(0, 12)}...
                </Text>
              ) : (
                <Text style={styles.coinName}>{item.name}</Text>
              )}
            </View>
            <View style={styles.priceBottonContent}>
              <Text style={styles.coinPrice}>$ {item.current_price}</Text>
              <TouchableOpacity
                style={styles.symbolButton}
                onPress={() => goDitails(item)}
              >
                <Text style={styles.textButtonSymbol}>{item.symbol}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#202026",
  },
  coin: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    paddingVertical: 12,
    paddingLeft: 4,
  },
  search: {
    backgroundColor: "#202026",
    borderBottomColor: "#fff",
    color: "#fff",
    fontSize: 20,
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    width: "100%",
    textAlign: "center",
  },
  coinNameArrowContent: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  inputContent: {
    flexDirection: "row",
  },
  content: {
    width: "100%",
    alignItems: "stretch",
    paddingHorizontal: 10,
  },
  coinName: {
    fontSize: 18,
    color: "#8396c1",
  },
  coinImage: {
    backgroundColor: "#202026",
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  priceBottonContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  coinPrice: {
    fontSize: 18,
    color: "#536798",
  },

  symbolButton: {
    backgroundColor: "#8396c1",
    width: 45,
    height: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    // shadowColor: "#fff",
    // shadowOffset: {
    //   width: 2,
    //   height: 2,
    // },
  },
});

export default Home;
