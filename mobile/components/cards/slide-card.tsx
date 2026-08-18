import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

export default function SlideCard({
  title,
  numberOfSlides,
  description,
}: {
  title: string;
  description: string;
  numberOfSlides?: number;
}) {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <View>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardDescription}>{description}</Text>
          {numberOfSlides !== undefined && (
            <Text style={styles.cardSlides}>{numberOfSlides} slides</Text>
          )}
        </View>
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
  cardContent: {
    padding: 10,
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
  cardSlides: {
    fontFamily: "Outfit-Regular",
    fontSize: 12,
    color: "#999",
  },
});
