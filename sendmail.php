<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $company = htmlspecialchars(trim($_POST['company']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Recipient email
    $to = "rsabobeh@gmail.com";
    $subject = "AI-Via Website Request";

    // Email content
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Company: $company\n";
    $body .= "Message:\n$message\n";

    // Email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>
