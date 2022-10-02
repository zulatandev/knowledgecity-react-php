<?php

class Token extends BaseModel
{
    public function createToken(string $token): bool
    {
        return $this->mysqli->query("INSERT INTO tokens (token) VALUES ({$token})");
    }
}