// package com.demo.notification.dto;

// public class IndentMessage {
    

//     private Integer senderId;

//     private String senderName;

//     private Integer receiverId;

//     private String itemName;

//     private Integer quantity;

//     private String priority;
//     private String timestamp;

//     private String status;

//     private String indentId;

//     public String getIndentId() {
//     return indentId;
// }

// public void setIndentId(String indentId) {
//     this.indentId = indentId;
// }

// // public String getStatus() {
// //     return status;
// // }

// // public void setStatus(String status) {
// //     this.status = status;
// // }

// // public String getTimestamp() {
// //     return timestamp;
// // }

// // public void setTimestamp(String timestamp) {
// //     this.timestamp = timestamp;
// // }

//     public String getStatus() {
//     return status;
// }


// public void setStatus(String status) {
//     this.status = status;
// }

//     public IndentMessage() {
//     }

//     public Integer getSenderId() {
//         return senderId;
//     }

//     public void setSenderId(Integer senderId) {
//         this.senderId = senderId;
//     }

//     public String getSenderName() {
//         return senderName;
//     }

//     public void setSenderName(String senderName) {
//         this.senderName = senderName;
//     }

//     public Integer getReceiverId() {
//         return receiverId;
//     }

//     public void setReceiverId(Integer receiverId) {
//         this.receiverId = receiverId;
//     }

//     public String getItemName() {
//         return itemName;
//     }

//     public void setItemName(String itemName) {
//         this.itemName = itemName;
//     }

//     public Integer getQuantity() {
//         return quantity;
//     }

//     public void setQuantity(Integer quantity) {
//         this.quantity = quantity;
//     }

//     public String getPriority() {
//         return priority;
//     }

//     public void setPriority(String priority) {
//         this.priority = priority;
//     }

//     public void setTimestamp(String timestamp) {
//     this.timestamp = timestamp;
// }

//     public String getTimestamp() {
//     return timestamp;
// }
// }

package com.demo.notification.dto;

public class IndentMessage {

    private String indentId;

    private Integer senderId;

    private String senderName;

    private Integer receiverId;

    private String itemName;

    private Integer quantity;

    private String priority;

    private String timestamp;

    private String status;

    public IndentMessage() {
    }

    public String getIndentId() {
        return indentId;
    }

    public void setIndentId(String indentId) {
        this.indentId = indentId;
    }

    public Integer getSenderId() {
        return senderId;
    }

    public void setSenderId(Integer senderId) {
        this.senderId = senderId;
    }

    public String getSenderName() {
        return senderName;
    }

    public void setSenderName(String senderName) {
        this.senderName = senderName;
    }

    public Integer getReceiverId() {
        return receiverId;
    }

    public void setReceiverId(Integer receiverId) {
        this.receiverId = receiverId;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}