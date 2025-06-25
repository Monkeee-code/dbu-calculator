<?php
session_start();

ini_set('display_errors', 1);
error_reporting(E_ALL);

require 'chat_config.php';

if (!isset($_GET['code'])) {
    die('Error: No "code" parameter in the URL');
}

$code = $_GET['code'];

// Exchange code for access token
$data = [
    'client_id'     => CLIENT_ID,
    'client_secret' => CLIENT_SECRET,
    'grant_type'    => 'authorization_code',
    'code'          => $code,
    'redirect_uri'  => REDIRECT_URI,
    'scope'         => 'identify'
];

$ch = curl_init(DISCORD_API_BASE_URL . '/oauth2/token');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/x-www-form-urlencoded']);

$response = curl_exec($ch);

if (curl_errno($ch)) {
    die('cURL error: ' . curl_error($ch));
}

$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode !== 200) {
    die("Discord token request failed with HTTP code $httpCode. Response: <pre>$response</pre>");
}

$tokenData = json_decode($response, true);
if (!isset($tokenData['access_token'])) {
    die('Failed to retrieve access token.');
}

// Use access token to get user info
$ch = curl_init(DISCORD_API_BASE_URL . '/users/@me');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $tokenData['access_token']
]);
$userResponse = curl_exec($ch);

if (curl_errno($ch)) {
    die('cURL error (user info): ' . curl_error($ch));
}

$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode !== 200) {
    die("Failed to get user info. HTTP code $httpCode. Response: <pre>$userResponse</pre>");
}

$user = json_decode($userResponse, true);

// Store user in session and redirect
$_SESSION['user'] = $user;

header('Location: chat.php');
exit;
