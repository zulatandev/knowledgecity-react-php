<?php

class User extends BaseModel
{
    public function get_user(string $username): ?array
    {
        $query_result = $this->mysqli->query("SELECT * FROM users WHERE username='{$username}';");

        return $this->get_single($query_result);
    }
}