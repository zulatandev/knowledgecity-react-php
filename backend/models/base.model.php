<?php

class BaseModel
{
    protected mysqli $mysqli;

    public function __construct()
    {
        $this->mysqli = get_mysql_instance();
    }

    protected function get_list(mysqli_result $query_result): array
    {
        $records = [];
        while ($row = $query_result->fetch_assoc()) {
            $records[] = $row;
        }

        return $records;
    }

    protected function get_single(mysqli_result $query_result): ?array
    {
        return $query_result->fetch_assoc() ?: null;
    }
}