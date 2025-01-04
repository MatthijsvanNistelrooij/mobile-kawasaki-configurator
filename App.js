import { Canvas } from "@react-three/fiber/native"
import { StatusBar } from "expo-status-bar"
import { Suspense, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { BottomUI } from "./components/BottomUI"

import { Z1000 } from "./components/Z1000"

export default function App() {
  const [sliderValue, setSliderValue] = useState(1.3)
  const [selectedColor, setSelectedColor] = useState("#D76C6C")

  const handleSliderValueChange = (value) => {
    setSliderValue(value)
    console.log(`Parent received slider value: ${value}`)
  }

  const handleColorChange = (color) => {
    setSelectedColor(color)
  }

  return (
    <View style={styles.container}>
      <Canvas camera={{ position: [-2, 2.5, 5], fov: 30 }}>
        <color attach="background" args={["#3d3d3d"]} />
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={5} />
        <Suspense>
          <Z1000 sliderValue={sliderValue} color={selectedColor} />
        </Suspense>
      </Canvas>

      <BottomUI
        onSliderValueChange={handleSliderValueChange}
        onColorChange={handleColorChange}
      />
      <StatusBar style="auto" />
      <View style={[styles.buttonContainer]}>
        <Text style={[styles.text, { color: selectedColor }]}>
          Kawasaki Z1000
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaa",
  },
  buttonContainer: {
    position: "absolute",
    top: 50,
    alignSelf: "center",
    padding: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 40,
  },
})
