# Real-Time Object Detection on ESP32-CAM using Edge Impulse

## Overview

This project demonstrates the implementation of real-time object detection on the ESP32-CAM microcontroller using a YOLO (You Only Look Once) model optimized with the Edge Impulse platform. This approach enables efficient and cost-effective edge AI solutions for various applications. 

## Key Features

* **Real-Time Object Detection:** Performs object detection on live video feed captured by the ESP32-CAM. 
   
* **Edge AI Implementation:** Processes data and performs inference locally on the ESP32-CAM, eliminating reliance on cloud processing.
   
* **YOLO Model Optimization:** Employs a YOLO model optimized for the ESP32-CAM's resource constraints using Edge Impulse.
   
* **Hardware Efficiency:** Utilizes the ESP32-CAM, a low-cost and power-efficient microcontroller with an integrated camera. 
   
* **High Accuracy:** Achieves high object detection accuracy, as validated through experimental results. 

## Technical Details

### System Architecture

The system architecture comprises the following components:

* **ESP32-CAM:** The microcontroller with an integrated camera module, serving as the primary processing unit.
   
* **Edge Impulse:** A cloud-based platform used for training, optimizing, and deploying the YOLO model.
   
* **YOLO Model:** An object detection model optimized for edge devices.

The workflow involves:

1.  **Model Training:** Training the YOLO model on Edge Impulse using annotated datasets.
   
2.  **Model Optimization:** Applying quantization and optimization techniques to compress the model for ESP32-CAM deployment.
   
3.  **Deployment:** Deploying the optimized model to the ESP32-CAM.
   
4.  **Real-time Inference:** Capturing video frames, processing them locally, and performing object detection on the ESP32-CAM.

### Mathematical Formulation

The core mathematical concepts used in this project include:

* **Bounding Box Prediction:** Represented as B = (xcenter, ycenter, w, h), where (xcenter, ycenter) are the center coordinates, and (w, h) are the width and height of the bounding box.
* **Confidence Score:** Calculated as C = σ (p(Object) × IOU), indicating the likelihood and accuracy of a predicted box containing an object. 
   
* **Non-Maximum Suppression (NMS):** Used to select the best bounding box and remove overlapping predictions.
   
* **Intersection over Union (IoU):** A metric to evaluate the overlap between the predicted and ground truth bounding boxes: IoU (B, Bgt) = Area of Intersection (B, Bgt) / Area of Union (B, Bgt). 
   
* **Object Detection Accuracy Metrics:**
    * **Precision:** TP / (TP + FP)
    * **Recall:** TP / (TP + FN)
    * **F1-Score:** 2 × (Precision × Recall) / (Precision + Recall)
   
* **Edge Impulse Model Training Optimization:**
    * Loss Function: L(θ) = Σi=1N (Lbox + Lcls + Lobj)
   
* **Edge Deployment and Inference Time:**
    * Inference Time: Tinference = Tload + Tforward + Tpost-processing

### Experimental Results

The system's performance was evaluated, demonstrating:

* **High F1 Score:** The model achieved an F1 Score of 99.4%, indicating high accuracy and reliability.
   
* **Accurate Object Detection:** The system accurately detected and classified various objects, including biscuit packets, matchboxes, onions, potatoes, sharpeners, and apples.
   
* **Real-time Performance:** The system performs object detection with minimal latency.

### Hardware and Software Requirements

* **Hardware:**
    * ESP32-CAM Microcontroller
* **Software:**
    * Edge Impulse Platform 
    * Arduino IDE (v1.8.10) 

## Getting Started

### Prerequisites

* Ensure you have the Arduino IDE installed.
* Create an account on the Edge Impulse platform.

### Installation

1.  Set up your ESP32-CAM with the Arduino IDE.
2.  Train and optimize your YOLO model using Edge Impulse.
3.  Deploy the model to your ESP32-CAM.
4.  Connect the ESP32-CAM to a power source.

## Usage

* The ESP32-CAM will capture video frames and perform object detection in real time.
* Detected objects and their corresponding accuracies will be displayed (e.g., on a connected LCD screen, or through serial output).

## Applications

This project has potential applications in various domains, including:

* Smart Surveillance
* IoT-based Automation 
* Real-time Monitoring 
* Portable AI Devices 
* Industrial Monitoring 

## Future Enhancements

* Handling dynamic scenarios and complex scenes.
* Optimizing detection accuracy and speed.
* Enhancing system scalability.
* Integration with other sensors and actuators.

## Team
* Kamallochan Das
* Ayush Kachhap
* Madhav Bhardwaj
* Inderjeet Singh
