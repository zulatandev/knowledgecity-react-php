<?php

class Student extends BaseModel
{
    public function get_students(int $start, int $limit): array
    {
        $query_result = $this->mysqli->query("
            SELECT *
            FROM students
            ORDER BY id
            LIMIT {$limit} OFFSET {$start}
        ");

        return $this->get_list($query_result);
    }
}