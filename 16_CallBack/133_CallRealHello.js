function loginUser(email, password, callback) {
    setTimeout(() => {
        callback(null, {
            id: 101,
            email: email
        });
    }, 500);
}

function getUserProfile(userId, callback) {
    setTimeout(() => {
        callback(null, {
            name: "Pramod",
            role: "QA Engineer"
        });
    }, 500);
}

function getUserOrders(userId, callback) {
    setTimeout(() => {
        callback(null, [
            { id: 1001 }
        ]);
    }, 500);
}

function getOrderDetails(orderId, callback) {
    setTimeout(() => {
        callback(null, {
            id: orderId,
            paymentId: 501,
            shippingId: 601,
            productId: 701
        });
    }, 500);
}

function getPaymentDetails(paymentId, callback) {
    setTimeout(() => {
        callback(null, {
            paymentId,
            status: "Paid"
        });
    }, 500);
}

function getShippingDetails(shippingId, callback) {
    setTimeout(() => {
        callback(null, {
            shippingId,
            status: "Shipped"
        });
    }, 500);
}

function getProductDetails(productId, callback) {
    setTimeout(() => {
        callback(null, {
            productId,
            name: "Laptop"
        });
    }, 500);
}

function sendConfirmationEmail(email, order, payment, shipping, product, callback) {
    setTimeout(() => {
        callback(null, "Email Sent Successfully");
    }, 500);
}

function updateNotificationStatus(userId, callback) {
    setTimeout(() => {
        callback(null, "Notification Updated");
    }, 500);
}

function generateReport(user, profile, order, payment, shipping, product, callback) {
    setTimeout(() => {
        callback(null, {
            user,
            profile,
            order,
            payment,
            shipping,
            product
        });
    }, 500);
}

// Callback Hell Starts Here

loginUser("pramod@example.com", "password123", function (loginError, user) {

    if (loginError) return console.log(loginError);

    console.log("User logged in:", user.id);

    getUserProfile(user.id, function (profileError, profile) {

        if (profileError) return console.log(profileError);

        console.log("Profile received");

        getUserOrders(user.id, function (ordersError, orders) {

            if (ordersError) return console.log(ordersError);

            console.log("Orders received");

            getOrderDetails(orders[0].id, function (orderError, order) {

                if (orderError) return console.log(orderError);

                console.log("Order details received");

                getPaymentDetails(order.paymentId, function (paymentError, payment) {

                    if (paymentError) return console.log(paymentError);

                    console.log("Payment details received");

                    getShippingDetails(order.shippingId, function (shippingError, shipping) {

                        if (shippingError) return console.log(shippingError);

                        console.log("Shipping details received");

                        getProductDetails(order.productId, function (productError, product) {

                            if (productError) return console.log(productError);

                            console.log("Product details received");

                            sendConfirmationEmail(
                                user.email,
                                order,
                                payment,
                                shipping,
                                product,
                                function (emailError) {

                                    if (emailError) return console.log(emailError);

                                    console.log("Confirmation email sent");

                                    updateNotificationStatus(user.id, function (notificationError) {

                                        if (notificationError) return console.log(notificationError);

                                        console.log("Notification status updated");

                                        generateReport(
                                            user,
                                            profile,
                                            order,
                                            payment,
                                            shipping,
                                            product,
                                            function (reportError, report) {

                                                if (reportError) return console.log(reportError);

                                                console.log("Everything completed!");
                                                console.log(report);
                                            }
                                        );
                                    });
                                }
                            );
                        });
                    });
                });
            });
        });
    });
});