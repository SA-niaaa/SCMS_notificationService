// package com.demo.notification.dto;

// public class SupplierEvent {

//     private String event;
//     private String supplierName;
//     private String timestamp;

//     public String getEvent() {
//         return event;
//     }

//     public void setEvent(String event) {
//         this.event = event;
//     }

//     public String getSupplierName() {
//         return supplierName;
//     }

//     public void setSupplierName(String supplierName) {
//         this.supplierName = supplierName;
//     }

//     public String getTimestamp() {
//         return timestamp;
//     }

//     public void setTimestamp(String timestamp) {
//         this.timestamp = timestamp;
//     }
// }
// package com.demo.notification.dto;

// public class SupplierEvent {

//     private String event;
//     private String supplierName;
//     private String timestamp;

//     public String getEvent() {
//         return event;
//     }

//     public void setEvent(String event) {
//         this.event = event;
//     }

//     public String getSupplierName() {
//         return supplierName;
//     }

//     public void setSupplierName(String supplierName) {
//         this.supplierName = supplierName;
//     }

//     public String getTimestamp() {
//         return timestamp;
//     }

//     public void setTimestamp(String timestamp) {
//         this.timestamp = timestamp;
//     }
// }
// package com.demo.notification.dto;

// import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

// @JsonIgnoreProperties(ignoreUnknown = true)
// public class SupplierEvent {

//     private String event;

//     private String supplierName;

//     private String storeName;

//     private String timestamp;

//     public String getEvent() {
//         return event;
//     }

//     public void setEvent(String event) {
//         this.event = event;
//     }

//     public String getSupplierName() {
//         return supplierName;
//     }

//     public void setSupplierName(String supplierName) {
//         this.supplierName = supplierName;
//     }

//     public String getStoreName() {
//         return storeName;
//     }

//     public void setStoreName(String storeName) {
//         this.storeName = storeName;
//     }

//     public String getTimestamp() {
//         return timestamp;
//     }

//     public void setTimestamp(String timestamp) {
//         this.timestamp = timestamp;
//     }
// }
// package com.demo.notification.dto;

// import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

// @JsonIgnoreProperties(ignoreUnknown = true)
// public class SupplierEvent {

//     private String event;

//     private String supplierName;

//     private String storeName;

//     private String employeeName;

//     private String timestamp;

//     public String getEvent() {
//         return event;
//     }

//     public void setEvent(String event) {
//         this.event = event;
//     }

//     public String getSupplierName() {
//         return supplierName;
//     }

//     public void setSupplierName(String supplierName) {
//         this.supplierName = supplierName;
//     }

//     public String getStoreName() {
//         return storeName;
//     }

//     public void setStoreName(String storeName) {
//         this.storeName = storeName;
//     }

//     public String getEmployeeName() {
//         return employeeName;
//     }

//     public void setEmployeeName(
//             String employeeName
//     ) {
//         this.employeeName =
//                 employeeName;
//     }

//     public String getTimestamp() {
//         return timestamp;
//     }

//     public void setTimestamp(String timestamp) {
//         this.timestamp = timestamp;
//     }
// }
// package com.demo.notification.dto;

// import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

// @JsonIgnoreProperties(ignoreUnknown = true)
// public class SupplierEvent {

//     private String event;

//     private String supplierName;

//     private String storeName;

//     private String employeeName;

//     private String timestamp;

//     public String getEvent() {
//         return event;
//     }

//     public void setEvent(String event) {
//         this.event = event;
//     }

//     public String getSupplierName() {
//         return supplierName;
//     }

//     public void setSupplierName(
//             String supplierName
//     ) {
//         this.supplierName = supplierName;
//     }

//     public String getStoreName() {
//         return storeName;
//     }

//     public void setStoreName(
//             String storeName
//     ) {
//         this.storeName = storeName;
//     }

//     public String getEmployeeName() {
//         return employeeName;
//     }

//     public void setEmployeeName(
//             String employeeName
//     ) {
//         this.employeeName = employeeName;
//     }

//     public String getTimestamp() {
//         return timestamp;
//     }

//     public void setTimestamp(
//             String timestamp
//     ) {
//         this.timestamp = timestamp;
//     }
// }
// package com.demo.notification.dto;

// import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

// @JsonIgnoreProperties(ignoreUnknown = true)
// public class SupplierEvent {

//     private String event;

//     private String supplierName;

//     private String storeName;

//     private String employeeName;

//     private String materialName;

//     private String timestamp;

//     public String getEvent() {
//         return event;
//     }

//     public void setEvent(String event) {
//         this.event = event;
//     }

//     public String getSupplierName() {
//         return supplierName;
//     }

//     public void setSupplierName(
//             String supplierName
//     ) {
//         this.supplierName = supplierName;
//     }

//     public String getStoreName() {
//         return storeName;
//     }

//     public void setStoreName(
//             String storeName
//     ) {
//         this.storeName = storeName;
//     }

//     public String getEmployeeName() {
//         return employeeName;
//     }

//     public void setEmployeeName(
//             String employeeName
//     ) {
//         this.employeeName = employeeName;
//     }

//     public String getMaterialName() {
//         return materialName;
//     }

//     public void setMaterialName(
//             String materialName
//     ) {
//         this.materialName = materialName;
//     }

//     public String getTimestamp() {
//         return timestamp;
//     }

//     public void setTimestamp(
//             String timestamp
//     ) {
//         this.timestamp = timestamp;
//     }
// }
package com.demo.notification.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class SupplierEvent {

    private String event;

    private String supplierName;

    private String storeName;

    private String employeeName;

    private String materialName;

    private String manufacturerName;

    private String timestamp;

    public String getEvent() {
        return event;
    }

    public void setEvent(String event) {
        this.event = event;
    }

    public String getSupplierName() {
        return supplierName;
    }

    public void setSupplierName(
            String supplierName
    ) {
        this.supplierName = supplierName;
    }

    public String getStoreName() {
        return storeName;
    }

    public void setStoreName(
            String storeName
    ) {
        this.storeName = storeName;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public void setEmployeeName(
            String employeeName
    ) {
        this.employeeName = employeeName;
    }

    public String getMaterialName() {
        return materialName;
    }

    public void setMaterialName(
            String materialName
    ) {
        this.materialName = materialName;
    }

    public String getManufacturerName() {
        return manufacturerName;
    }

    public void setManufacturerName(
            String manufacturerName
    ) {
        this.manufacturerName = manufacturerName;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(
            String timestamp
    ) {
        this.timestamp = timestamp;
    }
}