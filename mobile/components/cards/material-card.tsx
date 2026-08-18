import Feather from "@expo/vector-icons/Feather";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MaterialCard({}) {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Feather name="book" size={24} color="black" />
          <Text style={styles.cardTitle}>Programming with python</Text>
        </View>
        <Text style={styles.cardDescription}>
          Learn the fundemantals of programming with pyton
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  cardTitle: {
    fontFamily: "Outfit-Bold",
    fontSize: 18,
    marginBottom: 5,
  },
  cardDescription: {
    fontFamily: "Outfit-Regular",
    fontSize: 14,
    color: "#666",
  },
});
