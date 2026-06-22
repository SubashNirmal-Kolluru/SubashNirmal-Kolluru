# Soundless Honking System (iQuiet)

## Objective

Design a **non-intrusive vehicle alerting system** that replaces traditional acoustic horns with a visual or gesture-based warning mechanism. The system detects obstacles or driver intent and communicates a warning without generating noise pollution, making it suitable for hospitals, schools, residential zones, and smart-city environments.

## Hardware Architecture

The prototype consists of two wirelessly communicating vehicle units:

1. **Gesture-Controlled Transmitter (Bot A)** — Captures driver hand gestures using an MPU6050 IMU and transmits motion commands wirelessly.
2. **Motor-Control Receiver (Bot B)** — Receives commands and drives motors to simulate vehicle movement or warning-indicator actuation.
3. **Signal Processing Unit (USG/USG1)** — MATLAB-based audio/image feature extraction pipeline for obstacle detection and pattern recognition.

## Components

| Component | Purpose |
|-----------|---------|
| Arduino (ATmega-based) | Main microcontroller for both transmitter and receiver |
| MPU6050 | 6-axis accelerometer + gyroscope for gesture detection |
| NRF24L01 | 2.4 GHz wireless module for low-latency communication |
| L298N / motor driver | Controls DC motors for movement simulation |
| MATLAB | Signal processing, FFT, feature extraction, and AHT (Adaptive Harmonic Transform) analysis |
| External sensors | Ultrasonic/audio modules for obstacle detection experiments |

## Workflow

1. **Gesture Sensing**: Bot A reads IMU tilt data (X-axis orientation) to detect "forward" or "backward" hand gestures.
2. **Command Encoding**: Detected gestures are mapped to motor direction commands.
3. **Wireless Transmission**: Commands are sent via NRF24L01 to Bot B.
4. **Actuation**: Bot B drives DC motors according to the received command, demonstrating a silent response or alert.
5. **Signal Analysis**: The MATLAB pipeline (`USG/USG1`) processes audio/image inputs to extract features such as FFT coefficients, AHT features, and threshold-based event detection for advanced obstacle awareness.

## Files

- `iQuiet/Arduino/iQuiet Arduino/Bot_A/Bot_A.ino` — IMU-based gesture transmitter.
- `iQuiet/Arduino/iQuiet Arduino/Bot_B/Bot_B.ino` — Motor-control receiver.
- `iQuiet/Arduino/Bot codes/` — Additional bot documentation and reference code.
- `USG/` and `USG1/` — MATLAB scripts for signal/feature extraction (`AudioFFT.m`, `FeatureExtraction.m`, `final_code.m`, etc.).

## Requirements

- Arduino IDE
- MPU6050 and I2Cdev libraries
- MATLAB (R2015 or later recommended)
- NRF24L01 radio module and motor driver hardware

## Future Enhancements

- Integrate ultrasonic or LiDAR sensors for real-time obstacle ranging.
- Replace point-to-point radio with Bluetooth/Wi-Fi or smartphone app control.
- Port the signal processing pipeline to Python/OpenCV for edge deployment.
- Add a dashboard for alert logging and route analytics.
- miniaturize the hardware into a vehicle-mountable enclosure.