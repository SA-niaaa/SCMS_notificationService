let stompClient = null;

let currentUserId = null;

function connectUser() {

    currentUserId =
        document.getElementById(
            "currentUser"
        ).value;

    const socket =
        new SockJS("/ws");

    stompClient =
        Stomp.over(socket);

    stompClient.connect(
        {},
        function () {

            console.log(
                "Connected"
            );

            document.getElementById(
                "status"
            ).innerText =
                "WebSocket Connected";

            stompClient.subscribe(
                "/topic/notifications/1",

                function (
                    notification
                ) {

                    console.log(
                        "NOTIFICATION RECEIVED"
                    );

                    console.log(
                        notification.body
                    );

                    const data =
                        JSON.parse(
                            notification.body
                        );

                    console.log(
                        data
                    );

                    const entityName =

                        data.employeeName ||

                        data.materialName ||

                        data.manufacturerName ||

                        data.supplierName ||

                        data.storeName ||

                        "Unknown";

                    const eventText =
                        data.event
                            .replaceAll(
                                "_",
                                " "
                            );

                    showNotification(
                        `${eventText} : ${entityName}`
                    );

                }
            );

        }
    );

}

function sendNotification() {

    const receiverId =
        document.getElementById(
            "targetUserId"
        ).value;

    const message =
        document.getElementById(
            "message"
        ).value;

    const notification = {

        senderId:
            currentUserId,

        receiverId:
            receiverId,

        message:
            message

    };

    stompClient.send(
        "/app/sendMessage",
        {},
        JSON.stringify(
            notification
        )
    );

}

function showNotification(
    message
) {

    console.log(
        "showNotification called"
    );

    const container =
        document.getElementById(
            "notifications"
        );

    container.innerHTML =

        `
        <div style="
            background:#1e293b;
            color:white;
            padding:12px;
            margin-top:10px;
            border-radius:8px;
            border-left:5px solid #22c55e;
        ">
            <h3>NEW EVENT</h3>
            <p>${message}</p>
        </div>
        `

        +

        container.innerHTML;

    const notifications =
        container.children;

    while (
        notifications.length > 10
    ) {

        container.removeChild(
            notifications[
                notifications.length - 1
            ]
        );

    }

}