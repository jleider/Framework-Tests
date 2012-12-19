<?php

class BenchmarkController extends AppController {

    public $uses = array();

    public function howItWorksAction()
    {
        list($host, $port) = explode(':', $_SERVER['HTTP_HOST']);
        $this->set('host', $host);
    }


}