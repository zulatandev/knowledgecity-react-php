<?php

class AuthController extends BaseController
{
    const LIMIT = 3;

    private User $userModel;
    private Token $tokenModel;

    public function __construct()
    {
        $this->userModel = new User();
        $this->tokenModel = new Token();
    }

    public function __invoke()
    {
        if (isset($_POST['username']) && isset($_POST['password'])) {
            $username = $_POST['username'];
            $password = $_POST['password'];
            $this->login($username, $password);
        }

        if (isset($_POST['delete'])) {
            $this->logout();
        }
    }

    private function login(string $username, string $password)
    {
        $user = $this->userModel->getUser($username);
        echo json_encode($user);

        if ($user) {
            $hashed_token = hash('ripemd160', $username . $password . date('l jS \of F Y h:i:s A'));
            $token = $this->tokenModel->createToken($hashed_token);
            if ($token) {
                echo json_encode($hashed_token);
            }
        }
    }

    private function logout()
    {
        echo 'logout';
    }
}