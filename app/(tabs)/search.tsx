import { Picker } from "@react-native-picker/picker";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Make</Text>
      <View style={styles.pickerContainer}>
        <Picker style={styles.picker}>
          <Picker.Item label="Any" value="" enabled={false} />
          <Picker.Item label="Option 1" value="1" />
          <Picker.Item label="Option 2" value="2" />
          <Picker.Item label="Option 3" value="3" />
        </Picker>
      </View>
      <Text style={styles.label}>Model</Text>
      <View style={styles.pickerContainer}>
        <Picker style={styles.picker}>
          <Picker.Item label="Any" value="" enabled={false} />
          <Picker.Item label="Option 1" value="1" />
          <Picker.Item label="Option 2" value="2" />
          <Picker.Item label="Option 3" value="3" />
        </Picker>
      </View>
      <Text style={styles.label}>Postal Code</Text>
      <View style={styles.pickerContainer}>
        <Picker style={styles.picker}>
          <Picker.Item label="Current Location" value="" enabled={false} />
          <Picker.Item label="Option 1" value="1" />
          <Picker.Item label="Option 2" value="2" />
          <Picker.Item label="Option 3" value="3" />
        </Picker>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212",
    padding: 20,
  },
  pickerContainer: {
    width: Dimensions.get("window").width - 40, // screen width minus padding
    backgroundColor: "#1F1F1F",
    borderRadius: 10, // roundness
    marginBottom: 20, // space between pickers
  },
  picker: {
    height: 50,
    color: "#BB86FC",
    fontFamily: "Roboto", // use the font here
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#E0E0E0",
    alignSelf: "flex-start", // align to the left
    fontFamily: "Roboto", // use the font here
  },
  button: {
    width: Dimensions.get("window").width - 40, // screen width minus padding
    height: 50,
    backgroundColor: "#BB86FC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10, // roundness
  },
  buttonText: {
    color: "#121212",
    fontWeight: "bold",
  },
});
