<?php

class BaseController
{
    public function renderJson(array $data): bool
    {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($data);

        return true;
    }
}