<?php
    $_POST = json_decode(file_get_contents('php://input'), true);
    //echo var_dump($_POST);
    class User
{
    public function __construct($name, $surname)
    {
        $this->name = $name;
        $this->surname = $surname;
        //$this->father = $father;
        //$this->birthday = $birthday;
    }
    
    public function print_data()
    {
        echo $this->name . '</br>';
        echo $this->surname;
    }
}

$user = new User($_POST["name"], $_POST["surname"]);

$user->print_data();

//print htmlspecialchars($_POST["name"]);
