<?php

class Student extends BaseModel
{
    public function getStudents(int $start, int $limit): array
    {
        $queryResult = $this->mysqli->query("
            SELECT *
            FROM students
            ORDER BY id
            LIMIT {$limit} OFFSET {$start}
        ");

        return $this->getList($queryResult);
    }
}