<?php

class BaseModel
{
    protected mysqli $mysqli;

    public function __construct()
    {
        $this->mysqli = getMysqlInstance();
    }

    protected function getList(mysqli_result $queryResult): array
    {
        $records = [];
        while ($row = $queryResult->fetch_assoc()) {
            $records[] = $row;
        }

        return $records;
    }

    protected function getSingle(mysqli_result $queryResult): ?array
    {
        return $queryResult->fetch_assoc() ?: null;
    }
}