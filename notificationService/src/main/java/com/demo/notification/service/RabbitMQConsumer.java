// package com.demo.notification.service;

// import com.demo.notification.dto.SupplierEvent;
// import com.fasterxml.jackson.databind.ObjectMapper;

// import org.springframework.amqp.rabbit.annotation.RabbitListener;
// import org.springframework.stereotype.Service;

// @Service
// public class RabbitMQConsumer {

//     private final ObjectMapper mapper =
//         new ObjectMapper();

//     @RabbitListener(
//         queues = "notification_queue"
//     )
//     public void receiveMessage(
//         String message
//     ) throws Exception {

//         SupplierEvent event =
//             mapper.readValue(
//                 message,
//                 SupplierEvent.class
//             );

//         System.out.println(
//             "Received Event: "
//                 + event.getEvent()
//         );

//         System.out.println(
//             "Supplier: "
//                 + event.getSupplierName()
//         );
//     }
// }
// package com.demo.notification.service;

// import com.demo.notification.dto.SupplierEvent;
// import com.fasterxml.jackson.databind.ObjectMapper;

// import org.springframework.amqp.rabbit.annotation.RabbitListener;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.messaging.simp.SimpMessagingTemplate;
// import org.springframework.stereotype.Service;

// @Service
// public class RabbitMQConsumer {

//     private final ObjectMapper mapper =
//             new ObjectMapper();

//     @Autowired
//     private SimpMessagingTemplate messagingTemplate;

//     @RabbitListener(
//             queues = "notification_queue"
//     )
//     public void receiveMessage(
//             String message
//     ) throws Exception {

// //         SupplierEvent event =
// //                 mapper.readValue(
// //                         message,
// //                         SupplierEvent.class
// //                 );

// //         System.out.println(
// //                 "Received Event: "
// //                         + event.getEvent()
// //         );

// //         System.out.println(
// //     "Sending to WebSocket..."
// // );

// // messagingTemplate.convertAndSend(
// //     "/topic/notifications/1",
// //     event
// // );
// SupplierEvent event =
//         mapper.readValue(
//                 message,
//                 SupplierEvent.class
//         );

// System.out.println(
//         "Received Event: "
//                 + event.getEvent()
// );

// if(event.getSupplierName() != null) {

//     System.out.println(
//         "Supplier : "
//         + event.getSupplierName()
//     );

// }

// if(event.getStoreName() != null) {

//     System.out.println(
//         "Store : "
//         + event.getStoreName()
//     );

// }

// System.out.println(
//         "Sending to WebSocket..."
// );

// messagingTemplate.convertAndSend(
//         "/topic/notifications/1",
//         event
// );

//         // messagingTemplate.convertAndSend(
//         //         "/topic/notifications",
//         //         event
//         // );
// //         messagingTemplate.convertAndSend(
// //     "/topic/notifications/1",
// //     event
// // );
//     }
// }
// package com.demo.notification.service;

// import com.demo.notification.dto.SupplierEvent;
// import com.fasterxml.jackson.databind.ObjectMapper;

// import org.springframework.amqp.rabbit.annotation.RabbitListener;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.messaging.simp.SimpMessagingTemplate;
// import org.springframework.stereotype.Service;

// @Service
// public class RabbitMQConsumer {

//     private final ObjectMapper mapper =
//             new ObjectMapper();

//     @Autowired
//     private SimpMessagingTemplate messagingTemplate;

//     @RabbitListener(
//             queues = "notification_queue"
//     )
//     public void receiveMessage(
//             String message
//     ) throws Exception {

//         SupplierEvent event =
//                 mapper.readValue(
//                         message,
//                         SupplierEvent.class
//                 );

//         System.out.println(
//                 "Received Event: "
//                         + event.getEvent()
//         );

//         if(event.getEmployeeName() != null) {

//     System.out.println(
//         "Employee : "
//         + event.getEmployeeName()
//     );

// }

//         if (event.getSupplierName() != null) {

//             System.out.println(
//                     "Supplier : "
//                             + event.getSupplierName()
//             );
//         }

//         if (event.getStoreName() != null) {

//             System.out.println(
//                     "Store : "
//                             + event.getStoreName()
//             );
//         }

//         if (event.getEmployeeName() != null) {

//             System.out.println(
//                     "Employee : "
//                             + event.getEmployeeName()
//             );
//         }

//         System.out.println(
//                 "Sending to WebSocket..."
//         );

//         messagingTemplate.convertAndSend(
//                 "/topic/notifications/1",
//                 event
//         );
//     }
// }
package com.demo.notification.service;

import com.demo.notification.dto.SupplierEvent;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

@Service
public class RabbitMQConsumer {

    private final ObjectMapper mapper =
            new ObjectMapper();

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @RabbitListener(
            queues = "notification_queue"
    )
    public void receiveMessage(
            String message
    ) throws Exception {

        SupplierEvent event =
                mapper.readValue(
                        message,
                        SupplierEvent.class
                );

        System.out.println(
                "Received Event : "
                        + event.getEvent()
        );

        if (event.getSupplierName() != null) {

            System.out.println(
                    "Supplier : "
                            + event.getSupplierName()
            );

        }

        if (event.getStoreName() != null) {

            System.out.println(
                    "Store : "
                            + event.getStoreName()
            );

        }

        if (event.getEmployeeName() != null) {

            System.out.println(
                    "Employee : "
                            + event.getEmployeeName()
            );

        }

        if (event.getMaterialName() != null) {

            System.out.println(
                    "Material : "
                            + event.getMaterialName()
            );

        }

        if (event.getManufacturerName() != null) {

            System.out.println(
                    "Manufacturer : "
                            + event.getManufacturerName()
            );

        }

        System.out.println(
                "Sending to WebSocket..."
        );

        messagingTemplate.convertAndSend(
                "/topic/notifications/1",
                event
        );
    }
}