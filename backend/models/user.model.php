<?php

class User extends BaseModel
{
    public function getUser(string $username): ?array
    {
        $sql = "SELECT * FROM students WHERE username={$username}";

        $queryResult = $this->mysqli->query($sql);

        return $this->getSingle($queryResult);
    }
}