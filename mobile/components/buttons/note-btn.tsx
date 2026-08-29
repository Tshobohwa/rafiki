import { ReactNode } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";

export default function NoteBtn({
  icon,
  text,
  onPress,
  format,
}: {
  icon: ReactNode;
  text: string;
  onPress: () => void;
  format: string;
}) {
  return (
    <View
      style={{
        borderWidth: 1,
        marginVertical: 5,
        borderRadius: 10,
        borderColor: "#d3d3d3",
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 8,
      }}
    >
      <TouchableOpacity>
        {icon}
        <View>
          <Text style={{ fontFamily: "Outfit-Medium", fontSize: 16 }}>
            {text}
          </Text>
          <Text style={{ fontFamily: "Outfit-Regular" }}>{format}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="download" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
