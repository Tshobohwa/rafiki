import { View } from "react-native";
import NoteBtn from "../buttons/note-btn";
import notes from "@/mock-data/notes";

export default function NotesTab() {
  return (
    <View style={{ marginTop: 10 }}>
      {notes.map((note) => (
        <NoteBtn text={note.title} format={note.format} />
      ))}
    </View>
  );
}
