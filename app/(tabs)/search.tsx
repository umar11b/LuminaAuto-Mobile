import { Button, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Picker } from "@react-native-picker/picker";
import { Text, View } from "@/components/Themed";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Make</Text>
      <Picker style={styles.picker}>
        <Picker.Item label="Any" value="" enabled={false} />
        <Picker.Item label="Option 1" value="1" />
        <Picker.Item label="Option 2" value="2" />
        <Picker.Item label="Option 3" value="3" />
      </Picker>
      <Text style={styles.label}>Model</Text>
      <Picker style={styles.picker}>
        <Picker.Item label="Any" value="" enabled={false} />
        <Picker.Item label="Option 1" value="1" />
        <Picker.Item label="Option 2" value="2" />
        <Picker.Item label="Option 3" value="3" />
      </Picker>
      <Text style={styles.label}>Postal Code</Text>
      <Picker style={styles.picker}>
        <Picker.Item label="Current Location" value="" enabled={false} />
        <Picker.Item label="Option 1" value="1" />
        <Picker.Item label="Option 2" value="2" />
        <Picker.Item label="Option 3" value="3" />
      </Picker>
      <Button title="Search" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  pickerContainer: {
    height: 50,
    width: 150,
    overflow: "hidden",
  },
  picker: {
    height: 50,
    width: 150,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
  },
});
