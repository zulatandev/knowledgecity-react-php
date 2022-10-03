<?php

class Token extends BaseModel
{
    public function create_token(string $token, int $user_id): bool
    {
        return $this->mysqli->query("INSERT INTO tokens (token, userId) VALUES ('{$token}', {$user_id});");
    }

    public function get_token_by_user_id(int $user_id): ?array
    {
        $query_result = $this->mysqli->query("SELECT * FROM tokens WHERE userId={$user_id};");

        return $this->get_single($query_result);
    }

    public function get_token(string $token): ?array
    {
        $query_result = $this->mysqli->query("SELECT * FROM tokens WHERE token='{$token}';");

        return $this->get_single($query_result);
    }

    public function remove_token(string $token): bool
    {
        return $this->mysqli->query("DELETE FROM tokens WHERE token = '{$token}';");
    }
}