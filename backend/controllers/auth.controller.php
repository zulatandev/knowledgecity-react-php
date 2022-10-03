<?php

class AuthController extends BaseController
{
    private User $user_model;
    private Token $token_model;

    public function __construct()
    {
        $this->user_model = new User();
        $this->token_model = new Token();
    }

    public function __invoke()
    {
        if (isset($_POST['username']) && isset($_POST['password'])) {
            $username = $_POST['username'];
            $password = $_POST['password'];
            $this->login($username, $password);
        } elseif (isset($_POST['delete'])) {
            $this->logout();
        } elseif (isset($_GET['me'])) {
            $this->me();
        } else {
            $this->render_json(false);
        }
    }

    private function login(string $username, string $password)
    {
        $user = $this->user_model->get_user($username);

        if ($user) {
            $token = $this->token_model->get_token_by_user_id($user['id']);
            if (!$token) {
                $hashed_token = hash('ripemd160', $username . $password . date('l jS \of F Y h:i:s A'));
                $result = $this->token_model->create_token($hashed_token, $user['id']);
                if ($result) {
                    $this->render_json(true, ['token' => $hashed_token]);
                }
            } else {
                $this->render_json(true, ['token' => $token['token']]);
            }
        } else {
            $this->render_json(false);
        }
    }

    private function logout()
    {
        $bearer_token = $this->get_bearer_token();
        if ($bearer_token) {
            $this->token_model->remove_token($bearer_token);

            $this->render_json(true);
        } else {
            $this->render_json(false);
        }
    }

    private function me()
    {
        $bearer_token = $this->get_bearer_token();
        if ($bearer_token) {
            $token = $this->token_model->get_token($bearer_token);

            $this->render_json(true, ['token' => $token['token']]);
        } else {
            $this->render_json(false);
        }
    }
}