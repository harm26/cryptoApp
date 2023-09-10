import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import React from "react";

const Details = ({ route }) => {
  //---------------------------------------- aceptar el parametro que se le pasa a la pantalla de detalles
  // ------------------------------------ en este caso el parametro es un objeto con la info de una moneda
  const { item } = route.params;
  return (
    <View>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Image source={{ uri: item.image }} style={styles.coinImage} />

          <View style={[styles.coinNameContent, styles.content]}>
            <Text style={styles.fixedText}>Name:</Text>
            {item.name.length > 20 ? (
              <Text style={styles.coinNameText}>
                {item.name.substring(0, 20)}...
              </Text>
            ) : (
              <Text style={styles.coinNameText}>{item.name}</Text>
            )}
            <Text style={styles.coinSymbolText}>({item.symbol})</Text>
          </View>
          <View style={[styles.priceContent, styles.content]}>
            <Text style={styles.fixedText}>Price:</Text>
            <Text style={styles.coinPrice}>$ {item.current_price}</Text>
          </View>
          <View style={[styles.marketCapContent, styles.content]}>
            <Text style={styles.fixedText}>market cap:</Text>
            <Text style={styles.coinMarketCap}>{item.market_cap}</Text>
          </View>
          <View style={[styles.LastUpdateContent, styles.content]}>
            <Text style={styles.fixedText}>Last updated:</Text>
            <Text style={styles.coinLastUpdate}>{item.last_updated} </Text>
          </View>
          <View style={[styles.rankContent, styles.content]}>
            <Text style={styles.fixedText}>Market cap. Rank:</Text>
            <Text style={styles.coinRank}>{item.market_cap_rank}</Text>
          </View>
          <View
            style={[styles.priceChangePercentage24hContent, styles.content]}
          >
            <Text style={styles.fixedText}>Market cap change % 24h:</Text>
            {item.price_change_percentage_24h > 0 ? (
              <Text style={styles.coinPriceChangePercentage24hUp}>
                +{item.market_cap_change_percentage_24h}
              </Text>
            ) : (
              <Text style={styles.coinPriceChangePercentage24hDown}>
                -{item.market_cap_change_percentage_24h}
              </Text>
            )}
          </View>

          <View style={[styles.marketCapChange24hContent, styles.content]}>
            <Text style={styles.fixedText}>Market cap change 24h:</Text>
            {item.market_cap_change_24h > 0 ? (
              <Text style={styles.coinPriceMarketCapChange24hUp}>
                +{item.market_cap_change_24h}
              </Text>
            ) : (
              <Text style={styles.coinPriceMarketCapChange24hDown}>
                -{item.market_cap_change_24h}
              </Text>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#202026",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  content: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 25,
    paddingHorizontal: 10,
    paddingLeft: 4,
  },
  scroll: {
    backgroundColor: "#202026",
  },
  coinNameContent: {
    flexDirection: "row",
  },
  fixedText: {
    fontSize: 20,
    color: "#536798",
  },
  coinNameText: {
    fontSize: 20,
    color: "#8396c1",
  },
  coinSymbolText: {
    fontSize: 20,
    color: "#536798",
    textTransform: "uppercase",
  },
  coinImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  rankContent: {
    flexDirection: "column",
  },
  coinRank: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#8396c1",
  },
  priceContent: {
    flexDirection: "row",
  },
  coinPrice: {
    fontSize: 20,
    color: "#8396c1",
  },
  LastUpdateContent: {
    flexDirection: "column",
  },
  coinLastUpdate: {
    fontSize: 20,
    color: "#8396c1",
  },
  marketCapContent: {
    flexDirection: "row",
  },
  coinMarketCap: {
    fontSize: 20,
    color: "#8396c1",
  },
  priceChangePercentage24hContent: {
    flexDirection: "column",
  },
  coinPriceChangePercentage24hUp: {
    fontSize: 20,
    color: "#10f900",
  },
  coinPriceChangePercentage24hDown: {
    fontSize: 20,
    color: "#ff0000",
  },
  marketCapChange24hContent: {
    flexDirection: "column",
  },
  coinPriceMarketCapChange24hUp: {
    fontSize: 20,
    color: "#10f900",
  },
  coinPriceMarketCapChange24hDown: {
    fontSize: 20,
    color: "#ff0000",
  },
});

export default Details;
