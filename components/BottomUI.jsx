import { SafeAreaView, Text, View, TouchableOpacity } from "react-native"
import { useState } from "react"
import Slider from "@react-native-community/slider"
import { StyleSheet } from "react-native"

export const BottomUI = ({ onSliderValueChange, onColorChange }) => {
  const colors = ["#8B4000", "#6CD76C", "#6C6CD7", "#D7D76C", "#D76CD7"]
  const [sliderValue, setSliderValue] = useState(1.3)

  const handleColorChange = (color) => {
    console.log(`Selected color: ${color}`)
    onColorChange(color)
  }

  const handleSliderChange = (value) => {
    setSliderValue(value)
    console.log(`Slider value: ${value}`)
    onSliderValueChange(value)
  }

  return (
    <SafeAreaView edges={["bottom"]} style={styles.safeArea}>
      <View style={styles.sliderContainer}>
        <View style={styles.sliderWrapper}>
          <Slider
            style={styles.slider}
            minimumValue={1.2}
            maximumValue={4.2}
            step={0.2}
            value={sliderValue}
            onValueChange={handleSliderChange}
            minimumTrackTintColor="#ffffff"
            maximumTrackTintColor="#ffffff"
            thumbTintColor="#a2a2a2"
            thumbStyle={styles.thumb}
            trackStyle={styles.track}
          />
        </View>

        <View style={styles.colorPicker}>
          {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleColorChange(color)}
              style={[styles.colorOption, { backgroundColor: color }]}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#7a7a7a",
    height: 220,
  },
  sliderContainer: {
    padding: 50,
    alignItems: "center",
  },
  sliderWrapper: {
    width: "100%",
    marginBottom: 40,
    alignItems: "center",
  },
  slider: {
    width: 300,
    opacity: 1,
    marginTop: 10,
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderColor: "#ffffff",
    borderWidth: 1,
  },
  track: {
    borderRadius: 5,
  },
  colorPicker: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    marginBottom: 20,
  },
  colorOption: {
    width: 25,
    height: 25,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#3d3d3d",
    margin: 15,
  },
})
