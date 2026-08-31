import slides from "@/mock-data/slides";
import { View } from "react-native";
import SlideBtn from "../buttons/slide-btn";

export default function SlidesTab() {
  return (
    <View style={{ marginTop: 20 }}>
      {slides.map(({ id, title, totalSlides, readSlides }) => (
        <SlideBtn
          key={id}
          title={title}
          totalSlides={totalSlides}
          readSlides={readSlides}
          id={id}
        />
      ))}
    </View>
  );
}
