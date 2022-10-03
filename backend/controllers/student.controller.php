<?php

class StudentController extends BaseController
{
    private Student $student_model;
    private Token $token_model;

    public function __construct()
    {
        $this->student_model = new Student();
        $this->token_model = new Token();
    }

    public function __invoke()
    {
        if ($this->is_login()) {
            $start = 0;
            $limit = 5;
            if (isset($_GET['start'])) {
                $start = $_GET['start'];
            }
            if (isset($_GET['limit'])) {
                $limit = $_GET['limit'];
            }

            $this->get_students($start, $limit);
        } else {
            $this->render_json(false);
        }
    }

    public function is_login(): bool
    {
        $token = null;
        $bearer_token = $this->get_bearer_token();
        if ($bearer_token) {
            $token = $this->token_model->get_token($bearer_token);
        }

        return !!$token;
    }


    public function get_students(int $start, int $limit)
    {
        $students = $this->student_model->get_students($start, $limit);
        $all = $this->student_model->get_students(0, 1000);
        if ($students) {
            $this->render_json(true, ['students'  => $students, 'pagination' => ['total' => count($all), 'page' => $start, 'limit' => $limit]]);
        } else {
            $this->render_json(false);
        }
    }
}