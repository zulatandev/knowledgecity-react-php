<?php

class BaseController
{
    public function get_bearer_token(): ?string
    {
        $header = apache_request_headers();
        $authorization = $header['Authorization'];
        $token = null;
        if ($authorization && explode(' ', $authorization)[1] !== 'null') {
            $token = explode(' ', $authorization)[1];
        }

        return $token;
    }

    public function render_json(bool $success, array $data = null): bool
    {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode([
            'success' => $success,
            'data' => $data
        ]);

        return true;
    }
}